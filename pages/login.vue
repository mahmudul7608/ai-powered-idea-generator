<template>
  <div class="min-h-screen flex items-center justify-center py-8 px-4">
    <div class="max-w-md w-full">
      <!-- Card -->
      <div
        class="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700/50"
      >
        <!-- Header -->
        <div class="text-center mb-6">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full mb-3"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">
            Welcome Back
          </h2>
          <p class="text-sm text-gray-400">Log in to continue</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-xs font-medium text-gray-300 mb-1.5"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
              class="w-full px-3 py-2.5 text-sm bg-gray-700/50 text-white placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-medium text-gray-300"
                >Password</label
              >
              <a href="#" class="text-xs text-indigo-400 hover:text-indigo-300"
                >Forgot?</a
              >
            </div>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                required
                class="w-full px-3 py-2.5 text-sm bg-gray-700/50 text-white placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  v-if="!showPassword"
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center">
            <input
              v-model="form.remember"
              type="checkbox"
              class="w-3.5 h-3.5 bg-gray-700 border-gray-600 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500"
            />
            <label class="ml-2 text-xs text-gray-400">
              Remember me for 30 days
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm"
          >
            <span v-if="loading">Logging in...</span>
            <span v-else>Log in</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-xs">
            <span class="px-3 bg-gray-800/50 text-gray-400"
              >Or continue with</span
            >
          </div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            class="flex items-center justify-center px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-white border border-gray-600 rounded-lg transition-all"
          >
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            <span class="text-xs font-medium">Google</span>
          </button>
          <button
            type="button"
            class="flex items-center justify-center px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-white border border-gray-600 rounded-lg transition-all"
          >
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="text-xs font-medium">GitHub</span>
          </button>
        </div>

        <!-- Footer -->
        <div class="mt-4 text-center">
          <p class="text-gray-400 text-xs">
            Don't have an account?
            <NuxtLink
              to="/signin"
              class="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Sign up
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="mt-4 text-center">
        <NuxtLink
          to="/"
          class="text-gray-400 hover:text-white text-xs transition-colors"
        >
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  email: "",
  password: "",
  remember: false,
});

const showPassword = ref(false);
const loading = ref(false);

useHead({
  title: "Log In - AI Idea Generator",
  meta: [
    {
      name: "description",
      content:
        "Log in to your account to continue generating amazing project ideas",
    },
  ],
});

const handleLogin = async () => {
  loading.value = true;

  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    alert("Logged in successfully! 🎉");
    // Redirect to home or dashboard
    navigateTo("/");
  }, 2000);
};
</script>
