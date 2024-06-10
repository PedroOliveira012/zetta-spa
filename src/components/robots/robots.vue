<template>
    <section>
        <div class="bg-[#777777] h-96 mb-24">banner</div>
        <div class="text-6xl flex justify-center mb-12">
            <h2>Robô sinalizador</h2>
        </div>
        <div class="grid grid-cols-2 px-12">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#F5F5F5] m-12 rounded-2xl hover:shadow-xl duration-300 left-card">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                <div class="w-8/12 p-8">
                    <h3 class="text-5xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-2xl">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#F5F5F5] m-12 rounded-2xl hover:shadow-xl duration-300">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                <div class="w-8/12 p-8">
                    <h3 class="text-5xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-2xl">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-left :duration="1000" class="flex h-96 bg-[#F5F5F5] m-12 rounded-2xl hover:shadow-xl duration-300 left-card">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                <div class="w-8/12 p-8">
                    <h3 class="text-5xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-2xl">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="flex h-96 bg-[#F5F5F5] m-12 rounded-2xl hover:shadow-xl duration-300">
                <div class="w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">foto</div>
                <div class="w-8/12 p-8">
                    <h3 class="text-5xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-2xl">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
        </div>
        <!-- titulo -->
        <div class="text-6xl flex justify-center m-12">
            <h2>Características</h2>
        </div>
        <!-- card caracteristicas -->
        <div class="w-8/12 mx-auto">
            <div v-motion-slide-visible-once-bottom :duration="1000" class="flex h-96 bg-[#F5F5F5] m-12 rounded-2xl hover:shadow-xl duration-300">
                <!-- <img src="@/assets/photorealistic-scene-with-warehouse-logistics-operations.jpg" alt="" class="w-4/12 rounded-l-2xl"> -->
                <div class="flex justify-center itens-center w-4/12 h-full m-auto bg-[#777777] rounded-l-xl">
                    <!-- <img src="@/assets/robot.png" alt="" class="rounded-l-xl opacity-30 border-black"> -->
                </div>
                <div class="w-5/12 my-4 ml-6 border-r-2 border-black">
                    <h3 class="text-5xl">Físicas</h3>
                    <ul>
                        <li class="text-2xl">
                            <i class="fa-solid fa-person mr-2 my-4"></i>
                            <span>Peso do corpo: 10Kg</span>
                        </li>
                        <li class="text-2xl">
                            <i class="fa-solid fa-box-archive mr-2 my-4"></i>
                            <span>Peso da caixa: 43Kg</span>
                        </li>
                        <li class="text-2xl">
                            <i class="fa-solid fa-weight-hanging mr-2 my-4"></i>
                            <span>Peso total: 53Kg</span>
                        </li>
                        <li class="text-2xl ">
                            <i class="fa-solid fa-ruler mr-2 my-4"></i>
                            <span>Altura: 2,05m</span>
                        </li>
                    </ul>
                </div>
                <div class="w-5/12 p-4 ml-4">
                    <h3 class="text-5xl">Elétricas</h3>
                    <ul>
                        <li class="text-2xl">
                            <i class="fa-solid fa-car-battery mr-2 my-4"></i>
                            <span>Bateria: 63 A/h x 12 Vcc</span>
                        </li>
                        <li class="text-2xl">
                            <i class="fa-solid fa-heart-pulse mr-2 my-4"></i>
                            <span>Vida da bateria: 48 horas</span>
                        </li>
                        <li class="text-2xl">
                            <i class="fa-solid fa-bolt mr-2 my-4"></i>
                            <span>Tempo de recarga 10 horas</span>
                        </li>
                    </ul>
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