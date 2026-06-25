"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-white">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-red-50 ring-8 ring-red-50/50">
                <AlertTriangle className="h-12 w-12 text-red-500" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We&apos;re sorry, but something unexpected happened. Our team has been
              notified and is working to fix the issue.
            </p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mb-8 p-4 rounded-xl bg-gray-100 text-left">
                <p className="text-xs font-mono text-gray-600 break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs font-mono text-gray-400 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800"
              >
                <RefreshCw className="h-5 w-5" />
                Try Again
              </button>
              {/* Using <a> intentionally - global-error runs when root layout fails, so Next.js router may be unavailable */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:bg-gray-50"
              >
                <Home className="h-5 w-5" />
                Go to Homepage
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                Need immediate assistance?
              </p>
              <a
                href="mailto:info@arsteg.com"
                className="text-blue-600 hover:underline font-medium"
              >
                info@arsteg.com
              </a>
              <span className="mx-2 text-gray-300">|</span>
              <a
                href="tel:+918447470101"
                className="text-blue-600 hover:underline font-medium"
              >
                +91-844-747-0101
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
