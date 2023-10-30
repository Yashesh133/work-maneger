import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
  return result;
}

export async function getTask(userId) {
  const result = await httpAxios
    .post(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
  console.log("result: ", result);
  return result;
}
