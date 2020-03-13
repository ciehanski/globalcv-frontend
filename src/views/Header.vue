<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <router-link to="/">
                            <h3 class="logo has-text-green is-size-4">globalcv</h3>
                        </router-link>
                    </a>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-end">
                        <router-link to="/" active-class="is-active">
                            <a class="a-menu is-size-7 navbar-item">
                                home
                            </a>
                        </router-link>

                        <router-link to="/howto" active-class="is-active">
                            <a class="a-menu is-size-7 navbar-item">
                                how to use
                            </a>
                        </router-link>

                        <router-link to="/contact" active-class="is-active">
                            <a class="a-menu is-size-7 navbar-item">
                                contact
                            </a>
                        </router-link>

                        <router-link to="/login" active-class="is-active">
                            <a class="a-menu is-size-7 navbar-item">
                                log in
                            </a>
                        </router-link>
                    </div>
                </div>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>