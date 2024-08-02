<template>
    <section>
        <div class="flex justify-center items-center h-96 mb-8 border-[#a1dfe7] border-b banner-robots
            lg:max-xl:h-80
            xs:max-lg:h-36">
            <div class="absolute text-6xl flex justify-center">
                <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Robô sinalizador</h2>
            </div>
        </div>
        <div class="grid grid-cols-2 px-12
        xs:max-xl:grid-cols-1 xs:max-xl:px-2">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl robo-1 bg-cover bg-center
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-96 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-center items-center text-justify w-8/12 p-8 xs:max-md:w-fit xs:max-md:py-6">
                    <h3 class="text-xl text-center xs:max-lg:text-xl lg:max-xl:text-xl lg:mb-6
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">O que é o robô sinalizador</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">O Robô sinalizador DISCOMPLESIN é um Dispositivo Complementar de Sinalização, equipado com bandeira e luz intermitente laranja, destinado a complementar a sinalização em rodovias, alertando motoristas sobre condições inseguras à frente. Projetado para operar em condições climáticas adversas, possui sistemas manuais e automáticos para controle de iluminação e sinalização, garantindo operação segura em baixa visibilidade. Com autonomia de até 52 horas, supera significativamente a capacidade de operadores humanos.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl robo-2 bg-cover bg-top
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-96 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-evenly items-center w-8/12 p-8 xs:max-md:w-full">
                    <h3 class="text-xl text-center xs:max-lg:text-xl lg:max-xl:text-xl lg:mb-6
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Diurno</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Para garantir eficiência e segurança durante operações diurnas, nosso robô será equipado com:</p>
                    <ul class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">
                        <li class="list-disc">Bandeira</li>
                    </ul>
                </div>
            </div>
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full bg-[#777777] md:rounded-l-xl robo-3 bg-cover bg-center
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-96 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-evenly items-center w-8/12 px-8 py-6 xs:max-md:w-full">
                    <h3 class="text-xl text-center xs:max-lg:text-xl lg:max-xl:text-xl lg:mb-6
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Noturno</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Para garantir eficiência e segurança durante operações noturnas, nosso robô será equipado com:</p>
                    <ul class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">
                        <li class="list-disc">Holofote</li>
                        <li class="list-disc">Luz laranja</li>
                        <li class="list-disc">Luz na caixa</li>
                    </ul>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:flex-col xs:max-md:h-fit xs:max-md:w-11/12 xs:max-md:mx-auto">
                <div class="w-4/12 h-full border border-[#777777] md:rounded-l-xl robo-4 bg-cover bg-top
                xs:max-md:size-full xs:max-md:rounded-t-2xl xs:max-md:h-96 xs:max-md:bg-cover"></div>
                <div class="flex flex-col justify-evenly items-center w-8/12 p-8 xs:max-md:w-full">
                    <!-- <h3 class="text-4xl xs:max-lg:text-3xl lg:text-4xl lg:mb-6 xs:max-md:mb-4 xl:max-2xl:text-2xl">Diurno / Noturno</h3>
                    <p class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg"> Para garantir eficiência e segurança em ambas as operações (diurnas e noturnas), nosso robô será equipado com: </p>
                    <ul class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">
                        <li class="list-disc">Holofote</li>
                        <li class="list-disc">Luz laranja</li>
                        <li class="list-disc">Luz na caixa</li>
                     </ul> -->
                    <h3 class="text-xl text-center xs:max-lg:text-xl lg:max-xl:text-xl lg:mb-6
                    xs:max-xl:text-2xl xs:max-md:mb-4 
                    xl:max-2xl:text-xl xl:mb-5">Diurno / Noturno</h3>
                    <p class="text-base 
                    xs:max-md:text-sm 
                    xl:max-2xl:text-sm">Para garantir eficiência e segurança em ambas as operações (diurnas e noturnas), nosso robô será equipado com:</p>
                    <ul class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">
                        <li class="list-disc">Holofote</li>
                        <li class="list-disc">Luz laranja</li>
                        <li class="list-disc">Luz na caixa</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- titulo -->
        <div class="text-6xl flex justify-center mt-12">
            <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Características</h2>
        </div>
        <!-- card caracteristicas -->
        <div v-motion-slide-visible-once-bottom :duration="1000" class="flex justify-center w-full mx-auto">
            <div class="group flex justify-center h-80 w-5/12 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-xl:w-11/12
            xs:max-sm:flex-col xs:max-sm:h-fit xs:max-sm:w-full
            lg:max-2xl:w-7/12">
                <div class="w-96 my-4 border-gray-400 
                sm:border-r
                xs:max-sm:w-11/12 xs:max-sm:border-b xs:max-sm:mx-auto">
                    <div class="flex justify-center w-full h-1/6">
                        <h3 class="text-5xl xs:max-md:text-3xl">Físicas</h3>
                    </div>
                    <div class="flex justify-center w-full h-5/6">
                        <ul>
                            <li class="text-xl xs:max-md:text-base">
                                <i class="fa-solid fa-person mr-2 my-3"></i>
                                <span>Peso do corpo: 10Kg</span>
                            </li>
                            <li class="text-xl xs:max-md:text-base">
                                <i class="fa-solid fa-box-archive mr-2 my-3"></i>
                                <span>Peso da caixa: 43Kg</span>
                            </li>
                            <li class="text-xl xs:max-md:text-base">
                                <i class="fa-solid fa-weight-hanging mr-2 my-3"></i>
                                <span>Peso total: 53Kg</span>
                            </li>
                            <li class="text-xl xs:max-md:text-base ">
                                <i class="fa-solid fa-ruler mr-2 my-3"></i>
                                <span>Altura: 2,05m</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-96 my-4 
                xs:max-sm:w-11/12 xs:max-sm:m-auto xs:max-sm:mb-4">
                    <div class="flex justify-center w-full h-1/6">
                        <h3 class="text-5xl xs:max-md:text-3xl">Elétricas</h3>
                    </div>
                    <div class="flex justify-center w-full h-5/ lg:text-2xl6 xs:max-md:text-xs">
                        <ul>
                        <li class="text-xl xs:max-md:text-base">
                            <i class="fa-solid fa-car-battery mr-2 my-3"></i>
                            <span>Bateria: 63 A/h x 12 Vcc</span>
                        </li>
                        <li class="text-xl xs:max-md:text-base">
                            <i class="fa-solid fa-heart-pulse mr-2 my-3"></i>
                            <span>Vida da bateria: 48 h</span>
                        </li>
                        <li class="text-xl xs:max-md:text-sm">
                            <i class="fa-solid fa-bolt mr-2 my-3"></i>
                            <span>Tempo de recarga: 10 horas</span>
                        </li>
                    </ul>
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
<style>
   .banner-robots {
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
    .robo-1{
            background-image: url('@/assets/media/robots/robo.jpg');
    }
    .robo-2{
        background-image: url('@/assets/media/robots/robo2.jpg');
    }
    .robo-3{
        background-image: url('@/assets/media/robots/robo3.jpg');
    }
    .robo-4{
        background-image: url('@/assets/media/robots/robo4.jpg');
    }
</style>