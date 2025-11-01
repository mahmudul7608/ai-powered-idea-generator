<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Sidebar (with mobile hamburger menu) -->
    <AppSidebar />

    <!-- Top Navigation -->
    <TopNav />

    <!-- Main Content Area -->
    <main class="min-h-screen mt-14 lg:ml-64 transition-all duration-300">
      <div class="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <slot />
      </div>

      <!-- Footer -->
      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
// Default layout for all pages with sidebar
</script>
