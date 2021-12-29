<template>
  <div id="app">
    <the-navbar />
    <the-header />
    <the-content />
  </div>
</template>

<script>
// B1. import component:
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    TheContent,
  },
  // //todo 1. beforeCreate:
  // beforeCreate() {
  //   console.log("1.beforeCreate");
  //   console.log("name: " + this.name);
  //   // var name = this.getName();
  //   // console.log("getName " + name);
  // }, //! không có data
  // //todo 2. created:
  // created() {
  //   console.log("2. created");
  //   console.log("name:" + this.name);
  //   var name = this.getName();
  //   console.log("getName " + name);
  // }, //! có data, thường để lấy dữ liệu

  // //todo 3. beforeMount: chỉ lấy được dom thật còn dom ảo không lấy được (vue chủ yếu làm việc dom ảo)

  // //todo 4. mounted: đã lấy được dom ảo
  // //! chỉ chạy một lần

  // //todo 5. beforeUpdate: Được gọi khi data có sự thay đổi, và trước khi visualDOM re-rendered.
  // //* thay đổi thường xuyên và dùng nhiều
  // //! trước khi dom đc update

  // //todo 6. updated: Được gọi khi data đã được thay đổi
  // //* thay đổi thường xuyên và dùng nhiều
  // //! sau khi dom được update

  // //todo 7. computed tính toán
  // //todo 8. watch theo dõi

  //todo Data:
  data() {
    return {
      number: 1,
      name: "MISA",
      customers: [
        {
          CustomerCode: "KH001",
          FullName: "Nguyễn Minh Đức",
        },
      ],
    };
  },
  methods: {
    getName() {
      return "Nguyễn Minh Đức";
    },
  },
};
</script>

<style>
@import url("style/main.css");
</style>
