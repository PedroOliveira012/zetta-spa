<template>
    <section>
        <div class="bg-[#777777] h-96 mb-24">banner</div>
        <div class="text-6xl flex justify-center mb-8">
            <h2>Projetos elétricos</h2>
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