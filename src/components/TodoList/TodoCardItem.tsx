import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

import ITodoItem from "../../types/TodoItem";
// import { todoListAction } from "../../store/TodoList.store";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";

import ModalConfirm from "../Utilities/ModalConfirm";

const TodoCardItem: React.FC<{ todoItem: ITodoItem }> = ({ todoItem }) => {
  //    const [todoItem, setTodoItem] = useState<ITodoItem>(item);
  const [showModal, setIsModalShown] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  // const deleteTodoItem = () => {
  //   console.log("Remove Id " + todoItem.id);
  //   dispatch(todoListAction.removeTodoItem(todoItem.id));
  // };

  const onOpenModal = () => {
    modalActions.openModalCreateTask();
    console.log();
  };
  return (
    <>
      {showModal && showModal ? (
        <ModalConfirm
          onClose={() => {
            setIsModalShown(false);
          }}
          onConfirm={() => {}}
          text="Confirm to delete data ?"
        />
      ) : (
        <Card variant="outlined" sx={{ maxWidth: 345 }} key={todoItem.id}>
          <CardHeader>
            <Typography gutterBottom variant="h5" component="div">
              Card Item
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {todoItem.id}
              {todoItem.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" onClick={onOpenModal}>
              Create New
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => setIsModalShown(true)}>
              Create New
            </Button>
            {/* <Button variant="contained" size="small" onClick={deleteTodoItem}>
              Delete
            </Button> */}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default React.memo(TodoCardItem);
