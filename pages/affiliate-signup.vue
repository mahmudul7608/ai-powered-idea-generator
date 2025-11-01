<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4">
    <div class="w-full max-w-2xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 rounded-2xl mb-4"
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
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">
          Join Our Affiliate Program
        </h1>
        <p class="text-gray-400 text-lg">
          Start earning commission by promoting AI Idea Generator
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Full Name -->
          <div>
            <label
              for="fullName"
              class="block text-sm font-semibold text-white mb-2"
            >
              Full Name *
            </label>
            <input
              v-model="formData.fullName"
              type="text"
              id="fullName"
              required
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-semibold text-white mb-2"
            >
              Email Address *
            </label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-semibold text-white mb-2"
            >
              Password *
            </label>
            <input
              v-model="formData.password"
              type="password"
              id="password"
              required
              minlength="8"
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Minimum 8 characters"
            />
          </div>

          <!-- Website/Social Media -->
          <div>
            <label
              for="website"
              class="block text-sm font-semibold text-white mb-2"
            >
              Website or Social Media URL
            </label>
            <input
              v-model="formData.website"
              type="url"
              id="website"
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <!-- How will you promote -->
          <div>
            <label
              for="promotion"
              class="block text-sm font-semibold text-white mb-2"
            >
              How will you promote us? *
            </label>
            <select
              v-model="formData.promotionMethod"
              id="promotion"
              required
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer"
            >
              <option value="">Select a method</option>
              <option value="blog">Blog / Content Writing</option>
              <option value="social">Social Media</option>
              <option value="youtube">YouTube / Video Content</option>
              <option value="email">Email Marketing</option>
              <option value="paid">Paid Advertising</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Audience Size -->
          <div>
            <label
              for="audience"
              class="block text-sm font-semibold text-white mb-2"
            >
              Estimated Monthly Audience Size
            </label>
            <select
              v-model="formData.audienceSize"
              id="audience"
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer"
            >
              <option value="">Select range</option>
              <option value="0-1k">0 - 1,000</option>
              <option value="1k-10k">1,000 - 10,000</option>
              <option value="10k-50k">10,000 - 50,000</option>
              <option value="50k-100k">50,000 - 100,000</option>
              <option value="100k+">100,000+</option>
            </select>
          </div>

          <!-- Additional Info -->
          <div>
            <label
              for="additionalInfo"
              class="block text-sm font-semibold text-white mb-2"
            >
              Tell us more about yourself (Optional)
            </label>
            <textarea
              v-model="formData.additionalInfo"
              id="additionalInfo"
              rows="4"
              class="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
              placeholder="Share your experience, niche, or any relevant information..."
            ></textarea>
          </div>

          <!-- Terms and Conditions -->
          <div class="flex items-start">
            <input
              v-model="formData.acceptTerms"
              type="checkbox"
              id="terms"
              required
              class="w-5 h-5 mt-0.5 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-indigo-500 text-indigo-600 cursor-pointer"
            />
            <label for="terms" class="ml-3 text-sm text-gray-400">
              I agree to the
              <a
                href="#"
                class="text-indigo-500 hover:text-indigo-400 transition-colors"
                >Terms & Conditions</a
              >
              and
              <a
                href="#"
                class="text-indigo-500 hover:text-indigo-400 transition-colors"
                >Privacy Policy</a
              >
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <span v-if="isSubmitting">Creating Account...</span>
            <span v-else>Create Affiliate Account</span>
          </button>

          <!-- Already have account -->
          <div class="text-center pt-4">
            <p class="text-gray-400 text-sm">
              Already have an account?
              <NuxtLink
                to="/login"
                class="text-indigo-500 hover:text-indigo-400 font-semibold transition-colors"
              >
                Sign in
              </NuxtLink>
            </p>
          </div>
        </form>
      </div>

      <!-- Benefits Summary -->
      <div class="mt-8 grid md:grid-cols-3 gap-4">
        <div
          class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 text-center"
        >
          <div class="text-2xl font-bold text-indigo-500 mb-1">30%</div>
          <div class="text-xs text-gray-400">Commission Rate</div>
        </div>
        <div
          class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 text-center"
        >
          <div class="text-2xl font-bold text-indigo-500 mb-1">$50</div>
          <div class="text-xs text-gray-400">Minimum Payout</div>
        </div>
        <div
          class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 text-center"
        >
          <div class="text-2xl font-bold text-indigo-500 mb-1">24/7</div>
          <div class="text-xs text-gray-400">Support Available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

useHead({
  title: "Affiliate Signup - AI Idea Generator",
  meta: [
    {
      name: "description",
      content:
        "Join our affiliate program and start earning commission by promoting AI Idea Generator.",
    },
  ],
});

const formData = ref({
  fullName: "",
  email: "",
  password: "",
  website: "",
  promotionMethod: "",
  audienceSize: "",
  additionalInfo: "",
  acceptTerms: false,
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Here you would normally send the data to your backend
  console.log("Form submitted:", formData.value);

  // Show success message (you can add a toast notification here)
  alert(
    "Success! Your affiliate account has been created. Check your email for the next steps."
  );

  // Redirect to login or dashboard
  router.push("/login");

  isSubmitting.value = false;
};
</script>
