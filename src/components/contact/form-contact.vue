<template>
    <div class="flex flex-col justify-center items-center w-6/12 h-56 mx-auto border-b">
        <h3 class="text-6xl m-8">Fale conosco</h3>
        <h4 class="text-3xl">Entre em contato com nossa equipe</h4>
    </div>
    <section class="flex flex-row justify-center mx-auto mt-10 py-4 bg-gradient-to-b from-[#00aac0] to-[#005c66] ">
        <div class="flex flex-col justify-center space-y-12 text-xl px-16 bg-white rounded-l-xl ">
            <div>
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Rua João Sierra, 245, Araras-SP</span>
            </div>
            <div>
                <!-- telefone -->
                <i class="fa-solid fa-phone mr-2"></i>
                <span>(99)9999-9999</span>
            </div>
            <div>
                <i class="fa-solid fa-mobile mr-2"></i>
                <span>(99)9999-9999</span>
            </div>
            <div>
                <i class="fa-solid fa-envelope mr-2"></i>
                <span>teste@zettatecck.com.br</span>
            </div>
            <div>
                <i class="fa-solid fa-clock mr-2"></i>
                <span>Horario de funcionamento: de Segunda a Sexta das 7 às 17</span>
            </div>
        </div>
        <div class="w-4/12 py-4 bg-white rounded-r-xl">
            <form action="" class="flex flex-col justify-center space-y-8 text-xl bg-white p-8 border-l">
                <div>
                    <input type="text" placeholder="Nome completo" class="form-control">
                </div>
                <div>
                    <input type="email" placeholder="Email" class="form-control">
                </div>
                <div>
                    <input type="tel" placeholder="Telefone" v-mask="'(##) #####-####'" class="form-control">
                </div class="">
                <div>
                    <input type="tel" placeholder="Celular" v-mask="'(##) #####-####'" class="form-control">
                </div>
                <div>
                    <textarea name="message" id="" placeholder="Mensagem" class="form-control h-36"></textarea>
                </div>
            </form>
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