<template>
    <section>
        <div class="bg-[#777777] h-96 mb-16
        lg:max-xl:h-80
        xs:max-lg:h-64">banner</div>
        <div class="text-6xl flex justify-center">
            <h2 class="text-6xl xs:max-md:text-4xl text-center mb-6">Projetos elétricos</h2>
        </div>
        <div class="grid grid-cols-2 px-12
        xs:max-xl:grid-cols-1 xs:max-xl:px-2">
            <div v-motion-slide-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-xl:text-3xl xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base xl:max-2xl:text-base">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-xl:text-3xl xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base xl:max-2xl:text-base">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-left :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-xl:text-3xl xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base xl:max-2xl:text-base">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="flex h-96 bg-[#e8e8e8] m-12 rounded-2xl hover:shadow-2xl duration-500
            xs:max-md:h-72 xs:max-md:w-11/12 xs:max-md:mx-auto xs:max-md:py-44">
                <div class="w-4/12 h-full bg-[#777777] rounded-l-xl xs:max-md:hidden">foto</div>
                <div class="flex flex-col justify-center items-center w-8/12 px-8 xs:max-md:w-full">
                    <h3 class="text-4xl xs:max-xl:text-3xl xs:max-md:mb-4 xl:max-2xl:text-2xl">Lorem ipsum dolor sit amet</h3>
                    <p class="text-xl xs:max-md:text-base xl:max-2xl:text-base">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio.</p>
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