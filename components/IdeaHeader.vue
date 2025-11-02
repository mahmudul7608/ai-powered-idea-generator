<template>
  <div class="panel panel-compact mb-8">
    <div class="flex items-start gap-6">
      <!-- Icon -->
      <div
        class="shrink-0 w-14 h-14 rounded-2xl bg-primary-600/20 text-primary-300 flex items-center justify-center text-3xl"
      >
        🚀
      </div>

      <!-- Content -->
      <div class="flex-1">
        <div
          class="text-sm text-primary-300 mb-2 font-medium flex items-center gap-2"
        >
          <span class="inline-block w-2 h-2 bg-primary-400 rounded-full"></span>
          Your AI‑generated project plan
        </div>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight"
        >
          {{ idea.title }}
        </h1>
        <p class="text-lg text-gray-200 mb-3 leading-relaxed">
          {{ idea.summary }}
        </p>
        <p class="text-gray-300 leading-relaxed max-w-3xl">
          {{ idea.description }}
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap gap-3 mt-6">
          <button
            @click="$emit('save')"
            class="px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors shadow focus-visible:outline-none"
          >
            💾 Save this idea
          </button>
          <button
            @click="$emit('share')"
            class="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition-colors"
          >
            🔗 Share
          </button>
          <button
            @click="$emit('copy')"
            class="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition-colors"
          >
            📋 Copy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import type { ProjectIdea } from "~/types/idea";

defineProps<{
  idea: ProjectIdea;
}>();

defineEmits<{
  save: [];
  share: [];
  copy: [];
}>();
</script>
