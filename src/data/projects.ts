export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  challenges: string;
  futureImprovements: string;
}

const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, Stripe payments, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce solution from the ground up, featuring a dynamic product catalog with real-time inventory tracking, integrated Stripe payment processing with webhook support, and a full admin dashboard for order and customer management. The platform handles 10K+ concurrent users with optimized database queries and CDN-backed image delivery.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demo: "https://example.com",
    github: "https://github.com",
    challenges:
      "Handling real-time inventory synchronization across multiple sessions was the biggest challenge. Implemented optimistic UI updates with server reconciliation using WebSocket events to ensure data consistency without sacrificing UX.",
    futureImprovements:
      "Planning to add AI-powered product recommendations, multi-vendor marketplace support, and a React Native mobile companion app.",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with custom charts, filters, and PDF export capabilities.",
    longDescription:
      "Designed and developed a powerful analytics dashboard that processes millions of data points in real-time. Features include custom D3.js visualizations, advanced filtering with URL-based state persistence, automated PDF/CSV report generation, and role-based access control for team collaboration.",
    tags: ["TypeScript", "D3.js", "GraphQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    demo: "https://example.com",
    github: "https://github.com",
    challenges:
      "Rendering large datasets (1M+ rows) without browser lag required implementing virtual scrolling, web workers for data transformation, and a custom caching layer to minimize redundant API calls.",
    futureImprovements:
      "Adding predictive analytics with ML models, real-time alerting system, and embeddable widget support for third-party integrations.",
  },
  {
    slug: "ai-content-studio",
    title: "AI Content Studio",
    description: "AI-powered content generation tool with natural language processing and automated workflows.",
    longDescription:
      "Created an AI-driven content creation platform that leverages GPT models for generating blog posts, social media copy, and marketing emails. Features a rich text editor with AI suggestions, content calendar, SEO optimization tools, and automated publishing workflows to multiple platforms.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    demo: "https://example.com",
    github: "https://github.com",
    challenges:
      "Managing API rate limits and costs while providing a responsive UX required implementing a queue system with priority levels, streaming responses for real-time feedback, and intelligent caching of similar prompts.",
    futureImprovements:
      "Integrating image generation, adding multi-language support, building a template marketplace, and implementing fine-tuning capabilities for brand voice consistency.",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team chat.",
    longDescription:
      "Built a comprehensive project management solution featuring drag-and-drop Kanban boards, real-time collaborative editing, integrated team chat with threading, file attachments, and automated workflow triggers. Supports multiple workspaces with granular permission controls.",
    tags: ["React", "Firebase", "WebSocket", "Redux"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demo: "https://example.com",
    github: "https://github.com",
    challenges:
      "Implementing conflict-free real-time collaboration on shared boards required building a custom CRDT-based synchronization engine that handles concurrent edits gracefully without data loss.",
    futureImprovements:
      "Adding time tracking with reports, Gantt chart view, GitHub/GitLab integration for developer workflows, and a mobile app with offline support.",
  },
];

export default projects;
