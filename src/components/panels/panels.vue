<template>
    <div class="flex justify-center items-center h-72 mb-8 border-[#a1dfe7] border-b banner-panels
        lg:max-xl:h-56
        xs:max-lg:h-36">
        <div class="absolute text-6xl flex justify-center">
            <h2 class="text-6xl text-[#012a62] font-bold uppercase xs:max-md:text-4xl text-center mb-6">Painéis elétricos</h2>
        </div>
    </div>
    <div class="grid gap-4 grid-cols-1 mt-24
    xs:max-md:gap-1 xs:max-md:mt-0">
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-32 h-full w-full
        xl:mb-12 xl:max-2xl:pb-14
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0
        ">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    CCM CLP
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    Nosso CCM (Centro de Controle de Motores) é projetado conforme a norma ABNT NBR IEC 61439-1&2, garantindo
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> alto desempenho</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> e confiabilidade. Com acesso frontal a todas as conexões, facilita intervenções rápidas e mantém a
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1">operação contínua.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>  O design otimiza o espaço de instalação e proporciona acesso fácil ao interior do painel, garantindo segurança tanto para a instalação quanto para os operadores. Além disso, nosso CCM está preparado para atender às demandas da Indústria 4.0, integrando soluções de IoT que permitem monitoramento remoto em tempo real, coleta de dados e manutenção preditiva, elevando a eficiência e a automação do processo industrial.
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselCCM" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselCCM" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselCCM" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselCCM" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselCCM" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <!-- <button type="button" data-bs-target="#carouselCCM" data-bs-slide-to="4" class="bg-white" aria-label="Slide 5"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/ccm/ccm 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/ccm/ccm 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/ccm/ccm 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/ccm/ccm 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/ccm/ccm 5.webp" class="d-block w-100" alt="...">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselCCM" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselCCM" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselQGBT" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselQGBT" data-bs-slide-to="5" class="bg-black" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 5.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qgbt/qgbt 6.webp" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselQGBT" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselQGBT" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    QGBT
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    Oferecemos soluções para distribuição de energia em baixa tensão com os sistemas Ri4Power TS8 , VX25 (Rittal) e SIVACON (Siemens), suportando 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> até 5500 A e 100 kA.</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> Disponíveis em aço carbono e inox, esses sistemas apresentam 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> montagem compartimentada</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>, desde a forma 1 até 4b, e aceitam componentes de principais marcas, mantendo certificação conforme a norma IEC 61439-1/2. Entre os produtos dessa linha, incluem-se QGBT's, QF's, Bancos de Capacitores, Centros de Controle de Motores (CCM's) e CCM's Inteligentes, oferecendo versatilidade e alta qualidade para diferentes necessidades.  Além disso, nosso QGBT está preparado para atender às demandas da Indústria 4.0, integrando soluções de IoT que permitem monitoramento remoto em tempo real, coleta de dados e manutenção preditiva, elevando a eficiência e a automação do processo industrial.
                </div>
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Banco de Capacitores e filtro passivo
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    Os Painéis de Banco de Capacitores são projetados para atender às necessidades específicas dos clientes, com alta qualidade e
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> correção automática</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> do fator de potência, garantindo eficiência conforme a norma ABNT NBR IEC 61439-1&2. Conexões frontais 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1">reduzem o tempo de intervenção</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>, e o design otimiza o espaço e facilita o acesso, assegurando confiabilidade e segurança para instalações e operadores. Além disso, nossa Subestação unitária está preparada para atender às demandas da Indústria 4.0, integrando soluções de IoT que permitem monitoramento remoto em tempo real, coleta de dados e manutenção preditiva, elevando a eficiência e a automação do processo industrial.
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselBC" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselBC" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselBC" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselBC" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                        <!-- <button type="button" data-bs-target="#carouselBC" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselBC" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/banco de capacitores/bc 5.webp" class="d-block w-100" alt="...">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselBC" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselBC" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselRemota" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <!-- <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="0" class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button> -->
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="0" class=" active bg-black" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                        <!-- <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselRemota" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 5.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 6.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 7.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/remota/remota 8.webp" class="d-block w-100" alt="...">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselRemota" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselRemota" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Remotas
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    Oferecemos ao mercado soluções de Remotas fabricadas em aço carbono e inox, com desempenho garantido pela certificação conforme os requisitos de projeto, construção e desempenho da norma ABNT NBR IEC 61439-1&2. Nossas Remotas são projetadas para assegurar continuidade de serviço, com todas as 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> conexões acessíveis</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> pela frente do painel, reduzindo o tempo de intervenção. Além disso, proporcionam    
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> otimização de espaço</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> na instalação, fácil acessibilidade ao interior do painel, alta confiabilidade e máxima segurança tanto para a instalação quanto para os usuários. Além disso, nossas Remotas estão preparadas para atender às demandas da Indústria 4.0, integrando soluções de IoT que permitem monitoramento remoto em tempo real, coleta de dados e manutenção preditiva, elevando a eficiência e a automação do processo industrial.
                </div>
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-4 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Quadros de iluminação e tomadas
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    O Quadro de Iluminação e Tomadas atende aos rigorosos requisitos da norma ABNT NBR IEC 61439-1&2, garantindo desempenho certificado em projeto, construção e operação. Com acesso frontal para todas as conexões, proporciona
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> rápida intervenção</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> e mantém a continuidade do serviço. O design é otimizado para economizar espaço na instalação e oferecer   
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> fácil acessibilidade</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> ao interior do painel, priorizando a confiabilidade e a segurança tanto da instalação quanto das pessoas envolvidas.
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselQDFL" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                        <!-- <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="5" class="bg-black" aria-label="Slide 6"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 5.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 6.webp" class="d-block w-100" alt="...">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselQDFL" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselQDFL" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselSubstacao" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselSubstacao" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselSubstacao" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselSubstacao" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/home/1.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/home/2.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/home/3.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselSubstacao" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselSubstacao" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Subestação unitária
                </h3>
                <!-- <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    O Quadro de Iluminação e Tomadas atende aos rigorosos requisitos da norma ABNT NBR IEC 61439-1&2, garantindo desempenho certificado em projeto, construção e operação. Com acesso frontal para todas as conexões, proporciona
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> rápida intervenção</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> e mantém a continuidade do serviço. O design é otimizado para economizar espaço na instalação e oferecer   
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> fácil acessibilidade</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> ao interior do painel, priorizando a confiabilidade e a segurança tanto da instalação quanto das pessoas envolvidas.
                </div> -->
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    As subestações unitárias são instalações elétricas que ajustam a tensão para 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> distribuição em diversos setores</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> de uma planta industrial. Elas são compostas por cubículos de média tensão, transformadores, QGBTs, Bancos de Capacitores e sistemas auxiliares. A Zettatecck oferece
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> soluções completas </span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>para subestações, desde a elaboração de projetos até o fornecimento dos equipamentos que a compõe, incluindo Cubículos de média tensão, transformadores, QGBT’s, Busway, Remotas para digitalização de subestações, equipamentos para monitoramento de umidade e temperatura. Além disso, nossa Subestação unitária está preparada para atender às demandas da Indústria 4.0, integrando soluções de IoT que permitem monitoramento remoto em tempo real, coleta de dados e manutenção preditiva, elevando a eficiência e a automação do processo industrial.
                    <!-- <div class="relative inline-block">
                        <span class="relative z-10 p-1"> 24 kV e 25 kA</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>, utilizando tecnologia de isolamento a ar e comutação com isolamento a gás. Com um 
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> design compacto</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div>, oferece segurança operacional, confiabilidade, baixa manutenção e segurança pessoal. Além de ser econômico e ecológico, é uma solução robusta para instalações elétricas de média tensão. -->
                </div>
            </div>
        </section>
        <!-- <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Painel robô canteiro de obras
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    Os paineis robô para canteiros de obras são pensados e desenvolvidos para assegurar o fornecimento de energia em obras de diversos seguimentos. Contam com sistemas de bloqueio de segurança para a proteção dos profissionais, circuitos dimensionados e preparados para a correta distribuição de energia elétrica evitando improvisos, riscos de acidentes e incêndios. São de fácil locomoção e instalação. Construídos conforme normas ABNT NBR IEC 61439-1&2, NR-10 e NBR-5410 para garantir alta confiabilidade e máxima segurança tanto para a instalação quanto para os usuários.  -->
                    <!-- <div class="relative inline-block">
                        <span class="relative z-10 p-1"> conexões acessíveis</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> pela frente do painel, reduzindo o tempo de intervenção. Além disso, proporcionam    
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> otimização de espaço</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> na instalação, fácil acessibilidade ao interior do painel, alta confiabilidade e máxima segurança tanto para a instalação quanto para os usuários. -->
                <!-- </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselCanteiro" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselCanteiro" data-bs-slide-to="0" class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselCanteiro" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselCanteiro" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselCanteiro" data-bs-slide-to="3" class="bg-white" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/painel canteiro/canteiro 1.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/painel canteiro/canteiro 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/painel canteiro/canteiro 3.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/painel canteiro/canteiro 4.webp" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselCanteiro" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselCanteiro" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section> -->
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-4 xs:max-sm:w-11/12">
                <h3 class="mb-6 text-[#012a62] uppercase font-bold sm:text-4xl xs:max-xl:text-2xl xs:max-sm:text-center">
                    Quadros Eletropneumático
                </h3>
                <div class="text-lg pb-12 sm:max-xl:text-lg xs:max-sm:text-justify xs:max-sm:pb-8 xs:max-sm:text-md">
                    <!-- O Quadro de Iluminação e Tomadas atende aos rigorosos requisitos da norma ABNT NBR IEC 61439-1&2, garantindo desempenho certificado em projeto, construção e operação. Com acesso frontal para todas as conexões, proporciona
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> rápida intervenção</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> e mantém a continuidade do serviço. O design é otimizado para economizar espaço na instalação e oferecer   
                    <div class="relative inline-block">
                        <span class="relative z-10 p-1"> fácil acessibilidade</span>
                        <span class="absolute inset-0 bg-cyan-400 h-full w-0 group rounded-lg"></span>
                    </div> ao interior do painel, priorizando a confiabilidade e a segurança tanto da instalação quanto das pessoas envolvidas. -->
                    Os painéis eletropneumáticos são projetados para garantir continuidade de serviço, com todas as conexões acessíveis pela frente do painel, o que reduz significativamente o tempo de intervenção e manutenção. Seu design compacto contribui para a otimização de espaço na instalação, sem comprometer a funcionalidade. Além disso, a acessibilidade ao interior do painel é facilitada, proporcionando intervenções mais rápidas e seguras. A confiabilidade desses sistemas garante uma operação estável e contínua, ao mesmo tempo que a segurança da instalação e das pessoas é priorizada. Integrados à tecnologia IoT e às demandas da Indústria 4.0, esses painéis permitem o monitoramento remoto, coleta de dados em tempo real e manutenção preditiva, aumentando a eficiência e a automação dos processos industriais.
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="h-fit 
            lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto
            xs:max-sm:w-11/12 xs:max-sm:h-72">
                <div id="carouselPneumatico" class="carousel slide h-fit border-2 border-cyan-500" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPneumatico" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                        <!-- <button type="button" data-bs-target="#carouselPneumatico" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselPneumatico" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button> -->
                        <!-- <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselQDFL" data-bs-slide-to="5" class="bg-black" aria-label="Slide 6"></button> -->
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/panels/pneumatico/pneumatico.jpg" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 2.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 3.webp" class="d-block w-100" alt="...">
                        </div> -->
                        <!-- <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 4.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 5.webp" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/panels/qdfl/qdfl 6.webp" class="d-block w-100" alt="...">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselPneumatico" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500" type="button" data-bs-target="#carouselPneumatico" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
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
     .banner-panels {
        background-color: #FFFFFF;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
        /* Adicionar um degradê de opacidade */
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)  
        ),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    }
    .img-qgbt{
        background-image: url('@/assets/media/panels/qgbt 3.webp');
    }
    .img-topic-ccm-1{
        background-image: url('@/assets/media/panels/qgbt 3.webp');
    }
</style>
