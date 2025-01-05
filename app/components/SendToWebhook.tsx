"use client";

import { useEffect } from "react";

const SendToWebhook = () => {
  const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  // Function to send a detailed report to the Discord webhook
  const sendReport = async () => {
    if (!webhookURL) {
      console.error("Webhook URL is missing in the environment variables.");
      return;
    }

    const reportData = {
      username: "Visitor Monitor",
      avatar_url: "https://i.imgur.com/zjXc6Ln.png",
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
              value: await getLocation(),
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
            text: "Visitor Insights • ShuffleRunner",
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

  // Fetch location data
  const getLocation = async (): Promise<string> => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return `${data.city}, ${data.region}, ${data.country_name}`;
    } catch (error) {
      console.error("Error fetching location data:", error);
      return "Location unavailable";
    }
  };

  // Send the report when the component is mounted
  useEffect(() => {
    sendReport();
  }, []);

  return null; // No visible UI for this component
};

export default SendToWebhook;
