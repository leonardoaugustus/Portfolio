<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <ClientsSection />
      <TechnologySection />
      <CaseStudiesSection />
      <TestimonialSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/Components/Header.vue';
import HeroSection from '@/Components/Portfolio/HeroSection.vue';
import ClientsSection from '@/Components/ClientsSection.vue';
import TechnologySection from '@/Components/TechnologySection.vue';
import CaseStudiesSection from '@/Components/CaseStudiesSection.vue';
import TestimonialSection from '@/Components/TestimonialSection.vue';
import ServicesSection from '@/Components/ServicesSection.vue';
import ContactSection from '@/Components/Portfolio/ContactSection.vue';
import Footer from '@/Components/Portfolio/Footer.vue';
</script> 