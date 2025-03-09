<template>
    <div class="relative inline-block text-left">
        <!-- Botão para abrir o dropdown -->
        <button @click="toggle" type="button"
            class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none">
            {{ displayLanguage }}
            <svg class="-mr-1 ml-2 h-5 w-5 transform transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="open ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'" />
            </svg>
        </button>

        <!-- Dropdown -->
        <div v-if="open"
            class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none z-50">
            <div class="py-1">
                <a href="#" @click.prevent="switchLanguage('en')"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    English
                </a>
                <a href="#" @click.prevent="switchLanguage('pt_BR')"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Português
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';

// Receber o locale atual como prop
const props = defineProps({
    currentLocale: {
        type: String,
        default: 'en'
    }
});

const open = ref(false);

// Exibir o idioma atual
const displayLanguage = computed(() => {
    const langMap = {
        "en": "English",
        "pt_BR": "Português"
    };
    return langMap[props.currentLocale] || "English";
});

function toggle(event) {
    event.stopPropagation(); // Impede que o clique no botão feche o dropdown
    open.value = !open.value;
}

function switchLanguage(locale) {
    router.visit(`/language/${locale}`, {
        preserveScroll: true,
        onSuccess: () => {
            open.value = false;
        }
    });
}

// Fechar o dropdown ao clicar fora
function handleClickOutside(event) {
    if (!event.target.closest('.relative')) {
        open.value = false;
    }
}

// Adicionar e remover o evento de clique ao montar e desmontar o componente
onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});

import { onMounted, onBeforeUnmount } from 'vue';
</script>
