<template>
  <div class="panel panel-compact h-full min-h-[220px]">
    <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      🗺️ <span>Project Roadmap</span>
    </h2>
    <div class="space-y-4">
      <div
        v-for="step in roadmap"
        :key="step.step"
        class="relative pl-8 pb-6 border-l-2 border-gray-700 last:border-l-0 last:pb-0"
      >
        <!-- Step number circle -->
        <div
          class="absolute -left-4 top-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shadow-md"
        >
          {{ step.step }}
        </div>

        <!-- Content -->
        <div
          class="bg-gray-800/60 rounded-lg p-4 hover:bg-gray-800/80 transition-colors border border-gray-700/60"
        >
          <div class="flex items-start justify-between mb-2">
            <h3 class="text-lg font-semibold text-white">
              {{ step.title }}
            </h3>
            <span
              class="text-sm px-3 py-1 bg-primary-500/20 text-primary-200 border border-primary-400/30 rounded-full whitespace-nowrap"
            >
              {{ step.duration }}
            </span>
          </div>
          <p class="text-gray-300">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import type { RoadmapStep } from "~/types/idea";

defineProps<{
  roadmap: RoadmapStep[];
}>();
</script>
