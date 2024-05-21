<template>
    <navbar></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
</template>

<script>
    import Navbar from './components/navbar.vue'
    import appFooter from './components/app-footer.vue'

    export default{
        components: {
            Navbar,
            appFooter,
        },
        data(){
            return{
                
            }
        }
    }
</script>