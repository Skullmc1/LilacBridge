// app/skillsheet/components/PreviewCanvas.tsx
"use client"; // Mark as a Client Component for interactivity

import { templates } from "../../data/templates"; // Import templates from the data file

type PreviewCanvasProps = {
  resumeData: {
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
  };
  selectedTemplate: string; // Selected template
  isDarkTheme: boolean; // Current theme state
};

export default function PreviewCanvas({
  resumeData,
  selectedTemplate,
  isDarkTheme,
}: PreviewCanvasProps) {
  // Get the selected template's theme
  const theme = templates.find(
    (template) => template.name === selectedTemplate,
  );

  if (!theme) {
    return null; // Handle case where template is not found
  }

  // Apply dark or light theme
  const themeClass = isDarkTheme
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-800";

  // Render layout based on the selected template
  const renderLayout = () => {
    switch (theme.layout) {
      case "modern":
        return (
          <div
            className={`w-full max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${themeClass}`}
          >
            {/* Background Illustration */}
            <div className="absolute inset-0 z-0 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full h-full"
              >
                <path
                  fill="#3b82f6"
                  fillOpacity="0.2"
                  d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,202.7C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div
              className={`w-full max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${themeClass}`}
            >
              <h2 className={`text-2xl font-bold ${theme.text} mb-6`}>
                Resume Preview
              </h2>

              {/* Personal Info */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                  Personal Information
                </h3>
                <div className={`${theme.secondary} p-4 rounded-lg`}>
                  <p className={theme.text}>
                    Name: {resumeData.personalInfo.name}
                  </p>
                  <p className={theme.text}>
                    Email: {resumeData.personalInfo.email}
                  </p>
                  <p className={theme.text}>
                    Phone: {resumeData.personalInfo.phone}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                  Skills
                </h3>
                <div className={`${theme.secondary} p-4 rounded-lg`}>
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <p className={theme.text}>
                        <strong>{skill.skill}</strong> - {skill.confidence}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                  Experience
                </h3>
                {resumeData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`${theme.secondary} p-4 rounded-lg mb-2`}
                  >
                    <p className={theme.text}>
                      <strong>{exp.title}</strong> at {exp.company} (
                      {exp.duration})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "classic":
        return (
          <div
            className={`w-full max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${themeClass}`}
          >
            <h2 className={`text-2xl font-bold ${theme.text} mb-6`}>
              Resume Preview
            </h2>

            {/* Personal Info */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Personal Information
              </h3>
              <div className={`${theme.secondary} p-4 rounded-lg`}>
                <p className={theme.text}>
                  Name: {resumeData.personalInfo.name}
                </p>
                <p className={theme.text}>
                  Email: {resumeData.personalInfo.email}
                </p>
                <p className={theme.text}>
                  Phone: {resumeData.personalInfo.phone}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Skills
              </h3>
              <div className={`${theme.secondary} p-4 rounded-lg`}>
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <p className={theme.text}>
                      <strong>{skill.skill}</strong> - {skill.confidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Experience
              </h3>
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className={`${theme.secondary} p-4 rounded-lg mb-2`}
                >
                  <p className={theme.text}>
                    <strong>{exp.title}</strong> at {exp.company} (
                    {exp.duration})
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "minimal":
        return (
          <div className={`w-full max-w-4xl mx-auto p-8 ${themeClass}`}>
            <h2 className={`text-2xl font-bold ${theme.text} mb-6`}>
              Resume Preview
            </h2>

            {/* Personal Info */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Personal Information
              </h3>
              <p className={theme.text}>Name: {resumeData.personalInfo.name}</p>
              <p className={theme.text}>
                Email: {resumeData.personalInfo.email}
              </p>
              <p className={theme.text}>
                Phone: {resumeData.personalInfo.phone}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Skills
              </h3>
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <p className={theme.text}>
                    <strong>{skill.skill}</strong> - {skill.confidence}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                Experience
              </h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-2">
                  <p className={theme.text}>
                    <strong>{exp.title}</strong> at {exp.company} (
                    {exp.duration})
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div id="resume-preview">{renderLayout()}</div>;
}
