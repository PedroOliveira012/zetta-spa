<template>
    <section class="mb-16">
        <div class="bg-[#777777] h-96 mb-16
        lg:max-xl:h-80
        sm:max-lg:h-64">banner</div>
        <div class="flex flex-col justify-center items-center mb-12">
            <h3 class="text-4xl mb-6">Bem-vindo à Zettatecck</h3>
            <p class="text-xl text-center w-6/12 text-justify
            sm:max-xl:text-lg sm:max-2xl:w-10/12 sm:max-xl:tracking-wider">
                Somos uma empresa especializada em tecnologia de alto nível. Trabalhamos no segmento de Engenharia Elétrica e Automação Industrial. 

                Buscamos agregar nossa experiência para ajudar no desenvolvimento e nas melhores soluções para nossos clientes. 

                Temos uma equipe altamente treinada e podemos lhe atender em todas as etapas do seu processo. Conheça um pouco mais da Zettatecck. Estamos a disposição para ajudar você a conquistar seus objetivos.
            </p>
        </div>
        <div class="flex flex-col justify-center items-center mb-12">
            <h3 class="text-4xl mb-6">Quem somos</h3>
            <p class="text-xl text-center w-6/12
            sm:max-xl:text-lg sm:max-2xl:w-10/12 sm:max-xl:tracking-wider">
                Fundada em 2011, a ZETTATECCK PROJETOS INDUSTRIAIS E AUTOMAÇÃO LTDA é especializada na fabricação de painéis elétricos de baixa tensão, controle e instrumentação, robôs sinalizadores, e na elaboração de projetos elétricos industriais e automação predial. Nossa missão é inovar constantemente, desenvolvendo soluções que reduzem custos e aumentam a produtividade e a qualidade. Comprometemo-nos a mitigar riscos de segurança do trabalho, garantindo um ambiente mais seguro para todos.
            </p>
        </div>
    </section>
    <section class="my-16">
        <div class="flex flex-col justify-center items-center mb-6">
            <h3 class="text-4xl mb-6">Pilares da nossa empresa</h3>
        </div>
        <!-- div que compreende as outras divs -->
        <div class="flex flex-row justify-evenly
        sm:max-xl:flex-wrap">
            <!-- 
                formatação dos cards:
                2xl: as tres alinhadas numa linha com espaçamento igual
                xl: as tres alinhadas numa linha com espaçamento igual
                lg: missao em cima e visao e valore em baixo 
                md: as tres empilhadas com w-6/12
                sm: as tres empilhadas com w-6/12
            -->

            <!-- div da missao -->
            <div class="flex justify-center items-center w-3/12
            xl:w-fit
            lg:max-xl:w-full lg:max-xl:mb-12
            sm:max-lg:w-full sm:max-lg:mb-8 sm:max-lg:w-6/12">
                <div class="border w-full h-96 px-12 py-12 rounded-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-1 duration-500
                xl:max-2xl:px-6 xl:w-10/12
                lg:max-xl:w-4/12
                sm:w-6/12">
                <div class="flex justify-center w-full h-1/6">
                    <i class="fa-solid fa-flag text-4xl mb-4"></i>
                </div>
                    <div class="flex justify-center w-full h-1/6">
                        <h4 class="text-2xl">Missão</h4>
                    </div>
                    <div class="h-5/6">
                        <p class="text-center tracking-wider text-sm xl:max-2xl:tracking-wide lg:max-xl:tracking-normal sm:max-md:text-xs sm:max-md:tracking-widest">
                            Desenvolver projetos, equipamentos e serviços inovadores, combinando tecnologia e criatividade para garantir a satisfação contínua dos nossos clientes. Valorizamos nossos colaboradores e fornecedores, incentivando o aperfeiçoamento constante de suas habilidades, visando ao sucesso e à prosperidade da empresa, da comunidade e de cada indivíduo.    
                        </p>
                    </div>
                </div>
            </div>

            <!-- div da visao -->
            <div class="flex justify-center items-center w-3/12
            xl:w-fit
            lg:max-xl:w-4/12
            sm:max-lg:w-full sm:max-xl:mb-8">
                <div class="border w-full h-96 px-12 py-12 rounded-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-1 duration-500
                xl:max-2xl:px-6 xl:w-10/12
                lg:max-xl:w-full
                sm:w-6/12">
                    <div class="flex justify-center w-full h-1/6">
                        <i class="fas fa-eye text-4xl"></i>
                    </div>
                    <div class="flex justify-center w-full h-1/6">
                        <h4 class="text-2xl">Visão</h4>
                    </div>
                    <div class="h-5/6">
                        <p class="text-center tracking-wider ">
                            Na ZETTATECCK, cultivamos a criatividade e a tecnologia em cada projeto, buscando sempre a satisfação dos nossos clientes. Acreditamos no crescimento contínuo e na prosperidade compartilhada da empresa e da comunidade.    
                        </p>
                    </div>
                </div>
            </div>

            <!-- div dos valores -->
            <div class="flex justify-center items-center w-3/12
            xl:w-fit
            lg:max-xl:w-4/12
            sm:max-lg:w-full sm:max-xl:mb-8">
                <div class="border w-full h-96 px-12 py-12 rounded-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-1 duration-500
                xl:max-2xl:px-6 xl:w-10/12
                lg:max-xl:w-full
                sm:w-6/12">
                    <div class="flex justify-center w-full h-1/6">
                        <i class="fas fa-handshake text-4xl mb-4"></i>
                    </div>
                    <div class="flex justify-center w-full h-1/6">
                        <h4 class="text-2xl">Valores</h4>
                    </div>
                    <div class="h-5/6">
                        <p class="text-center tracking-wider">
                            Produzimos equipamentos e serviços de alta qualidade, cumprindo prazos e custos planejados. Buscamos soluções tecnicamente viáveis e econômicas, aplicando sempre a melhor tecnologia, criatividade e flexibilidade.</p>
                    </div>
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