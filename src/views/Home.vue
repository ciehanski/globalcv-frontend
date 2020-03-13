<template>
    <!-- Wrapper -->
    <div id="wrapper" class="has-text-centered-mobile">
        <!-- Hero -->
        <section id="hero" class="hero is-medium">

            <!-- Header -->
            <gcv_header></gcv_header>

            <div class="hero-body">
                <div class="container">
                    <h1 class="has-text-green is-size-1 is-size-3-mobile">
                        We make resumes easy
                    </h1>
                    <p class="has-text-green">
                        Easily create a global identifier where employers and recruiters can discover your resume. No more filling out endless forms & applications when you can simply provide your most up to date resume; with us.
                    </p>
                    <router-link to="/register">
                        <button class="btn has-mustard-bg is-size-7 a-menu">
                            try it now
                        </button>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- END Hero -->

        <!-- Twitter Feed -->
        <section id="twitter-feed" class="section has-white-mustard-gradient">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64 ">
                                        <img src="../assets/img/twitter-profile-guy.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Some guy</strong> <small>@someguy</small> <small>5m</small>
                                            <br>
                                            First time I used @globalcv, was like the first time I listened to The Beatles. Christmas came early, I guess.
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item" aria-label="reply">
                                                <span class="icon is-small">
                                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="retweet">
                                                <span class="icon is-small">
                                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="like">
                                                <span class="icon is-small">
                                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64 ">
                                        <img src="../assets/img/twitter-profile-girl.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Some girl</strong> <small>@somegirl</small> <small>5m</small>
                                            <br>
                                            globalcv is the answer to all your problems, all praise #globalcv!
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item" aria-label="reply">
                                                <span class="icon is-small">
                                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="retweet">
                                                <span class="icon is-small">
                                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="like">
                                                <span class="icon is-small">
                                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <p class="is-size-7 has-text-centered">See more at <a href="https://twitter.com/search?q=globalcv&src=typed_query">#globalcv</a></p>
            </div>
        </section>
        <!-- END Twitter Feed -->

        <!-- Features -->
        <section id="features" class="section has-mustard-bg">
            <div class="container">
                <div class="columns reverse-row-order">
                    <div class="column">
                        <h3 class="is-size-3">
                            Open Source, all the way
                        </h3>
                        <p class="has-text-green paragraph">
                            The world runs on open source and so does globalcv. We release all of the code our service and website runs on which can be found on our GitHub.
                        </p>
                    </div>
                    <div class="column">
                        <img class="feature-img" src="../assets/img/feature1.png" alt="open source software" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img class="feature-img" src="../assets/img/feature2.png" alt="global resume identifier" />
                    </div>
                    <div class="column">
                        <h3 class="is-size-3">
                            Upload once. Available everywhere</h3>
                        <p class="has-text-green paragraph">
                            Ditch the days of fumbling over endless pages of forms when all the information an employer needs is available on your resume. We parse your resume and provide the relevant data to each employer you choose.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h3 class="is-size-3">
                            Privacy focused</h3>
                        <p class="has-text-green paragraph">
                            You're trusting us with important & private information and we understand that. We only make your data available to potential employers who requested it.
                        </p>
                    </div>
                    <div class="column">
                        <img class="feature-img" src="../assets/img/feature3.png" alt="privacy focused" />
                    </div>
                </div>
            </div>
        </section>
        <!-- END Features -->

        <!-- Newsletter -->
        <section id="newsletter" class="section">
            <div class="container">
                <h3 class="is-size-3">
                    Stay in touch</h3>
                <p class="has-text-green">
                    Stay up to date with any news related to globalcv. We don't send spam or sell your information. Or bite.
                </p>
                <div class="field newsletter-field">
                    <div class="control">
                        <input class="input newsletter-input" type="text" placeholder="svandy@gmail.com">
                    </div>
                </div>
                <router-link to="">
                    <button class="btn has-mustard-bg is-size-7 a-menu">
                        subscribe
                    </button>
                </router-link>
            </div>
        </section>
        <!-- END Newsletter -->

        <!-- Footer -->
        <gcv_footer></gcv_footer>

    </div>
    <!-- END Wrapper -->
</template>

<script>
    import gcv_header from "@/views/Header"
    import gcv_footer from "@/views/Footer"

    export default {
      name: 'Home',
      components: {
          gcv_header,
          gcv_footer
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
