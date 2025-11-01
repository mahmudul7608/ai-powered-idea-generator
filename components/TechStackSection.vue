<template>
  <div class="card">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      🧱 <span>Recommended Tech Stack</span>
    </h2>
    <div class="space-y-6">
      <!-- Frontend -->
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
        >
          <span class="text-2xl">🎨</span> Frontend
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.frontend"
            :key="tech"
            class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Backend -->
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
        >
          <span class="text-2xl">⚙️</span> Backend
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.backend"
            :key="tech"
            class="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Database -->
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
        >
          <span class="text-2xl">💾</span> Database
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.database"
            :key="tech"
            class="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- AI/API -->
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
        >
          <span class="text-2xl">🤖</span> AI & APIs
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.aiApi"
            :key="tech"
            class="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Deployment -->
      <div>
        <h3
          class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
        >
          <span class="text-2xl">🚀</span> Deployment
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.deployment"
            :key="tech"
            class="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechStack } from "~/types/idea";

defineProps<{
  techStack: TechStack;
}>();
</script>
