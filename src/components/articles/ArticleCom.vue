<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="container">
    <div class="row">
      <header class="header">
        <img :src="article.banner" class="img-fluid" alt="img" />
      </header>
    </div>
  </div>
  <div class="container-fluid mb-5 pb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row mb-2 align-items-center">
          <div class="container">
            <article style="direction: rtl">
              <div class="my-3">
                <span class="pub-date">تاريخ النشر.{{ article.date }}</span>
              </div>
              <h1 class="my-3">
                {{ article.title }}
              </h1>

              <div class="row" style="direction: rtl">
                <div class="col-md-12">
                  <div v-html="article.desc"></div>
                </div>
                <!-- <div class="col-md-4 border-end">
                  <div
                    class="blog-side"
                    v-for="article in articles"
                    :key="article"
                  >
                    <router-link
                      class="text-decoration-none"
                      :to="{ name: 'article', params: { id: article.id } }"
                    >
                      <div class="media">
                        <img :src="article.image" alt="img" />
                        <div class="media-body">
                          <div>
                            <strong>{{ article.title }}</strong>
                          </div>
                          <span>{{ article.date }}</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div> -->
              </div>
            </article>
          </div>
        </div>
        <!-- <h1>post article {{ id }}</h1> -->
      </div>
    </div>
  </div>
  <FooterCom />
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ArticlepostView",
  components: { NavBarCom, FooterCom, PageLoader },
  data() {
    return {
      loading: false,
      article: [],
      // articles: [],
      id: this.$route.params.id,
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios
      .get(`https://admin.rayyah.net/api/article/${this.id}`)
      .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      this.article = result.data.article;
    }
    /* articles */
    // let articles = await axios
    //   .get(`https://admin.rayyah.net/api/articles`)
    //   .catch(() => this.$router.push({ name: "servererror" }));
    // if (result.status == 200) {
    //   this.articles = articles.data.data.slice(0, 3);
    // }
    this.loading = false;
  },
};
</script>

<style scoped>
.header {
  width: 100%;
}
.header img {
  width: 100%;
  border-radius: 15px;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .header {
    width: 100%;
    height: 394px;
  }
  .header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 36px;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}
.blog-side .media {
  padding-bottom: 15px;
  margin-top: 15px;
  align-items: center;
}
.blog-side .media img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
}
.blog-side .media .media-body {
  margin-right: 10px;
  margin-left: 0;
}
.blog-side .media .media-body h4 {
  font-size: 15px;
  transition: 0.5s;
  color: #2a398c;
  color: var(--main-color);
  line-height: 27px;
}
</style>
