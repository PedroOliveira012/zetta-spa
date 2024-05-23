<template>
    <div class="grid gap-4 grid-cols-1 grid-rows-3 place-content-evenly mt-24">
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-32 h-12/12">
            <div class="w-12/12  relative">
                <h3 class="text-6xl mb-6 pt-8">
                    Painéis elétricos
                </h3>
                <p class="text-2xl pb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Ut iaculis vestibulum nisl placerat gravida. Donec eget tempor metus, sit amet aliquet tellus.</p>
                <router-link to="/panels">
                    <button class="absolute bottom-0 right-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#00daf3] to-[#0095a5] hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-180 dark:bg-white rounded-md group-hover:bg-opacity-0">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div class="border-2 rounded-r-full">
                <p>imagem</p>
            </div>
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div class="border-2 rounded-l-full">
                <p>imagem</p>
            </div>
            <div class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-8">
                    Projetos elétricos
                </h3>
                <p class="text-2xl pb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Ut iaculis vestibulum nisl placerat gravida. Donec eget tempor metus, sit amet aliquet tellus.</p>
                
                    <button class="absolute bottom-0 right-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#00daf3] to-[#0095a5] hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-180 dark:bg-white rounded-md group-hover:bg-opacity-0">
                                <router-link to="/projects">
                                    Saiba mais!
                                </router-link>
                            </span>
                    </button>
            </div>
            
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-8">
                    Robôs sinalizadores
                </h3>
                <p class="text-2xl pb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Ut iaculis vestibulum nisl placerat gravida. Donec eget tempor metus, sit amet aliquet tellus.</p>
                <router-link to="/robots">
                    <button class="absolute bottom-0 right-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#00daf3] to-[#0095a5] hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-180 dark:bg-white rounded-md group-hover:bg-opacity-0">
                            Saiba mais!
                        </span>
                    </button>
                </router-link>
            </div>
            <div class="border-2 rounded-r-full">
                <p>imagem</p>
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