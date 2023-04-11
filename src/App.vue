<template>
  <div class="whatsapp-btn" @click="openWhatsApp">
    <a href="#">
      <img
        src="../public/assets/rayah/whatsapp.png"
        width="60"
        height="60"
        alt="WhatsApp"
      />
    </a>
  </div>
  <router-view :key="$route.fullPath" />
</template>
<script>
export default {
  methods: {
    openWhatsApp() {
      const url = `https://wa.me/+966555155496`;
      window.open(url, "_blank");
    },
  },
};
</script>
<style>
.whatsapp-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.whatsapp-btn a {
  display: block;
  width: 60px;
  height: 60px;
  background-image: url("../public/assets/rayah/whatsapp.png");
  background-size: cover;
  text-indent: -9999px;
}
</style>
