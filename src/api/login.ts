import { Request } from "@/plugins/request";

export const mapText = (params: any = {}) => {
  return Request.axiosInstance({
    url: "/api/learn/mapText",
    method: "get",
    params
  });
};

// export function login (parameter: any)  {
//     return Request.axiosInstance({
//         url: '/api/learn/mapText',
//         method: 'get',
//         data: parameter
//     })
// }
