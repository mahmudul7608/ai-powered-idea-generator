<template>
  <div class="max-w-3xl mx-auto space-y-6">
    <!-- Profile Card -->
    <div
      class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50"
    >
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <!-- Avatar -->
        <div class="relative">
          <div
            class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold ring-2 ring-gray-700"
          >
            {{ userInitials }}
          </div>
          <button
            class="absolute bottom-0 right-0 w-7 h-7 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center border-2 border-gray-800 transition-colors"
          >
            <svg
              class="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <!-- User Info -->
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-xl font-bold text-white mb-1">{{ userData.name }}</h2>
          <p class="text-sm text-gray-400 mb-3">{{ userData.email }}</p>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span
              class="px-2.5 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium"
            >
              Pro Member
            </span>
            <span
              class="px-2.5 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
            >
              Joined {{ joinedDate }}
            </span>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-700/50">
        <div class="text-center">
          <div class="text-xl font-bold text-white">{{ stats.ideas }}</div>
          <div class="text-xs text-gray-500">Ideas</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-white">{{ stats.projects }}</div>
          <div class="text-xs text-gray-500">Projects</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-white">{{ stats.streak }}</div>
          <div class="text-xs text-gray-500">Streak</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-white">{{ stats.saved }}</div>
          <div class="text-xs text-gray-500">Saved</div>
        </div>
      </div>
    </div>

    <!-- Settings -->
    <div class="grid md:grid-cols-2 gap-4">
      <!-- Account -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50"
      >
        <h3
          class="text-base font-semibold text-white mb-3 flex items-center gap-2"
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Account
        </h3>
        <div class="space-y-2">
          <button
            class="w-full flex items-center justify-between p-2.5 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg transition-colors text-left text-sm"
          >
            <span class="text-gray-300">Edit Profile</span>
            <svg
              class="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            class="w-full flex items-center justify-between p-2.5 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg transition-colors text-left text-sm"
          >
            <span class="text-gray-300">Change Password</span>
            <svg
              class="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Preferences -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50"
      >
        <h3
          class="text-base font-semibold text-white mb-3 flex items-center gap-2"
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </h3>
        <div class="space-y-2">
          <div
            class="flex items-center justify-between p-2.5 bg-gray-700/30 rounded-lg text-sm"
          >
            <span class="text-gray-300">Notifications</span>
            <button class="w-9 h-5 bg-indigo-600 rounded-full relative">
              <div
                class="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 transition-all"
              ></div>
            </button>
          </div>
          <div
            class="flex items-center justify-between p-2.5 bg-gray-700/30 rounded-lg text-sm"
          >
            <span class="text-gray-300">Auto-save</span>
            <button class="w-9 h-5 bg-gray-600 rounded-full relative">
              <div
                class="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-all"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
      <button
        class="w-full sm:w-auto px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700 text-sm"
      >
        Sign Out
      </button>
      <button
        class="w-full sm:w-auto px-6 py-2.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-lg transition-colors border border-red-500/30 text-sm"
      >
        Delete Account
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Profile & Settings - AI Idea Generator",
  meta: [
    {
      name: "description",
      content: "Manage your account settings and preferences.",
    },
  ],
});

const userData = ref({
  name: "Mahmudul Hasan",
  email: "dev.mahmudulhasan2@gmail.com",
  joinedDate: "Jan 2024",
});

const stats = ref({
  ideas: 24,
  projects: 8,
  streak: 12,
  saved: 35,
});

const userInitials = computed(() => {
  return userData.value.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
});

const joinedDate = computed(() => userData.value.joinedDate);
</script>
