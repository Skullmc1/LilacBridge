import ProjectTile from './components/ProjectTile'

export const metadata = {
  title: 'In Profectum',
  description: 'A collection of innovative projects',
}

export default function Home() {
  const projects = [
    { 
      name: "Nebula", 
      id: 1, 
      desc: "Interactive solar system visualization with real-time planetary movements and cosmic events" 
    },
    { 
      name: "Quantum", 
      id: 2, 
      desc: "Secure video conferencing platform with end-to-end encryption and virtual backgrounds" 
    },
    { 
      name: "Phoenix", 
      id: 3, 
      desc: "Premium social network for verified professionals and industry leaders" 
    },
    { 
      name: "Atlas", 
      id: 4, 
      desc: "Next-generation mapping interface with augmented reality integration" 
    },
    { 
      name: "Horizon", 
      id: 5, 
      desc: "AI-powered research assistant that aggregates and analyzes online discussions" 
    },
    { 
      name: "Prism", 
      id: 6, 
      desc: "Interactive color theory laboratory for designers and artists" 
    },
    { 
      name: "errorpages", 
      id: 7, 
      desc: "Test various error pages",
      isErrorTile: true,
      errors: [
        { code: 401, desc: "Unauthorized" },
        { code: 403, desc: "Forbidden" },
        { code: 404, desc: "Not Found" },
        { code: 500, desc: "Internal Server Error" },
        { code: 502, desc: "Bad Gateway" },
        { code: 503, desc: "Service Unavailable" },
        { code: 504, desc: "Gateway Timeout" }
      ]
    }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      color: '#f0f0f0',
      fontFamily: 'monospace',
      padding: '2rem',
      margin: 0,
      boxSizing: 'border-box',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        marginBottom: 'clamp(2rem, 5vh, 3rem)',
        textAlign: 'center',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #f0f0f0, #a0a0a0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        In Profectum
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(1rem, 3vw, 2rem)',
        padding: '1rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {projects.map(project => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
