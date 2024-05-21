<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="w-64">
                    <img src="../assets/logo zetta.png">
                </div>
            </a>
            <ul class="navbar-nav position-absolute top-50 start-50 translate-middle">
                <li v-for="page in pages" class="nav-item mx-4 border-b-2 border-[#212529] hover:text-white hover:border-b-2 hover:border-[#00aac0] transition ease-in-out delay-30 duration-300">
                    <router-link :to="`/${page.link.url}`" class="nav-link">{{ page.link.name }}</router-link>
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
                        link: {name: 'Paineis', url: 'panels'},
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
