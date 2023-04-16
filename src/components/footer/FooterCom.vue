<template>
  <div
    class="container-fluid mt-5"
    style="background-color: #ffffff; direction: rtl"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-light">
              <div class="container py-5">
                <div class="row g-5 justify-content-center">
                  <!--Growth-->
                  <div class="col-md-6 col-lg-4 text-center p-0">
                    <span class="">
                      <img
                        src="../../../public/assets/rayah/logo2.webp"
                        style="position: relative; bottom: 7px"
                        width="50"
                        height="50"
                        alt="img"
                      />
                      <p class="fs-10 text-black">تطبيق ريح للتوصيل</p>
                    </span>
                    <p class="text-black">
                      تطبيق ريح، يقدم خدمات توصيل الطلبات بمكة بطريقة سهلة
                      وفعالة. إذا كنت تريد شيئًا ما، فسوف يقوم فريقنا بتوصيله لك
                      في أسرع وقت ممكن
                    </p>
                  </div>
                  <!-- الشركة -->
                  <div class="col-md-6 col-lg-4">
                    <h3 class="text-black text-center fs-20 mb-4 fw-bold">
                      اقسام الموقع
                    </h3>
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold"
                      :to="{ name: 'home' }"
                      >الرئيسية</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none my-3 fw-bold"
                      :to="{ name: 'about' }"
                      >من نحن</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none my-3 fw-bold"
                      :to="{ name: 'articles' }"
                      >المدونة</router-link
                    >
                    <!-- <router-link
                      class="btn_btn_link text-decoration-none my-3 fw-bold"
                      :to="{ name: 'contact' }"
                      >تواصل معنا</router-link
                    > -->
                    <p class="text-black text-center mb-1 fs-14 fw-bold">
                      حمل التطبيق الآن
                    </p>
                    <div class="text-center text-lg-end">
                      <!-- Google Play button -->
                      <a class="market-btn google-btn" href="#" role="button">
                        <span class="market-button-subtitle fs-10"
                          >GET IT ON</span
                        >
                        <span class="market-button-title">Google Play</span>
                      </a>
                      <!-- App Store button -->
                      <a
                        class="market-btn apple-btn"
                        href="#"
                        role="button"
                        style="width: 160.72px"
                      >
                        <span class="market-button-subtitle fs-10"
                          >Download on the</span
                        >
                        <span class="market-button-title">App Store</span>
                      </a>
                    </div>
                  </div>
                  <!-- العمل -->
                  <div class="col-md-6 col-lg-4 fw-bold">
                    <h3
                      class="text-black text-center fs-20 text-lg-end fw-bold mb-4"
                    >
                      تواصل معنا
                    </h3>
                    <div>
                      <div
                        class="card border-0 text-center text-lg-end"
                        style="width: 100%"
                      >
                        <div class="card-body text-black">
                          <span class="card-title fs-16 fw-bold">
                            <FontAwesome
                              class="ms-2 bg-orange"
                              :icon="['far', 'envelope']"
                            />البريد الالكتروني
                          </span>
                          <p class="card-text fs-14 p-0">rayah98@gmail.com</p>
                          <span class="card-title fs-16 fw-bold">
                            <FontAwesome class="ms-2 bg-orange" icon="phone" />
                            رقم الجوال
                          </span>
                          <p class="card-text fs-14">+966555155496</p>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-center justify-content-lg-start pt-2"
                      >
                        <a
                          class="btnn btn-outline-light btn-social"
                          target="_blank"
                          aria-label="facebook"
                          href="https://www.facebook.com/Rayah-108277785566354/?ref=page_internal"
                          ><FontAwesome :icon="['fab', 'facebook']"
                        /></a>
                        <a
                          class="btnn btn-outline-light btn-social"
                          target="_blank"
                          aria-label="Twitter"
                          href="https://twitter.com/rrayah98"
                          ><FontAwesome :icon="['fab', 'twitter']"
                        /></a>
                        <a
                          class="btnn btn-outline-light btn-social"
                          target="_blank"
                          aria-label="instagram"
                          href="https://z-p15.www.instagram.com/rrayah98/"
                          ><FontAwesome :icon="['fab', 'instagram']"
                        /></a>
                        <a
                          class="btnn btn-outline-light btn-social"
                          target="_blank"
                          aria-label="tiktok"
                          href="https://www.tiktok.com/@rayahrayah4?lang=ar"
                          ><FontAwesome :icon="['fab', 'tiktok']"
                        /></a>
                        <a
                          class="btnn btn-outline-light btn-social"
                          target="_blank"
                          aria-label="tilinkedinktok"
                          href="https://www.linkedin.com/in/rayah-rayah-154b33270/"
                          ><FontAwesome :icon="['fab', 'linkedin']"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- copy right -->
              <div class="container">
                <div class="row border-top">
                  <div class="col-md-12 text-black text-center my-3">
                    جميع الحقوق محفوظة لموقع ريح&copy;
                    <span class="text-black">2023</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCom",
};
</script>

<style scoped>
a {
  color: rgb(0, 0, 0) !important;
}
:root {
  --primary: #2380be;
  --light: #05121b;
  --dark: #0e2e50;
}
.btnn.btn-social {
  margin-right: 5px;
  width: 45px;
  height: 45px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  border: 1px solid #9c9ea2;
  transition: 0.3s;
}

.btnn.btn-social:hover {
  color: var(--primary);
  background-color: #ffd369;
  border: none;
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: black;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #0099ff;
}

.btn_btn_link::before {
  position: relative;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
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
</style>
