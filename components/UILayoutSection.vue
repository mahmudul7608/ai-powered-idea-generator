<template>
  <div class="card">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      🎨 <span>Suggested UI Layout</span>
    </h2>
    <div class="space-y-4">
      <div
        v-for="(section, index) in uiLayout"
        :key="index"
        class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 hover:bg-primary-50/50 transition-all"
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ section.name }}
          </h3>
          <span
            class="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
          >
            {{ section.layout }}
          </span>
        </div>
        <p class="text-gray-600">{{ section.description }}</p>

        <!-- Visual representation -->
        <div class="mt-4 p-4 bg-white rounded border border-gray-200">
          <div
            v-if="section.layout.includes('Full-width')"
            class="h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded"
          ></div>
          <div
            v-else-if="section.layout.includes('3-column')"
            class="grid grid-cols-3 gap-2 h-16"
          >
            <div class="bg-gray-200 rounded"></div>
            <div class="bg-gray-200 rounded"></div>
            <div class="bg-gray-200 rounded"></div>
          </div>
          <div
            v-else-if="section.layout.includes('Sidebar')"
            class="grid grid-cols-4 gap-2 h-16"
          >
            <div class="bg-gray-200 rounded"></div>
            <div class="col-span-3 bg-gray-200 rounded"></div>
          </div>
          <div
            v-else-if="section.layout.includes('2-column')"
            class="grid grid-cols-2 gap-2 h-16"
          >
            <div class="bg-gray-200 rounded"></div>
            <div class="bg-gray-200 rounded"></div>
          </div>
          <div v-else class="h-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UISection } from "~/types/idea";

defineProps<{
  uiLayout: UISection[];
}>();
</script>
