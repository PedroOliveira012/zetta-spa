<template>
    <div class="h-96  flex flex-col justify-center items-center">
        <img src="@/assets/pattern.png" alt="" class="opacity-10 -z-10">
        <div class="absolute flex flex-col justify-center items-center w-6/12 h-48 mx-auto ">
            <h3 class="text-6xl m-8">Fale conosco</h3>
            <h4 class="text-3xl">Entre em contato com nossa equipe</h4>
        </div>
    </div>
    <section class="flex flex-row justify-evenly mx-auto mt-10 py-4 bg-gradient-to-b from-[#00aac0] to-[#005c66] z-20">
        <div class="flex flex-col justify-center space-y-12 text-xl mr- px-16 bg-white rounded-xl ">
            <div>
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>R. João Sierra, 245 - Distrito Industrial II, Araras-SP</span>
            </div>
            <div>
                <!-- telefone -->
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
        <div class="w-4/12 pt-2 bg-white rounded-xl">
            <form action="" class="flex flex-col justify-center space-y-8 text-xl bg-white p-8 border-l">
                <div>
                    <input
                        class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#00aac0] hover:shadow-lg hover:border-[#00aac0] bg-gray-100"
                        placeholder="Nome completo"
                        type="text"
                    />
                </div>
                <div>
                    <input
                        class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#00aac0] hover:shadow-lg hover:border-[#00aac0] bg-gray-100"
                        placeholder="Email"
                        type="email"
                    />
                </div>
                <div class="flex flex-row space-x-6">
                    <input
                        class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#00aac0] hover:shadow-lg hover:border-[#00aac0] bg-gray-100"
                        placeholder="Telefone"
                        v-mask="'(##) #####-####'"
                        type="tel"
                    />
                    <input
                        class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#00aac0] hover:shadow-lg hover:border-[#00aac0] bg-gray-100"
                        placeholder="Celular"
                        v-mask="'(##) #####-####'"
                        type="tel"
                    />
                </div>
                <div>
                    <textarea name="message" id="" placeholder="Mensagem" class="text-sm custom-input w-full h-28 px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#00aac0] hover:shadow-lg hover:border-[#00aac0] bg-gray-100"></textarea>
                </div>
            </form>
            <div class="mx-auto w-fit mb-6">
                <button class="relative overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
                    Enviar
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span class="group-hover group-hover:duration-1000 duration-100 opacity-100 absolute w-36 h-32 top-2.5 -left-2 z-10">
                        Enviar
                    </span>
                </button>
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