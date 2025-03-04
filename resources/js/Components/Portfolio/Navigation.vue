<template>
  <header class="bg-white dark:bg-gray-900">


    <nav class="mx-auto w-full flex items-center justify-between px-4 pb-3 pt-8 lg:px-0 container" aria-label="Global">
      <div class="flex lg:flex-1">
        <!-- <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a> -->

        <a class="" href="index.html">
          <img class="h-10" src="https://folio.webestica.com/assets/images/logo.svg" alt="logo">
          <!-- <img class="dark-mode-item navbar-brand-item" src="https://folio.webestica.com/assets/images/logo.svg" alt="logo"> -->
        </a>
      </div>

      <div class="flex lg:hidden">
        <ThemeToggle class="mr-2" />
        <Language />
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Blog</a>
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Cases</a>
        <a href="#" class="text-md text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contato</a>
      </PopoverGroup>


      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeToggle class="mr-2" />
        <Language />
      </div>
    </nav>

    <!-- Layout MOBILE (<= md) -->
    <div class="md:hidden border-b border-[#ccc] dark:border-gray-700 mx-5">
      <!-- Linha superior: Logo + Language -->

      <!-- Linha inferior: Menu de navegação -->
      <div class="flex items-center justify-evenly border-t border-[#ccc] dark:border-gray-700 py-2">
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Blog</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Resources</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Speaking</a>
        <a href="#" class="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About me</a>
      </div>
    </div>

  </header>
</template>

<script setup>
import {
  PopoverGroup,
} from '@headlessui/vue'
import Language from '@/Components/Portfolio/Language.vue'
import ThemeToggle from '@/Components/Portfolio/ThemeToggle.vue'
</script>