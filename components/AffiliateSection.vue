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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Join Our Affiliate Program
      </h1>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Earn rewards by sharing AI Idea Generator with your network. Help others
        discover innovative project ideas!
      </p>
      <NuxtLink
        to="/affiliate-signup"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Become an Affiliate
      </NuxtLink>
    </div>

    <!-- Benefits Grid -->
    <div>
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        Why Join Our Program?
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">High Commission</h3>
          <p class="text-gray-400 leading-relaxed">
            Earn up to 30% commission on every referral. The more you share, the
            more you earn!
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Real-Time Tracking</h3>
          <p class="text-gray-400 leading-relaxed">
            Monitor your earnings and referrals with our intuitive dashboard.
            Complete transparency!
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
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Exclusive Perks</h3>
          <p class="text-gray-400 leading-relaxed">
            Get access to premium features, early updates, and special bonuses
            for top performers!
          </p>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div class="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
      <h2 class="text-3xl font-bold text-white mb-10 text-center">
        How It Works
      </h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            1
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Sign Up</h3>
          <p class="text-gray-400 text-sm">
            Create your free affiliate account in seconds
          </p>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            2
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Get Your Link</h3>
          <p class="text-gray-400 text-sm">
            Receive unique tracking link instantly
          </p>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            3
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Share & Promote</h3>
          <p class="text-gray-400 text-sm">
            Share on social media, blogs, or websites
          </p>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-xl text-white text-xl font-bold mb-4"
          >
            4
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Earn Money</h3>
          <p class="text-gray-400 text-sm">
            Get paid monthly via your preferred method
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid md:grid-cols-4 gap-6">
      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">5000+</div>
        <div class="text-sm text-gray-400">Active Affiliates</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">$50K+</div>
        <div class="text-sm text-gray-400">Paid Out</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">30%</div>
        <div class="text-sm text-gray-400">Commission Rate</div>
      </div>

      <div
        class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
      >
        <div class="text-4xl font-bold text-white mb-2">24/7</div>
        <div class="text-sm text-gray-400">Support Available</div>
      </div>
    </div>

    <!-- Testimonials -->
    <div>
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        What Our Affiliates Say
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              S
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">Sarah Johnson</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Best affiliate program I've joined! Easy to promote and great
            commissions. Highly recommend!"
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              M
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">Mike Chen</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Earned $2,000 in my first month! The dashboard is super
            user-friendly and payments are always on time."
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold"
            >
              L
            </div>
            <div class="ml-3">
              <h4 class="text-white font-semibold">Lisa Anderson</h4>
              <div class="text-yellow-500 text-sm">★★★★★</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Amazing support team and transparent tracking. This platform truly
            values its affiliates!"
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="bg-gray-800 rounded-2xl p-12 text-center border border-gray-700"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Start Earning?
      </h2>
      <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Join thousands of successful affiliates and start your journey today. No
        experience required!
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-lg transition-colors"
      >
        Get Started Now
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
            How do I get paid?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            We offer multiple payment methods including PayPal, bank transfer,
            and cryptocurrency. Payments are processed monthly, and the minimum
            payout is $50.
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            What is the commission structure?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            You earn 30% commission on all referred sales for the first year,
            and 20% recurring commission for subsequent years. Top performers
            can unlock even higher rates!
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            Do I need a website to join?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            No! While having a website or blog helps, you can promote through
            social media, email, YouTube, or any other channel you prefer.
          </p>
        </details>

        <details
          class="group bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-pointer"
        >
          <summary
            class="font-semibold text-white text-lg flex items-center justify-between cursor-pointer"
          >
            Is there any cost to join?
            <span
              class="text-2xl text-gray-400 group-open:rotate-45 transition-transform"
              >+</span
            >
          </summary>
          <p class="text-gray-400 mt-4 leading-relaxed">
            Absolutely free! There are no signup fees, monthly fees, or hidden
            charges. You only earn when you make successful referrals.
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Affiliate section component
</script>
