<template>
  <!-- Navbar & Hero Start -->
  <div class="style sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img
            src="../../../public/assets/rayah/logo.jpg"
            width="60"
            height="60"
            alt="img"
          />
        </router-link>
        <span
          style="background-color: #ffd369; color: white"
          class="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="p-2"><FontAwesome icon="caret-down" /></span> -->
          <span class="navbar-toggler-icon"></span>
        </span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav nav mx-auto mb-2 mb-lg-0 p-0">
            <router-link
              class="m-2 ms-lg-4 me-lg-4"
              :to="{ name: 'home' }"
              exact
              ><span class="fw-bold">الرئيسة</span></router-link
            >

            <!-- <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'join' }"
              ><span class="fw-bold">انضم الينا</span></router-link
            > -->

            <!-- <router-link class="m-2 ms-lg-4 me-lg-4" to="/services"
              ><span class="fw-bold">الخدمات</span></router-link
              > -->

            <router-link class="m-2 ms-lg-4 me-lg-4" to="/about"
              ><span class="fw-bold">من نحن</span></router-link
            >
            <router-link class="m-2 ms-lg-4 me-lg-4" to="/articles"
              ><span class="fw-bold">المدونة</span></router-link
            >
          </div>
          <router-link class="m-2 border-0" :to="{ name: 'ordernow' }" exact>
            <span
              style="
                background-color: #ffd369;
                padding-top: 0.8rem !important;
                padding-bottom: 0.8rem !important;
              "
              class="btn fw-bold text-light rounded-3 text-black border-2 ps-lg-4 pe-lg-4 px-4"
            >
              تواصل معنا
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarCom",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.style {
  direction: rtl;
}

.nav a {
  text-decoration: none;
  color: #353536;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
}
.nav a:hover {
  color: #ffd369 !important;
}
.nav .router-link-exact-active {
  color: #ffd369 !important;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: rgb(203 21 21 / 55%);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
</style>
