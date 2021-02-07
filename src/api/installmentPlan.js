/**
 * 分期方案管理
 */
import axios from "@/utils/axios";

// 按省份获取城市
export function getCityByProvince(params) {
  return axios.get("/mock/cityByProvince.json", params);
}
// 按字母获取城市
export function getCityByLetter(params) {
  return axios.get("/mock/cityByLetter.json", params);
}
// 获取车品牌
export function getCarFirst(params) {
  return axios.get("/mock/carFirst.json", params);
}
// 获取车系
export function getCarSecond(params) {
  return axios.post(
    "/phenix-base-api/api/vehicleModel/getSecondCarList",
    params,
    {
      headers: {
        sysId: 2
      }
    }
  );
}
// export function getCarSecond(params) {
//   return axios.get("/mock/carSecond.json", params);
// }
// 获取车型
export function getCarThree(params) {
  return axios.post(
    "/phenix-base-api/api/vehicleModel/getThreeCarList",
    params,
    {
      headers: {
        sysId: 2
      }
    }
  );
}
// export function getCarThree(params) {
//   return axios.get("/mock/carThree.json", params);
// }
