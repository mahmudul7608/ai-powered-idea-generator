<template>
  <div class="space-y-8">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="text-center">
        <div
          class="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
        ></div>
        <p class="text-gray-400">Loading idea...</p>
      </div>
    </div>

    <!-- Not Found State -->
    <div
      v-else-if="!idea"
      class="flex flex-col items-center justify-center py-20"
    >
      <div
        class="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          class="w-12 h-12 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">Idea not found</h3>
      <p class="text-gray-400 mb-6">
        This idea doesn't exist or has been deleted.
      </p>
      <NuxtLink
        to="/saved"
        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
      >
        Back to My Projects
      </NuxtLink>
    </div>

    <!-- Idea Content -->
    <div v-else class="space-y-8">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
      >
        <div class="flex-1">
          <NuxtLink
            to="/saved"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span class="text-sm font-medium">Back to Projects</span>
          </NuxtLink>

          <h1 class="text-4xl md:text-5xl font-bold text-white mb-3">
            {{ idea.title }}
          </h1>
          <p class="text-lg text-gray-400">
            {{ idea.summary }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="handleDelete"
            class="px-4 py-2.5 bg-gray-800 hover:bg-red-600/20 text-gray-300 hover:text-red-400 border border-gray-700 hover:border-red-500/50 rounded-lg transition-all"
          >
            Delete
          </button>
          <button
            class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
          >
            Export
          </button>
        </div>
      </div>

      <!-- Description Card -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Description</h2>
        <p class="text-gray-300 leading-relaxed">
          {{ idea.description }}
        </p>
      </div>

      <!-- Features Section -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
      >
        <h2 class="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(feature, index) in idea.features"
            :key="index"
            class="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
          >
            <div
              class="w-6 h-6 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <svg
                class="w-4 h-4 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p class="text-gray-300 text-sm">{{ feature }}</p>
          </div>
        </div>
      </div>

      <!-- Tech Stack Section -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
      >
        <h2 class="text-2xl font-bold text-white mb-6">Tech Stack</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-if="idea.techStack?.frontend">
            <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">
              Frontend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in idea.techStack.frontend"
                :key="tech"
                class="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="idea.techStack?.backend">
            <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">
              Backend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in idea.techStack.backend"
                :key="tech"
                class="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="idea.techStack?.database">
            <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">
              Database
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in idea.techStack.database"
                :key="tech"
                class="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded-lg text-sm text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Roadmap Section -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
      >
        <h2 class="text-2xl font-bold text-white mb-6">Development Roadmap</h2>
        <div class="space-y-4">
          <div v-for="step in idea.roadmap" :key="step.step" class="flex gap-4">
            <div class="flex flex-col items-center">
              <div
                class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
              >
                {{ step.step }}
              </div>
              <div
                v-if="step.step !== idea.roadmap.length"
                class="w-0.5 h-full bg-gray-700 mt-2"
              ></div>
            </div>
            <div class="flex-1 pb-8">
              <div
                class="bg-gray-700/30 rounded-lg p-5 border border-gray-600/30"
              >
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-lg font-semibold text-white">
                    {{ step.title }}
                  </h3>
                  <span
                    class="text-xs font-medium px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full"
                  >
                    {{ step.duration }}
                  </span>
                </div>
                <p class="text-gray-400 text-sm">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- UI Layout Section -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
      >
        <h2 class="text-2xl font-bold text-white mb-6">UI Layout</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="layout in idea.uiLayout"
            :key="layout.name"
            class="p-5 bg-gray-700/30 rounded-lg border border-gray-600/30"
          >
            <h3 class="text-base font-semibold text-white mb-2">
              {{ layout.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-2">{{ layout.description }}</p>
            <span class="text-xs text-gray-500">{{ layout.layout }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { ideas, deleteIdea } = useProjectIdeas();

const loading = ref(true);
const idea = ref(null);

useHead({
  title: computed(() =>
    idea.value ? `${idea.value.title} - AI Idea Generator` : "Idea Details"
  ),
});

onMounted(() => {
  const { loadIdeas } = useProjectIdeas();
  loadIdeas();

  setTimeout(() => {
    const ideaId = route.params.id as string;
    idea.value = ideas.value.find((i) => i.id === ideaId);
    loading.value = false;
  }, 500);
});

const handleDelete = () => {
  if (confirm("Are you sure you want to delete this idea?")) {
    deleteIdea(idea.value.id);
    router.push("/saved");
  }
};
</script>
