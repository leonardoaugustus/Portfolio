<template>
    <div class="relative inline-block text-left" v-click-outside="close">
        <!-- Botão para abrir o dropdown -->
        <button @click="toggle" type="button"
            class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
            id="language-menu" :aria-expanded="open.toString()" aria-haspopup="true">
            {{ currentLanguage }}
            <svg class="-mr-1 ml-2 h-5 w-5 transform transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="open ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'" />
            </svg>
        </button>

        <!-- Dropdown com transição -->
        <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150" leave-from-class="transform opacity-100 translate-y-0"
            leave-to-class="transform opacity-0 -translate-y-2">
            <div v-if="open"
                class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none z-50"
                role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
                <div class="py-1">
                    <a v-for="lang in languages" :key="lang" href="#" @click.prevent="selectLanguage(lang)"
                        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">
                        {{ lang }}
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "LanguageDropdown",
    data() {
        return {
            open: false,
            languages: ["English", "Português", "Español", "Français"],
            currentLanguage: "English",
        };
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
        },
        selectLanguage(lang) {
            this.currentLanguage = lang;
            this.close();
            // Aqui você pode adicionar a lógica para alterar a linguagem do site
        },
    },
    directives: {
        // Diretriz para fechar o dropdown ao clicar fora
        clickOutside: {
            mounted(el, binding) {
                el.clickOutsideEvent = function (event) {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value(event);
                    }
                };
                document.body.addEventListener("click", el.clickOutsideEvent);
            },
            unmounted(el) {
                document.body.removeEventListener("click", el.clickOutsideEvent);
            },
        },
    },
};
</script>

<style scoped>
/* Nenhum estilo adicional necessário – Tailwind CSS 4 já cobre o design */
</style>