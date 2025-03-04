<template>
  <footer class="bg-white dark:bg-gray-900 text-neutral-300">
    <!-- Thin horizontal line at the top -->
    <div class="border-t border-neutral-700 dark:border-neutral-600"></div>
    <!-- Footer content -->
    <div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
      <!-- Left side: Nav links -->
      <nav class="space-x-4">
        <a href="#" class="hover:text-white transition">Home</a>
        <a href="#" class="hover:text-white transition">Projects</a>
        <a href="#" class="hover:text-white transition">Contact</a>
        <a href="#" class="hover:text-white transition">Blogs</a>
      </nav>

      <!-- Right side: Dark mode toggle + copyright -->
      <div class="flex items-center space-x-6">
        <!-- Theme toggle -->
        <ThemeToggle />

        <!-- Copyright -->
        <span class="text-sm dark:text-gray-400">
          © 2025 Johnny JadeShaman
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ThemeToggle from '@/Components/Portfolio/ThemeToggle.vue'
</script>

<style scoped>
/* Optionally adjust or override styles here */
</style>
