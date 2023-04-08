<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="home mt-4" style="direction: rtl" id="home">
    <!-- text and image -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row align-items-center justify-content-between mb-2">
            <div class="col-lg-5 fw-bold align-middle text-center text-lg-end">
              <h2
                class="mb-4 font_h1 fw-bold"
                style="font-weight: 900 !important"
              >
                ريح
              </h2>
              <p class="pb-3 font_p_home" style="color: #1f1e1e">
                حمل تطبيق ريح
              </p>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من
              </p>
              <a
                href="#contact_us"
                aria-label="contact"
                style="
                  background-color: #ffd369;
                  padding-top: 0.8rem !important;
                  padding-bottom: 0.8rem !important;
                "
                class="btn fw-bold text-light rounded-3 text-black border-2 ps-lg-4 pe-lg-4 px-4"
              >
                تواصل معنا</a
              >
              <!-- google app store -->
              <div class="my-5">
                <!-- Google Play button -->
                <a class="market-btn google-btn" href="#" role="button">
                  <span class="market-button-subtitle">GET IT ON</span>
                  <span class="market-button-title">Google Play</span>
                </a>
                <!-- App Store button -->
                <a
                  class="market-btn apple-btn"
                  href="#"
                  role="button"
                  style="width: 160.72px"
                >
                  <span class="market-button-subtitle">Download on the</span>
                  <span class="market-button-title">App Store</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img
                class="img-fluid rounded-3"
                src="../../../public/assets/rayah/img1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- about us 2 -->
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      class="container-fluid mt-lg-5 pt-lg-5"
      style="background-color: #f8faff"
    >
      <div class="container">
        <!-- text image -->
        <div class="text-center mb-5">
          <h3 class="fw-bold">من نحن</h3>
          <p class="fs-18">تعرف علي ما نقدمة بمزيد من التفاصيل التوضيحية</p>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row align-items-center justify-content-between mb-2">
              <div class="col-lg-6 text-center mt-sm-4">
                <img
                  class="img-fluid rounded-3"
                  src="../../../public/assets/rayah/about.png"
                  width="388"
                  height="317"
                  alt="img"
                />
              </div>
              <div
                class="col-lg-5 fw-bold align-middle text-center text-lg-end"
              >
                <p class="pb-3 font_p_home fs-14" style="color: #1f1e1e">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح
                  لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو
                  مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي
                  المواقع على وجه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section 3 worktime-->
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center text-center">
              <div class="text-center mb-5">
                <h3 class="fw-bold">شاشات التطبيق</h3>
                <p class="fs-18">تعرف علي شاشات التطبيق لتتعرف علي ريح بوضوح</p>
              </div>
            </div>
            <div class="row justify-content-center text-center">
              <div>
                <img
                  src="../../../public/assets/rayah/img2.png"
                  alt="img"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- articles 3 blog-->
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="row justify-content-center text-center">
              <div class="text-center mb-5">
                <h3 class="fw-bold">المدونة</h3>
                <p class="fs-18">مجموعة مقالات مميزه عن ريح وما تقدمة</p>
              </div>
            </div>
            <div
              class="row justify-content-center articles justify-content-lg-start"
            >
              <div class="col-md-6">
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
                    <h5 class="mt-0 fw-bold">هذا النص هو مثال لنص</h5>
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
              </div>
              <div class="col-md-6">
                <div
                  class="row g-0 border rounded-4 py-2 position-relative"
                  style="border-color: #ebebec"
                >
                  <div class="col-md-6 mb-md-0 article_img text-center">
                    <img
                      src="../../../public/assets/rayah/article2.png"
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
                    <h5 class="mt-0 fw-bold">هذا النص هو مثال لنص</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact us -->
    <SharedCom />
    <!-- الشركاء -->
  </div>
  <FooterCom />
</template>

<script>
import SharedCom from "@/components/contact/SharedCom.vue";
import PageLoader from "@/components/pageloader/PageLoder.vue";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "HomeCom",
  components: {
    NavBarCom,
    SharedCom,
    FooterCom,
    PageLoader,
  },
  data() {
    return {
      loading: false,
      articles: [],
    };
  },
  async mounted() {
    this.loading = true;
    /* articles */
    // .catch(() => this.$router.push({ name: "servererror" }));
    await axios
      .get(`https://admin.growth-tech.co/api/articles`)
      .then((response) => {
        this.articles = response.data.data.splice(0, 3);
      });

    this.loading = false;
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
}
.home {
  direction: rtl;
  color: #1f1e1e !important;
}
.form-control[data-v-570605e2],
.form-select[data-v-570605e2] {
  border-radius: 20px !important;
  padding: 7px 30px !important;
  background-color: #ffffff42 !important;
  border: 0 !important;
}
.form-select:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffffff !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ffffff42 !important;
}
.form-control,
.form-select {
  border-radius: 20px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffffff42 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ffffff42 !important;
}
::placeholder {
  color: #ffffff42 !important;
  font-size: 14px;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #ffffff !important;
}
/* app store */
.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #e7e7e7;
  background-position: center left 0.75rem;
  background-color: #ebebec;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  margin: 2px 2px;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
}
.market-btn .market-button-title {
  display: block;
  color: #222;
  font-size: 1.125rem;
}
/* .market-btn:hover .market-button-title {
  color: rgb(0, 0, 0);
} */
.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: #888;
  font-size: 0.75rem;
}
/* .market-btn:hover .market-button-subtitle {
  color: rgb(255, 255, 255);
} */
.apple-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
.google-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
.site-btn {
  background-image: url(@/assets/icons/global.png);
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
