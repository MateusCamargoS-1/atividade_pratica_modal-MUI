import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Box,
  Typography,
} from "@mui/material";

interface TaskTableProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
  onEditTask: (task: string, index: number) => void;
}

const TaskTable = ({ tasks, onDeleteTask, onEditTask }: TaskTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ borderRadius: 2, overflow: "hidden" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: 0,
              }}
            >
              Tarefa
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: 0,
                textAlign: "center",
              }}
            >
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow
              key={index}
              sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
            >
              <TableCell sx={{ borderBottom: "1px solid #e0e0e0", width: '100%' }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ flexGrow: 1, fontSize: "16px" }}
                  >
                    {task}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{ borderBottom: "1px solid #e0e0e0", textAlign: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onDeleteTask(index)}
                    sx={{
                      mr: 1,
                      borderRadius: 20,
                      "&:hover": {
                        backgroundColor: "#ffcccc",
                        borderColor: "#f44336",
                      },
                    }}
                  >
                    Excluir
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEditTask(task, index)}
                    sx={{
                      borderRadius: 20,
                      "&:hover": { backgroundColor: "#0056b3" },
                    }}
                  >
                    Editar
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
