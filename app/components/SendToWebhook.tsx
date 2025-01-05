"use client";

import { useEffect } from "react";

// Extend Navigator type
declare global {
  interface Navigator {
    connection?: {
      effectiveType?: string;
    };
    getBattery?: () => Promise<{
      level: number;
    }>;
  }
}

const SendToWebhook = () => {
  const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  const sendReport = async () => {
    if (!webhookURL) {
      console.error("Webhook URL is not configured.");
      return;
    }

    const locationData = await getLocation();
    const additionalData = await getAdditionalData();

    const reportData = {
      username: "Visitor Monitor",
      avatar_url:
        "https://wallpapersmug.com/download/1024x768/62d02b/tanya-anime-girl-military.jpg",
      embeds: [
        {
          title: "🚀 New Visitor Alert!",
          color: 3447003,
          description: "A new visitor is exploring your website!",
          fields: [
            {
              name: "🌐 Browser",
              value: navigator.userAgent || "Unknown",
              inline: true,
            },
            {
              name: "📍 Location",
              value:
                `${locationData.city}, ${locationData.region}, ${locationData.country_name}` ||
                "Unknown",
              inline: true,
            },
            {
              name: "💻 IP Address",
              value: locationData.ip || "Unavailable",
              inline: true,
            },
            {
              name: "🖥️ Screen Resolution",
              value: `${window.screen.width}x${window.screen.height}`,
              inline: true,
            },
            {
              name: "🔤 Language",
              value: additionalData.language || "Unknown",
              inline: true,
            },
            {
              name: "⏱️ Timezone",
              value: additionalData.timezone || "Unknown",
              inline: true,
            },
            {
              name: "🖥️ Operating System",
              value: additionalData.operatingSystem || "Unknown",
              inline: true,
            },
            {
              name: "📡 Connection Type",
              value: additionalData.connectionType || "Unknown",
              inline: true,
            },
            {
              name: "🔋 Battery Level",
              value: additionalData.batteryLevel || "Unavailable",
              inline: true,
            },
            {
              name: "🖱️ Touch Screen",
              value: additionalData.hasTouchScreen ? "Yes" : "No",
              inline: true,
            },
            {
              name: "🔍 Plugins",
              value: additionalData.plugins || "None",
              inline: true,
            },
            {
              name: "🍪 Cookies Enabled",
              value: additionalData.cookiesEnabled ? "Yes" : "No",
              inline: true,
            },
            {
              name: "⏳ Page Load Time",
              value: `${additionalData.pageLoadTime} ms`,
              inline: true,
            },
            {
              name: "🔗 Current Page",
              value: window.location.href,
              inline: false,
            },
          ],
          footer: {
            text: "Visitor Insights • InProfectum",
            icon_url: "https://i.imgur.com/zjXc6Ln.png",
          },
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("Visitor data successfully sent to the Discord webhook.");
    } catch (error) {
      console.error("Failed to send visitor data:", error);
    }
  };

  const getLocation = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return {
        ip: data.ip || "Unavailable",
        city: data.city || "Unknown",
        region: data.region || "Unknown",
        country_name: data.country_name || "Unknown",
      };
    } catch (error) {
      console.error("Failed to fetch location:", error);
      return {
        ip: "Unavailable",
        city: "Unknown",
        region: "Unknown",
        country_name: "Unknown",
      };
    }
  };

  const getAdditionalData = async () => {
    const plugins = navigator.plugins
      ? Array.from(navigator.plugins)
          .map((plugin) => plugin.name)
          .join(", ")
      : "Not Supported";
    const battery = await navigator.getBattery?.();
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const connection = navigator.connection || {};
    const pageLoadTime =
      performance.timing?.loadEventEnd - performance.timing?.navigationStart ||
      "Unknown";

    return {
      language: navigator.language || "Unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      operatingSystem: navigator.platform || "Unknown",
      plugins,
      cookiesEnabled: navigator.cookieEnabled,
      hasTouchScreen,
      pageLoadTime,
      connectionType: connection.effectiveType || "Unknown",
      batteryLevel: battery
        ? `${Math.round(battery.level * 100)}%`
        : "Unavailable",
    };
  };

  useEffect(() => {
    sendReport();
  }, []);

  return null;
};

export default SendToWebhook;
