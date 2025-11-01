import type { ProjectIdea } from "~/types/idea";

export const useProjectIdeas = () => {
  const ideas = useState<ProjectIdea[]>("savedIdeas", () => []);
  const currentIdea = useState<ProjectIdea | null>("currentIdea", () => null);
  const loading = useState<boolean>("loading", () => false);

  // Load ideas from localStorage on client side
  const loadIdeas = () => {
    if (process.client) {
      const saved = localStorage.getItem("projectIdeas");
      if (saved) {
        ideas.value = JSON.parse(saved);
      }
    }
  };

  // Save ideas to localStorage
  const saveToStorage = () => {
    if (process.client) {
      localStorage.setItem("projectIdeas", JSON.stringify(ideas.value));
    }
  };

  // Add new idea
  const saveIdea = (idea: ProjectIdea) => {
    ideas.value.unshift(idea);
    saveToStorage();
  };

  // Delete idea
  const deleteIdea = (id: string) => {
    ideas.value = ideas.value.filter((idea) => idea.id !== id);
    saveToStorage();
  };

  // Get idea by ID
  const getIdeaById = (id: string) => {
    return ideas.value.find((idea) => idea.id === id);
  };

  // Generate share URL
  const getShareUrl = (id: string) => {
    if (process.client) {
      return `${window.location.origin}/idea/${id}`;
    }
    return "";
  };

  return {
    ideas: readonly(ideas),
    currentIdea,
    loading: readonly(loading),
    loadIdeas,
    saveIdea,
    deleteIdea,
    getIdeaById,
    getShareUrl,
  };
};
