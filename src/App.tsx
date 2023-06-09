import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoCardList from "./components/TodoList/TodoCardList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import ModalCreateTask from "./components/Utilities/ModalTask";
import { modalActions } from "./store/Modal.store";
import { Task } from "./interfaces";
import { useGetTodoAllQuery } from "./services/TodoListService";
import ITodoItem from "./types/TodoItem";
import {  } from '././store/TodoList.store'
import TodoAddItem from "./components/TodoList/TodoAddItem";

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

function App() { 
  return (
    <React.Fragment>
      <TodoAddItem />
      <TodoCardList />
    </React.Fragment>
  );
}
export default App;
