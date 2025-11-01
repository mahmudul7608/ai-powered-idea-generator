<template>
  <div v-if="currentIdea" class="space-y-6">
    <!-- Header with title and actions -->
    <IdeaHeader
      :idea="currentIdea"
      @save="handleSave"
      @share="handleShare"
      @copy="handleCopy"
    />

    <!-- Features -->
    <FeaturesSection :features="currentIdea.features" />

    <!-- Tech Stack -->
    <TechStackSection :tech-stack="currentIdea.techStack" />

    <!-- Roadmap -->
    <RoadmapSection :roadmap="currentIdea.roadmap" />

    <!-- UI Layout -->
    <UILayoutSection :ui-layout="currentIdea.uiLayout" />

    <!-- Action buttons -->
    <div class="flex gap-4 justify-center py-8">
      <NuxtLink to="/" class="btn-secondary">
        ← Generate Another Idea
      </NuxtLink>
      <NuxtLink to="/saved" class="btn-primary">
        View All Saved Ideas →
      </NuxtLink>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <div class="text-6xl mb-4">🤔</div>
    <h2 class="text-2xl font-bold text-gray-900 mb-4">No Idea Generated Yet</h2>
    <p class="text-gray-600 mb-6">
      Start by generating a project idea from the home page
    </p>
    <NuxtLink to="/" class="btn-primary"> ← Back to Home </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { currentIdea, saveIdea, getShareUrl } = useProjectIdeas();

useHead({
  title: "Generated Idea",
  meta: [{ name: "description", content: "Your AI-generated project idea" }],
});

const handleSave = () => {
  if (currentIdea.value) {
    saveIdea(currentIdea.value);

    if (process.client) {
      alert("💾 Idea saved successfully!");
    }
  }
};

const handleShare = () => {
  if (currentIdea.value && process.client) {
    const shareUrl = getShareUrl(currentIdea.value.id);
    navigator.clipboard.writeText(shareUrl);
    alert("🔗 Share link copied to clipboard!");
  }
};

const handleCopy = () => {
  if (currentIdea.value && process.client) {
    const text = `
${currentIdea.value.title}
${currentIdea.value.summary}

${currentIdea.value.description}

Features:
${currentIdea.value.features.map((f, i) => `${i + 1}. ${f}`).join("\n")}

Tech Stack:
Frontend: ${currentIdea.value.techStack.frontend.join(", ")}
Backend: ${currentIdea.value.techStack.backend.join(", ")}
Database: ${currentIdea.value.techStack.database.join(", ")}
    `.trim();

    navigator.clipboard.writeText(text);
    alert("📋 Idea copied to clipboard!");
  }
};
</script>
