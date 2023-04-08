<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="container">
    <!-- تواصل معنا -->
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <section class="mt-5">
            <div class="container h-100">
              <div
                class="row d-flex justify-content-center align-items-center h-50"
              >
                <div class="col-lg-12 col-xl-11">
                  <div class="card text-black border-0">
                    <div class="card-body p-0" style="direction: ltr">
                      <div class="row justify-content-center">
                        <div
                          class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1"
                        >
                          <form class="mx-1 mx-md-4" style="direction: rtl">
                            <div class="row">
                              <div class="col-md-6">
                                <!--  الاسم -->
                                <div
                                  class="d-flex flex-row align-items-center mb-4"
                                >
                                  <div class="form-outline flex-fill mb-0">
                                    <label
                                      style="color: #000000"
                                      class="form-label"
                                      for="form3Example1c"
                                      >الاسم</label
                                    >
                                    <input
                                      type="text"
                                      id="form3Example1c"
                                      class="form-control borderstyle border-top-0 border-start-0 border-end-0"
                                      v-model="contact.name"
                                    />
                                    <span
                                      class="erroe-feedbak"
                                      v-if="v$.contact.name.$error"
                                      >{{
                                        v$.contact.name.$errors[0].$message
                                      }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <!-- رقم الهاتف -->
                                <div
                                  class="d-flex flex-row align-items-center mb-4"
                                >
                                  <div class="form-outline flex-fill mb-0">
                                    <label
                                      style="color: #000000"
                                      class="form-label"
                                      for="form3Example3c"
                                      >رقم الهاتف</label
                                    >
                                    <input
                                      type="number"
                                      id="form3Example3c"
                                      class="form-control borderstyle border-top-0 border-start-0 border-end-0"
                                      v-model="contact.number"
                                    />
                                    <span
                                      class="erroe-feedbak"
                                      v-if="v$.contact.number.$error"
                                      >{{
                                        v$.contact.number.$errors[0].$message
                                      }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- البريد الالكتروني -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline flex-fill mb-0">
                                <label
                                  class="form-label"
                                  for="form3Example4c"
                                  style="color: #000000"
                                  >البريد الالكتروني</label
                                >
                                <input
                                  type="email"
                                  id="form3Example4c"
                                  class="form-control borderstyle border-top-0 border-start-0 border-end-0"
                                  v-model="contact.email"
                                />
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.email.$error"
                                  >{{
                                    v$.contact.email.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!--  الاقسام -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline flex-fill mb-0">
                                <label
                                  class="form-label"
                                  for="form4Example1c"
                                  style="color: #000000"
                                  >الاقسام</label
                                >
                                <select
                                  class="d-block borderstyle form-select border-top-0 border-start-0 border-end-0"
                                  v-model="contact.field"
                                >
                                  <option v-for="field in fields" :key="field">
                                    {{ field.name }}
                                  </option>
                                </select>
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.field.$error"
                                  >{{
                                    v$.contact.field.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!-- الرسالة -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline" style="width: 100%">
                                <label
                                  class="form-label"
                                  for="textAreaExample"
                                  style="color: #000000"
                                  >الرسالة</label
                                >
                                <textarea
                                  class="form-control borderstyle"
                                  style="border: 1px solid #000000"
                                  id="textAreaExample1"
                                  rows="4"
                                  v-model="contact.desc"
                                ></textarea>
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.desc.$error"
                                  >{{
                                    v$.contact.desc.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!-- success & error messeg -->
                            <div class="row g-3 align-items-center">
                              <div
                                class="col-auto d-block mx-auto m-3 alert alert-success"
                                v-if="successMessage.length > 0"
                              >
                                {{ successMessage }}
                              </div>
                              <div
                                class="col-auto d-block mx-auto m-3 alert alert-danger"
                                v-if="errorMessage.length > 0"
                              >
                                {{ errorMessage }}
                              </div>
                            </div>
                            <!-- ارسال -->
                            <div class="text-start mb-3 mt-4 mb-lg-4">
                              <button
                                @click="ordernow()"
                                type="button"
                                class="btn btn-lg text-white text-end"
                                style="background-color: #ef4823"
                              >
                                ارسال
                              </button>
                            </div>
                          </form>
                        </div>
                        <div
                          class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2"
                        >
                          <img
                            src="@/assets/Delivery.gif"
                            class="img-fluid"
                            height="400"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import NavBarCom from "@/components/navbar/NavBar.vue";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "OrderNow",
  components: { NavBarCom, FooterCom, PageLoader },
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      v$: useValidate(),
      contact: {
        name: "",
        number: "",
        email: "",
        field: "",
        desc: "",
      },
      fields: [],
    };
  },
  validations() {
    return {
      loading: false,
      contact: {
        name: { required },
        number: { required },
        email: { required, email },
        field: { required },
        desc: { required },
      },
    };
  },
  async mounted() {
    this.getcat();
  },
  methods: {
    async getcat() {
      this.loading = true;
      let category = await axios.get(
        `https://admin.growth-tech.co/api/products`
      );
      // .catch(this.$router.push({ path: "servererror" }));

      if (category.status == 200) {
        this.fields = category.data.cats;
      }
      this.loading = false;
    },
    async ordernow() {
      this.loading = true;
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.post(
          `https://admin.growth-tech.co/api/order`,
          this.contact
        );
        if (result.status == 200) {
          this.$swal.fire({
            icon: "success",
            title: "تم...",
            text: "عملية تسجيل ناجحة",
            footer: "<p>تم تسجيل طلبك بنجاح</p>",
            timer: 2000,
          });
          this.errorMessage = "";
          this.successMessage = "success fill";
          setTimeout(() => {
            this.successMessage = "";
            this.errorMessage = "";
            this.contact.name = "";
            this.contact.number = "";
            this.contact.email = "";
            this.contact.field = "";
            this.contact.desc = "";
            (this.v$.contact.name.$errors[0].$message = ""),
              (this.v$.contact.number.$errors[0].$message = ""),
              (this.v$.contact.email.$errors[0].$message = ""),
              (this.v$.contact.field.$errors[0].$message = ""),
              (this.v$.contact.desc.$errors[0].$message = "");
          }, 2000);
        } else {
          this.successMessage = "";
          this.errorMessage = "some thing wrong";
        }
      } else {
        this.successMessage = "";
        // this.errorMessage = "fill faled";
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "عملية تسجيل خاطئة",
          footer: "<p>املئ البيانات بطريقة صحيحة</p>",
          timer: 2000,
        });
      }
      this.loading = false;
    },
  },
};
</script>

<style>
.borderstyle {
  border-bottom: 1px solid #000000 !important;
}
</style>
