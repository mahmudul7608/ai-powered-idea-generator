<template>
  <div class="panel panel-compact h-full min-h-[220px]">
    <h2 class="text-2xl font-bold text-white mb-5 flex items-center gap-2">
      🧱 <span>Recommended Tech Stack</span>
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Frontend -->
      <div
        class="rounded-xl border border-gray-700/60 bg-gradient-to-br from-white/5 to-transparent p-4 h-full"
      >
        <h3
          class="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2"
        >
          <span class="text-xl">🎨</span> Frontend
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.frontend"
            :key="tech"
            class="px-3 py-1.5 text-sm bg-primary-600/15 text-primary-200 border border-primary-500/30 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Backend -->
      <div
        class="rounded-xl border border-gray-700/60 bg-gradient-to-br from-white/5 to-transparent p-4 h-full"
      >
        <h3
          class="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2"
        >
          <span class="text-xl">⚙️</span> Backend
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.backend"
            :key="tech"
            class="px-3 py-1.5 text-sm bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Database -->
      <div
        class="rounded-xl border border-gray-700/60 bg-gradient-to-br from-white/5 to-transparent p-4 h-full"
      >
        <h3
          class="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2"
        >
          <span class="text-xl">💾</span> Database
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.database"
            :key="tech"
            class="px-3 py-1.5 text-sm bg-violet-500/15 text-violet-200 border border-violet-400/30 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- AI/API -->
      <div
        class="rounded-xl border border-gray-700/60 bg-gradient-to-br from-white/5 to-transparent p-4 h-full"
      >
        <h3
          class="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2"
        >
          <span class="text-xl">🤖</span> AI & APIs
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.aiApi"
            :key="tech"
            class="px-3 py-1.5 text-sm bg-pink-500/15 text-pink-200 border border-pink-400/30 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Deployment -->
      <div
        class="rounded-xl border border-gray-700/60 bg-gradient-to-br from-white/5 to-transparent p-4 h-full"
      >
        <h3
          class="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2"
        >
          <span class="text-xl">🚀</span> Deployment
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack.deployment"
            :key="tech"
            class="px-3 py-1.5 text-sm bg-orange-500/15 text-orange-200 border border-orange-400/30 rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import type { TechStack } from "~/types/idea";

defineProps<{
  techStack: TechStack;
}>();
</script>
