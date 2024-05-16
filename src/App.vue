<template>
    <navbar></navbar>
    <photo-carousel></photo-carousel>
    <products-sections></products-sections>
    <partner-section></partner-section>
    <app-footer></app-footer>
</template>

<script>
    import Navbar from './components/navbar.vue'
    import PhotoCarousel from './components/photo-carousel.vue';
    import productsSections from './components/products-sections.vue';
    import partnerSection from './components/partner-section.vue'
    import appFooter from './components/app-footer.vue'

    export default{
        components: {
            Navbar,
            PhotoCarousel,
            productsSections,
            partnerSection,
            appFooter,
        },
        data(){
            return{
                
            }
        }
    }
</script>