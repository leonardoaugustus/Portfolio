<template>
  <button
    @click="toggleTheme"
    class="inline-flex justify-center rounded-md px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none"
  >
    <component :is="isDark ? SunIcon : MoonIcon" class="w-5 h-5 text-gray-900 dark:text-white" />
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/20/solid'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

watch(isDark, () => {
  updateTheme()
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })
})
</script>

<style>
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
