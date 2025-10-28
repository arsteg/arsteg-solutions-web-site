import { useState } from "react";

interface GoogleEmbedMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  className?: string;
}

export default function GoogleEmbedMap({
  lat = 28.4152475,
  lng = 76.9631498,
  zoom = 15,
  className = "",
}: GoogleEmbedMapProps) {
  const [isLoading, setIsLoading] = useState(true);

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-white/70 shadow-xl backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-[1.01] hover:shadow-2xl ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
        </div>
      )}

      {/* Google Map iframe */}
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ARSTEG Solutions – Office Location"
        className="h-full w-full"
        onLoad={() => setIsLoading(false)}
        aria-label="Interactive map showing ARSTEG Solutions office in Gurgaon, Haryana"
      />

      {/* Optional: Floating pin badge */}
      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-gray-200">
        <span className="text-xs font-semibold text-gray-800">Gurgaon, Haryana</span>
      </div>
    </div>
  );
}