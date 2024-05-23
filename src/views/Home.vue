<template>
    <photo-carousel></photo-carousel>
    <products-sections></products-sections>
    <partner-section></partner-section>
</template>

<script>
    import PhotoCarousel from '../components/home components/photo-carousel.vue';
    import productsSections from '../components/home components/products-sections.vue';
    import partnerSection from '../components/home components/partner-section.vue'

    export default{
        components: {
            PhotoCarousel,
            productsSections,
            partnerSection,
        },
        data(){
            return{
                
            }
        }
    }
</script>