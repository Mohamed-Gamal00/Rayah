<template>
  <div>
    <!-- text & image-->
    <div class="container mt-lg-5 pt-lg-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <!-- text -->
          <div class="row">
            <!-- رأي العملاء -->
            <div class="col-md-12 d-inline">
              <span>
                <div class="mt-lg-4">
                  <h1 class="fw-bold"><strong> رأي العملاء </strong></h1>
                  <p class="fw-bold lh-lg">
                    جروث عبارة عن بطاقة تقدر عن طريقها التسويق لعيادتك من خلال
                    كارت يضم مجموعة من أفضل العيادات ومختلف التخصصات ويحق ن
                    عيادتك جزء من هذا الخصم والكارت. جروث عبارة عن بطاقة
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="background-color: #f8faff">
        <div
          class="row justify-content-lg-around row align-items-center g-0 bg-light position-relative"
        >
          <div class="col-md-4 align-content-center mb-md-">
            <div class="text-center p-2" style="height: 300px">
              <img
                style="width: 100%; height: 300px"
                class="img-fluid rounded-3"
                :src="app.image"
                alt="img"
              />
            </div>
          </div>
          <div class="col-md-6 p-4 ps-md-0">
            <p class="fw-bold">
              {{ app.c_body }}
            </p>
            <h1 class="fw-bold mb-0">
              <strong>{{ app.c_name }}</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CommentCom",
  data() {
    return {
      app: [],
      id: this.$route.params.id,
    };
  },
  async mounted() {
    let result = await axios
      .get(`https://admin.growth-tech.co/api/app/${this.id}`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.app = result.data.app;
    }
  },
};
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
