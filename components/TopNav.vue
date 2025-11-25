<template>
  <!-- Modern Glassmorphism Navbar -->
  <nav
    class="fixed top-4 left-4 right-4 z-50 transition-all duration-300"
    :class="{ 'top-2': scrolled }"
  >
    <div
      class="max-w-7xl mx-auto px-4 md:px-6 py-3 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-gray-900/70 via-gray-800/70 to-gray-900/70 border border-white/10 shadow-2xl transition-all duration-300"
      style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.1) inset;"
    >
      <div class="flex items-center justify-between">
        <!-- Logo Section with Glow -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"
            ></div>
            <img
              src="/images/AI-idea-genarator.png"
              alt="AI Idea Generator"
              class="relative w-9 h-9 rounded-lg object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
            />
          </div>
          <div class="hidden sm:block">
            <span
              class="text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              AI Idea Generator
            </span>
          </div>
        </NuxtLink>

        <!--Action Buttons -->
        <div class="flex items-center space-x-3">
          <!-- Sign Up Button - Outlined Style -->
          <NuxtLink
            to="/signin"
            class="hidden md:flex items-center px-5 py-2 text-sm font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
          >
            Sign up
          </NuxtLink>

          <!-- Sign In Button - Gradient Style -->
          <NuxtLink
            to="/login"
            class="group relative hidden sm:flex items-center px-5 py-2 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <span class="relative flex items-center">
              Sign in
              <svg
                class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </NuxtLink>

          <!-- Modern Profile Dropdown -->
          <div class="relative">
            <button
              @click="toggleDropdown"
              class="group relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-bold text-sm flex items-center justify-center ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden"
            >
              <!-- Animated gradient background -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <span class="relative z-10">{{ userInitials }}</span>
              
              <!-- Pulse effect on hover -->
              <div
                class="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"
              ></div>
            </button>

            <!-- Enhanced Dropdown Menu -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95 -translate-y-2"
              enter-to-class="transform opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="transform opacity-100 scale-100 translate-y-0"
              leave-to-class="transform opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="isDropdownOpen"
                class="absolute right-0 mt-3 w-56 rounded-2xl backdrop-blur-xl bg-gray-900/95 border border-white/10 shadow-2xl overflow-hidden"
                style="box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);"
              >
                <!-- User Info Header -->
                <div class="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
                  <p class="text-sm font-semibold text-white">{{ userName }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">Premium Account</p>
                </div>

                <!-- Menu Items -->
                <div class="py-2">
                  <NuxtLink
                    to="/profile"
                    @click="closeDropdown"
                    class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all group"
                  >
                    <svg
                      class="w-4 h-4 mr-3 text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Profile</span>
                  </NuxtLink>
                  
                  <NuxtLink
                    to="/saved"
                    @click="closeDropdown"
                    class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all group"
                  >
                    <svg
                      class="w-4 h-4 mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <span>Saved Ideas</span>
                  </NuxtLink>

                  <div class="border-t border-white/10 my-2"></div>

                  <button
                    @click="handleLogout"
                    class="flex items-center w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all group"
                  >
                    <svg
                      class="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Overlay -->
  <div
    v-if="isDropdownOpen"
    class="fixed inset-0 z-40"
    @click="closeDropdown"
  ></div>
</template>

<script setup lang="ts">
// Dropdown state
const isDropdownOpen = ref(false);
const scrolled = ref(false);

// User data
const userName = ref("Mahmudul Hasan");

// User initials
const userInitials = computed(() => {
  const nameParts = userName.value.split(" ");
  if (nameParts.length >= 2) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  }
  return userName.value.substring(0, 2).toUpperCase();
});

// Toggle dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Logout handler
const handleLogout = () => {
  closeDropdown();
  console.log("Logging out...");
};

// Scroll effect
if (process.client) {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 20;
  });
}
</script>
