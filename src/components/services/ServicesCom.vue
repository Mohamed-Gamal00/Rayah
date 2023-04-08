<template>
  <NavBarCom />
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center text-center my-4 py-5"
      style="background-color: #0c4da2"
    >
      <p class="fs-20 fw-bold text-orange">الخدمات</p>
      <h3 class="fs-30 text-white" style="font-weight: 500">خدمات</h3>
    </div>
  </div>
  <FooterCom />
</template>
<script>
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ServicesCom",
  components: {
    NavBarCom,
    FooterCom,
  },
};
</script>
<style></style>
