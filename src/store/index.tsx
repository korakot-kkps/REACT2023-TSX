import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer, { tasksMiddleware } from "./Tasks.store";
import todoListReducer from "./TodoList.store";
import modalReducer from "./Modal.store";
// import menuReducer from "./Menu.store";

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    modal: modalReducer,
    /*menu: menuReducer*/
  },
  //   middleware: (getDefaultMiddleware: any) => //todo:korakot - config middleware
  //     getDefaultMiddleware().concat(tasksMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
