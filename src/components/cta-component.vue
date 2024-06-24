<template>
    <section class="relative my-16 mx-32 py-9 flex bg-[#e8e8e8] rounded-xl hover:bg-[#e8e8e8] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] duration-500 
    sm:max-xl:mx-20 sm:max-xl:flex-col">
        <span class="text-3xl m-auto 
        sm:max-md:text-sm sm:max-xl:pb-6
        md:max-lg:text-base
        lg:text-xl
        ">
            Gostou do que viu?<br>
            Solicite um orçamento, nossa equipe está ansiosa para trabalhar com você!
        </span>
        <button class="w-52 h-16 m-auto text-xl bg-gradient-to-br from-[#00daf3] to-[#00b7cb] rounded-lg hover:shadow-2xl duration-500
        sm:max-lg:w-40 sm:max-md:h-12 sm:max-lg:text-base sm:max-md:mt-6">
            <router-link to="/contact">
                Solicitar orçamento
            </router-link>
        </button>
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