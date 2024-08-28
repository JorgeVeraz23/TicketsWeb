import { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');

    console.log("El valor del usuario es", usuario)
    console.log("la contraseña es: "+ clave)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await onLogin({usuario, clave});
        console.log("this",response)
        if (response.isValid) {
            // Redirigir o manejar login exitoso
            console.log("Login exitoso");
          } else {
            console.log("Login fallido");
          }
    };

    return(
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            />
            <input 
            type="password"
            placeholder="Clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
            />
            <button type="submit">Ingresar</button>

            
        </form>
    );    
};

export default LoginForm;