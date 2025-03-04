  <template>
    <div class="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-10 sm:py-32 lg:overflow-visible lg:px-0">

  

      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-1">
          <div class="lg:pr-4">
            <div class="lg:max-w-xl">
              <h5 class="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl font-mono">
                <span class="hand-wave-animate">👋</span> Hello, I'm
              </h5>
              <h1 class="mt-2 tracking-tight text-pretty text-gray-900 dark:text-white text-5xl lg:text-7xl font-mono font-extrabold">
                Leonardo

                <span class="to-blue-400">Augusto</span>
              </h1>

              <p class="mt-6 text-xl/8 text-gray-700 dark:text-gray-300 font-mono">I am a self-taught web Developer from the USA.
                Currently,
                I am a freelancer and collaborating with small companies and agencies. I deal with UI design / Front-end
                development and Bootstrap Development.</p>

              <a href="https://wa.me/141552388867"
                class="mt-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-3 rounded-md font-mono inline-flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 w-auto">
                Contact me
                <ArrowRightIcon class="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>

        <div
          class="-mt-12 p-0 lg:p-12 mx-auto lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:-ml-12">
          <img
            class="w-[48rem] max-w-full lg:max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] mx-auto"
            src="https://avatars.githubusercontent.com/u/62160298?v=4" alt="" />
        </div>


        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-1">
          <div class="lg:pr-4">
            <h1 class="mt-2 tracking-tight text-pretty text-gray-900 dark:text-white text-5xl lg:text-5xl font-mono font-black">
              My expertise
            </h1>
            <div class="max-w-xl text-base/7 text-gray-700 dark:text-gray-300 lg:max-w-xl">

              <!-- Seção com fundo escuro e título -->
              <section class="py-12">
                <div class=" mx-auto">
                  <!-- Título -->
                  <SkillsSection />
                </div>
              </section>



            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid'
import SkillsSection from '@/Components/SkillsSection.vue';
</script>