<template>
    <section>
        <div class="flex justify-center items-center h-96 mb-8 border-[#a1dfe7] border-b banner-projects
            lg:max-xl:h-80
            xs:max-lg:h-36">
            <div class="absolute text-6xl flex justify-center">
                <h2 class="text-6xl text-[#012a62] font-bold uppercase xs:max-md:text-4xl text-center mb-6">Projetos elétricos</h2>
            </div>
        </div>
        <div class="grid grid-cols-2 px-12
        xs:max-xl:grid-cols-1 xs:max-xl:px-2">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl card-1 bg-center
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-40 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-center items-center text-justify w-8/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Encaminhamento de rede, potência e comando</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Nossos sistemas de Encaminhamento de Rede, Potência e Comando são projetados com detalhamento mecânico (eletroduto, eletrocalha, perfilados etc.) e elétrico (bolhas para orientação do instalador) precisos para atender às necessidades específicas de cada cliente. Garantindo alta qualidade e eficiência, esses sistemas otimizam o espaço de instalação e facilitam o acesso para manutenção, assegurado assim confiabilidade e segurança tanto para a instalação quanto para os operadores.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl card-2 bg-center
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-40 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-center items-center text-justify w-8/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">SPDA</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é cuidadosamente dimensionado com uma malha precisa, distância adequada entre descidas e equipotencialização eficaz. Essas características garantem uma proteção robusta contra raios, aumentando a segurança das instalações e reduzindo riscos. Conforme as normas rigorosas, o SPDA assegura alta confiabilidade e segurança para as instalações e seus operadores.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl card-3 bg-center
                 xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-40 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-center items-center text-justify w-8/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Cálculos de infraestrutura</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Os cálculos de infraestrutura englobam eletrodutos, eletrocalhas e perfilados, garantindo uma instalação eficiente e segura. Com dimensionamento preciso, esses cálculos asseguram a correta distribuição de cabos, otimização do espaço e facilidade de manutenção. A conformidade com as normas técnicas garante a confiabilidade e a segurança das instalações, proporcionando um sistema robusto e bem estruturado.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
             xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl card-4 bg-center
                 xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-40 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-center items-center text-justify w-8/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-3xl text-center text-[#012a62] font-bold uppercase
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Iluminotécnico</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Na iluminotécnica, o dimensionamento de área, o cálculo de lumens e o cálculo de potência das luminárias são essenciais para criar ambientes bem iluminados e eficientes. Com precisão nos cálculos, garantimos a quantidade ideal de luz para cada espaço, otimizando o consumo de energia e melhorando a qualidade da iluminação. A conformidade com as normas técnicas assegura um projeto seguro e eficaz, adaptado às necessidades específicas de cada ambiente.</p>
                </div>
            </div>
        </div>
    </section>
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
 .banner-projects {
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
    .card-1{
        background-image: url('@/assets/media/projects/projetos.jpg');
    }
    .card-2{
        background-image: url('@/assets/media/projects/projetos-2.jpg');
    }
    .card-3{
        background-image: url('@/assets/media/projects/projetos-3.jpg');
    }
    .card-4{
        background-image: url('@/assets/media/projects/projetos-4.jpg');
    }
</style>