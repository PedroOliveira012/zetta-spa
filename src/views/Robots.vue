<template>
    <robots />
    <cta-component />
</template>
<script>
    import CtaComponent from '@/components/cta-component.vue';
    import Robots from '@/components/robots/robots.vue'
    export default{
        components: {
            Robots,
            CtaComponent,
        }

    }
</script>