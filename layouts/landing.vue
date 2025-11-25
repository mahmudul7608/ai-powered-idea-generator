<template>
  <div class="min-h-screen bg-gray-900 pt-20">
    <!-- Top Navigation -->
    <TopNav />

    <!-- Main Content Area (No container padding for landing page) -->
    <main class="min-h-screen transition-all duration-300">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Landing layout without footer
</script>


