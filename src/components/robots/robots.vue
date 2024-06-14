<template>
    <section>
        <div class="bg-[#777777] h-96 mb-24">banner</div>
        <div class="text-6xl flex justify-center mb-12">
            <h2>Robô sinalizador</h2>
        </div>
        <div class="grid grid-cols-2 px-12">
            <div v-motion-slide-left :duration="1000" class="flex h-80 bg-[#e8e8e8] rounded-2xl m-12 hover:shadow-2xl duration-500">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 p-8">
                    <h3 class="text-5xl ">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl ">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-80 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                 <div class="flex flex-col justify-center items-center w-8/12 p-8">
                    <h3 class="text-5xl ">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl ">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-left :duration="1000" class="flex h-80 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500 left-card">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                 <div class="flex flex-col justify-center items-center w-8/12 p-8">
                    <h3 class="text-5xl ">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl ">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="flex h-80 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                 <div class="flex flex-col justify-center items-center w-8/12 p-8">
                    <h3 class="text-5xl ">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl ">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
        </div>
        <!-- titulo -->
        <div class="text-6xl flex justify-center mt-12">
            <h2>Características</h2>
        </div>
        <!-- card caracteristicas -->
        <div v-motion-slide-visible-once-bottom :duration="1000" class="flex justify-center w-full mx-auto">
            <!-- <div  class="group flex h-80 w-7/12 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500">
                
                <div class="flex justify-center items-center relative w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">
                    <p class="absolute group-hover:opacity-0 duration-300">foto a</p>
                    <p class="absolute opacity-5 group-hover:opacity-100 duration-300">foto b</p>
                </div> -->
            <div class="group flex h-80 w-5/12 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500">
                <!-- <div class="absolute flex justify-center items-center w-4/12 h-full size-fit m-auto bg-cover rounded-l-xl imagem1"></div>
                <div class="absolute flex justify-center items-center w-4/12 h-full size-fit m-auto bg-cover rounded-l-xl opacity-5 group-hover:opacity-100 duration-300 imagem2"></div> -->
            
                <!-- <img src="@/assets/robo2.jpg" class="absolute opacity-0 group-hover:opacity-100 duration-300">foto b</img> -->
                <div class="w-96 my-4 border-r-2 border-black">
                    <div class="flex justify-center w-full h-1/6">
                        <h3 class="text-5xl">Físicas</h3>
                    </div>
                    <div class="flex justify-center w-full h-5/6">
                        <ul>
                            <li class="text-xl">
                                <i class="fa-solid fa-person mr-2 my-3"></i>
                                <span>Peso do corpo: 10Kg</span>
                            </li>
                            <li class="text-xl">
                                <i class="fa-solid fa-box-archive mr-2 my-3"></i>
                                <span>Peso da caixa: 43Kg</span>
                            </li>
                            <li class="text-xl">
                                <i class="fa-solid fa-weight-hanging mr-2 my-3"></i>
                                <span>Peso total: 53Kg</span>
                            </li>
                            <li class="text-xl ">
                                <i class="fa-solid fa-ruler mr-2 my-3"></i>
                                <span>Altura: 2,05m</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-96 my-4">
                    <div class="flex justify-center w-full h-1/6">
                        <h3 class="text-5xl">Elétricas</h3>
                    </div>
                    <div class="flex justify-center w-full h-5/6">
                        <ul>
                        <li class="text-xl">
                            <i class="fa-solid fa-car-battery mr-2 my-3"></i>
                            <span>Bateria: 63 A/h x 12 Vcc</span>
                        </li>
                        <li class="text-xl">
                            <i class="fa-solid fa-heart-pulse mr-2 my-3"></i>
                            <span>Vida da bateria: 48 h</span>
                        </li>
                        <li class="text-xl">
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
