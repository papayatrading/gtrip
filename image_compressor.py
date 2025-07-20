#!/usr/bin/env python3
"""
Image Compressor Script for Web Optimization
Converts images to WebP format for better web performance
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image
import time

class ImageCompressor:
    def __init__(self, quality=80, replace_originals=False):
        self.quality = quality
        self.replace_originals = replace_originals
        self.supported_formats = {'.webp', '.jpeg', '.png', '.bmp', '.tiff', '.tif'}
        self.processed_count = 0
        self.total_original_size = 0
        self.total_compressed_size = 0
        self.errors = []

    def get_file_size(self, filepath):
        """Get file size in bytes"""
        return os.path.getsize(filepath)

    def format_size(self, size_bytes):
        """Format size in human readable format"""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024.0:
                return f"{size_bytes:.1f}{unit}"
            size_bytes /= 1024.0
        return f"{size_bytes:.1f}TB"

    def compress_image(self, input_path, output_path=None):
        """Compress a single image to WebP format"""
        try:
            input_path = Path(input_path)
            
            if output_path is None:
                output_path = input_path.with_suffix('.webp')
            else:
                output_path = Path(output_path)

            # Get original size
            original_size = self.get_file_size(input_path)
            
            # Open and convert image
            with Image.open(input_path) as img:
                # Convert RGBA to RGB if necessary for WebP
                if img.mode in ('RGBA', 'LA', 'P'):
                    img = img.convert('RGB')
                
                # Save as WebP
                img.save(output_path, 'WebP', quality=self.quality, optimize=True)
            
            # Get compressed size
            compressed_size = self.get_file_size(output_path)
            
            # Calculate compression ratio
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            print(f"✓ {input_path.name} -> {output_path.name}")
            print(f"  {self.format_size(original_size)} -> {self.format_size(compressed_size)} "
                  f"({compression_ratio:.1f}% reduction)")
            
            # Update statistics
            self.total_original_size += original_size
            self.total_compressed_size += compressed_size
            self.processed_count += 1
            
            # Replace original if requested
            if self.replace_originals and output_path != input_path:
                input_path.unlink()  # Delete original
                print(f"  Original {input_path.name} deleted")
            
            return True
            
        except Exception as e:
            error_msg = f"Error processing {input_path}: {str(e)}"
            self.errors.append(error_msg)
            print(f"✗ {error_msg}")
            return False

    def process_directory(self, directory_path, recursive=True):
        """Process all supported images in a directory"""
        directory_path = Path(directory_path)
        
        if not directory_path.exists():
            print(f"Error: Directory {directory_path} does not exist")
            return False
        
        print(f"\nProcessing directory: {directory_path}")
        print("-" * 50)
        
        # Find all image files
        pattern = "**/*" if recursive else "*"
        image_files = []
        
        for file_path in directory_path.glob(pattern):
            if file_path.is_file() and file_path.suffix.lower() in self.supported_formats:
                # Skip if WebP version already exists (unless replacing originals)
                webp_path = file_path.with_suffix('.webp')
                if not webp_path.exists() or self.replace_originals:
                    image_files.append(file_path)
        
        if not image_files:
            print("No images found to process")
            return True
        
        print(f"Found {len(image_files)} images to process")
        print()
        
        # Process each image
        for i, image_file in enumerate(image_files, 1):
            print(f"[{i}/{len(image_files)}] ", end="")
            self.compress_image(image_file)
        
        return True

    def process_all_public_directories(self, base_path="."):
        """Process all image directories in the public folder"""
        base_path = Path(base_path)
        public_path = base_path / "public"
        
        if not public_path.exists():
            print(f"Error: Public directory not found at {public_path}")
            return False
        
        print(f"Processing all public directories in: {public_path}")
        
        # Define image directories to process
        image_directories = [
            "public/activities",
            "public/carrental", 
            "public/hotels",
            "public/images",
            "public/places",
            "public/Restaurants",
            "public/spa",
            "public/walkingtour"
        ]
        
        for dir_name in image_directories:
            dir_path = base_path / dir_name
            if dir_path.exists():
                self.process_directory(dir_path, recursive=True)
            else:
                print(f"Directory {dir_path} not found, skipping...")
        
        return True

    def print_summary(self):
        """Print compression summary"""
        print("\n" + "="*60)
        print("COMPRESSION SUMMARY")
        print("="*60)
        print(f"Images processed: {self.processed_count}")
        
        if self.processed_count > 0:
            total_reduction = (1 - self.total_compressed_size / self.total_original_size) * 100
            print(f"Total original size: {self.format_size(self.total_original_size)}")
            print(f"Total compressed size: {self.format_size(self.total_compressed_size)}")
            print(f"Total space saved: {self.format_size(self.total_original_size - self.total_compressed_size)}")
            print(f"Overall compression: {total_reduction:.1f}%")
        
        if self.errors:
            print(f"\nErrors encountered: {len(self.errors)}")
            for error in self.errors:
                print(f"  • {error}")
        
        print("="*60)


def main():
    parser = argparse.ArgumentParser(
        description="Compress images to WebP format for web optimization",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s . --all-public                    # Process all public directories
  %(prog)s public/images                     # Process specific directory
  %(prog)s public/images -q 85 --replace     # Custom quality and replace originals
        """
    )
    
    parser.add_argument('path', nargs='?', default='.', 
                       help='Path to directory to process (default: current directory)')
    parser.add_argument('-q', '--quality', type=int, default=80, 
                       help='WebP quality (0-100, default: 80)')
    parser.add_argument('--replace', action='store_true', 
                       help='Replace original files with compressed versions')
    parser.add_argument('--all-public', action='store_true',
                       help='Process all image directories in public folder')
    parser.add_argument('--recursive', action='store_true', default=True,
                       help='Process directories recursively (default: True)')
    
    args = parser.parse_args()
    
    # Validate quality
    if not 0 <= args.quality <= 100:
        print("Error: Quality must be between 0 and 100")
        sys.exit(1)
    
    # Check if Pillow is installed
    try:
        from PIL import Image
    except ImportError:
        print("Error: Pillow library not found. Install it with: pip install Pillow")
        sys.exit(1)
    
    # Create compressor instance
    compressor = ImageCompressor(quality=args.quality, replace_originals=args.replace)
    
    start_time = time.time()
    
    print("🖼️  Image Compression Tool")
    print(f"Quality: {args.quality}%")
    print(f"Replace originals: {args.replace}")
    print()
    
    try:
        if args.all_public:
            success = compressor.process_all_public_directories(args.path)
        else:
            success = compressor.process_directory(args.path, recursive=args.recursive)
        
        if success:
            end_time = time.time()
            print(f"\nProcessing completed in {end_time - start_time:.2f} seconds")
            compressor.print_summary()
        else:
            sys.exit(1)
            
    except KeyboardInterrupt:
        print("\n\nOperation cancelled by user")
        compressor.print_summary()
        sys.exit(1)
    except Exception as e:
        print(f"\nUnexpected error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
