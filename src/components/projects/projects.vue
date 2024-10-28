<template>
    <section>
        <div class="flex justify-center items-center h-72 mb-8 border-[#a1dfe7] border-b banner-projects
            lg:max-xl:h-56
            xs:max-lg:h-36">
            <div class="absolute text-6xl flex justify-center">
                <h2 class="text-6xl text-[#012a62] font-bold uppercase xs:max-md:text-4xl text-center mb-6">
                    Projetos elétricos
                </h2>
            </div>
        </div>
        <div class="flex flex-col px-12 mx-auto
            xs:max-xl:px-0 xs:max-xl:justify-center xs:max-lg:w-12/12 lg:max-xl:w-8/12">
            <div class="flex justify-evenly h-full xs:max-xl:flex-col">
                <div v-motion-slide-left :duration="1000" class="flex flex-col justify-between size-full mx-4 bg-[#e8e8e8] rounded-2xl hover:shadow-2xl duration-500 
                    xs:max-md:h-fit xs:max-md:mx-auto xs:max-md:mb-6 xs:max-md:size-fit
                    md:max-lg:mb-12 md:max-lg:mx-auto
                    lg:max-xl:m-16">
                    <div id="carouselInfraMD" class="carousel slide xl:size-full rounded-t-2xl xs:max-md:hidden"
                        data-bs-ride="carousel">
                        <div class="carousel-indicators rounded-t-2xl">
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="0"
                                class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="1" class="bg-white"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="2" class="bg-white"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner rounded-t-2xl xs:max-md:hidden">
                            <div class="carousel-item active h-80 md:rounded-t-2xl bg-11 bg-cover" data-bs-interval="5000">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>
                            <div class="carousel-item h-80 md:rounded-t-2xl bg-12 bg-cover" data-bs-interval="5000">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>
                            <div class="carousel-item h-80 md:rounded-t-2xl bg-13 bg-cover" data-bs-interval="5000">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 rounded-tl-2xl"
                            type="button" data-bs-target="#carouselInfraMD" data-bs-slide="prev">
                            <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 rounded-tr-2xl"
                            type="button" data-bs-target="#carouselInfraMD" data-bs-slide="next">
                            <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div id="carouselInfraXS" class="carousel slide xl:size-full rounded-t-2xl md:hidden"
                        data-bs-ride="carousel">
                        <div class="carousel-indicators rounded-t-2xl">
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="0"
                                class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="1" class="bg-white"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselInfra" data-bs-slide-to="2" class="bg-white"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner rounded-t-2xl md:hidden">
                            <div class="carousel-item active" data-bs-interval="5000">
                                <img src="@/assets/media/projects/projeto geradores 1.webp"
                                    class="d-block w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="5000">
                                <img src="@/assets/media/projects/projeto geradores 2.webp"
                                    class="d-block w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="5000">
                                <img src="@/assets/media/projects/projeto geradores 3.webp"
                                    class="d-block w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                                <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                    <h5></h5>
                                </div>
                            </div>                            
                        </div>
                        <button
                            class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 rounded-tl-2xl"
                            type="button" data-bs-target="#carouselInfraXS" data-bs-slide="prev">
                            <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 rounded-tr-2xl"
                            type="button" data-bs-target="#carouselInfraXS" data-bs-slide="next">
                            <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="flex flex-col justify-center items-center text-justify size-full p-6 py-12
                            md:max-xl:w-11/12
                            xs:max-md:w-fit xs:max-md:py-6">
                        <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                            xs:max-xl:text-2xl xs:max-md:mb-4 
                            xl:max-2xl:text-xl xl:mb-5">Infraestrutura de potência, controle e rede</h3>
                        <p class="text-base 
                                xs:max-md:text-sm 
                                xl:max-2xl:text-sm">Nossos sistemas de Encaminhamento de Rede, Potência e Comando são
                            projetados com detalhamento mecânico (eletroduto, eletrocalha, perfilados etc.) e
                            elétrico
                            (bolhas para orientação do instalador) precisos para atender às necessidades específicas
                            de
                            cada cliente. Garantindo alta qualidade e eficiência, esses sistemas otimizam o espaço
                            de
                            instalação e facilitam o acesso para manutenção, assegurado assim confiabilidade e
                            segurança
                            tanto para a instalação quanto para os operadores.</p><br>
                        <p class="text-base 
                                xs:max-md:text-sm 
                                xl:max-2xl:text-sm">Os cálculos de infraestrutura englobam eletrodutos, eletrocalhas e
                            perfilados, garantindo uma instalação eficiente e segura. Com dimensionamento preciso,
                            esses
                            cálculos asseguram a correta distribuição de cabos, otimização do espaço e facilidade de
                            manutenção. A conformidade com as normas técnicas garante a confiabilidade e a segurança
                            das
                            instalações, proporcionando um sistema robusto e bem estruturado.</p>
                    </div>
                </div>
                <div v-motion-slide-right :duration="1000" class="flex flex-col justify-between size-full mx-4 bg-[#e8e8e8] rounded-2xl hover:shadow-2xl duration-500 
                    xs:max-md:h-fit xs:max-md:mx-auto xs:max-md:mb-6 xs:max-md:size-fit
                    md:max-lg:mb-12 md:max-lg:mx-auto
                    lg:max-xl:m-16">
                    <!-- <div class="w-12/12 h-80 md:rounded-t-2xl bg-2 bg-cover
                        size-full xs:max-md:rounded-t-2xl xs:max-md:h-40 xs:max-md:bg-cover"> -->
                    <div id="carouselSPDAMD" class="carousel slide xl:size-full rounded-t-2xl xs:max-md:hidden">
                        <div class="carousel-inner rounded-t-2xl">
                            <div class="carousel-item active h-80 md:rounded-t-2xl bg-2 bg-cover" data-bs-interval="5000">
                                <!-- <img src="@/assets/media/projects/spda 1.webp"
                                    class="d-block w-100 rounded-t-2xl h-80" alt="..."> -->
                            </div>
                        </div>
                    </div>
                    <div id="carouselSPDAXS" class="carousel slide xl:size-full rounded-t-2xl md:hidden">
                        <div class="carousel-inner rounded-t-2xl">
                            <div class="carousel-item active md:rounded-t-2xl" data-bs-interval="5000">
                                <img src="@/assets/media/projects/spda 1.webp"
                                    class="d-block w-100 rounded-t-2xl" alt="...">
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center items-center py-12 text-justify w-12/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                        <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                            xs:max-xl:text-2xl xs:max-md:mb-4
                            xl:max-2xl:text-xl xl:mb-5">SPDA</h3>
                        <p class="text-base 
                            xs:max-md:text-sm
                            xl:max-2xl:text-sm">O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é
                            cuidadosamente
                            dimensionado com uma malha precisa, distância adequada entre descidas e equipotencialização
                            eficaz. Essas características garantem uma proteção robusta contra raios, aumentando a
                            segurança
                            das instalações e reduzindo riscos. Conforme as normas rigorosas, o SPDA assegura alta
                            confiabilidade e segurança para as instalações e seus operadores.</p>
                    </div>
                    <div class="bg-[#e8e8e8] h-fit rounded-2xl mt-10 mx-4 
                        xs:max-xl:hidden">
                        <!-- <div id="carouselFotos" class="carousel slide carousel-fade h-fit border-2 xl:size-full rounded-2xl"
                            data-bs-ride="carousel">
                            <div class="carousel-inner rounded-t-2xl">
                                <div class="carousel-item rounded-2xl active bg-9 bg-cover bg-center h-72"
                                    data-bs-interval="2500"></div>
                                <div class="carousel-item rounded-2xl bg-1 bg-cover bg-center h-72" data-bs-interval="2500">
                                </div>
                                <div class="carousel-item rounded-2xl bg-4 bg-cover bg-center h-72" data-bs-interval="2500">
                                </div>
                                <div class="carousel-item rounded-2xl bg-7 bg-cover bg-center h-72" data-bs-interval="2500">
                                </div>
                                <div class="carousel-item rounded-2xl bg-10 bg-cover bg-center h-72"
                                    data-bs-interval="2500"></div>
                                <div class="carousel-item rounded-2xl bg-5 bg-cover bg-center h-72" data-bs-interval="2500">
                                </div>
                                <div class="carousel-item rounded-2xl bg-8 bg-cover bg-center h-72" data-bs-interval="2500">
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 xl:rounded-l-2xl"
                                type="button" data-bs-target="#carouselFotos" data-bs-slide="prev">
                                <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 "
                                type="button" data-bs-target="#carouselFotos" data-bs-slide="next">
                                <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="flex h-full w-fit col-span-2 bg-[#e8e8e8] m-4 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:mx-auto xs:max-xl:flex-col xs:max-xl:rounded-t-2xl">
                <div id="carouselLumi"
                    class="carousel slide size-full mr-4 border-2 xs:size-full xl:rounded-l-2xl xs:max-xl:rounded-t-2xl"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators rounded-t-2xl">
                        <button type="button" data-bs-target="#carouselLumi" data-bs-slide-to="0"
                            class="active bg-white" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselLumi" data-bs-slide-to="1" class="bg-white"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselLumi" data-bs-slide-to="2" class="bg-white"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselLumi" data-bs-slide-to="3" class="bg-white"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselLumi" data-bs-slide-to="4" class="bg-white"
                            aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner xl:rounded-l-2xl xs:max-xl:rounded-t-2xl">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src="@/assets/media/projects/lumi 1.webp"
                                class="d-block w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/projects/lumi 2.webp"
                                class="d-block m-auto w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/projects/lumi 3.webp"
                                class="d-block m-auto w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/projects/lumi 4.webp"
                                class="d-block m-auto w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="@/assets/media/projects/lumi 5.webp"
                                class="d-block m-auto w-100 xs:max-xl:rounded-t-2xl xl:rounded-l-2xl" alt="...">
                            <div class="carousel-caption d-none d-md-block text-white bg-black opacity-80">
                                <h5></h5>
                            </div>
                        </div>

                    </div>
                    <button
                        class="carousel-control-prev hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 xl:rounded-l-2xl xs:max-xl:rounded-tl-2xl"
                        type="button" data-bs-target="#carouselLumi" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left" style="color: #131313;"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next hover:bg-black hover:bg-opacity-15 transition ease-in-out duration-500 xs:max-xl:rounded-tr-2xl"
                        type="button" data-bs-target="#carouselLumi" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right" style="color: #131313;"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div
                    class="flex flex-col justify-center items-center text-justify w-11/12 px-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Luminotécnico</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">No Luminotécnico, o dimensionamento de área, o cálculo de lumens e o
                        cálculo de
                        potência das luminárias são essenciais para criar ambientes bem iluminados e eficientes. Com
                        precisão nos cálculos, garantimos a quantidade ideal de luz para cada espaço, otimizando o
                        consumo de energia e melhorando a qualidade da iluminação. A conformidade com as normas
                        técnicas
                        assegura um projeto seguro e eficaz, adaptado às necessidades específicas de cada ambiente.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
