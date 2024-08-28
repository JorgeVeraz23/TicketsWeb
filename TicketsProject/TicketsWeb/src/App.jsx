import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/InicioSesion';
import { Login } from './services/apiService';

function App() {
  // const [solicitudes, setSolicitudes] = useState([]);


  // useEffect(() => {
  //   //Llamada a la API para obtener las solicitudes
  //   fetch("https://localhost:7016/api/Solicitud/GetSolicitudesDeUsuario?idUsuario=1")
  //   .then((response) => response.json())
  //   .then((data) => setSolicitudes(data))
  //   .catch((error) => console.error('Error al obtener las solicitudes: '+ error));
  // }, []);

  const handleLogin = async (usuario, clave) => {
    const response = await Login(usuario, clave);
    if(response.isValid){
      console.log("fue valida la respuesta");
    }else{
      console.log("respuesta no valida")
    }
  }

  return (
    <>
      <div>
        <LoginForm onLogin={handleLogin}/>
      {/* {solicitudes.map((solicitud) => (
        <div key={solicitud.idSolicitud}>
          <h3>{solicitud.tipoSolicitud}</h3>
          <p>{solicitud.descripcionSolicitud}</p>
          <img 
            src={`https://localhost:7016/${solicitud.justificativo.replace(/\\/g, '/')}`} 
            alt="Justificativo" 
            style={{ width: '300px', height: 'auto' }} 
          />
          <p>{solicitud.detalleGestion}</p>
          <p>{new Date(solicitud.fechaIngreso).toLocaleString()}</p>
        </div>
      ))} */}
      </div>
      
    </>
  );
};

export default App
