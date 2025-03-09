<script setup>
import { Head } from '@inertiajs/vue3';
import Navigation from '@/Components/Portfolio/Navigation.vue';
import HeroSection from '@/Components/Portfolio/HeroSection.vue';
import ProjectsSection from '@/Components/Portfolio/ProjectsSection.vue';
import BlogSection from '@/Components/Portfolio/BlogSection.vue';
import ContactSection from '@/Components/Portfolio/ContactSection.vue';
import Footer from '@/Components/Portfolio/Footer.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    heroDescription: {
        type: String,
        required: true,
    },
    currentLocale: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Leonardo Augusto - Engineer & Developer" />

    <div class="min-h-screen ">
        <Navigation :canLogin="canLogin" :canRegister="canRegister" :currentLocale="currentLocale" />
        
        <main id="main" role="main">
            <HeroSection :heroDescription="heroDescription" />
            <ProjectsSection />
            <!-- <BlogSection /> -->
            <ContactSection />
        </main>

        <Footer />
    </div>
</template> 