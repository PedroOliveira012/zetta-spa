<template>
    <div class="bg-[#777777] h-96 mb-16
        lg:max-xl:h-80
        xs:max-lg:h-64">banner</div>
    <div class="text-6xl flex justify-center mb-12">
        <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Painéis elétricos</h2>
    </div>
    <div class="grid gap-4 grid-cols-1 mt-24
    xs:max-md:gap-1 xs:max-md:mt-0">
        <section class="flex items-center gap-4 m-auto px-12 pb-32 h-full w-full
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0
        ">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    CCM CLP
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    Nosso CCM (Centro de Controle de Máquinas) é projetado conforme a norma ABNT NBR IEC 61439-1&2, garantindo alto desempenho e confiabilidade. Com acesso frontal a todas as conexões, facilita intervenções rápidas e mantém a operação contínua. O design otimiza o espaço de instalação e proporciona acesso fácil ao interior do painel, garantindo segurança tanto para a instalação quanto para os operadores.    
                </p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class=" border-2 border-cyan-500 rounded-r-full h-96 lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full h-96 lg:w-6/12
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    QGBT
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.
                </p>
            </div>
            
        </section>
        <section class="flex items-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    Banco de Capacitores
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    Os Painéis de Banco de Capacitores são projetados para atender às necessidades específicas dos clientes, com alta qualidade e correção automática do fator de potência, garantindo eficiência conforme a norma ABNT NBR IEC 61439-1&2. Conexões frontais reduzem o tempo de intervenção, e o design otimiza o espaço e facilita o acesso, assegurando confiabilidade e segurança para instalações e operadores.  
                </p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full h-96 lg:w-6/12
           sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full h-96 lg:w-6/12
           sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    Remotas
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.
                </p>
            </div>
            
        </section>
        <section class="flex items-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-4 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-xl:text-4xl">
                    Quadros de iluminação e tomadas
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    O Quadro de Iluminação e Tomadas atende aos rigorosos requisitos da norma ABNT NBR IEC 61439-1&2, garantindo desempenho certificado em projeto, construção e operação. Com acesso frontal para todas as conexões, proporciona rápida intervenção e mantém a continuidade do serviço. O design é otimizado para economizar espaço na instalação e oferecer fácil acessibilidade ao interior do painel, priorizando a confiabilidade e a segurança tanto da instalação quanto das pessoas envolvidas.    
                </p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full h-96 lg:w-6/12
           sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
        </section>
        <section class="flex items-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full h-96 lg:w-6/12
           sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-xl:text-4xl">
                    Média tensão SIMOSEC SIEMENS
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.
                </p>
            </div>
            
        </section>
    </div>
    <div class="xs:max-sm:mx-auto xs:max-sm:w-11/12">
        <h3 class="text-5xl ml-24 mb-6 xs:text-3xl xs:ml-0 xs:text-center xs:mx-auto">Conheça alguns dos nossos cases mais recentes: </h3>
        <section class="mx-auto">
            <div id="carouselCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner mx-auto">
                <div class="carousel-item active">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova linha de produção de porcelanatos Embramaco – Santa Gertrudes – SP - 2022</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg> 
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova fábrica de chocolates Harald – Santana de Parnaíba – SP - 2022</h5>
                    </div>           
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova linha do Kitkat – Nestlé Garoto – Caçapava – SP - 2023</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova fábrica de rações Nestlé Purina – Vargeão – SC - 2023</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
