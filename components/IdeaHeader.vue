<template>
  <div
    class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl mb-8"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 25px 25px,
            white 3px,
            transparent 0
          );
          background-size: 50px 50px;
        "
      ></div>
    </div>

    <!-- Success Badge -->
    <div class="absolute top-6 right-6">
      <div
        class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white/30 text-white font-semibold flex items-center gap-2 animate-pulse"
      >
        <span class="text-xl">✨</span>
        <span class="hidden md:inline">Generated Successfully!</span>
        <span class="md:hidden">Success!</span>
      </div>
    </div>

    <div class="relative p-10">
      <!-- Icon -->
      <div
        class="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6"
      >
        <span class="text-6xl">🚀</span>
      </div>

      <!-- Content -->
      <div class="flex-1 max-w-4xl">
        <div
          class="text-lg text-white/80 mb-3 font-medium flex items-center gap-2"
        >
          <span
            class="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"
          ></span>
          Your AI-Generated Project Plan
        </div>
        <h1
          class="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg"
        >
          {{ idea.title }}
        </h1>
        <p
          class="text-xl md:text-2xl text-white/95 mb-6 font-medium leading-relaxed"
        >
          {{ idea.summary }}
        </p>
        <p class="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl">
          {{ idea.description }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 mt-10">
        <button
          @click="$emit('save')"
          class="group bg-white text-purple-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all shadow-xl flex items-center gap-2"
        >
          <span class="text-2xl">💾</span>
          <span>Save This Idea</span>
          <span
            class="hidden md:inline group-hover:scale-125 transition-transform"
            >→</span
          >
        </button>
        <button
          @click="$emit('share')"
          class="bg-white/10 backdrop-blur-sm text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 flex items-center gap-2"
        >
          <span class="text-2xl">🔗</span>
          <span>Share</span>
        </button>
        <button
          @click="$emit('copy')"
          class="bg-white/10 backdrop-blur-sm text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 flex items-center gap-2"
        >
          <span class="text-2xl">📋</span>
          <span>Copy</span>
        </button>
      </div>
    </div>

    <!-- Bottom Decoration -->
    <div
      class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
    ></div>
  </div>
</template>

<script setup lang="ts">
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
