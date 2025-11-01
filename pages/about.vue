<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
    >
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        🚀 About AI Idea Generator
      </h1>
      <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
        Your intelligent companion for transforming vague concepts into complete
        project plans
      </p>
    </div>

    <!-- What We Do Section -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
    >
      <h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-3">
        <span>🎯</span>
        <span>What We Do</span>
      </h2>

      <p class="text-gray-300 mb-6 text-lg">
        We help developers, designers, and entrepreneurs turn their initial
        ideas into comprehensive project blueprints. Simply describe what you
        want to build, and our AI will generate:
      </p>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          class="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
        >
          <div class="text-3xl mb-3">💡</div>
          <h3 class="font-bold text-white mb-2 text-lg">Refined Ideas</h3>
          <p class="text-sm text-gray-400">
            Polished and professional project concepts
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-green-500/20 to-green-600/10 p-5 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all"
        >
          <div class="text-3xl mb-3">⚙️</div>
          <h3 class="font-bold text-white mb-2 text-lg">Feature Lists</h3>
          <p class="text-sm text-gray-400">
            Complete breakdown of key features
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
        >
          <div class="text-3xl mb-3">🧱</div>
          <h3 class="font-bold text-white mb-2 text-lg">Tech Stack</h3>
          <p class="text-sm text-gray-400">
            Recommended technologies and tools
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-5 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all"
        >
          <div class="text-3xl mb-3">🗺️</div>
          <h3 class="font-bold text-white mb-2 text-lg">Roadmap</h3>
          <p class="text-sm text-gray-400">Step-by-step development plan</p>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
    >
      <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <span>🛠️</span>
        <span>Built With Modern Technology</span>
      </h2>

      <div class="grid md:grid-cols-2 gap-3">
        <div
          class="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
        >
          <span class="text-2xl">✅</span>
          <div>
            <div class="font-semibold text-white">Nuxt 3</div>
            <div class="text-xs text-gray-400">The Intuitive Vue Framework</div>
          </div>
        </div>

        <div
          class="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
        >
          <span class="text-2xl">✅</span>
          <div>
            <div class="font-semibold text-white">Tailwind CSS</div>
            <div class="text-xs text-gray-400">Utility-First CSS Framework</div>
          </div>
        </div>

        <div
          class="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
        >
          <span class="text-2xl">✅</span>
          <div>
            <div class="font-semibold text-white">TypeScript</div>
            <div class="text-xs text-gray-400">Type-Safe Development</div>
          </div>
        </div>

        <div
          class="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
        >
          <span class="text-2xl">✅</span>
          <div>
            <div class="font-semibold text-white">Vue 3</div>
            <div class="text-xs text-gray-400">
              Progressive JavaScript Framework
            </div>
          </div>
        </div>

        <div
          class="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/30"
        >
          <span class="text-2xl">🤖</span>
          <div>
            <div class="font-semibold text-white">AI-Powered</div>
            <div class="text-xs text-gray-400">Advanced AI Generation</div>
          </div>
        </div>
      </div>
    </div>

    <!-- How to Use Section -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
    >
      <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <span>💡</span>
        <span>How to Use</span>
      </h2>

      <div class="space-y-4">
        <div
          class="flex gap-4 items-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-indigo-500/30 transition-all"
        >
          <div
            class="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white"
          >
            1
          </div>
          <div>
            <h3 class="font-bold text-white mb-1">Describe Your Idea</h3>
            <p class="text-gray-400 text-sm">
              Write a simple prompt about what you want to build
            </p>
          </div>
        </div>

        <div
          class="flex gap-4 items-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all"
        >
          <div
            class="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white"
          >
            2
          </div>
          <div>
            <h3 class="font-bold text-white mb-1">Generate</h3>
            <p class="text-gray-400 text-sm">
              Let AI create a comprehensive project plan
            </p>
          </div>
        </div>

        <div
          class="flex gap-4 items-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-pink-500/30 transition-all"
        >
          <div
            class="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center font-bold text-white"
          >
            3
          </div>
          <div>
            <h3 class="font-bold text-white mb-1">Review</h3>
            <p class="text-gray-400 text-sm">
              Explore features, tech stack, roadmap, and UI layout
            </p>
          </div>
        </div>

        <div
          class="flex gap-4 items-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-green-500/30 transition-all"
        >
          <div
            class="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white"
          >
            4
          </div>
          <div>
            <h3 class="font-bold text-white mb-1">Save & Share</h3>
            <p class="text-gray-400 text-sm">
              Save your ideas for later or share them with others
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Box -->
      <div
        class="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 border-l-4 border-indigo-400 p-6 rounded-xl"
      >
        <p class="text-white font-semibold text-lg flex items-center gap-2">
          <span>🎉</span>
          <span
            >Start generating amazing project ideas today - completely
            free!</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About",
  meta: [
    {
      name: "description",
      content: "Learn more about AI Project Idea Generator",
    },
  ],
});
</script>
