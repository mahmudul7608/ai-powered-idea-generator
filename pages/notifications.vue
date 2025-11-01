<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
          Notifications
        </h1>
        <p class="text-gray-400">
          {{ unreadCount }} unread • {{ notifications.length }} total
        </p>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button
          v-if="unreadCount > 0"
          @click="markAllAsRead"
          class="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 rounded-lg transition-colors text-sm font-medium"
        >
          Mark all as read
        </button>
        <button
          @click="clearAll"
          class="px-4 py-2.5 bg-gray-800 hover:bg-red-600/20 text-gray-300 hover:text-red-400 border border-gray-700 hover:border-red-500/50 rounded-lg transition-all text-sm font-medium"
        >
          Clear all
        </button>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="selectedFilter = filter.id"
        :class="[
          'px-5 py-2 rounded-lg font-medium transition-all text-sm',
          selectedFilter === filter.id
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700',
        ]"
      >
        {{ filter.name }}
        <span
          v-if="filter.count > 0"
          :class="[
            'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold',
            selectedFilter === filter.id
              ? 'bg-white/20 text-white'
              : 'bg-gray-700 text-gray-400',
          ]"
        >
          {{ filter.count }}
        </span>
      </button>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredNotifications.length === 0"
      class="flex flex-col items-center justify-center py-20"
    >
      <div
        class="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          class="w-12 h-12 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">No notifications</h3>
      <p class="text-gray-400 text-center max-w-md">
        You're all caught up! Check back later for new updates.
      </p>
    </div>

    <!-- Notifications List -->
    <div v-else class="space-y-3">
      <div
        v-for="notification in filteredNotifications"
        :key="notification.id"
        :class="[
          'group bg-gray-800/50 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden',
          notification.read
            ? 'border-gray-700/50 hover:border-gray-600/50'
            : 'border-indigo-500/30 hover:border-indigo-500/50 bg-indigo-500/5',
        ]"
      >
        <div class="flex items-start gap-4 p-5">
          <!-- Icon -->
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
              getNotificationStyle(notification.type).bg,
            ]"
          >
            <svg
              v-if="notification.type === 'success'"
              :class="['w-6 h-6', getNotificationStyle(notification.type).text]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-else-if="notification.type === 'info'"
              :class="['w-6 h-6', getNotificationStyle(notification.type).text]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-else-if="notification.type === 'warning'"
              :class="['w-6 h-6', getNotificationStyle(notification.type).text]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <svg
              v-else-if="notification.type === 'achievement'"
              :class="['w-6 h-6', getNotificationStyle(notification.type).text]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <svg
              v-else-if="notification.type === 'update'"
              :class="['w-6 h-6', getNotificationStyle(notification.type).text]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4 mb-2">
              <h3
                :class="[
                  'text-base font-semibold',
                  notification.read ? 'text-gray-300' : 'text-white',
                ]"
              >
                {{ notification.title }}
              </h3>
              <span class="text-xs text-gray-500 whitespace-nowrap">
                {{ formatTime(notification.time) }}
              </span>
            </div>
            <p class="text-sm text-gray-400 mb-3">
              {{ notification.message }}
            </p>

            <!-- Actions -->
            <div class="flex items-center gap-3">
              <button
                v-if="!notification.read"
                @click="markAsRead(notification.id)"
                class="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Mark as read
              </button>
              <button
                @click="deleteNotification(notification.id)"
                class="text-xs font-medium text-gray-500 hover:text-red-400 transition-colors"
              >
                Delete
              </button>
              <button
                v-if="notification.link"
                class="text-xs font-medium text-gray-500 hover:text-white transition-colors"
              >
                View details →
              </button>
            </div>
          </div>

          <!-- Unread Indicator -->
          <div
            v-if="!notification.read"
            class="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 mt-2"
          ></div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div
      v-if="filteredNotifications.length > 0 && hasMore"
      class="text-center pt-4"
    >
      <button
        @click="loadMore"
        class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Notifications - AI Idea Generator",
  meta: [
    {
      name: "description",
      content: "View and manage your notifications.",
    },
  ],
});

