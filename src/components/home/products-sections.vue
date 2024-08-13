<template>
    <div class="flex justify-center items-center h-72 mb-8 border-[#a1dfe7] border-b banner bg-cover bg-center 
            lg:max-xl:h-56
            xs:max-lg:h-32">
        </div>
    <div class="grid gap-4 grid-cols-1 place-content-evenly mt-24
    xs:max-sm:mt-10">
        <section class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000" class="flex flex-col w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Painéis elétricos
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    <div class="relative inline-block">
                        Painéis elétricos são fundamentais para
                    </div>
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> eficiência e controle de processos.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> Na Zettatecck, oferecemos uma gama completa de alta qualidade, projetados para aplicações industriais e comerciais. Com tecnologia avançada para máxima eficiência energética e conformidade com padrões de segurança rigorosos, garantimos
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1">confiabilidade e redução de tempo de inatividade.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> Descubra a solução ideal para seu negócio conosco.
                </div>
                
                <router-link to="/panels">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div v-motion-slide-right :duration="1000" class="h-96 border-2 border-cyan-500 rounded-r-full item-1 bg-cover bg-center
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72 xs:max-sm:mt-12">
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col-reverse sm:max-lg:mt-12 sm:max-lg:pb-24
        xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000" class="h-96 border-2 border-cyan-500 rounded-l-full item-2 bg-cover bg-center
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Projetos elétricos
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    Nossos projetos elétricos industriais são projetados sob medida para atender às necessidades
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> específicas</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div>
                    de cada cliente, garantindo eficiência e segurança em ambientes industriais. Com
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> tecnologia avançada </span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> estrita conformidade com normas de segurança, oferecemos soluções que proporcionam alta performance e confiabilidade. Descubra como podemos otimizar seus processos industriais com nossos serviços especializados em projetos elétricos.
                </div>
                <router-link to="/projects">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000" class="flex flex-col w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3 class="mb-6 text-[#012a62] font-bold uppercase sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Robôs sinalizadores
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    <div class="relative inline-block">
                        Robôs sinalizadores para rodovias são essenciais para 
                    </div>
                    <div class="relative inline-block w-fit">
                        <span class="relative z-10 p-1"> melhorar a segurança</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> e
                    <div class="relative inline-block w-fit">
                        <span class="relative z-10 p-1">eficiência do tráfego.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div>
                    Nossa linha de produtos inclui robôs avançados projetados para operar de forma autônoma, utilizando tecnologia de comunicação em tempo real e adaptação às condições do trânsito. Descubra como nossas soluções podem transformar a gestão de tráfego em suas estradas.
                </div>
                <router-link to="/robots">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-96 border-2 border-cyan-500 rounded-r-full item-3 bg-cover bg-left
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
            </div>
        </section>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }

    // const paragraph = document.querySelectorAll(".highlight")
    // const observer = new IntersectionObserver(entries => {
    //     console.log(entries)
    // })

    // observer.observe(paragraph[0])
</script>
<style>
    .banner{
        background-image: url('@/assets/media/fachada.jpg');
    }
    .item-1{
        background-image: url('@/assets/media/home/paineis.jpg');
    }
    .item-2{
        background-image: url('@/assets/media/projects/projetos.jpg');
    }
    .item-3{
        background-image: url('@/assets/media/home/robo.jpg');
    }
</style>