<template>
    <navbar></navbar>
    <photo-carousel></photo-carousel>
</template>

<script>
    import Navbar from './components/navbar.vue'
import PhotoCarousel from './components/photo-carousel.vue';
    import photoCarousel from './components/photo-carousel.vue';

    export default{
        components: {
            Navbar,
            PhotoCarousel
        },
        data(){
            return{
                
            }
        }
    }
</script>