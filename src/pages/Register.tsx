import { useState } from 'react';
import { Button, TextField, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (!email || !password) {
      setSnackbarMessage('Por favor, preencha todos os campos.');
      setOpenSnackbar(true);
      return;
    }

    const emailExists = storedUsers.some((user: { email: string }) => user.email === email);
    if (emailExists) {
      setSnackbarMessage('Email já cadastrado. Tente outro.');
      setOpenSnackbar(true);
      return;
    }

    storedUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    navigate('/login');
  };

  return (
    <Box sx={{ width: 300, margin: '100px auto', textAlign: 'center' }}>
      <h2>Cadastro</h2>
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
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Registrar
      </Button>
      <Button onClick={() => navigate('/login')} sx={{ marginTop: 2 }}>
        Já tem conta? Faça login
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

export default Register;
