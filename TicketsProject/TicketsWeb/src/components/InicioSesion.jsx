import { useState } from "react";
import {Container, TextField, Button, Box, Typography} from "@mui/material";

const LoginForm = ({onLogin}) => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');

    console.log("El valor del usuario es", usuario)
    console.log("la contraseña es: "+ clave)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await onLogin({usuario, clave});
        console.log("this",response)
        if (response.data.isValid) {
            // Redirigir o manejar login exitoso
            console.log("Login exitoso");
          } else {
            console.log("Login fallido");
          }
    };

    return(
        <Container maxWidth="xs">
            <Box 
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            >
            <Typography component="h1" variant="h5">
                Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electronico"
                    name="email"
                    value={usuario}
                    
                    onChange={(e) => setUsuario(e.target.value)}
                    autoFocus
                />
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={clave}
                    label="Contraseña"
                    type="password"
                    id="password"
                    onChange={(e) => setClave(e.target.value)}
                    
                />
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3,
                         mb:2,
                         backgroundColor: "#E0007F", 
                         color: "#fff", 
                         "&:hover": {
                           backgroundColor: "#B8006A",
                         },
                        }}
                                 >
                    Iniciar Sesion
                </Button>
                

            </Box>

            </Box>
        </Container>
    );    
};

export default LoginForm;