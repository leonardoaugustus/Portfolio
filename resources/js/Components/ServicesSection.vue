<template>
  <section class="bg-gray-100 py-16">
    <div class="mx-auto max-w-4xl px-6">

      <!-- Heading and Subtext -->
      <h2 class="text-center text-3xl sm:text-4xl font-bold mb-4">
        Let’s level up your brand, together
      </h2>
      <p class="text-center text-gray-600 mb-8">
        Reach us anytime at
        <a href="mailto:example@gmail.com" class="underline hover:text-gray-700">
          example@gmail.com
        </a>
      </p>

      <!-- Form Container -->
      <div class="mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <form class="space-y-6">

          <!-- Row of two inputs: Your name & Email address -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <input type="text" id="name" placeholder="Full name" class="w-full rounded-md border border-gray-300 bg-white
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       py-2 px-3" />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input type="email" id="email" placeholder="name@example.com" class="w-full rounded-md border border-gray-300 bg-white
                       text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       py-2 px-3" />
            </div>
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input type="text" id="subject" placeholder="Subject name" class="w-full rounded-md border border-gray-300 bg-white
                     text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     py-2 px-3" />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea id="message" rows="5" placeholder="Write your message here..." class="w-full rounded-md border border-gray-300 bg-white
                     text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     py-2 px-3 resize-none"></textarea>
          </div>

          <!-- Checkbox + label -->
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="dataConsent"
              class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <label for="dataConsent" class="text-sm text-gray-700">
              I agree that my data is collected and stored.
            </label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md px-6 py-3
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                   transition-colors">
            Send a message
          </button>
        </form>
      </div>
      <!-- End Form Container -->
    </div>
  </section>
</template>

<script setup>
// Static layout; no special script needed
</script>

<style scoped>
/* Optional custom styling adjustments go here */
</style>
