import { httpAxios } from "@/helper/httpHalper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((res) => res.data);
  return result;
}
