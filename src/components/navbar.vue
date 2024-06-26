<!-- <template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <div class="w-64">
                    <img src="../assets/logo zetta.png">
                </div>
            </a>
            <ul class="navbar-nav position-absolute top-50 start-50 translate-middle">
                <li v-for="page in pages" :key="index" class="nav-item mx-4 border-b-2 border-[#212529] hover:text-white hover:border-b-2 hover:border-[#00aac0] transition ease-in-out delay-30 duration-300">
                    <router-link :to="`/${page.link.url}`" class="nav-link" exact-active-class="active-link">{{ page.link.name }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                pages: [
                    {
                        link: {name: 'Home', url:''},
                    },
                    {
                        link: {name: 'Painéis', url: 'panels'},
                    },
                    {
                        link: {name: 'Projetos', url: 'projects'},
                    },
                    {
                        link: {name: 'Robô sinalizador', url: 'robots'},
                    },
                    {
                        link: {name: 'Sobre nós', url: 'about'},
                    },
                    {
                        link: {name: 'Contato', url: 'contact'},
                    },
                ]
            }
        }
    }
</script>
<style>
.active-link {
    border-bottom: 2px solid #00aac0;
}
</style> 

<div class="container-fluid flex items-center justify-between w-full py-4 px-4">
    <a class="navbar-brand" href="/">
        <div class="w-64">
            <img src="../assets/logo zetta.png" alt="Logo">
        </div>
    </a>
    <button class="block lg:hidden mr-6" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <i class="fa-solid fa-bars text-white text-4xl"></i>
    </button>
    <div class="offcanvas offcanvas-end bg-dark text-white lg:hidden" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav flex flex-col">
                <li v-for="(page, index) in pages" :key="index"
                    class="nav-item mx-4 border-b-2 border-[#212529] hover:border-[#00aac0] transition ease-in-out delay-30 duration-300">
                    <router-link :to="'/' + page.link.url" class="nav-link text-[#96989a] hover:text-white"
                        exact-active-class="active-link">
                        {{ page.link.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex-auto lg:flex lg:items-center lg:justify-center lg:mx-auto">
        <ul class="navbar-nav flex flex-row lg:justify-end xl:justify-center">
            <li v-for="(page, index) in pages" :key="index"
                class="nav-item mx-4 border-b-2 border-[#212529] hover:border-[#00aac0] transition ease-in-out delay-30 duration-300 sm:text-xs md:text-sm lg:text-base">
                <router-link :to="'/' + page.link.url" class="nav-link text-[#96989a] hover:text-white"
                    exact-active-class="active-link">
                    {{ page.link.name }}
                </router-link>
            </li>
        </ul>
    </div>
</div>

-->
<template>
    <nav class="navbar sticky top-0 bg-dark text-white z-50">
        <div class="container-fluid flex items-center justify-between w-full py-4 px-4">
    <a class="navbar-brand" href="/">
        <div class="w-64">
            <img src="../assets/logo zetta.png" alt="Logo">
        </div>
    </a>
    <!-- Botão de Hambúrguer para telas pequenas -->
    <button class="block lg:hidden mr-6" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <i class="fa-solid fa-bars text-white text-4xl"></i>
    </button>

    <!-- Itens de navegação para telas grandes -->
    <div class="hidden lg:flex lg:items-center lg:justify-center lg:mx-auto">
        <ul class="navbar-nav flex flex-row lg:justify-end xl:justify-center">
            <li v-for="(page, index) in pages" :key="index"
                class="nav-item mx-4 border-b-2 border-[#212529] hover:border-[#00aac0] transition ease-in-out delay-30 duration-300 sm:text-xs md:text-sm lg:text-base">
                <router-link :to="'/' + page.link.url" class="nav-link text-[#96989a] hover:text-white"
                    exact-active-class="active-link">
                    {{ page.link.name }}
                </router-link>
            </li>
        </ul>
    </div>

    <!-- Offcanvas para telas pequenas -->
    <div class="offcanvas offcanvas-end bg-dark text-white lg:hidden" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav flex flex-col">
                <li v-for="(page, index) in pages" :key="index"
                    class="nav-item mx-4 border-b-2 border-[#212529] hover:border-[#00aac0] transition ease-in-out delay-30 duration-300">
                    <router-link :to="'/' + page.link.url" class="nav-link text-[#96989a] hover:text-white"
                        exact-active-class="active-link">
                        {{ page.link.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                { link: { name: 'Home', url: '' } },
                { link: { name: 'Painéis', url: 'panels' } },
                { link: { name: 'Projetos', url: 'projects' } },
                { link: { name: 'Robô sinalizador', url: 'robots' } },
                { link: { name: 'Sobre nós', url: 'about' } },
                { link: { name: 'Contato', url: 'contact' } },
            ],
        };
    },
};
</script>

<style scoped>
.active-link {
    border-bottom: 2px solid #00aac0;
}
</style>