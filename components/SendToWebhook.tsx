"use client";

import { useEffect, useState } from "react";

declare global {
  interface Navigator {
    connection?: {
      effectiveType?: string;
    };
    getBattery?: () => Promise<{
      level: number;
    }>;
  }
  interface Window {
    adblockDetected?: boolean;
  }
}

const SendToWebhook = () => {
  const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

  const sendReport = async (type: "visitor" | "log", data: any) => {
    if (!webhookURL) {
      return;
    }

    const reportData = {
      username: type === "visitor" ? "Visitor Monitor" : "Logging Monitor",
      avatar_url:
        "https://wallpapersmug.com/download/1024x768/62d02b/tanya-anime-girl-military.jpg",
      embeds: [
        {
          title:
            type === "visitor"
              ? "🚀 New Visitor Alert!"
              : "🔍 System Log Event",
          color: type === "visitor" ? 3447003 : 16711680,
          description:
            type === "visitor"
              ? "A new visitor is exploring your website!"
              : "System monitoring event detected.",
          fields: Object.entries(data).map(([key, value]) => ({
            name: key,
            value: value || "Unknown",
            inline: true,
          })),
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
    } catch (error) {}
  };

  const fetchData = async () => {
    const locationData = await fetchLocation();
    const additionalData = await fetchAdditionalData();

    const visitorData = {
      "💻 IP Address": locationData.ip,
      "📍 Location": `${locationData.city}, ${locationData.region}, ${locationData.country_name}`,
      "🌐 Browser": navigator.userAgent,
      "🔤 Language": navigator.language,
      "⏱️ Timezone": additionalData.timezone,
      "🕒 Current Time": new Date().toLocaleString(),
      "🖥️ Screen Resolution": `${window.screen.width}x${window.screen.height}`,
      "🔋 Battery Level": additionalData.batteryLevel,
      "📡 Connection Type": additionalData.connectionType,
      "🖥️ Operating System": navigator.platform,
      "⏳ Page Load Time": `${additionalData.pageLoadTime} ms`,
      "🔗 Current Page": window.location.href,
      "↩️ Referrer Page": document.referrer || "Direct Access",
      "🌓 Theme": additionalData.theme,
    };

    await sendReport("visitor", visitorData);
  };

  const fetchLocation = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return {
        ip: data.ip || "Unavailable",
        city: data.city || "Unknown",
        region: data.region || "Unknown",
        country_name: data.country_name || "Unknown",
        isp: data.org || "Unknown",
      };
    } catch (error) {
      console.error("Failed to fetch location data:", error);
      return {};
    }
  };

  const fetchAdditionalData = async () => {
    const battery = await navigator.getBattery?.();
    const connection = navigator.connection || {};
    const pageLoadTime =
      performance.timing?.loadEventEnd - performance.timing?.navigationStart ||
      "Unknown";
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "Dark"
      : "Light";

    const hasAdblock = await detectAdblock();
    const activeTabDuration = trackActiveTabDuration();

    return {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      batteryLevel: battery
        ? `${Math.round(battery.level * 100)}%`
        : "Unavailable",
      connectionType: connection.effectiveType || "Unknown",
      pageLoadTime,
      theme,
      activeTabDuration,
      adblockDetected: hasAdblock ? "Yes" : "No",
    };
  };

  const detectAdblock = async () => {
    return new Promise<boolean>((resolve) => {
      const ad = document.createElement("div");
      ad.innerHTML = "&nbsp;";
      ad.className = "adsbox";
      ad.style.display = "block";
      document.body.appendChild(ad);
      setTimeout(() => {
        resolve(ad.offsetHeight === 0);
        ad.remove();
      }, 100);
    });
  };

  const trackActiveTabDuration = () => {
    let startTime = Date.now();
    let totalTime = 0;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        totalTime += Date.now() - startTime;
      } else {
        startTime = Date.now();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      return totalTime;
    };
  };

  useEffect(() => {
    fetchData();

    const loggingInterval = setInterval(async () => {
      const logData = {
        "⚠️ Error Logging": "No errors detected",
        "👥 Return Visitor Alert": "No",
        "⏱️ Active Tab Duration": trackActiveTabDuration(),
        "🔍 VPN Detected": "Unknown",
        "🛠️ DNS Resolver": "Unknown",
        "📡 ISP": "Unknown",
      };

      await sendReport("log", logData);
    }, 3000);

    return () => clearInterval(loggingInterval);
  }, []);

  return null;
};

export default SendToWebhook;
