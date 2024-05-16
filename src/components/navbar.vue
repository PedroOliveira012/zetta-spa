<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="w-64">
                    <img src="../assets/logo zetta.png">
                </div>
            </a>
            <ul class="navbar-nav position-absolute top-50 start-50 translate-middle">
                <li v-for="page in pages" class="nav-item mx-4 border-b-2 border-[#212529] hover:text-white hover:border-b-2 hover:border-[#00aac0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a class="nav-link" aria-current="page" :href="page.link.url">{{ page.link.name }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        props:['links'],
        data(){
            return{
                pages: [
                    {
                        link: {name: 'Home', url: 'index.html'},
                    },
                    {
                        link: {name: 'Paineis', url: 'panels.html'},
                    },
                    {
                        link: {name: 'Projetos', url: 'projects.html'},
                    },
                    {
                        link: {name: 'Serviços', url: 'services.html'},
                    },
                    {
                        link: {name: 'Sobre nós', url: 'about.html'},
                    },
                    {
                        link: {name: 'Contato', url: 'contact.html'},
                    },
                ]
            }
        }
    }
</script>
