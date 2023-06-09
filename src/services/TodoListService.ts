// import axios from "../http-common";
// import ITodoItem from "../types/TodoItem";

// const getAll = () => {
//   return axios.get<Array<ITodoItem>>("/TodoItems");
// };

// const getById = (id:number) => {
//   return axios.get<Array<ITodoItem>>(`/TodoItems/${id}`);
// };

// const create = (data:ITodoItem) => {
//   return axios.post<any>("/TodoItems",data);
// };

// const update = (data:ITodoItem) => {
//   return axios.put<any>("/TodoItems",data);
// };

// const removeById = (id:number) => {
//   return axios.delete<any>(`/TodoItems/${id}`);
// };
// const removeAll = (id: number) => {
//   return axios.delete<any>(`/TodoItems`);
// };

// const TodoListService = {
//   getAll,
//   getById,
//   create,
//   update,
//   removeById,
//   removeAll,
// };
// export default TodoListService;
 

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
import ITodoItem from "../types/TodoItem";

// type TodoListResponse = ITodoItem[];
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://localhost:7110/api/",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getTodoAll: builder.query<ITodoItem[], void>({
      query: () => ({ url: `TodoItems`, method: "get" }),
    }),
    addTodo: builder.mutation<ITodoItem, Omit<ITodoItem, "id">>({
      query: (body) => ({
        url: "TodoItems",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {useGetTodoAllQuery,endpoints} = todoApi;