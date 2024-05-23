<template>
    <Panels />
    <cta-component />
</template>
<script>
    import Panels from '@/components/panels/panels.vue';
    import CtaComponent from '../components/cta-component.vue';

    export default{
        components:{
            Panels,
            CtaComponent
        }
    }
</script>