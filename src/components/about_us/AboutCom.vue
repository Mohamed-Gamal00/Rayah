<template>
  <NavBarCom />
  <div class="container-fluid">
    <div
      class="row d-flex justify-content-center text-center my-4 py-5"
      style="background-color: #393e46"
    >
      <p class="fs-20 fw-bold text-white">من نحن</p>
      <h3 class="fs-18 text-white" style="font-weight: 500">
        تعرف علي ما نقدمة بمزيد من التفاصيل التوضيحية
      </h3>
    </div>
  </div>
  <div class="articles">
    <div v-if="loading">
      <div>
        <PageLoader />
      </div>
    </div>
    <div class="container-fluid mt-lg-5 pt-lg-5">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row align-items-center justify-content-between mb-2">
              <div class="col-lg-6 text-center mt-sm-4">
                <img
                  class="img-fluid rounded-3"
                  src="../../../public/assets/rayah/about.webp"
                  width="388"
                  height="317"
                  alt="img"
                />
              </div>
              <div
                class="col-lg-5 fw-bold align-middle text-center text-lg-end"
              >
                <p class="pb-3 font_p_home fs-14" style="color: #1f1e1e">
                  فريق تطوير ريح تطبيق توصيل الطلبات، نعمل على توفير تجربة تسوق
                  رائعة للعملاء بمكة المكرمة، نحن ملتزمون بتوفير خدمة توصيل
                  طلبات سريعة وموثوقة وآمنة، ونسعى جاهدين لتحسين تجربة العملاء
                  وتلبية احتياجاتهم بكل كفاءة، نحن نؤمن بأن التكنولوجيا يمكن أن
                  تسهل الحياة وتوفر الوقت والجهد، ونسعى جاهدين لتحقيق ذلك من
                  خلال تطوير تطبيق ريح لتوصيل الطلبات.
                </p>
              </div>
            </div>
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
    };
  },
};
</script>
<style></style>
