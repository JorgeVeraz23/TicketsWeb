import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    //Llamada a la API para obtener las solicitudes
    fetch("https://localhost:7016/api/Solicitud/GetSolicitudesDeUsuario?idUsuario=1")
    .then((response) => response.json())
    .then((data) => setSolicitudes(data))
    .catch((error) => console.error('Error al obtener las solicitudes: '+ error));
  }, []);

  return (
    <>
      <div>
      {solicitudes.map((solicitud) => (
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
      ))}
      </div>
      
    </>
  )
}

export default App
