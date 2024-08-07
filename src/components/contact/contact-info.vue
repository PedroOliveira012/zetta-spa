<template>
    <div class="flex justify-center items-center h-96 banner-contact
        lg:max-xl:h-80
        xs:max-lg:h-36">
        <div class="absolute flex flex-col justify-center items-center w-6/12 h-96 mx-auto xs:max-sm:w-full">
            <h3 class="text-6xl m-8 text-[#012a62] font-bold uppercase
            md:max-lg:text-5xl
            xs:max-md:text-4xl xs:max-sm-w-full">Fale conosco</h3>
        </div>
    </div>
    <section class="flex flex-row justify-evenly mx-auto py-4 bg-gradient-to-b from-[#00aac0] to-[#005c66] z-20
    md:max-lg:mt-5
    xs:max-md:mt-0">
        <div class="flex flex-col space-y-8 w-8/12 justify-center text-xl p-16 bg-white rounded-xl 
        md:max-lg:text-base md:max-lg:space-y-6 md:max-lg:p-8
        xs:max-md:text-sm xs:max-md:space-y-6 xs:max-md:p-6 xs:max-sm:w-11/12">
            <div class="text-center">
                <span>Clique em uma das opções abaixo para<br> conversar com a nossa equipe</span>
            </div>
            <div class="grid grid-cols-2 gap-x-6 gap-y-12 border-t pt-8
            xs:max-lg:flex xs:max-lg:flex-col xs:max-lg:gap-y-6">
                <div class="flex justify-center items-center">
                    <i class="fa-solid fa-phone mr-2 my-auto lg:text-xl xl:text-sxl"></i>
                    <a href="tel:+551933218400" class="lg:text-base xl:text-xl">(19) 3321-8400</a>
                </div>
                <div class="flex justify-center items-center">
                    <i class="fa-brands fa-square-whatsapp mr-2 lg:text-2xl"></i>
                    <a href="https://wa.me/5519989394227" class="lg:text-base xl:text-xl">(19) 98939-4227</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 lg:text-xl xl:text-sxl"></i>
                    <a href="mailto:comercial@zettatecck.com.br" class="lg:text-base xl:text-xl">comercial@zettatecck.com.br</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 my-auto lg:text-xl xl:text-sxl"></i>
                    <a href="mailto:engenharia@zettatecck.com.br" class="lg:text-base xl:text-xl">engenharia@zettatecck.com.br</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 my-auto lg:text-xl "></i>
                    <a href="mailto:financeiro@zettatecck.com.br" class="lg:text-base xl:text-xl">financeiro@zettatecck.com.br</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 my-auto lg:text-xl xl:text-sxl"></i>
                    <a href="mailto:rh@zettatecck.com.br" class="lg:text-base xl:text-xl">rh@zettatecck.com.br</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 my-auto lg:text-xl "></i>
                    <a href="mailto:suprimentos@zettatecck.com.br" class="lg:text-base xl:text-xl">suprimentos@zettatecck.com.br</a>
                </div>
                <div class="flex w-fit mx-auto items-center">
                    <i class="fa-solid fa-envelope mr-2 my-auto lg:text-xl xl:text-sxl"></i>
                    <a href="mailto:recepcao@zettatecck.com.br" class="lg:text-base xl:text-xl">recepcao@zettatecck.com.br</a>
                </div>
            </div>
            <div class="mx-auto border-t pt-8 w-full text-center lg:text-base xl:text-xl">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>R. João Sierra, 245 - Distrito Industrial II, Araras-SP</span>
            </div>
            <div class="mx-auto xs:max-sm:hidden lg:text-base xl:text-xl">
                <i class="fa-solid fa-clock mr-2"></i>
                <span>Horário de Segunda à Sexta-feira das 7h às 17h</span>
            </div>
            <div class="mx-auto text-center sm:hidden ">
                <i class="fa-solid fa-clock mr-2"></i>
                <span>Horário de Segunda à Sexta-feira<br> das 7h às 17h</span>
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
<style>
     .banner-contact {
        background-color: #FFFFFF;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
        /* Adicionar um degradê de opacidade */
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)  
        ),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='386' height='386' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23007B8A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2300AAC0'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    }
</style>