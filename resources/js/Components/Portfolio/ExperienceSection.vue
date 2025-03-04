<template>
  <section class="p-4 pb-20">
    <div class="w-full max-w-7xl mx-auto">
      <!-- Título e Botões -->
      <div class="pb-8 flex justify-between items-center gap-8">
        <h1 class="mt-2 tracking-tight text-pretty text-gray-900 dark:text-white text-5xl lg:text-5xl font-mono font-black">
          Projects
        </h1>
        <!-- Botões (visíveis em telas md+) -->
        <div class="hidden md:flex gap-6 text-2xl">
          <a href="#">
            <i class="flex items-center justify-center text-black dark:text-white border border-black dark:border-white rounded-full p-2 bi bi-arrow-left"></i>
          </a>
          <a href="#">
            <i class="flex items-center justify-center text-black dark:text-white border border-black dark:border-white rounded-full p-2 bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- Grid de Cards: 2 colunas em celular, 3 em desktop -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <a href="#" class="flex flex-col gap-2 hover:scale-105 transition-all duration-300">
          <div class="relative group overflow-hidden rounded-xl shadow-xl dark:shadow-gray-800 max-h-[300px] md:max-h-[500px]">
            <!-- Ícone "ir para link" -->
            <ArrowUpRightIcon
              class="w-8 h-8 absolute top-4 right-4 flex items-center justify-center text-white bg-black dark:bg-white dark:text-black rounded-full p-2" />
            <!-- Imagem -->
            <img class="w-full"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60"
              alt="Fashion 1" />
            <!-- Overlay oculto (transform scale-y) -->
            <div
              class="rounded-xl absolute inset-x-0 bottom-0 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden p-4 text-gray-900 dark:text-white flex flex-col justify-center text-center transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out">
              <span class="text-xs uppercase">Technology</span>
              <h4 class="font-bold text-lg">New collection</h4>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor y etlerim dolor gils de nada!
              </p>
            </div>
          </div>
        </a>

        <!-- Card 2 -->
        <a href="#" class="flex flex-col gap-2 hover:scale-105 transition-all duration-300">
          <div class="relative group overflow-hidden rounded-xl shadow-xl dark:shadow-gray-800 max-h-[300px] md:max-h-[500px]">
            <ArrowUpRightIcon
              class="w-8 h-8 absolute top-4 right-4 flex items-center justify-center text-white bg-black dark:bg-white dark:text-black rounded-full p-2" />
            <!-- Imagem -->
            <img class="w-full"
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60"
              alt="Fashion 2" />
            <div
              class="absolute inset-x-0 bottom-0 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden p-4 text-gray-900 dark:text-white flex flex-col justify-center text-center transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out">
              <span class="text-xs uppercase">Sale</span>
              <h4 class="font-bold text-lg">Sales</h4>
              <p class="text-sm">
                Exclusive discounts available with additional text that may be longer.
              </p>
            </div>
          </div>
        </a>

        <!-- Card 3 -->
        <a href="#" class="flex flex-col gap-2 hover:scale-105 transition-all duration-300">
          <div class="relative group overflow-hidden rounded-xl shadow-xl dark:shadow-gray-800 max-h-[300px] md:max-h-[500px]">
            <i
              class="absolute top-4 right-4 flex items-center justify-center text-white bg-black dark:bg-white dark:text-black rounded-full p-2 bi bi-arrow-up-right"></i>
            <!-- Imagem -->
            <img class="w-full"
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&auto=format&fit=crop&q=60"
              alt="Fashion 3" />
            <div
              class="absolute inset-x-0 bottom-0 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden p-4 text-gray-900 dark:text-white flex flex-col justify-center text-center transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out">
              <span class="text-xs uppercase">Classics</span>
              <h4 class="font-bold text-lg">Timeless fashion</h4>
              <p class="text-sm">
                Pieces that never go out of style even when more descriptive text is added.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/20/solid'
</script>
