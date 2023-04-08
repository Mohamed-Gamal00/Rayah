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
              :key="article"
            >
              <router-link
                class="text-decoration-none"
                :to="{ name: 'article', params: { id: article.id } }"
              >
                <div
                  class="row g-0 border rounded-4 py-2 position-relative"
                  style="border-color: #ebebec"
                >
                  <div class="col-md-6 mb-md-0 article_img text-center">
                    <img
                      src="../../../public/assets/rayah/article1.png"
                      class="flex-shrink-0"
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
                      <span class="text-muted"> 4/5/2023 </span>
                    </span>
                    <h5 class="mt-0 fw-bold text-black">
                      هذا النص هو مثال لنص
                    </h5>
                    <p class="text-muted fs-14">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى،
                    </p>
                    <a
                      href="#"
                      aria-label="contact"
                      style="
                        background-color: #393e46;
                        padding-top: 0.8rem !important;
                        padding-bottom: 0.8rem !important;
                        border-radius: 12px;
                      "
                      class="btn fw-bold text-white text-black border-2 ps-lg-4 pe-lg-4 px-4"
                    >
                      شاهد المزيد</a
                    >
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <br />
        </div>
      </div>
      <!-- pagination -->
      <div class="container mt-5">
        <div class="row mt-3 d-flex justify-content-center">
          <div class="col-md-10 d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination p-0">
                <li
                  class="page-item"
                  v-for="link in pagination.links"
                  :key="link"
                  v-bind:class="[
                    { disabled: !link.url },
                    { active: link.active },
                  ]"
                >
                  <span
                    class="page-link"
                    v-html="link.label"
                    @click="fetcharticles(link.url)"
                  ></span>
                </li>
              </ul>
            </nav>
          </div>
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

      // اخر الاخبار
      articles: [],
      pagination: {},
    };
  },
  async mounted() {
    this.fetcharticles();
  },
  methods: {
    async fetcharticles(page_url) {
      page_url = page_url || `https://admin.growth-tech.co/api/articles`;
      this.loading = true;
      let result = await axios
        .get(page_url)
        .catch(() => this.$router.push({ path: "/servererror" }));
      if (result.status == 200) {
        this.articles = result.data.data;
        this.makePagination(result.data.meta);
      }
      this.loading = false;
    },

    async makePagination(meta) {
      let pagination = {
        links: meta.links,
      };
      this.pagination = pagination;
    },
  },
};
</script>
<style scoped>
.active > .page-link,
.page-link.active {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: #393e46;
  border-color: #393e46;
}
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
