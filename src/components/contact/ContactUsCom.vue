<template>
  <NavBarCom />
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center text-center my-4 py-5"
      style="background-color: #393e46"
    >
      <p class="fs-20 fw-bold text-white">انضم الينا</p>
      <h3 class="fs-18 text-white" style="font-weight: 500">
        يمكنك ارسال طلبك وسيتم التواصل معك
      </h3>
    </div>
  </div>
  <!-- تواصل معنا -->
  <div class="container-fluid mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <SharedCom />
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>
<script>
import SharedCom from "@/components/contact/SharedCom.vue";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ContactUsCom",
  components: {
    SharedCom,
    NavBarCom,
    FooterCom,
  },
};
</script>

<style scoped>
.form-control[data-v-33d61464],
.form-select[data-v-33d61464] {
  border-radius: 20px !important;
  padding: 7px 28px !important;
}
.form-select:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffd369 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ff861857 !important;
}
.form-control,
.form-select {
  border-radius: 20px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffd369 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ff861857 !important;
}
::placeholder {
  color: #ffd369 !important;
  font-size: 14px;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #ffd369 !important;
}
</style>
