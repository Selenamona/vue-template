/**
 * 分期方案管理
 */

import axios from "@/utils/axios";

// 登录
export function login(params) {
  return axios.post("/clue-center-platform/api/partner/login", params);
}
