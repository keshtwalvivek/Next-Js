import { httpAxios } from "@/helper/httpHalper";

export async function signUp(user) {
  const result = await httpAxios.post("/api/users", user).then((res) => {
    res.data;
  });
  return result;
}
