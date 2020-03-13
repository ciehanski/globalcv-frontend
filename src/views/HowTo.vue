<template>
    <div>
        <!-- Wrapper -->
        <div id="wrapper" class="has-text-centered-mobile">
            <!-- Hero -->
            <section id="hero" class="hero is-medium">

                <!-- Header -->
                <gcv_header></gcv_header>

            </section>
        </div>

        <br><br><br>

        <!-- Footer -->
        <gcv_footer></gcv_footer>

    </div>
</template>

<script>
    import gcv_header from '@/views/Header';
    import gcv_footer from '@/views/Footer';

    export default {
        name: "HowTo",
        components: {
            gcv_header,
            gcv_footer
        }
    }
</script>

<style scoped>

</style>