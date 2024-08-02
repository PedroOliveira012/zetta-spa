<template>
    <div class="bg-[#131313]">
        <footer class="text-[#656567] p-24 xs:p-4 md:p-8">
            <div class="grid grid-cols-3 h-36 w-12/12 mx-auto
            lg:h-32 lg:text-base
            md:h-28 md:text-sm md:grid 
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
                <div class="flex sm:px-4 relative border-[#656567]
                md:max-2xl:flex-col md:justify-evenly md:items-center md:border-l md:border-[#656567] md:h-full
                sm:justify-evenly
                xs:w-full xs:h-3/6 xs:max-md:border-t xs:px-1 xs:max-sm:justify-between">
                    <div class="xl:w-8/12
                    lg:w-11/12
                    md:max-lg:w-full md:justify-start
                    xs:relative xs:flex xs:items-center xs:w-fit xs:justify-start">
                        <div class="xs:max-sm:text-sm">
                            <span>Contato</span><br>
                            <span><i class="fa-solid fa-envelope mr-2"></i></span>
                            <span>teste@zettatecck.com.br</span>
                        </div>
                    </div>
                    <div class="xl:w-8/12
                    lg:w-11/12
                    md:max-lg:w-full md:flex md:justify-start
                    xs:relative xs:flex xs:items-center xs:w-fit xs:justify-end">
                        <div>
                            <span>Telefone</span><br>
                            <span><i class="fa-solid fa-phone mr-2"></i></span>
                            <span>(19)3321-8400</span>
                        </div>
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