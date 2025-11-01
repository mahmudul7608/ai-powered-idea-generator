<template>
  <div class="space-y-10">
    <!-- Header Section -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
          Community Projects
        </h1>
        <p class="text-gray-400">
          Discover amazing ideas created by our community
        </p>
      </div>

      <!-- Sort Dropdown -->
      <div>
        <select
          v-model="sortBy"
          class="px-4 py-2.5 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer hover:bg-gray-700"
        >
          <option value="featured">Featured</option>
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectedCategory = category.id"
        :class="[
          'px-5 py-2 rounded-full font-medium transition-all',
          selectedCategory === category.id
            ? 'bg-white text-gray-900'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700',
        ]"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Projects Grid -->
    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/10"
      >
        <!-- Project Image/Icon -->
        <div
          class="relative aspect-video bg-gray-900/50 overflow-hidden flex items-center justify-center"
        >
          <div
            class="text-7xl opacity-90 group-hover:scale-110 transition-transform duration-300"
          >
            {{ project.icon }}
          </div>
          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          >
            <button
              class="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-all transform translate-y-2 group-hover:translate-y-0"
            >
              View Details
            </button>
          </div>
        </div>

        <!-- Project Info -->
        <div class="p-6">
          <h3
            class="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors"
          >
            {{ project.title }}
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium text-white"
              >
                {{ project.author.charAt(0) }}
              </div>
              <span class="text-sm text-gray-400">{{ project.author }}</span>
            </div>
            <span
              class="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600/50"
            >
              {{ project.category }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="grid md:grid-cols-3 gap-6">
      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-600/50 transition-colors"
      >
        <div class="text-5xl font-bold text-white mb-3">
          {{ savedIdeas?.length || 0 }}
        </div>
        <div class="text-base font-semibold text-gray-300 mb-1">
          Your Ideas Generated
        </div>
        <div class="text-sm text-gray-500">Keep creating amazing projects!</div>
      </div>

      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-600/50 transition-colors"
      >
        <div class="text-5xl font-bold text-white mb-3">50+</div>
        <div class="text-base font-semibold text-gray-300 mb-1">
          Tech Stacks Available
        </div>
        <div class="text-sm text-gray-500">Modern & trending technologies</div>
      </div>

      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-600/50 transition-colors"
      >
        <div class="text-5xl font-bold text-white mb-3">100%</div>
        <div class="text-base font-semibold text-gray-300 mb-1">
          Free Forever
        </div>
        <div class="text-sm text-gray-500">No hidden charges, ever!</div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section
      class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-gray-700/50"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-3">
        Why Developers Love This Tool
      </h2>
      <p class="text-center text-gray-400 text-base mb-10 max-w-2xl mx-auto">
        Perfect for projects, hackathons, and learning new technologies
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
        >
          <div
            class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-5"
          >
            <svg
              class="w-6 h-6 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
          <p class="text-gray-400 text-sm">
            Get complete project plans in just 2 seconds. No waiting!
          </p>
        </div>

        <div
          class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
        >
          <div
            class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-5"
          >
            <svg
              class="w-6 h-6 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Easy to Use</h3>
          <p class="text-gray-400 text-sm">
            Simple interface designed for developers of all levels
          </p>
        </div>

        <div
          class="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
        >
          <div
            class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-5"
          >
            <svg
              class="w-6 h-6 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Learn & Build</h3>
          <p class="text-gray-400 text-sm">
            Get tech stack recommendations to learn new skills
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="bg-gray-800 rounded-2xl p-12 text-center border border-gray-700"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Generate Your Next Big Idea?
      </h2>
      <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Join thousands of creators and developers who are using AI to spark
        their creativity!
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-lg transition-colors"
      >
        Start Generating Ideas
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const { ideas: savedIdeas } = useProjectIdeas();

useHead({
  title: "Explore - AI Idea Generator",
  meta: [
    {
      name: "description",
      content:
        "Explore features and benefits of AI Idea Generator. Generate creative project ideas with AI.",
    },
  ],
});

// Categories
const categories = [
  { id: "all", name: "All" },
  { id: "website", name: "Website" },
  { id: "app", name: "Mobile App" },
  { id: "saas", name: "SaaS" },
  { id: "dashboard", name: "Dashboard" },
  { id: "game", name: "Game" },
  { id: "tool", name: "Tool" },
];

const selectedCategory = ref("all");
const sortBy = ref("featured");

// Sample Projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    author: "Sarah Chen",
    category: "Website",
    icon: "🛍️",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    author: "Mike Johnson",
    category: "Mobile App",
    icon: "💪",
  },
  {
    id: 3,
    title: "Project Management Tool",
    author: "Emily Rodriguez",
    category: "SaaS",
    icon: "📊",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    author: "David Kim",
    category: "Dashboard",
    icon: "📈",
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    author: "Lisa Anderson",
    category: "Website",
    icon: "🍳",
  },
  {
    id: 6,
    title: "Task Management App",
    author: "James Wilson",
    category: "Mobile App",
    icon: "✅",
  },
  {
    id: 7,
    title: "Social Media Scheduler",
    author: "Rachel Green",
    category: "SaaS",
    icon: "📱",
  },
  {
    id: 8,
    title: "Puzzle Game",
    author: "Tom Martinez",
    category: "Game",
    icon: "🎮",
  },
  {
    id: 9,
    title: "Invoice Generator",
    author: "Nina Patel",
    category: "Tool",
    icon: "🧾",
  },
  {
    id: 10,
    title: "Weather App",
    author: "Alex Turner",
    category: "Mobile App",
    icon: "🌤️",
  },
  {
    id: 11,
    title: "Portfolio Website",
    author: "Chris Evans",
    category: "Website",
    icon: "💼",
  },
  {
    id: 12,
    title: "CRM System",
    author: "Diana Prince",
    category: "SaaS",
    icon: "👥",
  },
];

// Filtered projects based on category
const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return projects;
  }
  return projects.filter(
    (project) =>
      project.category.toLowerCase() === selectedCategory.value.toLowerCase()
  );
});

// Load saved ideas on mount
onMounted(() => {
  const { loadIdeas } = useProjectIdeas();
  loadIdeas();
});
</script>
