import { useContext } from 'react';
import { AuthContext } from '../ContextApi/AuthProvider';
// 
const useAuth=()=>{
    
    return useContext(AuthContext)
}
export default useAuth;

// const useAuth = () =>{
//     return useContext(AuthContext);
// }
// export default useAuth;