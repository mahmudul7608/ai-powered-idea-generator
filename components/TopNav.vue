<template>
  <nav
    class="fixed top-0 right-0 left-0 lg:left-64 bg-gray-900/98 backdrop-blur-sm border-b border-gray-700/50 py-3.5 z-40 flex items-center justify-between lg:justify-end shadow-lg px-4 md:px-6 lg:pl-6"
  >
    <!-- Logo for Mobile (with left padding for hamburger) -->
    <NuxtLink to="/" class="flex items-center space-x-2 lg:hidden ml-12">
      <img
        src="/images/AI-idea-genarator.png"
        alt="AI Idea Generator"
        class="w-8 h-8 rounded-lg object-cover shadow-md"
      />
      <span class="text-base font-bold text-white">AI Idea</span>
    </NuxtLink>

    <div class="flex items-center space-x-2 md:space-x-3">
      <!-- Sign Up Button -->
      <NuxtLink
        to="/signin"
        class="px-3 md:px-6 py-2 md:py-2.5 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white font-medium rounded-lg border border-gray-700 hover:border-gray-600 transition-all text-xs md:text-sm"
      >
        Sign up
      </NuxtLink>

      <!-- Sign In Button -->
      <NuxtLink
        to="/login"
        class="px-3 md:px-6 py-2 md:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-xs md:text-sm shadow-md hover:shadow-lg"
      >
        Sign in
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Top navigation component
</script>
