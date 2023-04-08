<template>
  <NavBarCom />
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center text-center my-4 py-5"
      style="background-color: #0c4da2"
    >
      <p class="fs-20 fw-bold text-orange">الخدمات</p>
      <h3 class="fs-30 text-white" style="font-weight: 500">
        تعرف علي خدمات مركز العسقلاني
      </h3>
    </div>
  </div>
  <div class="services">
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
            <div class="col-md-4" v-for="article in 4" :key="article">
              <div class="card border-0" style="width: 100%">
                <div
                  class="img_card"
                  style="
                    height: 300px;
                    background-color: black;
                    border-radius: 36px;
                  "
                >
                  <img
                    src="@/assets/askalany/img.webp"
                    class="card-img-top"
                    alt="img"
                    style="height: 100%; border-radius: 36px; object-fit: cover"
                  />
                </div>
                <div
                  class="card-body text-center shadow"
                  style="
                    position: relative;
                    bottom: 65px;
                    background-color: white;
                    border-radius: 36px;
                    height: 227px;
                  "
                >
                  <p class="card-text text-orange">
                    <FontAwesome icon="clock" class="ms-2" />
                    13/11-2023
                  </p>
                  <h5 class="card-title text-black">ابتسامة هوليود</h5>
                  <p class="text-black">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من
                  </p>

                  <span
                    style="background-color: #0c4da2"
                    class="btn fw-bold text-light rounded-pill border-2 py-3 px-4"
                  >
                    <FontAwesome icon="circle-arrow-left" class="ms-2" />
                    شاهد المزيد</span
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
  data() {
    return {
      services: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 5 },
        { id: 5 },
        { id: 5 },
      ],
    };
  },
};
</script>
<style></style>
