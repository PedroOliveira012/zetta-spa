<template>
    <section>
        <div class="flex justify-center items-center h-96 mb-8 border-[#a1dfe7] border-b
            lg:max-xl:h-80
            xs:max-lg:h-36">
            <img src="@/assets/banner/endless-constellation.svg" class="opacity-60 h-full w-full -z-10" alt="">
            <div class="absolute text-6xl flex justify-center">
                <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Projetos elétricos</h2>
            </div>
        </div>
        <div class="grid grid-cols-2 px-12
        xs:max-xl:grid-cols-1 xs:max-xl:px-2">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden card-1 bg-center"></div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-3xl xs:max-xl:text-2xl xs:max-md:mb-4 xl:max-2xl:text-xl xl:mb-5">Encaminhamento de rede, potência e comando</h3>
                    <p class="text-base xs:max-md:text-sm xl:max-2xl:text-sm">Nossos sistemas de Encaminhamento de Rede, Potência e Comando são projetados com detalhamento mecânico (eletroduto, eletrocalha, perfilados etc.) e elétrico (bolhas para orientação do instalador) precisos para atender às necessidades específicas de cada cliente. Garantindo alta qualidade e eficiência, esses sistemas otimizam o espaço de instalação e facilitam o acesso para manutenção, assegurado assim confiabilidade e segurança tanto para a instalação quanto para os operadores.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden card-2 bg-center"></div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-3xl xs:max-xl:text-2xl xs:max-md:mb-4 xl:max-2xl:text-xl xl:mb-5">SPDA</h3>
                    <p class="text-base xs:max-md:text-sm xl:max-2xl:text-sm">O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é cuidadosamente dimensionado com uma malha precisa, distância adequada entre descidas e equipotencialização eficaz. Essas características garantem uma proteção robusta contra raios, aumentando a segurança das instalações e reduzindo riscos. Conforme as normas rigorosas, o SPDA assegura alta confiabilidade e segurança para as instalações e seus operadores.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden card-3 bg-center"></div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-3xl xs:max-xl:text-2xl xs:max-md:mb-4 xl:max-2xl:text-xl xl:mb-5">Cálculos de infraestrutura</h3>
                    <p class="text-base xs:max-md:text-sm xl:max-2xl:text-sm">Os cálculos de infraestrutura englobam eletrodutos, eletrocalhas e perfilados, garantindo uma instalação eficiente e segura. Com dimensionamento preciso, esses cálculos asseguram a correta distribuição de cabos, otimização do espaço e facilidade de manutenção. A conformidade com as normas técnicas garante a confiabilidade e a segurança das instalações, proporcionando um sistema robusto e bem estruturado.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden card-4 bg-left-top"></div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-3xl xs:max-xl:text-2xl xs:max-md:mb-4 xl:max-2xl:text-xl xl:mb-5">Iluminotécnico</h3>
                    <p class="text-base xs:max-md:text-sm xl:max-2xl:text-sm">Na iluminotécnica, o dimensionamento de área, o cálculo de lumens e o cálculo de potência das luminárias são essenciais para criar ambientes bem iluminados e eficientes. Com precisão nos cálculos, garantimos a quantidade ideal de luz para cada espaço, otimizando o consumo de energia e melhorando a qualidade da iluminação. A conformidade com as normas técnicas assegura um projeto seguro e eficaz, adaptado às necessidades específicas de cada ambiente.</p>
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