<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
          My Projects
        </h1>
        <p class="text-gray-400">
          {{ ideas.length }} ideas saved • Keep building amazing things
        </p>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button
          @click="sortBy = sortBy === 'recent' ? 'oldest' : 'recent'"
          class="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <span class="text-sm font-medium">{{
            sortBy === "recent" ? "Recent First" : "Oldest First"
          }}</span>
        </button>

        <NuxtLink
          to="/"
          class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
        >
          + New Idea
        </NuxtLink>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="ideas.length === 0"
      class="flex flex-col items-center justify-center py-20"
    >
      <div
        class="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          class="w-12 h-12 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">No projects yet</h3>
      <p class="text-gray-400 mb-6 text-center max-w-md">
        Start generating ideas to see them here. Your saved projects will appear
        in this space.
      </p>
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
      >
        Generate Your First Idea
      </NuxtLink>
    </div>

    <!-- Projects Grid -->
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="idea in sortedIdeas"
        :key="idea.id"
        class="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-indigo-500/10"
      >
        <!-- Card Header -->
        <div class="p-6 border-b border-gray-700/50">
          <div class="flex items-start justify-between mb-3">
            <div
              class="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click.stop="deleteIdea(idea.id)"
                class="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                title="Delete"
              >
                <svg
                  class="w-4 h-4 text-gray-400 hover:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <h3
            class="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2"
          >
            {{ idea.title }}
          </h3>
          <p class="text-sm text-gray-400 line-clamp-2">
            {{ idea.summary }}
          </p>
        </div>

        <!-- Card Body -->
        <div class="p-6 space-y-4">
          <!-- Tech Stack Preview -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <svg
                class="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span class="text-xs font-medium text-gray-500 uppercase"
                >Tech Stack</span
              >
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in idea.techStack?.frontend?.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-300"
              >
                {{ tech }}
              </span>
              <span
                v-if="getTotalTechCount(idea) > 3"
                class="px-2 py-1 bg-gray-700/30 rounded text-xs text-gray-500"
              >
                +{{ getTotalTechCount(idea) - 3 }} more
              </span>
            </div>
          </div>

          <!-- Date -->
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {{ formatDate(idea.createdAt) }}
          </div>
        </div>

        <!-- Card Footer -->
        <div class="px-6 pb-6">
          <NuxtLink
            :to="`/idea/${idea.id}`"
            class="block w-full text-center px-4 py-2.5 bg-gray-700/30 hover:bg-gray-700/50 text-white font-medium rounded-lg transition-colors border border-gray-600/30 hover:border-gray-500/50"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectIdea } from "~/types/idea";

const { ideas, deleteIdea } = useProjectIdeas();
const sortBy = ref<"recent" | "oldest">("recent");

useHead({
  title: "My Projects - AI Idea Generator",
  meta: [
    {
      name: "description",
      content: "View and manage all your saved project ideas.",
    },
  ],
});

// Load ideas on mount
onMounted(() => {
  const { loadIdeas } = useProjectIdeas();
  loadIdeas();
});

// Sorted ideas
const sortedIdeas = computed(() => {
  const sorted = [...ideas.value];
  if (sortBy.value === "recent") {
    return sorted.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } else {
    return sorted.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
});

// Get total tech count
const getTotalTechCount = (idea: ProjectIdea) => {
  return (
    (idea.techStack?.frontend?.length || 0) +
    (idea.techStack?.backend?.length || 0) +
    (idea.techStack?.database?.length || 0)
  );
};

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
</script>
