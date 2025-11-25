<template>
  <div class="min-h-screen bg-gray-900 pt-20">
    <!-- Top Navigation -->
    <TopNav />

    <!-- Main Content Area -->
    <main class="min-h-screen transition-all duration-300">
      <div class="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Default layout for all pages
</script>



