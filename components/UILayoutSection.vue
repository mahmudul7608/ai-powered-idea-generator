<template>
  <div class="panel panel-compact h-full min-h-[220px]">
    <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      🎨 <span>Suggested UI Layout</span>
    </h2>
    <div class="space-y-4">
      <div
        v-for="(section, index) in uiLayout"
        :key="index"
        class="border-2 border-dashed border-gray-600 rounded-lg p-6 hover:border-primary-500/60 hover:bg-gray-800/50 transition-all"
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-lg font-semibold text-white">
            {{ section.name }}
          </h3>
          <span
            class="text-xs px-3 py-1 bg-gray-700 text-gray-200 rounded-full"
          >
            {{ section.layout }}
          </span>
        </div>
        <p class="text-gray-300">{{ section.description }}</p>

        <!-- Visual representation -->
        <div class="mt-4 p-4 bg-gray-900/20 rounded border border-gray-700/60">
          <div
            v-if="section.layout.includes('Full-width')"
            class="h-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded"
          ></div>
          <div
            v-else-if="section.layout.includes('3-column')"
            class="grid grid-cols-3 gap-2 h-16"
          >
            <div class="bg-gray-700 rounded"></div>
            <div class="bg-gray-700 rounded"></div>
            <div class="bg-gray-700 rounded"></div>
          </div>
          <div
            v-else-if="section.layout.includes('Sidebar')"
            class="grid grid-cols-4 gap-2 h-16"
          >
            <div class="bg-gray-700 rounded"></div>
            <div class="col-span-3 bg-gray-700 rounded"></div>
          </div>
          <div
            v-else-if="section.layout.includes('2-column')"
            class="grid grid-cols-2 gap-2 h-16"
          >
            <div class="bg-gray-700 rounded"></div>
            <div class="bg-gray-700 rounded"></div>
          </div>
          <div v-else class="h-16 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import type { UISection } from "~/types/idea";

defineProps<{
  uiLayout: UISection[];
}>();
</script>
