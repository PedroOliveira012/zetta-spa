<template>
    <!-- <photo-carousel></photo-carousel> -->
    <products-sections></products-sections>
    <partner-section></partner-section>
</template>

<script>
    import PhotoCarousel from '../components/home/photo-carousel.vue';
    import productsSections from '../components/home/products-sections.vue';
    import partnerSection from '../components/home/partner-section.vue'

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