// Filters
const filters = computed(() => [
  { id: "all", name: "All", count: notifications.value.length },
  {
    id: "unread",
    name: "Unread",
    count: notifications.value.filter((n) => !n.read).length,
  },
  {
    id: "read",
    name: "Read",
    count: notifications.value.filter((n) => n.read).length,
  },
]);

const selectedFilter = ref("all");
const hasMore = ref(false);

// Sample notifications data
const notifications = ref([
  {
    id: 1,
    type: "success",
    title: "Idea Generated Successfully",
    message:
      "Your new project idea 'E-commerce Platform' has been generated and saved to your projects.",
    time: new Date(Date.now() - 5 * 60000).toISOString(),
    read: false,
    link: "/saved",
  },
  {
    id: 2,
    type: "info",
    title: "New Feature Available",
    message:
      "We've added export functionality! You can now export your ideas as PDF or JSON.",
    time: new Date(Date.now() - 2 * 3600000).toISOString(),
    read: false,
  },
  {
    id: 3,
    type: "achievement",
    title: "Milestone Reached! 🎉",
    message: "Congratulations! You've generated 10 project ideas.",
    time: new Date(Date.now() - 5 * 3600000).toISOString(),
    read: true,
  },
  {
    id: 4,
    type: "update",
    title: "Tech Stack Updated",
    message:
      "We've updated our recommended tech stacks with the latest frameworks and libraries.",
    time: new Date(Date.now() - 86400000).toISOString(),
    read: true,
  },
  {
    id: 5,
    type: "warning",
    title: "Storage Almost Full",
    message:
      "You have used 80% of your free storage. Consider upgrading or deleting old projects.",
    time: new Date(Date.now() - 2 * 86400000).toISOString(),
    read: true,
  },
  {
    id: 6,
    type: "info",
    title: "Weekly Summary Ready",
    message:
      "Your weekly activity summary is ready. You generated 5 ideas this week!",
    time: new Date(Date.now() - 3 * 86400000).toISOString(),
    read: true,
  },
]);

// Computed
const unreadCount = computed(
  () => notifications.value.filter((n) => !n.read).length
);

const filteredNotifications = computed(() => {
  if (selectedFilter.value === "all") return notifications.value;
  if (selectedFilter.value === "unread")
    return notifications.value.filter((n) => !n.read);
  if (selectedFilter.value === "read")
    return notifications.value.filter((n) => n.read);
  return notifications.value;
});

// Methods
const markAsRead = (id: number) => {
  const notification = notifications.value.find((n) => n.id === id);
  if (notification) notification.read = true;
};

const markAllAsRead = () => {
  notifications.value.forEach((n) => (n.read = true));
};

const deleteNotification = (id: number) => {
  const index = notifications.value.findIndex((n) => n.id === id);
  if (index > -1) notifications.value.splice(index, 1);
};

const clearAll = () => {
  if (
    confirm(
      "Are you sure you want to clear all notifications? This action cannot be undone."
    )
  ) {
    notifications.value = [];
  }
};

const loadMore = () => {
  // Implement load more logic
  console.log("Load more notifications");
};

const formatTime = (timeString: string) => {
  const date = new Date(timeString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

const getNotificationStyle = (type: string) => {
  const styles = {
    success: { bg: "bg-green-500/10", text: "text-green-500" },
    info: { bg: "bg-blue-500/10", text: "text-blue-500" },
    warning: { bg: "bg-yellow-500/10", text: "text-yellow-500" },
    error: { bg: "bg-red-500/10", text: "text-red-500" },
    achievement: { bg: "bg-purple-500/10", text: "text-purple-500" },
    update: { bg: "bg-indigo-500/10", text: "text-indigo-500" },
  };
  return styles[type] || styles.info;
};
</script>
