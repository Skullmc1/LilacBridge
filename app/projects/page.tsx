// app/projects/page.tsx
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project I built.",
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another awesome project.",
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A third amazing project.",
    link: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A cool project I built.",
    link: "#",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Another awesome project.",
    link: "#",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A third amazing project.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-secondary mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-accent hover:text-secondary transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
