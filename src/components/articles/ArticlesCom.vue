<template>
  <NavBarCom />
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center text-center my-4 py-5"
      style="background-color: #393e46"
    >
      <p class="fs-20 fw-bold text-white">المدونة</p>
      <h3 class="fs-18 text-white" style="font-weight: 500">
        مجموعة مقالات مميزه عن ريح وما تقدمة
      </h3>
    </div>
  </div>
  <div class="articles">
    <div v-if="loading">
      <div>
        <PageLoader />
      </div>
    </div>
    <!-- اخر الاخبار -->
    <div class="container-fluid pt-lg-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div
              class="col-md-6 my-2"
              v-for="article in articles"
              :key="article.id"
            >
              <div
                class="row g-0 border rounded-4 py-2 position-relative"
                style="border-color: #ebebec"
              >
                <div class="col-md-6 mb-md-0 article_img text-center">
                  <img
                    :src="article.image"
                    class="flex-shrink-0 rounded-3"
                    width="236"
                    height="192"
                    alt="img"
                  />
                </div>
                <div class="col-md-12 description col-lg-6 ps-md-0">
                  <span
                    ><FontAwesome
                      :icon="['far', 'clock']"
                      class="ps-2 text-yellow"
                    />
                    <span class="text-muted"> {{ article.date }}</span>
                  </span>
                  <h5 class="mt-0 fw-bold">{{ article.title }}</h5>
                  <p
                    v-snip="{ lines: 3 }"
                    class="text-muted fs-14"
                    v-html="article.desc"
                  ></p>
                  <router-link
                    class="btn text-decoration-none fw-bold text-white text-black border-2 ps-lg-4 pe-lg-4 px-4"
                    style="
                      background-color: #393e46;
                      padding-top: 0.8rem !important;
                      padding-bottom: 0.8rem !important;
                      border-radius: 12px;
                    "
                    :to="{ name: 'article', params: { id: article.id } }"
                    >شاهد المزيد</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
  <!-- تثبيت الفوتر لتحت -->
  <div style="position: relative; bottom: -55px; right: 0; left: 0">
    <FooterCom />
  </div>
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";

import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ArticlesCom",
  components: {
    PageLoader,
    NavBarCom,
    FooterCom,
  },
  data() {
    return {
      loading: false,
      articles: [],
    };
  },
  async mounted() {
    this.fetcharticles();
  },
  methods: {
    async fetcharticles() {
      this.loading = true;
      await axios
        .get(`https://admin.rayyah.net/api/articles`)
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch(() => {
          // console.log(err);
        });
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.articles {
  direction: rtl;
  color: #1f1e1e;
}
/* phone */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .articles .article_img {
    width: 100%;
    height: 235px;
  }
  .articles .article_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .articles .description p {
    font-size: 10px;
  }
}
</style>
