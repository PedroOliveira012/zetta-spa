<!-- <template>
    <section class="grid grid-cols-4 grid-rows -3">
        <div v-for="partner in partners" >
            <span>{{ partner.name }}</span>
            <img :src="partner.logo" alt="">
        </div>
    </section>
</template> -->

<template>
    <div class="bg-gradient-to-t from-[#005c66] to-[#00aac0] p-16">
        <h3 class="text-white text-6xl mb-6">Conheça nossos parceiros</h3>
        <section class="grid grid-cols-4">
            <div v-for="partner in partners" :key="partner.name" class="rounded-2xl w-52 h-32 mx-auto my-7 bg-white flex items-center justify-center p-6 hover:shadow-2xl hover:-translate-y-1 hover:scale-110  duration-300">
                <div class="flex items-center justify-center h-full w-full">
                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        props:['logo'],
        data(){
            return{
                partners:[
                    {
                        name: 'Legrand', logo: require('@/assets/legrand.png'), alt: 'Logo de Legrand'
                    },
                    {
                        name: 'Holec', logo: require('@/assets/holec.png'), alt: 'Logo de Holec'
                    },
                    {
                        name: 'Weidmuller', logo: require('@/assets/weidmuller.png'), alt: 'Logo de Weidmuller'
                    },
                    {
                        name: 'Siemens', logo: require('@/assets/siemens.png'), alt: 'Logo de Siemens'
                    },
                    {
                        name: 'Finder', logo: require('@/assets/finder.png'), alt: 'Logo de Finder'
                    },
                    {
                        name: 'Dehn', logo: require('@/assets/dehn.png'), alt: 'Logo de Dehn'
                    },
                    {
                        name: 'ABB', logo: require('@/assets/abb.png'), alt: 'Logo de ABB'
                    },
                    {
                        name: 'Phoenix Contact', logo: require('@/assets/phoenix.png'), alt: 'Logo de Phoenix'
                    },
                    {
                        name: 'Rockwell Automation', logo: require('@/assets/rockwell.png'), alt: 'Logo de Rockwell'
                    },
                    {
                        name: 'Eaton', logo: require('@/assets/eaton.png'), alt: 'Logo de Eaton'
                    },
                    {
                        name: 'Rittal', logo: require('@/assets/rittal.png'), alt: 'Logo de Rittal'
                    },
                    {
                        name: 'Wago', logo: require('@/assets/wago.png'), alt: 'Logo de Wago'
                    },
                ]
            }
        }
    }
</script>