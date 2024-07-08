<template>
    <section>
        <div class="bg-[#777777] h-96 mb-16
        lg:max-xl:h-80
        xs:max-lg:h-64">banner</div>
        <div class="text-6xl flex justify-center mb-12">
            <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Robô sinalizador</h2>
        </div>
        <div class="grid grid-cols-2 px-12
        xs:max-xl:grid-cols-1 xs:max-xl:px-2">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-lg:text-3xl lg:text-4xl lg:mb-6 xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-lg:text-3xl lg:text-4xl lg:mb-6 xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-lg:text-3xl lg:text-4xl lg:mb-6 xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-lg:text-3xl lg:text-4xl lg:mb-6 xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base lg:text-2xl xl:max-2xl:text-lg">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
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
