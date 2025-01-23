// app/skillsheet/page.tsx
"use client"; // Mark as a Client Component for interactivity

import { useState } from "react";
import Toolbar from "./components/Toolbar";
import PresetSelector from "./components/PresetSelector";
import FormInputs from "./components/FormInputs";
import PreviewCanvas from "./components/PreviewCanvas";

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    skills: [
      {
        skill: "",
        confidence: "",
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        duration: "",
      },
    ],
  });

  const [selectedTemplate, setSelectedTemplate] = useState("Modern"); // Default template
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Default theme

  // Handle form input changes
  const handleInputChange = (section: string, field: string, value: string) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section as keyof typeof prevData],
        [field]: value,
      },
    }));
  };

  // Handle skill input changes
  const handleSkillChange = (index: number, field: string, value: string) => {
    setResumeData((prevData) => {
      const updatedSkills = [...prevData.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: value,
      };
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  // Add a new skill field
  const addSkill = () => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, { skill: "", confidence: "" }],
    }));
  };

  // Handle experience input changes
  const handleExperienceChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setResumeData((prevData) => {
      const updatedExperience = [...prevData.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
      return {
        ...prevData,
        experience: updatedExperience,
      };
    });
  };

  // Add a new experience field
  const addExperience = () => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { title: "", company: "", duration: "" },
      ],
    }));
  };

  // Handle Download
  const handleDownload = () => {
    console.log("Downloading resume as PDF...");
    // Add PDF download logic here
  };

  // Handle Reset
  const handleReset = () => {
    setResumeData({
      personalInfo: { name: "", email: "", phone: "" },
      skills: [{ skill: "", confidence: "" }],
      experience: [{ title: "", company: "", duration: "" }],
    });
  };

  // Handle Template Selection
  const handleSelectTemplate = (template: string) => {
    setSelectedTemplate(template);
  };

  // Handle Theme Toggle
  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4 pt-24 pb-24">
      {/* Toolbar */}
      <Toolbar
        onReset={handleReset}
        onDownload={handleDownload}
        onToggleTheme={handleToggleTheme}
        isDarkTheme={isDarkTheme}
      />

      {/* Preset Selector */}
      <PresetSelector onSelectTemplate={handleSelectTemplate} />

      {/* Form Inputs */}
      <FormInputs
        personalInfo={resumeData.personalInfo}
        skills={resumeData.skills}
        experience={resumeData.experience}
        onInputChange={handleInputChange}
        onSkillChange={handleSkillChange}
        onAddSkill={addSkill}
        onExperienceChange={handleExperienceChange}
        onAddExperience={addExperience}
      />

      {/* Preview Canvas */}
      <PreviewCanvas
        resumeData={resumeData}
        selectedTemplate={selectedTemplate}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
}
