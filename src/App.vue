<template>
  <div class="bg-slate-800">
    <div class="bg-gray-800">
      <Header />
    </div>
    <div class="bg-slate-800">
      <router-view></router-view>
    </div>
    <div class="bg-gray-800">
      <Footer />
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Header,
    Footer,
  },
};
</script>
