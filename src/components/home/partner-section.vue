<template>
    <div class="bg-gradient-to-b from-[#00aac0] to-[#005c66] p-16 mb-16 xs:max-sm:px-4">
        <h3 class="text-white uppercase text-6xl mb-6 xs:max-sm:text-3xl xs:max-sm:">Conheça nossos parceiros</h3>
        <div class="hidden lg:block">
            <section class="grid grid-cols-4">
                <div v-for="partner in partners" :key="partner.name" class="rounded-2xl w-52 h-32 mx-auto my-7 bg-white flex items-center justify-center p-6 hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                    <div class="flex items-center justify-center h-full w-full">
                        <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                    </div>
                </div>
            </section>
        </div>
        <div class="lg:hidden xs:max-sm:hidden">
            <div id="carousel" class="carousel slide">
                <div class="carousel-indicators mb-0">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(0, 3)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(3, 6)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(6, 9)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(9, 12)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="sm:hidden">
            <div id="carousel-xs" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators mb-0">
                    <button type="button" data-bs-target="#carousel-xs" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-xs" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-xs" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousel-xs" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(0, 2)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(2, 4)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(4, 6)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(6, 8)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(8, 10)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <div v-for="(partner, index) in partners.slice(10, 12)" :key="partner.name" class="rounded-2xl w-52 h-32 mx-2 my-7 bg-white flex items-center justify-center p-6">
                                <div class="flex items-center justify-center h-full w-full">
                                    <img :src="partner.logo" :alt="partner.alt" class="max-h-full max-w-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-xs" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next bg-red" type="button" data-bs-target="#carousel-xs" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        props:['logo'],
        data(){
            return{
                partners:[
                    {
                        name: 'Cosmo', logo: require('@/assets/logos/cosmo.png'), alt: 'Logo de Legrand'
                    },
                    {
                        name: 'Woehner', logo: require('@/assets/logos/woehner.svg'), alt: 'Logo de Holec'
                    },
                    {
                        name: 'Weidmuller', logo: require('@/assets/logos/weidmuller.png'), alt: 'Logo de Weidmuller'
                    },
                    {
                        name: 'Siemens', logo: require('@/assets/logos/siemens.png'), alt: 'Logo de Siemens'
                    },
                    {
                        name: 'Finder', logo: require('@/assets/logos/finder.png'), alt: 'Logo de Finder'
                    },
                    {
                        name: 'Dehn', logo: require('@/assets/logos/dehn.png'), alt: 'Logo de Dehn'
                    },
                    {
                        name: 'Condumax', logo: require('@/assets/logos/condumax.svg'), alt: 'Logo de ABB'
                    },
                    {
                        name: 'Phoenix Contact', logo: require('@/assets/logos/phoenix.png'), alt: 'Logo de Phoenix'
                    },
                    {
                        name: 'Rockwell Automation', logo: require('@/assets/logos/rockwell.png'), alt: 'Logo de Rockwell'
                    },
                    {
                        name: 'Eaton', logo: require('@/assets/logos/eaton.png'), alt: 'Logo de Eaton'
                    },
                    {
                        name: 'Rittal', logo: require('@/assets/logos/rittal.png'), alt: 'Logo de Rittal'
                    },
                    {
                        name: 'Wago', logo: require('@/assets/logos/wago.png'), alt: 'Logo de Wago'
                    },
                ]
            }
        }
    }
</script>