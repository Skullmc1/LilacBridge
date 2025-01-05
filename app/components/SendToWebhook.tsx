"use client";

import { useEffect } from "react";

const SendToWebhook = () => {
  const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  // Function to send a detailed report to the Discord webhook
  const sendReport = async () => {
    if (!webhookURL) {
      console.error("If ykyk.");
      return;
    }

    const locationData = await getLocation();
    const reportData = {
      username: "Visitor Monitor",
      avatar_url:
        "https://wallpapersmug.com/download/1024x768/62d02b/tanya-anime-girl-military.jpg",
      embeds: [
        {
          title: "🚀 New Visitor Alert!",
          color: 3447003, // Dark blue
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
              name: "⏳ Visit Time",
              value: new Date().toLocaleString(),
              inline: true,
            },
            {
              name: "🔍 Referrer",
              value: document.referrer || "Direct Access",
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

  // Fetch location and IP data
  const getLocation = async (): Promise<any> => {
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
      console.error("Failed:", error);
      return {
        ip: "Unavailable",
        city: "Unknown",
        region: "Unknown",
        country_name: "Unknown",
      };
    }
  };

  // Send the report when the component is mounted
  useEffect(() => {
    sendReport();
  }, []);

  return null; // No visible UI for this component
};

export default SendToWebhook;
