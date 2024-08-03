import { httpAxios } from "@/helper/httpHalper";

export async function signUp(user) {
  const result = await httpAxios.post("/api/users", user).then((res) => {
    res.data;
  });
  return result;
}

export async function login(LoginData) {
  const result = await httpAxios
    .post("/api/login", LoginData)
    .then((res) => res.data);

  return result;
}

export async function currentUser() {
  const result = await httpAxios.get("/api/current").then((res) => res.data);

  return result;
}

export async function logout() {
  const result = await httpAxios.post("/api/logout").then((res) => res.data);

  return result;
}
