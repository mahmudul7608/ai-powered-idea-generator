import type { ProjectIdea } from "~/types/idea";

export const useAIGenerator = () => {
  const loading = ref(false);

  // Mock AI generation - Replace with actual OpenAI/Gemini API
  const generateIdea = async (prompt: string): Promise<ProjectIdea> => {
    loading.value = true;

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const id = Date.now().toString();
    const category = detectCategory(prompt);

    const idea: ProjectIdea = {
      id,
      title: generateTitle(prompt, category),
      summary: generateSummary(prompt, category),
      description: generateDescription(prompt, category),
      features: generateFeatures(prompt, category),
      techStack: generateTechStack(category),
      roadmap: generateRoadmap(category),
      uiLayout: generateUILayout(category),
      prompt,
      createdAt: new Date().toISOString(),
    };

    loading.value = false;
    return idea;
  };

  // Generate random idea
  const generateRandomIdea = async (): Promise<ProjectIdea> => {
    const randomPrompts = [
      "AI-powered fitness tracking app",
      "Social platform for book lovers",
      "Real-time collaborative design tool",
      "Smart home automation dashboard",
      "Language learning gamification app",
      "Mental health support chatbot",
      "Recipe sharing and meal planning app",
      "Freelancer project management tool",
    ];

    const randomPrompt =
      randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    return generateIdea(randomPrompt);
  };

  return {
    loading: readonly(loading),
    generateIdea,
    generateRandomIdea,
  };
};

// Helper functions for mock generation
function detectCategory(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("ai") || lower.includes("machine learning"))
    return "AI/ML";
  if (lower.includes("mobile") || lower.includes("app")) return "Mobile";
  if (lower.includes("design") || lower.includes("ui")) return "Design";
  if (lower.includes("saas") || lower.includes("business")) return "SaaS";
  return "Web";
}

function generateTitle(prompt: string, category: string): string {
  const keywords = prompt
    .split(" ")
    .filter((w) => w.length > 3)
    .slice(0, 3);
  return `${keywords
    .join(" ")
    .replace(/^./, (str) => str.toUpperCase())} Platform`;
}

function generateSummary(prompt: string, category: string): string {
  return `A modern ${category} solution that leverages cutting-edge technology to ${prompt.toLowerCase()}`;
}

function generateDescription(prompt: string, category: string): string {
  return `This innovative ${category} platform is designed to revolutionize the way users ${prompt.toLowerCase()}. By combining intuitive design with powerful features, it provides a seamless experience that addresses real-world challenges. The platform focuses on user engagement, scalability, and delivering measurable results.`;
}

function generateFeatures(prompt: string, category: string): string[] {
  const baseFeatures = [
    "User authentication and profile management",
    "Real-time data synchronization",
    "Advanced search and filtering capabilities",
    "Responsive design for all devices",
    "Analytics and insights dashboard",
    "Push notifications and email alerts",
    "Integration with popular third-party services",
    "Customizable themes and preferences",
  ];

  return baseFeatures.slice(0, 6);
}

function generateTechStack(category: string) {
  return {
    frontend: ["Nuxt 3", "Vue 3", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express", "Prisma ORM"],
    database: ["PostgreSQL", "Redis"],
    aiApi: ["OpenAI GPT-4", "Replicate", "Hugging Face"],
    deployment: ["Vercel", "Railway", "Cloudflare"],
  };
}

function generateRoadmap(category: string) {
  return [
    {
      step: 1,
      title: "Planning & Design",
      description: "Create wireframes, user flows, and design system",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Frontend Development",
      description: "Build UI components and implement responsive design",
      duration: "2-3 weeks",
    },
    {
      step: 3,
      title: "Backend & API",
      description: "Set up server, database, and API endpoints",
      duration: "2-3 weeks",
    },
    {
      step: 4,
      title: "Integration",
      description: "Connect frontend with backend and third-party APIs",
      duration: "1-2 weeks",
    },
    {
      step: 5,
      title: "Testing & QA",
      description: "Unit testing, integration testing, and bug fixes",
      duration: "1-2 weeks",
    },
    {
      step: 6,
      title: "Deployment & Launch",
      description: "Deploy to production and monitor performance",
      duration: "1 week",
    },
  ];
}

function generateUILayout(category: string) {
  return [
    {
      name: "Hero Section",
      description: "Eye-catching headline with CTA and brief description",
      layout: "Full-width, centered content",
    },
    {
      name: "Features Grid",
      description: "Showcase main features with icons and descriptions",
      layout: "3-column responsive grid",
    },
    {
      name: "Dashboard",
      description: "Main user interface with navigation and content area",
      layout: "Sidebar navigation + content area",
    },
    {
      name: "Analytics Section",
      description: "Charts and metrics visualization",
      layout: "2-column layout with cards",
    },
    {
      name: "User Profile",
      description: "User information and settings management",
      layout: "Tab-based layout",
    },
  ];
}
