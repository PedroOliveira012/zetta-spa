<template>
    <navbar></navbar>
    <photo-carousel></photo-carousel>
    <products-sections></products-sections>
</template>

<script>
    import Navbar from './components/navbar.vue'
    import PhotoCarousel from './components/photo-carousel.vue';
    import productsSections from './components/products-sections.vue';

    export default{
        components: {
            Navbar,
            PhotoCarousel,
            productsSections
        },
        data(){
            return{
                
            }
        }
    }
</script>