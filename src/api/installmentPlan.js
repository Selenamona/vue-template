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