.banner-projects {
    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    /* Adicionar um degradê de opacidade */
    background: linear-gradient(to left,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-1 {
    background-image: url('@/assets/media/projects/projetos.webp');
}

.bg-2 {
    background-image: url('@/assets/media/projects/spda 1.webp');
}

.bg-3 {
    background-image: url('@/assets/media/projects/projetos-3.webp');
}

.bg-4 {
    background-image: url('@/assets/media/projects/projeto geradores 4.webp');
}

.bg-5 {
    background-image: url('@/assets/media/projects/projeto geradores 5.webp');
}

.bg-6 {
    background-image: url('@/assets/media/projects/projeto geradores 6.webp');
}

.bg-7 {
    background-image: url('@/assets/media/projects/projeto geradores 7.webp');
}

.bg-8 {
    background-image: url('@/assets/media/projects/projeto geradores 8.webp');
}

.bg-9 {
    background-image: url('@/assets/media/projects/projeto silk 1.webp');
}

.bg-10 {
    background-image: url('@/assets/media/projects/projeto silk 2.webp');
}

.bg-11 {
    background-image: url('@/assets/media/projects/projeto geradores 1.webp');
}

.bg-12 {
    background-image: url('@/assets/media/projects/projeto geradores 2.webp');
}

.bg-13 {
    background-image: url('@/assets/media/projects/projeto geradores 3.webp');
}
</style>