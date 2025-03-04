<template>


<footer class="bg-white shadow-sm dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-1 rtl:space-x-reverse">
                <img class="p-0 " :src="logo" alt="Logo" width="85">
                <span class=" text-3xl font-black whitespace-nowrap hover:text-teal-100 text-white">Unitbox</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Cases</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About Me</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script setup>
import logo from '@images/logo_2.png'
</script>

<style scoped>
/* Optionally adjust or override styles here */
</style>
