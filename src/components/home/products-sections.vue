<template>
    <div class="grid gap-4 grid-cols-1 place-content-evenly mt-24">
        <section class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-left :duration="1000" class="flex flex-col w-full h-full relative lg:w-6/12 xs:max-lg:h-5/6">
                <h3 class="text-6xl mb-6 sm:max-xl:text-5xl xs:max-sm:text-center xs:max-xl:text-4xl">
                    Painéis elétricos
                </h3>
                <p class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-center xs:max-sm:pb-12">
                    Painéis elétricos são fundamentais para eficiência e controle. Na Zettatecck, oferecemos uma gama completa de alta qualidade, projetados para aplicações industriais e comerciais. Com tecnologia avançada para máxima eficiência energética e conformidade com padrões de segurança rigorosos, garantimos confiabilidade e redução de tempo de inatividade. Descubra a solução ideal para seu negócio conosco.
                </p>
                <router-link to="/panels">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    xs:max-lg:bottom-10 lg:bottom-0 ">
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
            <div v-motion-slide-right :duration="1000" class="h-96 border-2 border-cyan-500 rounded-r-full
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
                <img src="@/assets/media/home/paineis.jpg" class="h-full w-fit
            xs:max-lg:rounded-2xl sm:max-lg:mx-auto
            " alt="">
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col-reverse sm:max-lg:mt-12 sm:max-lg:pb-24
        xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000" class="h-96 border-2 border-cyan-500 rounded-l-full
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3 class="text-6xl mb-6 sm:max-xl:text-5xl xs:max-sm:text-center xs:max-xl:text-4xl">
                    Projetos elétricos
                </h3>
                <p class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-center xs:max-sm:pb-8">
                    Nossos projetos elétricos industriais são projetados sob medida para atender às necessidades específicas de cada cliente, garantindo eficiência e segurança em ambientes industriais. Com tecnologia avançada e estrita conformidade com normas de segurança, oferecemos soluções que proporcionam alta performance e confiabilidade. Descubra como podemos otimizar seus processos industriais com nossos serviços especializados em projetos elétricos.
                </p>
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
                <h3 class="text-6xl mb-6 sm:max-xl:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Robôs sinalizadores
                </h3>
                <p class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-center xs:max-sm:pb-8">
                    Robôs sinalizadores para rodovias são essenciais para melhorar a segurança e eficiência do tráfego. Nossa linha de produtos inclui robôs avançados projetados para operar de forma autônoma, utilizando tecnologia de comunicação em tempo real e adaptação às condições do trânsito. Descubra como nossas soluções podem transformar a gestão de tráfego em suas estradas. 
                </p>
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
</script>
<style>
    .item-3{
        background-image: url('@/assets/media/home/robo.jpg');
    }
</style>