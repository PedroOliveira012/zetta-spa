<template>
    <form-contact />
    <map-component />
</template>
<script>
    import FormContact from '@/components/contact/form-contact.vue'
    import MapComponent from "@/components/contact/map-component.vue"

    export default{
        components:{
            FormContact,
            MapComponent,
        }
    }
</script>