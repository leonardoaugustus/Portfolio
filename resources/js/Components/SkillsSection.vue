<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="card in cards"
      :key="card.id"
      :class="['group rounded-2xl p-6 border border-black dark:border-white transition-colors duration-300', card.hoverBgClass]"
    >
      <!-- Ícone no círculo -->
      <div :class="['border-2 border-orange-50 rounded-full w-12 h-12 flex items-center justify-center', card.bgClass]">
        <!-- Componente dinâmico para renderizar o ícone -->
        <component :is="card.icon" class="w-6 h-6 text-white" />
      </div>
      <!-- Título -->
      <h3 class="mt-4 mb-2 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white">
        {{ card.title }}
      </h3>
      <!-- Descrição -->
      <p class="mb-4 text-gray-700 dark:text-white group-hover:text-white">
        {{ card.description }}
      </p>
      <!-- Link -->
      <a :href="card.link" class="inline-flex items-center font-semibold text-black dark:text-white group-hover:text-white">
        View projects
        <ArrowRightIcon class="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon, CloudArrowUpIcon, GlobeAltIcon } from '@heroicons/vue/20/solid'

// Array de cards com suas respectivas propriedades
const cards = [
  {
    id: 1,
    title: "Web application development",
    description:
      "Building robust and scalable web applications tailored to your business processes.",
    link: "#",
    icon: GlobeAltIcon,
    bgClass: "bg-blue-600",
    hoverBgClass: "hover:bg-blue-600",
  },
  {
    id: 2,
    title: "UI/UX design",
    description:
      "I focus on creating interfaces that are both visually appealing and easy to use.",
    link: "#",
    icon: CloudArrowUpIcon,
    bgClass: "bg-orange-400",
    hoverBgClass: "hover:bg-orange-400",
  },
  {
    id: 3,
    title: "Web maintenance & support",
    description:
      "From regular updates to troubleshooting and security checks.",
    link: "#",
    icon: CloudArrowUpIcon,
    bgClass: "bg-green-400",
    hoverBgClass: "hover:bg-green-400",
  },
  {
    id: 4,
    title: "E-commerce solutions",
    description:
      "Powerful e-commerce platforms that drive sales and enhance the shopping experience.",
    link: "#",
    icon: CloudArrowUpIcon,
    bgClass: "bg-purple-400",
    hoverBgClass: "hover:bg-purple-400",
  },
]
</script>
