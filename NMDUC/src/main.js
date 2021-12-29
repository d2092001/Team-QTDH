import Vue from "vue";
import App from "./App.vue";

//*add thêm vue router
import VueRouter from "vue-router"; //todo cài đặt và import vue router
import EmployeeList from "../src/view/employee/EmployeeList.vue";
import CustomerList from "../src/view/customer/CustomerList.vue";

const routes = [
  { path: "/employee", component: EmployeeList },
  { path: "/customer", component: CustomerList },
];

const router = new VueRouter({
  // mode: history,
  routes, // short for `routes: routes`
});

Vue.config.productionTip = false;

Vue.use(VueRouter); //todo phải user VueRouter:
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
