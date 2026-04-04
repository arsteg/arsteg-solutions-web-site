"use client";

import { useEffect } from "react";

interface TawkToChatProps {
  propertyId?: string;
  widgetId?: string;
}

// Extend Window interface for Tawk.to
declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      onLoad?: () => void;
      customStyle?: {
        visibility?: {
          desktop?: {
            position?: string;
            xOffset?: string | number;
            yOffset?: string | number;
          };
          mobile?: {
            position?: string;
            xOffset?: string | number;
            yOffset?: string | number;
          };
        };
      };
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkToChat({
  // Replace these with your actual Tawk.to property and widget IDs
  propertyId = "YOUR_PROPERTY_ID",
  widgetId = "YOUR_WIDGET_ID",
}: TawkToChatProps) {
  useEffect(() => {
    // Skip if IDs are placeholders
    if (propertyId === "YOUR_PROPERTY_ID" || widgetId === "YOUR_WIDGET_ID") {
      console.log("TawkToChat: Please configure your Tawk.to property and widget IDs");
      return;
    }

    // Skip if already loaded
    if (document.getElementById("tawkto-script")) {
      return;
    }

    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize widget position to avoid conflicts with floating buttons
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: "br", // bottom right
          xOffset: "80px", // offset from right edge (to avoid other floating buttons)
          yOffset: "20px",
        },
        mobile: {
          position: "br",
          xOffset: "20px",
          yOffset: "100px", // higher on mobile to avoid sticky CTA
        },
      },
    };

    // Load Tawk.to script
    const script = document.createElement("script");
    script.id = "tawkto-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById("tawkto-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [propertyId, widgetId]);

  // This component doesn't render anything visible - Tawk.to widget handles UI
  return null;
}

// Export helper functions for programmatic control
export const tawkToHelpers = {
  toggle: () => {
    if (typeof window !== "undefined" && window.Tawk_API?.toggle) {
      window.Tawk_API.toggle();
    }
  },
  maximize: () => {
    if (typeof window !== "undefined" && window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  },
  minimize: () => {
    if (typeof window !== "undefined" && window.Tawk_API?.minimize) {
      window.Tawk_API.minimize();
    }
  },
  hide: () => {
    if (typeof window !== "undefined" && window.Tawk_API?.hideWidget) {
      window.Tawk_API.hideWidget();
    }
  },
  show: () => {
    if (typeof window !== "undefined" && window.Tawk_API?.showWidget) {
      window.Tawk_API.showWidget();
    }
  },
};
