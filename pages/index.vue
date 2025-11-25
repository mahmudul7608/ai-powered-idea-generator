<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <!-- Hero Section with Input Only -->
    <div class="relative text-center py-8 md:py-12 max-w-5xl w-full mx-auto">
      <!-- Free Idea Generator Button -->
      <div class="mb-6">
        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <img
            src="/images/AI-idea-genarator.png"
            alt="AI Idea"
            class="w-5 h-5 rounded object-cover"
          />
          <span>Free Idea Generator</span>
        </button>
      </div>

      <!-- Main Title -->
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
        style="
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 25%,
            #f093fb 50%,
            #4facfe 75%,
            #00f2fe 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Georgia', 'Times New Roman', serif;
          text-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
        "
      >
        AI Idea Generator
      </h1>
      <p
        class="text-base md:text-lg lg:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Spark creativity and generate new ideas for projects, stories, or
        brainstorms.
      </p>

      <!-- Input Form Card -->
      <div
        class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-7 border border-gray-700/30 shadow-2xl max-w-3xl mx-auto"
      >
        <!-- Textarea -->
        <div class="relative mb-4">
          <textarea
            v-model="prompt"
            placeholder="Enter your theme or problem..."
            rows="3"
            maxlength="1000"
            class="w-full px-4 py-3.5 text-base bg-gray-700/30 text-white placeholder-gray-500 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all resize-none"
          />
          <div class="absolute bottom-3 right-3.5 text-xs text-gray-500">
            <span>{{ prompt.length }}/1,000</span>
          </div>
        </div>

        <!-- Compact Controls Row -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
          <!-- Language Dropdown -->
          <select v-model="language" class="select-dark">
            <option value="English">🌐 English</option>
            <option value="Spanish">🌐 Spanish</option>
            <option value="French">🌐 French</option>
            <option value="German">🌐 German</option>
            <option value="Bengali">🌐 Bengali</option>
          </select>

          <!-- Tone Dropdown -->
          <select v-model="tone" class="select-dark">
            <option value="Neutral">Neutral</option>
            <option value="Professional">Professional</option>
            <option value="Casual">Casual</option>
            <option value="Enthusiastic">Enthusiastic</option>
            <option value="Academic">Academic</option>
          </select>

          <!-- Model Selector -->
          <div
            class="flex items-center gap-1.5 px-3 py-2 bg-gray-700/40 border border-gray-600/50 rounded-lg text-sm text-gray-300"
          >
            <span class="text-orange-400">⚡</span>
            <span>Claude 4.5</span>
          </div>
        </div>

        <!-- Action Button -->
        <button
          @click="handleGenerate"
          :disabled="!prompt.trim() || loading"
          class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span v-if="loading">⏳ Generating...</span>
          <span v-else>✨ Generate Ideas</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { generateIdea, loading } = useAIGenerator();
const { currentIdea } = useProjectIdeas();
const router = useRouter();

const prompt = ref("");
const language = ref("English");
const tone = ref("Neutral");

useHead({
  title: "AI Idea Generator - Generate Creative Project Ideas",
  meta: [
    { name: "description", content: "Generate creative project ideas with AI" },
  ],
});

const handleGenerate = async () => {
  if (!prompt.value.trim()) return;
  const idea = await generateIdea(prompt.value);
  currentIdea.value = idea;
  router.push("/generate");
};
</script>
