"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useFastListing } from "@/hooks/useFastListing";

interface FastListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (listingId: string) => void;
}

const FastListingModal: React.FC<FastListingModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { user } = useAuth();
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"preview" | "generate">("preview");

  const {
    isGenerating,
    isPreviewing,
    isCreating,
    previewData,
    generatedListing,
    error,
    generateFromUrl,
    previewFromUrl,
    createFromPreview,
    clearError,
    clearAll,
  } = useFastListing();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || !url.trim()) return;

    clearError();

    // Skip validation and go directly to preview or generate
    if (mode === "generate") {
      const success = await generateFromUrl({
        bookingUrl: url.trim(),
        businessOwnerId: String(user.id),
      });

      if (success && generatedListing) {
        onSuccess(generatedListing.id);
        handleClose();
      }
    } else {
      // Use preview directly - this will also validate the URL
      await previewFromUrl({
        bookingUrl: url.trim(),
        businessOwnerId: String(user.id),
      });
    }
  };

  const handleCreateFromPreview = async () => {
    if (!user?.id) return;

    const success = await createFromPreview(String(user.id));
    if (success && generatedListing) {
      onSuccess(generatedListing.id);
      handleClose();
    }
  };

  const handleClose = () => {
    setUrl("");
    setMode("preview");
    clearAll();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Fast Listing Creation
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Import your business from booking platforms like Booking.com,
            Airbnb, and more
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {!previewData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mode Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Import Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode("preview")}
                    className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      mode === "preview"
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-medium">Preview First</div>
                      <div className="text-xs opacity-75">
                        Review before saving
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("generate")}
                    className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      mode === "generate"
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-medium">Direct Import</div>
                      <div className="text-xs opacity-75">
                        Create immediately
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* URL Input */}
              <div>
                <label
                  htmlFor="booking-url"
                  className="block text-sm font-semibold text-gray-800 mb-3"
                >
                  Booking Platform URL *
                </label>
                <input
                  type="url"
                  id="booking-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="https://www.booking.com/hotel/..."
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Supported platforms: Booking.com, Airbnb, Hotels.com, Expedia,
                  and more
                </p>
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-3 bg-red-50 text-red-800 rounded-lg border border-red-200">
                  <div className="text-sm">{error}</div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPreviewing || isGenerating || !url.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center"
                >
                  {(isPreviewing || isGenerating) && (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {mode === "preview" ? "Preview Listing" : "Create Listing"}
                </button>
              </div>
            </form>
          ) : (
            /* Preview Display */
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                <h3 className="font-medium text-blue-900 mb-2">
                  Preview Data Extracted
                </h3>
                <div className="text-sm text-blue-800">
                  <p>Confidence: {previewData.confidence}%</p>
                  <p>Status: {previewData.message}</p>
                  {previewData.manualReviewRequired && (
                    <p className="text-yellow-700">
                      ⚠️ Manual review recommended
                    </p>
                  )}
                </div>
              </div>

              {/* Preview Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={previewData.previewData.title || ""}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={previewData.previewData.category || ""}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={previewData.previewData.description || ""}
                    readOnly
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={previewData.previewData.address || ""}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={previewData.previewData.city || ""}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                  />
                </div>
              </div>

              {/* Suggestions */}
              {previewData.suggestions &&
                previewData.suggestions.length > 0 && (
                  <div className="p-3 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2">Suggestions:</h4>
                    <ul className="text-sm space-y-1">
                      {previewData.suggestions.map((suggestion, index) => (
                        <li key={index}>• {suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => clearAll()}
                  className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Start Over
                </button>
                <button
                  onClick={handleCreateFromPreview}
                  disabled={isCreating}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center"
                >
                  {isCreating && (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  Create Listing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FastListingModal;
