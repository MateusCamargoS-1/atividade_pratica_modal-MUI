import { useState, useEffect } from 'react';
import { Snackbar, Button, Box, Typography, Alert } from '@mui/material';
import TaskModal from '../components/TaskModal/TaskModal';
import TaskTable from '../components/TaskTable';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/models/authSlice';
import { useNavigate } from 'react-router-dom';

const TaskManager = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>('');
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setSnackbarMessage('Você precisa estar logado para acessar o gerenciador de tarefas.');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      if (Array.isArray(parsedTasks)) {
        setTasks(parsedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (newTask: string) => {
    if (!isAuthenticated) {
      setSnackbarMessage('Você precisa estar logado para adicionar uma tarefa.');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks;
    });
    setSnackbarMessage('Tarefa adicionada com sucesso!');
    setOpenSnackbar(true);
  };

  const handleEditTask = (updatedTask: string, index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) => (i === index ? updatedTask : task));
      return updatedTasks;
    });
    setEditTaskIndex(null);
  };

  const handleDeleteTask = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      return updatedTasks;
    });
  };

  const handleOpenEditModal = (task: string, index: number) => {
    setEditTaskText(task);
    setEditTaskIndex(index);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h4">Gerenciador de Tarefas</Typography>
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Sair
        </Button>
      </Box>
      <TaskModal onAddTask={handleAddTask} />
      {editTaskIndex !== null && (
        <TaskModal
          initialTask={editTaskText}
          onEditTask={handleEditTask}
          taskIndex={editTaskIndex}
        />
      )}
      <TaskTable tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleOpenEditModal} />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={isAuthenticated ? 'success' : 'error'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TaskManager;
