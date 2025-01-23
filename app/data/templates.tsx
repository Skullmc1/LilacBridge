// app/data/templates.tsx
export const templates = [
  {
    name: "Modern",
    color: "bg-blue-500",
    secondary: "bg-blue-200",
    text: "text-blue-800",
    layout: "modern",
    preview: (
      <div className="w-full h-full p-2">
        <div className="bg-white rounded-lg p-2 mb-2">
          <div className="h-4 bg-blue-200 rounded mb-1"></div>
          <div className="h-4 bg-blue-200 rounded w-3/4"></div>
        </div>
        <div className="bg-white rounded-lg p-2">
          <div className="h-4 bg-blue-200 rounded mb-1"></div>
          <div className="h-4 bg-blue-200 rounded w-1/2"></div>
        </div>
      </div>
    ),
  },
  {
    name: "Classic",
    color: "bg-blue-500",
    secondary: "bg-blue-200",
    text: "text-blue-800",
    layout: "classic",
    preview: (
      <div className="w-full h-full p-2">
        <div className="bg-white rounded-lg p-2 mb-2">
          <div className="h-4 bg-blue-200 rounded mb-1"></div>
          <div className="h-4 bg-blue-200 rounded w-3/4"></div>
        </div>
        <div className="bg-white rounded-lg p-2">
          <div className="h-4 bg-blue-200 rounded mb-1"></div>
          <div className="h-4 bg-blue-200 rounded w-1/2"></div>
        </div>
      </div>
    ),
  },
  {
    name: "Minimal",
    color: "bg-gray-900",
    secondary: "bg-gray-200",
    text: "text-gray-800",
    layout: "minimal",
    preview: (
      <div className="w-full h-full p-2">
        <div className="bg-white rounded-lg p-2 mb-2">
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="bg-white rounded-lg p-2">
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ),
  },
];
