"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertCircle, X } from "lucide-react"; // Import Lucide icons

const LilacSVG = ({ style }: { style: React.CSSProperties }) => {
  return (
    <motion.div
      style={style}
      animate={{ rotate: 360 }}
      transition={{
        duration: Math.random() * 20 + 10, // Random duration between 10s and 30s
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute opacity-20"
    >
      <img
        src="/images/lilac.svg"
        alt="Lilac"
        className="w-24 h-24" // Adjust size as needed
      />
    </motion.div>
  );
};

export default function ContactPage() {
  const [showHeading, setShowHeading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [lilacs, setLilacs] = useState<React.CSSProperties[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error popup

  // Generate random positions for lilacs
  useEffect(() => {
    const generateLilacs = () => {
      const newLilacs = [];
      for (let i = 0; i < 10; i++) {
        // Adjust the number of lilacs as needed
        const top = Math.random() * 100; // Random top position (0% to 100%)
        const left = Math.random() * 100; // Random left position (0% to 100%)
        newLilacs.push({ top: `${top}%`, left: `${left}%` });
      }
      setLilacs(newLilacs);
    };

    generateLilacs();
  }, []);

  // Trigger animations sequentially
  useEffect(() => {
    const timer1 = setTimeout(() => setShowHeading(true), 500);
    const timer2 = setTimeout(() => setShowForm(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const discordWebhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl) {
      console.error("Discord webhook URL is not set in environment variables.");
      setSubmitStatus("error");
      setShowErrorPopup(true); // Show error popup
      setIsSubmitting(false);
      return;
    }

    try {
      // Send the message to Discord as an embed
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [
            {
              title: "New Contact Form Submission",
              color: 0x6a0dad, // Purple color
              fields: [
                {
                  name: "Name",
                  value: name,
                  inline: true,
                },
                {
                  name: "Email",
                  value: email,
                  inline: true,
                },
                {
                  name: "Message",
                  value: message,
                },
              ],
              timestamp: new Date().toISOString(),
              footer: {
                text: "LilacBridge Contact Form",
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Discord.");
      }

      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending message to Discord:", error);
      setSubmitStatus("error");
      setShowErrorPopup(true); // Show error popup
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden">
      {/* Multiple Rotating Lilac SVGs */}
      {lilacs.map((style, index) => (
        <LilacSVG key={index} style={style} />
      ))}

      {/* Header Overlay Space */}
      <div className="h-24"></div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showHeading ? 1 : 0, y: showHeading ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showForm ? 1 : 0, scale: showForm ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/20 backdrop-blur-lg p-8 rounded-lg border border-white/10 shadow-lg max-w-2xl mx-auto"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-lg border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-lg border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-white text-lg mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-lg border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-purple-500 px-8 py-3 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center gap-2 w-fit mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Submission Status */}
            {submitStatus === "success" && (
              <p className="text-green-400 text-center mt-4">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </main>

      {/* Footer Overlay Space */}
      <div className="h-24"></div>

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/20 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-lg max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-xl font-bold text-white">Error</h2>
              </div>
              <button
                onClick={() => setShowErrorPopup(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-white">
              Message blocked by an extension or network error. Please try again
              or check your connection.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
