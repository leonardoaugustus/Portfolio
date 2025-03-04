<template>
  <section class="py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Grid: 1 coluna no mobile, 2 colunas em telas md+ -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Coluna ESQUERDA: título e subtítulo -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Development tips &amp; trends
          </h2>
          <p class="text-gray-600">
            Follow us on Instagram to see life at
            <span class="text-purple-600">@folio</span>
          </p>
        </div>
        
        <!-- Coluna DIREITA: lista de artigos -->
        <div>
          <ul class="space-y-6">
            
            <!-- Artigo 1 -->
            <li>
              <div class="flex items-center justify-between gap-4">
                <!-- Ícone / Imagem -->
                <img
                  src="https://via.placeholder.com/48x48.png"
                  alt="Icon"
                  class="w-12 h-12 rounded"
                />
                <!-- Texto principal (título + data/duração) -->
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    10 essential tips for crafting a stunning website
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">
                    Aug 28, 2024 &bull; 5 min read
                  </p>
                </div>
                <!-- "Read more" -->
                <div>
                  <a
                    href="#"
                    class="text-purple-600 hover:underline text-sm font-semibold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>

            <!-- Artigo 2 -->
            <li>
              <div class="flex items-center justify-between gap-4">
                <img
                  src="https://via.placeholder.com/48x48.png"
                  alt="Icon"
                  class="w-12 h-12 rounded"
                />
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    The future of UI/UX design: trends to watch in 2024
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">
                    Aug 18, 2024 &bull; 5 min read
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    class="text-purple-600 hover:underline text-sm font-semibold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>

            <!-- Artigo 3 -->
            <li>
              <div class="flex items-center justify-between gap-4">
                <img
                  src="https://via.placeholder.com/48x48.png"
                  alt="Icon"
                  class="w-12 h-12 rounded"
                />
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    Behind the scenes of my latest web project
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">
                    Aug 12, 2024 &bull; 5 min read
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    class="text-purple-600 hover:underline text-sm font-semibold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>

            <!-- Artigo 4 -->
            <li>
              <div class="flex items-center justify-between gap-4">
                <img
                  src="https://via.placeholder.com/48x48.png"
                  alt="Icon"
                  class="w-12 h-12 rounded"
                />
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    How to optimize your website for SEO in 2024
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">
                    Aug 2, 2024 &bull; 5 min read
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    class="text-purple-600 hover:underline text-sm font-semibold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica específica necessária
</script>

<style scoped>
/* Se quiser remover bordas do placeholder ou alterar estilos adicionais, faça aqui. */
</style>
