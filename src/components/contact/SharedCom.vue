<template>
  <!-- تواصل معنا -->
  <div class="container-fluid mt-3">
    <div class="row d-flex justify-content-center">
      <div
        class="col-md-10"
        style="background-color: #393e46; border-radius: 24px"
      >
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-50"
          >
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black border-0">
                <div class="card-body p-0" style="direction: ltr">
                  <div
                    class="row justify-content-center py-5 bg-img"
                    style="background-color: #393e46; border-radius: 24px"
                  >
                    <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                      <form
                        class="mx-1 mx-md-4 input-icons"
                        style="direction: rtl"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <!--  الاسم الاول -->
                            <div class="d-flex flex-row align-items-center">
                              <div class="form-outline flex-fill mb-0">
                                <FontAwesome icon="user" class="icon" />

                                <input
                                  type="text"
                                  placeholder="الاسم"
                                  class="form-control"
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
                            <div class="d-flex flex-row align-items-center">
                              <div class="form-outline flex-fill mb-0">
                                <FontAwesome icon="phone" class="icon" />
                                <input
                                  type="number"
                                  placeholder="رقم الجوال"
                                  class="form-control"
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
                          <div class="col-md-6">
                            <!-- البريد الالكتروني -->
                            <div class="d-flex flex-row align-items-center">
                              <div class="form-outline flex-fill mb-0">
                                <FontAwesome icon="envelope" class="icon" />
                                <input
                                  type="email"
                                  placeholder="البريد الالكتروني"
                                  class="form-control"
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
                          </div>
                          <div class="col-md-6">
                            <div class="d-flex flex-row align-items-center">
                              <div class="form-outline flex-fill mb-0">
                                <FontAwesome icon="message" class="icon" />

                                <input
                                  type="text"
                                  placeholder="اترك رسالتك"
                                  class="form-control"
                                  v-model="contact.message"
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
                        </div>
                        <!-- ارسال -->
                        <div class="text-start mb-3 mt-4 mb-lg-4">
                          <button
                            style="
                              background-color: #ffd369;
                              border: none;
                              width: 100%;
                            "
                            @click="contactus()"
                            type="button"
                            class="btn text-black btn-lg text-center"
                          >
                            تواصل معنا
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2"
                    >
                      <div
                        class="card border-0 text-white text-end contact-Title bg-transparent"
                        style="width: 100%"
                      >
                        <div class="card-body" style="padding: 0px 15px">
                          <p
                            class="card-title lh-lg fs-20"
                            style="font-weight: 900 !important; font: 20px"
                          >
                            بسهولة الآن يمكنك ارسال طلبك وسيتم
                            <span class="text-yellow">التواصل معك</span>
                          </p>
                          <p class="card-text mt-5" style="color: #d7d8da">
                            أرسل طلبك وسيتم الرد عليك بأقصى سرعة ممكنة
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  name: "ContactUsCom",

  data() {
    return {
      loading: false,
      v$: useValidate(),
      contact: {
        name: "",
        email: "",
        number: "",
        message: "",
      },
    };
  },
  validations() {
    return {
      contact: {
        name: { required },
        email: { required, email },
        number: { required },
        message: { required },
      },
    };
  },
  async mounted() {
    this.loading = true;
    this.loading = false;
  },
  methods: {
    async contactus() {
      this.loading = true;
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.post(
          `https://admin.rayyah.net/api/contact`,
          this.contact
        );
        if (result.status == 200) {
          this.$swal.fire({
            icon: "success",
            title: "تم...",
            text: "عملية تسجيل ناجحة",
            footer: "<p>تم تسجيل ردك بنجاح</p>",
            timer: 2000,
          });
          setTimeout(() => {
            this.successMessage = "";
            this.contact.name = "";
            this.contact.number = "";
            this.contact.email = "";
            this.contact.message = "";
            (this.v$.contact.name.$errors[0].$message = ""),
              (this.v$.contact.number.$errors[0].$message = ""),
              (this.v$.contact.email.$errors[0].$message = ""),
              (this.v$.contact.message.$errors[0].$message = "");
          }, 2000);
        }
      } else {
        console.log(this.result);
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

<style scoped>
.bg-img::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.08;
  background-image: url("../../../public/assets/rayah/logo3.webp");
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: contain;
  transition: all 2s ease-in-out;
}
.bg-img:focus::before {
  z-index: -2;
}
.bg-img:hover::before {
  z-index: -2;
}
.form-control {
  border: none;
  border-radius: 5px !important;
  padding: 7px 35px !important;
  background-color: #5f6369;
}
.form-control:focus {
  color: #ffffff;
  background-color: #212529;
  border-color: #000000 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #00000000 !important;
}
::placeholder {
  color: #ffffff !important;
  font-size: 14px !important;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #ffffff !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .contact-Title {
    height: 183px;
    padding: 0px 37px;
  }
}
</style>
