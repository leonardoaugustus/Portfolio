<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Case Study Cards -->
        <div class="flex" v-for="(project, index) in projects" :key="index">
          <article class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
            <h3>
              <a :href="project.link">
                <span class="absolute inset-0 rounded-3xl"></span>
                <img :alt="project.name" loading="lazy" width="36" height="36" :src="project.logo" class="h-16 w-16" />
              </a>
            </h3>
            <p class="mt-6 flex gap-x-2 text-sm text-neutral-950">
              <time :datetime="project.year" class="font-semibold">{{ project.year }}</time>
              <span class="text-neutral-300" aria-hidden="true">/</span>
              <span>{{ project.type }}</span>
            </p>
            <p class="mt-6 font-display text-2xl font-semibold text-neutral-950">{{ project.title }}</p>
            <p class="mt-4 text-base text-neutral-600">{{ project.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'FamilyFund',
    link: '/work/family-fund',
    logo: '/_next/static/media/logomark-dark.4d2947be.svg',
    year: '2023',
    type: 'Case study',
    title: 'Skip the bank, borrow from those you trust',
    description: 'FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.'
  },
  {
    name: 'Unseal',
    link: '/work/unseal',
    logo: '/_next/static/media/logomark-dark.73187f97.svg',
    year: '2022',
    type: 'Case study',
    title: 'Get a hodl of your health',
    description: 'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.'
  },
  {
    name: 'Phobia',
    link: '/work/phobia',
    logo: '/_next/static/media/logomark-dark.00d7d7b3.svg',
    year: '2022',
    type: 'Case study',
    title: 'Overcome your fears, find your match',
    description: 'Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.'
  }
];
</script> 