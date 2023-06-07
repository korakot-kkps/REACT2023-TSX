import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import ITodoItem from "../types/TodoItem";
import TodoListService from "../services/TodoListService";
import { useContext } from "react"; 

const initialState: {
  todoListItems: ITodoItem[];
} = {
  //  todoItem : TodoListService.getAll()
  //     .then((response: any) => {
  //        response.data;
  //       console.log(response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     })
  //   todoList: [],
  todoListItems: [],
};
const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    removeTodoItem(state, action) {
      const newTodoList = state.todoListItems.filter(
        (todoItem) => todoItem.id !== action.payload
      );
      state.todoListItems = newTodoList;
    },
  },
});

var defaultItems: ITodoItem[] = [];
// const [defaultItems, setDefaultItems] = useState([]);
const getDefaultTodoList = () => {
  TodoListService.getAll()
    .then((response: any) => {
      //   setDefaultItems (response.data);
      defaultItems = response.data;
      console.log(response.data); 
    })
    .catch((e: Error) => {
      console.log(e);
    });
};
getDefaultTodoList();


export const todoListAction = todoListSlice.actions;
export default todoListSlice.reducer;
