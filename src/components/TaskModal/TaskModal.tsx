import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

interface TaskModalProps {
  onAddTask?: (task: string) => void;
  onEditTask?: (task: string, index: number) => void;
  initialTask?: string;
  taskIndex?: number;
}

const TaskModal = ({
  onAddTask,
  onEditTask,
  initialTask = "",
  taskIndex,
}: TaskModalProps) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    setTask(initialTask);
  }, [initialTask]);

  const handleOpen = () => {
    setOpen(true)
  };
  
  const handleClose = () => {
    setTask("");
    setOpen(false);
  };

  const handleSaveTask = () => {
    if (task) {
      if (onEditTask && taskIndex !== undefined) {
        onEditTask(task, taskIndex);
      } else if (onAddTask) {
        onAddTask(task);
      }
      setTask("");
      handleClose();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ margin: "10px" }}
      >
        {initialTask ? "Editar Tarefa" : "Adicionar Tarefa"}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" sx={{ mt: 2, mb: 2, fontWeight: "bold" }}>
            {initialTask ? "Editar Tarefa" : "Adicionar Nova Tarefa"}
          </Typography>
          <TextField
            fullWidth
            label="Tarefa"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveTask}
            >
              {initialTask ? "Salvar Alterações" : "Adicionar"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default TaskModal;
