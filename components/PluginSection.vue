<template>
  <div class="space-y-10">
    <!-- Hero Section -->
    <div
      class="bg-gray-800 rounded-2xl p-12 text-center border border-gray-700"
    >
      <div
        class="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 rounded-2xl mb-6"
      >
        <svg
          class="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        AI Idea Generator Plugin
      </h1>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Integrate powerful AI-powered idea generation directly into your
        favorite tools and platforms. Generate creative project ideas anywhere!
      </p>
      <button
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Download Plugin
      </button>
    </div>

    <!-- Available Platforms -->
    <div>
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        Available Platforms
      </h2>
      <div class="grid md:grid-cols-4 gap-6">
        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">VS Code</h3>
          <p class="text-sm text-gray-400 mb-4">Code editor extension</p>
          <button
            class="text-indigo-500 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Install →
          </button>
        </div>

        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Chrome</h3>
          <p class="text-sm text-gray-400 mb-4">Browser extension</p>
          <button
            class="text-indigo-500 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Install →
          </button>
        </div>

        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Notion</h3>
          <p class="text-sm text-gray-400 mb-4">Workspace integration</p>
          <button
            class="text-indigo-500 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Install →
          </button>
        </div>

        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Slack</h3>
          <p class="text-sm text-gray-400 mb-4">Team collaboration</p>
          <button
            class="text-indigo-500 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Install →
          </button>
        </div>
      </div>
    </div>

    <!-- Key Features -->
    <div>
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        Plugin Features
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
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
          <h3 class="text-xl font-bold text-white mb-3">Lightning Fast</h3>
          <p class="text-gray-400 leading-relaxed">
            Generate ideas instantly without leaving your workflow. Quick
            shortcuts and commands for maximum productivity.
          </p>
        </div>

        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Customizable</h3>
          <p class="text-gray-400 leading-relaxed">
            Tailor the plugin to your needs. Configure settings, shortcuts, and
            preferences to match your workflow.
          </p>
        </div>

        <div
          class="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-colors"
        >
          <div
            class="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Auto Sync</h3>
          <p class="text-gray-400 leading-relaxed">
            All your ideas automatically sync across devices and platforms.
            Access them anywhere, anytime.
          </p>
        </div>
      </div>
    </div>

    <!-- Installation Guide -->
    <div class="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
      <h2 class="text-3xl font-bold text-white mb-10 text-center">
        Quick Installation
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            1
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Download</h3>
          <p class="text-gray-400 text-sm">
            Choose your platform and download the plugin package
          </p>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            2
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Install</h3>
          <p class="text-gray-400 text-sm">
            Follow simple installation steps for your platform
          </p>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            3
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Start Using</h3>
          <p class="text-gray-400 text-sm">
            Generate ideas instantly within your workflow
          </p>
        </div>
      </div>
    </div>

    <!-- Code Example -->
    <div class="bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700">
      <h2 class="text-2xl font-bold text-white mb-6">API Integration</h2>
      <p class="text-gray-400 mb-6">
        Integrate our plugin into your custom applications with our simple API.
      </p>
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <pre
          class="text-sm text-gray-300 overflow-x-auto"
        ><code>// Install via npm
npm install @ai-idea-generator/plugin

// Import and use
import { AIIdeaGenerator } from '@ai-idea-generator/plugin';

const generator = new AIIdeaGenerator({
  apiKey: 'your-api-key'
});

const idea = await generator.generate({
  prompt: 'Build a social media app',
  language: 'English'
});</code></pre>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid md:grid-cols-4 gap-6">
      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">50K+</div>
        <div class="text-sm text-gray-400">Active Installs</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">4.8</div>
        <div class="text-sm text-gray-400">Average Rating</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">100+</div>
        <div class="text-sm text-gray-400">Updates Released</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">24/7</div>
        <div class="text-sm text-gray-400">Support Available</div>
      </div>
    </div>

    <!-- Reviews -->
    <div>
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        What Users Say
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              J
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">John Developer</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "This plugin saves me hours every week! The VS Code integration is
            seamless and the ideas are always creative."
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              E
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">Emily Designer</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Love the Notion integration! I can brainstorm ideas directly in my
            workspace. Absolutely essential tool!"
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              A
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">Alex Martinez</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "The API is well-documented and easy to integrate. Perfect for our
            team's workflow automation!"
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="bg-gray-800 rounded-2xl p-12 text-center border border-gray-700"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Boost Your Productivity?
      </h2>
      <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Download our plugin today and start generating amazing ideas right from
        your favorite tools!
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-lg transition-colors"
      >
        Download Now
      </NuxtLink>
    </div>

    <!-- FAQ Section -->
    <div class="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div class="space-y-4 max-w-3xl mx-auto">
        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            Is the plugin free to use?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            Yes! The basic version is completely free. We also offer a premium
            version with advanced features and unlimited generations for power
            users.
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            Which platforms are supported?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            Currently we support VS Code, Chrome, Firefox, Notion, Slack, and
            more. We're constantly adding new platform integrations based on
            user feedback.
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            How do I update the plugin?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            The plugin automatically checks for updates and notifies you when a
            new version is available. You can also manually check for updates in
            the plugin settings.
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            Can I use it offline?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            The plugin requires an internet connection to generate new ideas.
            However, previously generated ideas are cached locally and
            accessible offline.
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Plugin section component
</script>
