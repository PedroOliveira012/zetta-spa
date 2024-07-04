<template>
    <div class="h-80 flex flex-col justify-center items-center
        md:max-lg:h-60
        xs:max-md:h-52
        ">
        <img src="@/assets/topography.svg" alt="" class="opacity-15 w-full sm:pb-96 -z-10">
         
        <div class="absolute flex flex-col justify-center items-center w-6/12 h-96 mx-auto xs:max-sm:w-full">
            <h3 class="text-6xl m-8
            md:max-lg:text-5xl
            xs:max-md:text-4xl xs:max-sm-w-full">Fale conosco</h3>
            <h4 class="text-xl
            md:max-lg:text-2xl
            xs:max-md:text-xl">Entre em contato com nossa equipe</h4>
        </div>
    </div>
    <section class="flex flex-row justify-evenly mx-auto mt-10 py-4 bg-gradient-to-b from-[#00aac0] to-[#005c66] z-20
    md:max-lg:mt-5
    xs:max-md:mt-0">
        <div class="flex flex-col justify-center space-y-12 text-xl p-16 bg-white rounded-xl 
        md:max-lg:text-base md:max-lg:space-y-6 md:max-lg:p-8
        xs:max-md:text-sm xs:max-md:space-y-6 xs:max-md:p-6 xs:max-sm:w-11/12">
            <div>
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>R. João Sierra, 245 - Distrito Industrial II, Araras-SP</span>
            </div>
            <div>
                <i class="fa-solid fa-phone mr-2"></i>
                <span>(99) 9999-9999</span>
            </div>
            <div>
                <a href="https://wa.me/5519989394227">
                    <i class="fa-brands fa-square-whatsapp mr-2"></i>
                    <span>(19) 98939-4227</span>
                </a>
            </div>
            <div>
                <i class="fa-solid fa-envelope mr-2"></i>
                <span>teste@zettatecck.com.br</span>
            </div>
            <div>
                <i class="fa-solid fa-clock mr-2"></i>
                <span>Horario de funcionamento: de Segunda a Sexta das 7h às 17h</span>
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