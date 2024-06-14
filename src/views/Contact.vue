<template>
    <contact-info />
    <map-component />
</template>
<script>
    import ContactInfo from '@/components/contact/contact-info.vue'
    import MapComponent from "@/components/contact/map-component.vue"

    export default{
        components:{
            ContactInfo,
            MapComponent,
        }
    }
</script>