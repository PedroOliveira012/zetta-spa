<template>
    <div class="flex justify-center items-center h-96 mb-8 border-[#a1dfe7] border-b banner-panels
        lg:max-xl:h-80
        xs:max-lg:h-36">
        <div class="absolute text-6xl flex justify-center">
            <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Painéis elétricos</h2>
        </div>
    </div>
    <div class="grid gap-4 grid-cols-1 mt-24
    xs:max-md:gap-1 xs:max-md:mt-0">
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-32 h-full w-full
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
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full h-fit 
            lg:w-fit
            md:bg-cover md:bg-center
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <img src="@/assets/media/panels/painel ccm.jpg" class="h-96 rounded-r-full
                lg:w-full
                xs:max-lg:rounded-2xl sm:max-lg:w-full sm:max-lg:mx-auto 
                xs:max-lg:h-full xs:max-sm:w-11/12" alt="">
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full h-fit
            lg:w-fit
            md:bg-cover md:bg-center
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
            <img src="@/assets/media/panels/qgbt.jpg" class="h-96 rounded-l-full
                lg:w-full
                xs:max-lg:rounded-2xl sm:max-lg:w-full sm:max-lg:mx-auto
                xs:max-lg:h-full xs:max-sm:w-11/12" alt="">
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    QGBT
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    Oferecemos soluções para distribuição de energia em baixa tensão com os sistemas Ri4Power TS8 e VX25 Ri4Power, suportando até 5500 A e 100 kA. Disponíveis em aço carbono e inox, esses sistemas apresentam montagem compartimentada, desde a forma 1 até 4b, e aceitam componentes de principais marcas, mantendo certificação conforme a norma IEC 61439-1/2. Entre os produtos dessa linha, incluem-se QGBT's, QF's, Bancos de Capacitores, Centros de Controle de Motores (CCM's) e CCM's Inteligentes, oferecendo versatilidade e alta qualidade para diferentes necessidades.
                </p>
            </div>
            
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-sm:text-4xl">
                    Banco de Capacitores
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    Os Painéis de Banco de Capacitores são projetados para atender às necessidades específicas dos clientes, com alta qualidade e correção automática do fator de potência, garantindo eficiência conforme a norma ABNT NBR IEC 61439-1&2. Conexões frontais reduzem o tempo de intervenção, e o design otimiza o espaço e facilita o acesso, assegurando confiabilidade e segurança para instalações e operadores.  
                </p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full h-fit 
            lg:w-fit
            md:bg-cover md:bg-center
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <img src="@/assets/media/panels/banco de capacitor.jpg" class="h-96 rounded-r-full
                lg:w-full
                xs:max-lg:rounded-2xl sm:max-lg:w-full sm:max-lg:mx-auto 
                xs:max-lg:h-full xs:max-sm:w-11/12" alt="">
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
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
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="lg:w-6/12 relative py-4 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-xl:text-4xl">
                    Quadros de iluminação e tomadas
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    O Quadro de Iluminação e Tomadas atende aos rigorosos requisitos da norma ABNT NBR IEC 61439-1&2, garantindo desempenho certificado em projeto, construção e operação. Com acesso frontal para todas as conexões, proporciona rápida intervenção e mantém a continuidade do serviço. O design é otimizado para economizar espaço na instalação e oferecer fácil acessibilidade ao interior do painel, priorizando a confiabilidade e a segurança tanto da instalação quanto das pessoas envolvidas.    
                </p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full h-fit 
            lg:w-fit
            md:bg-cover md:bg-center
            sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
            xs:max-sm:h-48 xs:max-sm:w-11/12">
                <img src="@/assets/media/panels/qdfl.jpg" class="h-96 rounded-r-full
                lg:w-full
                xs:max-lg:rounded-2xl sm:max-lg:w-full sm:max-lg:mx-auto 
                xs:max-lg:h-full xs:max-sm:w-11/12" alt="">
            </div>
        </section>
        <section class="flex items-center justify-center gap-4 m-auto px-12 pb-24
        xs:max-lg:flex-col-reverse xs:max-lg:mt-12 xs:max-lg:pb-8 xs:max-sm:px-0">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full h-fit
                lg:w-fit
                md:bg-cover md:bg-center
                sm:max-lg:h-80 xs:max-lg:rounded-2xl sm:max-lg:w-8/12 sm:max-lg:mx-auto 
                xs:max-sm:h-48 xs:max-sm:w-11/12">
                <img src="@/assets/media/panels/simosec.webp" class="h-96 rounded-l-full
                    lg:w-full
                    xs:max-lg:rounded-2xl sm:max-lg:w-full sm:max-lg:mx-auto
                    xs:max-lg:h-full xs:max-sm:w-11/12" alt="">
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="lg:w-6/12 relative py-8 xs:max-sm:w-11/12">
                <h3 class="text-6xl mb-6 xs:max-xl:text-4xl">
                    Média tensão SIMOSEC SIEMENS
                </h3>
                <p class="text-2xl xs:max-sm:text-base">
                    O painel SIMOSEC é um equipamento trifásico de uso abrigado, montado em fábrica e testado conforme as normas IEC 62271-200 e GB 3906, com invólucro metálico e barramento simples até 1250 A. Suporta até 24 kV e 25 kA, utilizando tecnologia de isolamento a ar e comutação com isolamento a gás. Com um design compacto, oferece segurança operacional, confiabilidade, baixa manutenção e segurança pessoal. Além de ser econômico e ecológico, é uma solução robusta para instalações elétricas de média tensão.
                </p>
            </div>
        </section>
    </div>
    <div class="xs:max-sm:mx-auto xs:max-sm:w-11/12">
        <h3 class="text-5xl ml-24 mb-6 
        sm:px-16 
        xs:text-3xl xs:ml-0 xs:text-center xs:mx-auto">Conheça alguns dos nossos cases mais recentes: </h3>
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
        background-image: url('@/assets/media/panels/qgbt.jpg');
    }
</style>
