<template>
    <div class="h-80 flex flex-col justify-center items-center">
        <img src="@/assets/pattern.png" alt="" class="opacity-10 -z-10">
        <div class="absolute flex flex-col justify-center items-center w-6/12 h-96 mx-auto ">
            <h3 class="text-6xl m-8">Fale conosco</h3>
            <h4 class="text-3xl">Entre em contato com nossa equipe</h4>
        </div>
    </div>
    <section class="flex flex-row justify-evenly mx-auto mt-10 py-4 bg-gradient-to-b from-[#00aac0] to-[#005c66] z-20">
        <div class="flex flex-col justify-center space-y-12 text-xl p-16 bg-white rounded-xl ">
            <div>
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>R. João Sierra, 245 - Distrito Industrial II, Araras-SP</span>
            </div>
            <div>
                <i class="fa-solid fa-phone mr-2"></i>
                <span>(99) 9999-9999</span>
            </div>
            <div>
                <i class="fa-solid fa-mobile mr-2"></i>
                <span>(99) 9999-9999</span>
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