<template>
  <div
    class="card hover:shadow-xl transition-all cursor-pointer group"
    @click="$emit('view')"
  >
    <div class="flex items-start justify-between mb-3">
      <h3
        class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors"
      >
        {{ idea.title }}
      </h3>
      <button
        @click.stop="$emit('delete')"
        class="text-gray-400 hover:text-red-600 transition-colors"
        title="Delete"
      >
        🗑️
      </button>
    </div>

    <p class="text-gray-600 mb-4 line-clamp-2">{{ idea.summary }}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tech in idea.techStack.frontend.slice(0, 3)"
        :key="tech"
        class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded"
      >
        {{ tech }}
      </span>
      <span
        v-if="idea.techStack.frontend.length > 3"
        class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
      >
        +{{ idea.techStack.frontend.length - 3 }} more
      </span>
    </div>

    <div class="flex items-center justify-between text-sm text-gray-500">
      <span>{{ formatDate(idea.createdAt) }}</span>
      <span class="text-primary-600 group-hover:underline">View Details →</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectIdea } from "~/types/idea";

defineProps<{
  idea: ProjectIdea;
}>();

defineEmits<{
  view: [];
  delete: [];
}>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
</script>
