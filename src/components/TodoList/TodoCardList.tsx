import React, { useEffect, useState } from "react";
import ITodoItem from "../../types/TodoItem";
import { todoApi, useGetTodoAllQuery } from "../../services/TodoListService";
import TodoCardItem from "../TodoList/TodoCardItem";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../store/hooks";
import {setupStore} from '../../store/TodoList.store'

const TodoCardList: React.FC = () => {
  // const todoList = useAppSelector((state) => state.todoList);

  // const [todoCardList, setTodoList] = useState<Array<ITodoItem>>([]);

  // useEffect(() => {
  //   retrieveTodoCardList();
  // }, []);

  // const retrieveTodoCardList = () => {
  //   TodoListService.getAll()
  //     .then((response: any) => {
  //       setTodoList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     });
  // };

  //const handleChange_TaskDone = (
  //  event: React.MouseEvent<HTMLElement>,
  //  todoItem: ITodoItem
  //) => {
  //  setTodoList(todoItem);
  //};

  // const { data, error, isLoading } = useGetTodoAllQuery();
  // const store = setupStore();
  // const arg: any = null; 
  // store.dispatch(
  //   todoApi.endpoints["getTodoAll"].initiate(arg, { forceRefetch: true })
  // );

  const [trigger, { data, error, isLoading }] = todoApi.useLazyGetTodoAllQuery(); // lazy load data on trigger

  const refetchTodoListHandler = () => { //handler reload data
    trigger();
  };

  useEffect(() => { //initial data in first page load
    trigger();
  },[]);
  
  return (
    <>
      <Container maxWidth="md">
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          {data &&
            data.map((todoItem: ITodoItem, index: any) => (
              <Grid item xs={4} key={todoItem.id}>
                <TodoCardItem todoItem={todoItem} key={todoItem.id} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <button
        onClick={() => {
          refetchTodoListHandler();
        }}
      >
        Refetch
      </button>
    </>
  );
};

export default TodoCardList;
