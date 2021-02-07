/**
 * 分期方案管理
 */

export const installmentPlan = [
  {
    path: "/addCity",
    name: "AddCity",
    component: () => import("../views/citiesManage/AddCity.vue")
  },
  {
    path: "/",
    name: "AddCar",
    component: () => import("../views/carTypeManage/AddCarType.vue")
  }
];
