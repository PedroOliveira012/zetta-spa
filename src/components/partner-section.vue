<template>
    <section class="grid grid-cols-4 grid-rows -3">
        <div v-for="partner in partners" >
            <span>{{ partner.name }}</span>
        </div>
    </section>
</template>

<script>
    export default{
        props:['logo'],
        data(){
            return{
                partners:[
                    {
                        name: 'Legrand', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Holec', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Weidmuller', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Siemens', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Finder', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Dehn', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'ABB', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Phoenix Contact', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Rockwell Automation', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Eaton', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Rittal', logo: 'caminho/da/logo'
                    },
                    {
                        name: 'Wago', logo: 'caminho/da/logo'
                    },
                ]
            }
        }
    }
</script>