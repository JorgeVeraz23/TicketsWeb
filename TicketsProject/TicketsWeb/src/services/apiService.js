import axios from 'axios';

export const apiUrl = 'https://localhost:7016/api'

export const Login = async (usuario) => {
    console.log("xd",usuario)
  
    try{
        const response = await axios.post(`${apiUrl}/Usuario/LoginUsuario?username=${usuario.usuario}&password=${usuario.clave}`, {
            usuario,
          })

          console.log('Respuesta de la API:', response.data);
          return response.data; // Retorna el cuerpo de la respuesta JSON directamente
    }catch(error){
        console.error('Error al intentar iniciar sesión:', error);
        return { isValid: false }; // Retorna un objeto con `isValid: false` en caso de error
    }

}
//    //jsons 
//   const credentials = { usuario, clave };

//     const response = await fetch(`${apiUrl}/Usuario/Login/LoginUsuario?username=${usuario.usuario}&password=${usuario.clave}`,{
//         method: 'POST',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(credentials),
//     });

//     if (!response.ok) {
//         console.error('Error al intentar iniciar sesión');
//         return { isValid: false }; // Retorna un objeto con `IsValid: false` en caso de error
//       }

//     return response.json();
// }