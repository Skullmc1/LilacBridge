// app/skillsheet/components/FormInputs.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion } from "framer-motion";
import { User, Mail, Phone, Code, Briefcase, Plus } from "lucide-react"; // Import Lucide icons

type FormInputsProps = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  skills: {
    skill: string;
    confidence: string;
  }[];
  experience: {
    title: string;
    company: string;
    duration: string;
  }[];
  onInputChange: (section: string, field: string, value: string) => void;
  onSkillChange: (index: number, field: string, value: string) => void;
  onAddSkill: () => void;
  onExperienceChange: (index: number, field: string, value: string) => void;
  onAddExperience: () => void;
};

export default function FormInputs({
  personalInfo,
  skills,
  experience,
  onInputChange,
  onSkillChange,
  onAddSkill,
  onExperienceChange,
  onAddExperience,
}: FormInputsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg" // Centered container
    >
      {/* Personal Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 0.5, delay: 0.4 }} // Smooth transition
        className="mb-6"
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
          <User size={20} /> Personal Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              value={personalInfo.name}
              onChange={(e) =>
                onInputChange("personalInfo", "name", e.target.value)
              }
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) =>
                onInputChange("personalInfo", "email", e.target.value)
              }
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="tel"
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={(e) =>
                onInputChange("personalInfo", "phone", e.target.value)
              }
              className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 0.5, delay: 0.6 }} // Smooth transition
        className="mb-6"
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
          <Code size={20} /> Skills
        </h3>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} // Staggered delay
            className="mb-4 space-y-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Skill"
                value={skill.skill}
                onChange={(e) => onSkillChange(index, "skill", e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Confidence (e.g., Beginner, Intermediate, Advanced)"
                value={skill.confidence}
                onChange={(e) =>
                  onSkillChange(index, "confidence", e.target.value)
                }
                className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on tap
          onClick={onAddSkill}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add Skill
        </motion.button>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 0.5, delay: 0.8 }} // Smooth transition
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
          <Briefcase size={20} /> Experience
        </h3>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }} // Staggered delay
            className="mb-4 space-y-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Job Title"
                value={exp.title}
                onChange={(e) =>
                  onExperienceChange(index, "title", e.target.value)
                }
                className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  onExperienceChange(index, "company", e.target.value)
                }
                className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) =>
                  onExperienceChange(index, "duration", e.target.value)
                }
                className="w-full p-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on tap
          onClick={onAddExperience}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add Experience
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
