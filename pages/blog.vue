<template>
  <div class="max-w-6xl mx-auto space-y-12">
    <!-- Simple Header -->
    <div class="text-center space-y-3">
      <h1 class="text-4xl md:text-5xl font-bold text-white">
        Blog & Resources
      </h1>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto">
        Insights, tutorials, and best practices for developers
      </p>
    </div>

    <!-- Featured Post -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 hover:border-indigo-500/30 transition-all"
    >
      <div
        class="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-semibold rounded-full mb-4"
      >
        Featured Article
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        How AI is Revolutionizing Project Planning
      </h2>
      <p class="text-gray-400 text-lg mb-6 leading-relaxed max-w-3xl">
        Discover how artificial intelligence is transforming the way developers
        and entrepreneurs approach project planning, from ideation to execution.
      </p>
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span>May 15, 2024</span>
        <span>•</span>
        <span>8 min read</span>
        <span>•</span>
        <span>Development</span>
      </div>
      <button
        class="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
      >
        Read article →
      </button>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Post 1 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>May 10, 2024</span>
          <span>•</span>
          <span>5 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Getting Started with AI-Powered Development
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Learn the basics of integrating AI tools into your development
          workflow and boost productivity.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 2 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>May 8, 2024</span>
          <span>•</span>
          <span>7 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Modern UI/UX Design Principles
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Essential design principles for creating beautiful and functional user
          interfaces.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 3 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>May 5, 2024</span>
          <span>•</span>
          <span>6 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Optimizing Your Web Application
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Best practices for improving performance and delivering better user
          experience.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 4 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>May 3, 2024</span>
          <span>•</span>
          <span>8 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Essential Developer Tools for 2024
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          A curated list of must-have tools for modern web development and
          productivity.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 5 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>May 1, 2024</span>
          <span>•</span>
          <span>5 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Building Responsive Mobile Apps
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Tips and best practices for creating mobile-first applications that
          work everywhere.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 6 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>Apr 28, 2024</span>
          <span>•</span>
          <span>10 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Deploying Your App to Production
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Step-by-step guide to deploying your application successfully to
          production.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 7 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>Apr 25, 2024</span>
          <span>•</span>
          <span>6 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          TypeScript Best Practices
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Learn how to write better TypeScript code with these proven best
          practices.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 8 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>Apr 22, 2024</span>
          <span>•</span>
          <span>7 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Introduction to Vue 3 Composition API
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Understand the power of Vue 3's Composition API and when to use it.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>

      <!-- Post 9 -->
      <article
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all group"
      >
        <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span>Apr 20, 2024</span>
          <span>•</span>
          <span>9 min</span>
        </div>
        <h3
          class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors"
        >
          Building Scalable APIs with Node.js
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Design and build scalable REST APIs using Node.js and Express
          framework.
        </p>
        <a
          href="#"
          class="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >Read article →</a
        >
      </article>
    </div>

    <!-- Newsletter Section -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 text-center"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">
        Stay Updated
      </h2>
      <p class="text-gray-400 mb-6 max-w-xl mx-auto">
        Get the latest articles and tutorials delivered to your inbox
      </p>
      <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
        <button
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Blog - AI Idea Generator",
  meta: [
    {
      name: "description",
      content:
        "Read our latest articles, tutorials, and insights about AI-powered development",
    },
  ],
});
</script>
