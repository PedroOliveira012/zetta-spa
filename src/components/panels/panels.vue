<template>
    <div class="bg-[#777777] h-96 mb-24">banner</div>
    <div class="text-6xl flex justify-center mb-12">
        <h2>Painéis elétricos</h2>
    </div>
    <div class="grid gap-4 grid-cols-1 grid-rows-3 place-content-evenly mt-24">
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-32 h-12/12">
            <div v-motion-slide-visible-once-left :duration="1000" class="w-12/12  relative">
                <h3 class="text-6xl mb-6 pt-12">
                    CCM CLP
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class=" border-2 border-cyan-500 rounded-r-full">
                <p>imagem</p>
            </div>
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-12">
                    QGBT
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div v-motion-slide-visible-once-left :duration="1000" class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-12">
                    QGD
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full">
                <p>imagem</p>
            </div>
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-12">
                    Remotas
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div v-motion-slide-visible-once-left :duration="1000" class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-12">
                    Quadros de iluminação e tomadas
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="border-2 border-cyan-500 rounded-r-full">
                <p>imagem</p>
            </div>
        </section>
        <section class="grid gap-4 grid-cols-2 grid-rows-1 content-center m-auto pl-36 pr-36 pb-24">
            <div v-motion-slide-visible-once-left :duration="1000" class="border-2 border-cyan-500 rounded-l-full">
                <p>imagem</p>
            </div>
            <div v-motion-slide-visible-once-right :duration="1000" class="w-12/12 relative">
                <h3 class="text-6xl mb-6 pt-12">
                    Média tensão SIMOSEC SIEMENS
                </h3>
                <p class="text-2xl pb-12">consectetur adipiscing elit. Vivamus eu iaculis velit, in malesuada odio. Morbi nec ligula ut lectus convallis efficitur. Nulla hendrerit mattis arcu, ac molestie enim tempor sed. Integer dui lectus, molestie eu varius vel, dignissim at odio. Quisque tristique dolor laoreet, semper tellus non, hendrerit metus.</p>
            </div>
            
        </section>
    </div>
    <div>
        <h3 class="text-5xl ml-24 mb-6 pt-12">Conheça alguns dos nossos cases mais recentes: </h3>
        <section class="mx-auto">
            <div id="carouselCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner mx-auto">
                <div class="carousel-item active">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova linha de produção de porcelanatos Embramaco – Santa Gertrudes – SP - 2022</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg> 
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova fábrica de chocolates Harald – Santana de Parnaíba – SP - 2022</h5>
                    </div>           
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova linha do Kitkat – Nestlé Garoto – Caçapava – SP - 2023</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nova fábrica de rações Nestlé Purina – Vargeão – SC - 2023</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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