<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Sidebar (with mobile hamburger menu) -->
    <AppSidebar />

    <!-- Top Navigation -->
    <TopNav />

    <!-- Main Content Area (No Footer for Landing Page) -->
    <main class="min-h-screen mt-14 lg:ml-64 transition-all duration-300">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Landing layout without footer
</script>
