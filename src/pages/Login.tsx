import { useState } from "react";
import { Button, TextField, Box, Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../store/models/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = storedUsers.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (!email || !password) {
      setSnackbarMessage("Preencha todos os campos!");
      setOpenSnackbar(true);
      return;
    }

    if (!user) {
      setSnackbarMessage("Email ou senha inválidos. Tente novamente.");
      setOpenSnackbar(true);
      return;
    }

    dispatch(login(email));
    navigate("/");
  };

  return (
    <Box sx={{ width: 300, margin: "100px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button onClick={() => navigate("/register")} sx={{ marginTop: 2 }}>
        Não tem conta? Registre-se
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
