<template>
  <!-- Mobile Hamburger Button & Dropdown Menu -->
  <div class="lg:hidden">
    <!-- Hamburger Button -->
    <button
      @click="toggleMobileMenu"
      class="fixed top-4 left-4 z-50 p-2.5 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
    >
      <svg
        :class="[
          'w-6 h-6 transition-transform duration-300',
          isMobileMenuOpen && 'rotate-90',
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="!isMobileMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-16 left-4 right-4 z-40 bg-gray-900/98 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto"
      >
        <!-- Navigation Links -->
        <div class="p-3 space-y-1">
          <NuxtLink
            to="/explore"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span class="font-medium">Explore</span>
          </NuxtLink>

          <NuxtLink
            to="/blog"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span class="font-medium">Blog</span>
          </NuxtLink>

          <NuxtLink
            to="/affiliate"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
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
            <span class="font-medium">Affiliate</span>
          </NuxtLink>

          <NuxtLink
            to="/plugin"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span class="font-medium">Plugin</span>
          </NuxtLink>

          <NuxtLink
            to="/saved"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <span class="font-medium">My Projects</span>
          </NuxtLink>

          <NuxtLink
            to="/notifications"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group"
            active-class="bg-gray-700 text-white"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
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
            <span class="font-medium">Notifications</span>
          </NuxtLink>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-700/50 mx-3"></div>

        <!-- Create & Profile -->
        <div class="p-3 space-y-2">
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-md"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Create New Idea</span>
          </NuxtLink>

          <NuxtLink
            v-if="isLoggedIn"
            to="/profile"
            @click="closeMobileMenu"
            class="flex items-center space-x-3 px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg transition-all"
          >
            <img
              :src="userProfile.avatar"
              :alt="userProfile.name"
              class="w-8 h-8 rounded-full ring-2 ring-green-500/60"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-white truncate">
                {{ userProfile.name }}
              </p>
              <p class="text-xs text-gray-400 truncate">Profile Settings</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <!-- Overlay for closing menu -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-30"
      @click="closeMobileMenu"
    ></div>
  </div>

  <!-- Desktop Sidebar -->
  <aside
    :class="[
      'fixed left-0 top-0 h-screen bg-gray-900/98 backdrop-blur-sm border-r border-gray-700/50 flex-col z-50 shadow-2xl transition-all duration-300',
      'hidden lg:flex',
      isExpanded ? 'lg:w-64' : 'lg:w-20',
    ]"
  >
    <!-- Logo & Toggle -->
    <div
      :class="[
        'border-b border-gray-700/50 flex-shrink-0 transition-all duration-300',
        isExpanded
          ? 'p-4 flex items-center justify-between'
          : 'py-4 px-3 flex flex-col items-center gap-3',
      ]"
    >
      <NuxtLink
        to="/"
        :class="[
          'group',
          isExpanded ? 'flex items-center space-x-3' : 'flex justify-center',
        ]"
      >
        <img
          src="/images/AI-idea-genarator.png"
          alt="AI Idea Generator"
          class="w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-110 object-cover shadow-md"
        />
        <span
          v-if="isExpanded"
          class="text-lg font-bold text-white whitespace-nowrap transition-opacity duration-300"
        >
          AI Idea
        </span>
      </NuxtLink>
      <button
        @click="toggleSidebar"
        :class="[
          'text-gray-400 hover:text-white transition-all hover:bg-gray-700/50 rounded-lg p-2',
          !isExpanded && 'w-full flex justify-center',
        ]"
        :title="isExpanded ? 'Collapse sidebar' : 'Expand sidebar'"
      >
        <svg
          :class="[
            'transition-all duration-300',
            isExpanded ? 'w-5 h-5' : 'w-5 h-5 rotate-180',
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </button>
    </div>

    <!-- Navigation Links at Top -->
    <nav class="overflow-y-auto py-4 custom-scrollbar flex-shrink-0">
      <ul
        :class="[
          'space-y-1 transition-all duration-300',
          isExpanded ? 'px-3' : 'px-2',
        ]"
      >
        <li>
          <NuxtLink
            to="/explore"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'Explore' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >Explore</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/blog"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'Blog' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >Blog</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/affiliate"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'Affiliate' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
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
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >Affiliate</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/plugin"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'Plugin' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >Plugin</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/saved"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'My Projects' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >My Projects</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/notifications"
            :class="[
              'flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all group',
              isExpanded ? 'space-x-3 px-3 py-2.5' : 'justify-center py-2.5',
            ]"
            active-class="bg-gray-700 text-white"
            :title="!isExpanded ? 'Notification' : ''"
          >
            <svg
              class="w-5 h-5 flex-shrink-0 transition-all"
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
            <span
              v-if="isExpanded"
              class="font-medium whitespace-nowrap transition-opacity duration-300"
              >Notification</span
            >
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Spacer to push bottom items down -->
    <div class="flex-1 min-h-0"></div>

    <!-- Create Button -->
    <div
      :class="[
        'flex-shrink-0 transition-all duration-300',
        isExpanded ? 'px-3 pb-2' : 'px-2 pb-2',
      ]"
    >
      <NuxtLink
        to="/"
        :class="[
          'w-full flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
          isExpanded
            ? 'space-x-2.5 px-4 py-3 rounded-xl'
            : 'justify-center py-3 rounded-lg',
        ]"
        :title="!isExpanded ? 'Create' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span
          v-if="isExpanded"
          class="whitespace-nowrap transition-opacity duration-300"
          >Create</span
        >
      </NuxtLink>
    </div>

    <!-- Upload Button -->
    <div
      :class="[
        'flex-shrink-0 transition-all duration-300',
        isExpanded ? 'px-3 pb-3' : 'px-2 pb-3',
      ]"
    >
      <a
        href="#"
        :class="[
          'w-full flex items-center text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-all',
          isExpanded ? 'space-x-2.5 px-4 py-2.5' : 'justify-center py-2.5',
        ]"
        :title="!isExpanded ? 'Upload' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span
          v-if="isExpanded"
          class="font-medium whitespace-nowrap transition-opacity duration-300"
          >Upload</span
        >
      </a>
    </div>

    <!-- User Profile Section (when logged in) -->
    <div
      v-if="isLoggedIn"
      :class="[
        'flex-shrink-0 border-t border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 transition-all duration-300',
        isExpanded ? 'px-3 py-3' : 'px-2 py-3',
      ]"
    >
      <NuxtLink
        to="/profile"
        :class="[
          'flex items-center transition-all duration-300 rounded-xl bg-gray-800/40 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-900/20 hover:to-gray-800/60 cursor-pointer group border border-gray-700/30 hover:border-green-500/30',
          isExpanded ? 'space-x-3 p-3' : 'justify-center p-3',
        ]"
        :title="!isExpanded ? userProfile.name : ''"
      >
        <div class="relative flex-shrink-0">
          <div
            class="absolute inset-0 bg-green-500/20 rounded-full blur-md group-hover:bg-green-400/30 transition-all"
          ></div>
          <img
            :src="userProfile.avatar"
            :alt="userProfile.name"
            class="relative w-10 h-10 rounded-full object-cover ring-2 ring-green-500/60 transition-all duration-300 group-hover:ring-green-400 group-hover:scale-105"
          />
          <div
            class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-gray-900 transition-all group-hover:bg-green-400 group-hover:scale-110 shadow-lg shadow-green-500/50"
          ></div>
        </div>
        <div
          v-if="isExpanded"
          class="flex-1 min-w-0 transition-opacity duration-300"
        >
          <p
            class="text-sm font-bold text-white truncate group-hover:text-green-400 transition-colors"
          >
            {{ userProfile.name }}
          </p>
          <p class="text-xs text-gray-400 truncate mt-0.5">
            {{ userProfile.email }}
          </p>
        </div>
        <svg
          v-if="isExpanded"
          class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-green-400 transition-all group-hover:rotate-90"
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
      </NuxtLink>
    </div>

    <!-- Sign In Button (when not logged in) -->
    <div
      v-else
      :class="[
        'flex-shrink-0 border-t border-gray-700/50 transition-all duration-300',
        isExpanded ? 'px-3 py-3' : 'px-2 py-3',
      ]"
    >
      <NuxtLink
        to="/login"
        :class="[
          'w-full flex items-center text-gray-300 hover:text-white bg-gray-800/30 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-gray-800/60 rounded-xl transition-all border border-gray-700/30 hover:border-blue-500/30',
          isExpanded ? 'space-x-3 px-4 py-3' : 'justify-center py-3',
        ]"
        :title="!isExpanded ? 'Sign In' : ''"
      >
        <svg
          class="w-5 h-5 flex-shrink-0 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        <span
          v-if="isExpanded"
          class="font-semibold whitespace-nowrap transition-opacity duration-300"
        >
          Sign In
        </span>
      </NuxtLink>
    </div>

    <!-- Bottom Section with Social Links - Absolute Bottom -->
    <div class="border-t border-gray-700/50 py-3 mt-auto flex-shrink-0">
      <div
        :class="[
          'flex items-center text-gray-400',
          isExpanded ? 'justify-center gap-4' : 'flex-col gap-3',
        ]"
      >
        <a
          href="#"
          class="hover:text-white transition-all duration-200 hover:scale-110 p-1 rounded hover:bg-gray-700/30"
          title="Twitter"
        >
          <svg
            :class="['transition-all', isExpanded ? 'w-5 h-5' : 'w-5 h-5']"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="hover:text-white transition-all duration-200 hover:scale-110 p-1 rounded hover:bg-gray-700/30"
          title="Discord"
        >
          <svg
            :class="['transition-all', isExpanded ? 'w-5 h-5' : 'w-5 h-5']"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
        </a>
        <button
          v-if="isExpanded"
          class="hover:text-white transition-all duration-200 text-xs font-medium hover:scale-105 px-2 py-1 rounded hover:bg-gray-700/30"
        >
          Legal ▾
        </button>
        <a
          v-else
          href="#"
          class="hover:text-white transition-all duration-200 hover:scale-110 p-1 rounded hover:bg-gray-700/30"
          title="Legal"
        >
          <svg
            class="w-5 h-5 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Sidebar collapse/expand state (desktop only)
const isExpanded = ref(true);

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle sidebar function (desktop)
const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu (when clicking links or overlay)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// User authentication state (demo data - replace with actual auth)
const isLoggedIn = ref(true); // Change to false to show Sign In button

// User profile data (replace with actual user data from auth service)
const userProfile = ref({
  name: "Mahmudul Hasan",
  email: "dev.mahmudulhasan2@gmail.com",
  avatar:
    "https://ui-avatars.com/api/?name=Mahmudul+Hasan&background=6366f1&color=fff&size=128",
});

// You can integrate with your auth system like this:
// const { user, isAuthenticated } = useAuth()
// const isLoggedIn = computed(() => isAuthenticated.value)
// const userProfile = computed(() => user.value)
</script>

<style scoped>
/* Custom scrollbar for navigation */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}
</style>
