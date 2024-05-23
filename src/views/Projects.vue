<template>
    <projects />
    <cta-component />
</template>
<script>
    import CtaComponent from '@/components/cta-component.vue';
    import Projects from '@/components/projects.vue';
    export default{
        components:{
            Projects,
            CtaComponent
        }
    }
</script>