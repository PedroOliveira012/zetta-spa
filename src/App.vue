<template>
    <navbar></navbar>
    <photo-carousel></photo-carousel>
    <products-sections></products-sections>
    <rating-carousel></rating-carousel>
</template>

<script>
    import Navbar from './components/navbar.vue'
    import PhotoCarousel from './components/photo-carousel.vue';
    import productsSections from './components/products-sections.vue';
    import ratingCarousel from './components/rating-carousel.vue'

    export default{
        components: {
            Navbar,
            PhotoCarousel,
            productsSections,
            ratingCarousel
        },
        data(){
            return{
                
            }
        }
    }
</script>