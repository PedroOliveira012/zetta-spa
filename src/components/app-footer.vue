<template>
    <div class="bg-[#131313]">
        <footer class="text-[#656567] p-24 xs:p-4 md:max-lg:py-8 md:max-lg:px-2">
            <div class="grid grid-cols-3 h-36 w-12/12 mx-auto
            lg:h-32 lg:text-base
            md:h-fit md:text-sm md:grid 
            xs:h-52 xs:text-sm xs:flex xs:flex-col">
                <div class="flex justify-center items-center px-6 w-full
                md:h-full md:border-r md:border-[#656567]
                xs:max-sm:w-fit xs:h-2/6 xs:max-md:border-b xs:border-[#656567]">
                    <img src="../assets/logos/logo zetta.png" alt="" class="
                    xs:max-md:h-full xs:max-lg:pb-3">
                </div>
                <div class="flex justify-center items-center m-auto md:h-full px-6
                xs:w-fit xs:h-3/6">
                    <div class="">
                        <h3>Onde estamos:</h3>
                        <a href="https://www.google.com.br/maps/place/Zettatecck+Projetos+Industriais+e+Automação/@-22.3694158,-47.4025012,17z/data=!3m1!4b1!4m6!3m5!1s0x94c877f989814a41:0x7beec8fd34f62c93!8m2!3d-22.3694208!4d-47.3999209!16s%2Fg%2F11v14mh22b?entry=ttu"
                        class="hover:text-[#cbcbce] duration-300">
                            <i class="fa-solid fa-location-dot mr-2"></i>
                            <span>R. João Sierra, 245 - Distrito Industrial II, Araras-SP</span>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center relative border-[#656567]
                md:items-center md:border-l md:border-[#656567] md:h-full
                sm:max-lg:justify-evenly sm:px-4
                xs:w-full xs:h-3/6 xs:max-md:border-t xs:px-1 xs:max-sm:justify-evenly">
                    <div class="flex items-start
                    2xl:w-10/12 2xl:mx-auto
                    md:ml-0
                    sm:w-7/12 sm:my-2 sm:mx-auto">
                        <span>Contato</span>    
                    </div>
                    <div class="flex w-full justify-between mx-auto
                    2xl:w-10/12
                    md:max-xl:flex-col md:w-full
                    sm:w-7/12">
                        <div class="xl:w-full
                        lg:w-11/12
                        md:max-lg:w-full md:justify-start
                        xs:relative xs:flex xs:items-center xs:w-fit xs:justify-start xs:max-lg:text-sm">
                            <div class="xs:max-sm:text-sm xs:max-sm:w-12/12">
                                <span><i class="fa-solid fa-envelope mr-2 x:max-sm:hidden"></i></span>
                                <a href="mailto:comercial@zettatecck.com.br">comercial@zettatecck.com.br</a>
                            </div>
                        </div>
                        <div class="xl:w-8/12
                        lg:w-11/12
                        md:max-lg:w-full md:flex md:max-xl:justify-start
                        xs:relative xs:flex xs:items-center xs:w-fit xs:justify-end xs:max-sm:w-fit xs:max-lg:text-sm">
                            <div>
                                <span><i class="fa-solid fa-phone mr-2 x:max-sm:hidden"></i></span>
                                <a href="tel:+551933218400">(19) 3321-8400</a>
                            </div>
                        </div>
                    </div>
                    <div class=" text-center 
                    sm:my-2
                    xs:max-sm:w-full">
                        <span class="hover:underline decoration-solid">
                            <router-link to="/contact">
                                Mais opções de contato <i class="fa-solid fa-angle-right"></i>
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
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