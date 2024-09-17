<template>
    <div class="flex justify-center items-center h-72 mb-8 border-[#a1dfe7] border-b banner bg-cover bg-center
            lg:max-xl:h-56
            xs:max-lg:h-32">
    </div>
    <div class="grid gap-4 grid-cols-1 place-content-evenly mt-24
    xs:max-sm:mt-10">
        <section id="1" class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000"
                class="flex flex-col w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3
                    class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Painéis elétricos
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    Painéis elétricos são fundamentais para
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> eficiência e controle</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> de processos. Na Zettatecck, oferecemos uma gama completa de alta qualidade, projetados para
                    aplicações industriais e comerciais. Com tecnologia avançada para máxima eficiência energética e
                    conformidade com padrões de segurança rigorosos, garantimos confiabilidade e
                    <div v-motion-slide-visible-once-left class="relative inline-block">
                        <span class="relative z-10 p-1"> redução de tempo</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 animate-slide group rounded-lg"></span>
                    </div> de inatividade. Descubra a solução ideal para seu negócio conosco.
                </div>

                <router-link to="/panels">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span
                            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div v-motion-slide-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
                <div id="carouselPainel" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="0" class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="3" class="bg-white" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="4" class="bg-white" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="5" class="bg-white" aria-label="Slide 6"></button>
                        <!-- <button type="button" data-bs-target="#carouselPainel" data-bs-slide-to="6" class="bg-white" aria-label="Slide 7"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="@/assets/media/panels/ccm/ccm 3.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/panels/qgbt/qgbt 3.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 3.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/panels/remota/remota 1.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/panels/qdfl/qdfl 2.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/home/1.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/panels/painel canteiro/canteiro 4.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5> obras</h5>
                            </div>
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselPainel" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselPainel" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section id="2" class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col-reverse sm:max-lg:mt-12 sm:max-lg:pb-24
        xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72">
                <div id="carouselProjeto" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="0" class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="3" class="bg-white" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="4" class="bg-white" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="5" class="bg-white" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="6" class="bg-white" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="7" class="bg-white" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="8" class="bg-white" aria-label="Slide 9"></button>
                        <!-- <button type="button" data-bs-target="#carouselProjeto" data-bs-slide-to="9" class="bg-white" aria-label="Slide 10"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 2.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 3.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 4.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 5.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 6.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div> -->
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 7.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto geradores 8.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto silk 1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/projects/projeto silk 2.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselProjeto" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselProjeto" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000"
                class="w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3
                    class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Projetos elétricos
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    Nossos projetos elétricos industriais são projetados sob medida para atender às necessidades
                    <div v-motion-slide-visible-once-right class="relative inline-block">
                        <span class="relative z-10 p-1"> específicas</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>
                    de cada cliente, garantindo eficiência e segurança em ambientes industriais. Com
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> tecnologia avançada </span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> estrita conformidade com normas de segurança, oferecemos soluções que proporcionam alta
                    performance e confiabilidade. Descubra como podemos otimizar seus processos industriais com nossos
                    serviços especializados em projetos elétricos.
                </div>
                <router-link to="/projects">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span
                            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
        </section>
        <section id="3" class="flex items-center gap-4 m-auto px-20 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-16
        xs:max-sm:px-3">
            <div v-motion-slide-visible-once-left :duration="1000"
                class="flex flex-col w-full h-full relative sm:max-lg:h-4/6 lg:w-6/12 xs:max-lg:h-5/6">
                <h3
                    class="mb-6 text-[#012a62] font-bold uppercase sm:text-4xl xs:max-xl:text-4xl xs:max-sm:text-center">
                    Robôs sinalizadores
                </h3>
                <div class="text-xl pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8">
                    Robôs sinalizadores para rodovias são essenciais para
                    <div class="relative inline-block w-fit">
                        <span class="relative z-10 p-1"> melhorar a segurança</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> e
                    <div class="relative inline-block w-fit">
                        <span class="relative z-10 p-1">eficiência do tráfego.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> Nossa linha de produtos inclui robôs avançados projetados para operar de forma autônoma,
                    utilizando tecnologia de comunicação em tempo real e adaptação às condições do trânsito. Descubra
                    como nossas soluções podem transformar a gestão de tráfego em suas estradas.
                </div>
                <router-link to="/robots">
                    <button class="absolute right-0 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group
                    sm:max-lg:bottom-10 lg:bottom-0 ">
                        Saiba mais!
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span
                            class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span
                            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-5 absolute w-36 h-32 top-2.5 -left-2 z-10">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" id="carouselRobo" class="border-2 border-cyan-500 carousel slide h-fit
            lg:w-6/12
            sm:max-lg:h-80 sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-full xs:max-sm:h-72" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselRobo" data-bs-slide-to="0" class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselRobo" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                        <!-- <button type="button" data-bs-target="#carouselRobo" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="@/assets/media/robots/slide robo 1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/robots/slide robo 2.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="2000">
                            <img src="@/assets/media/home/3.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselRobo" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselRobo" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </section>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animate-slide')
                    observer.unobserve(entry.target)
                }
            })
        })

        document.querySelectorAll('span.bg-cyan-400').forEach((section) => {
            observer.observe(section)
        })
    })

</script>
<style>
    .banner {
        background-image: url('@/assets/media/fachada.jpg');
    }

    .item-1 {
        background-image: url('@/assets/media/home/paineis.jpg');
    }

    .item-2 {
        background-image: url('@/assets/media/projects/projetos.jpg');
    }

    .item-3 {
        background-image: url('@/assets/media/home/robo.webp');
    }
</style>