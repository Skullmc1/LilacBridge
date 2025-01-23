// app/skillsheet/components/PresetSelector.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion } from "framer-motion";
import { useState } from "react";
import { templates } from "../../data/templates"; // Import templates from the data file

type PresetSelectorProps = {
  onSelectTemplate: (template: string) => void;
};

export default function PresetSelector({
  onSelectTemplate,
}: PresetSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState("Modern"); // Default selected template

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
      className="flex flex-col items-center justify-center mb-6"
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4">
        Select a Template
      </h3>
      <div className="flex gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.name}
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered delay
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            onClick={() => {
              setSelectedTemplate(template.name);
              onSelectTemplate(template.name);
            }}
            className="cursor-pointer"
          >
            <div
              className={`w-48 h-64 ${template.color} ${template.shape} shadow-lg overflow-hidden relative ${
                selectedTemplate === template.name
                  ? "ring-4 ring-blue-500 ring-offset-2" // Selected indicator
                  : ""
              }`}
            >
              {/* Detailed Preview */}
              {template.preview}
            </div>
            <motion.div
              initial={{ opacity: 0 }} // Start hidden
              animate={{ opacity: selectedTemplate === template.name ? 1 : 0 }} // Fade in if selected
              transition={{ duration: 0.2 }} // Smooth transition
              className="text-center mt-2 text-blue-600 font-semibold"
            >
              Selected
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
