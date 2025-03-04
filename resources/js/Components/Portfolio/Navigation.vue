<template>
  <!-- <header class=" bg-gray-100 dark:bg-gray-900 dark:bg-gradient-to-b dark:from-black"> -->
  <header class="bg-gradient-to-b from-white to-gray-100 bg-white dark:bg-gray-900 dark:bg-gradient-to-b dark:from-black">
    <nav class="mx-auto w-full flex items-center justify-between px-3 pb-1 pt-3 lg:px-0 container" aria-label="Global">
      <div class="flex lg:flex-1">
        <a class="" href="#">
          <img class="p-0 " :src="logo" alt="Logo" width="85">
        </a>
      </div>

      <div class="flex lg:hidden">
        <ThemeToggle class="mr-2" />
        <Language />
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a>
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Cases</a>
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About me</a>
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeToggle class="mr-2" />
        <Language />
      </div>
    </nav>

    <!-- Layout MOBILE (<= md) -->
    <div class="md:hidden border-b border-[#ccc] dark:border-gray-700 mx-5">
      <div class="flex items-center justify-evenly border-t border-[#ccc] dark:border-gray-700 py-2">
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Cases</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About me</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { PopoverGroup } from '@headlessui/vue'
import Language from '@/Components/Portfolio/Language.vue'
import ThemeToggle from '@/Components/Portfolio/ThemeToggle.vue'
import logo from '@images/logo_2.png'
</script>
