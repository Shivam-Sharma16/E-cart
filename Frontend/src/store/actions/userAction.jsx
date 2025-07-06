
import axios from '../../api/axiosconfig'
import { loaduser } from '../reducers/userSlice';


export const asyncRegisterUser=(user)=>async(dispatch,getState)=>{
try {
    
    const res= await axios.post('/user',user)
    console.log(res);

    

} catch (error) {
    console.log(error);
    
}
}


export const asyncLoginUser=(user)=>async(dispatch,getState)=>{
try {
     const {data}= await axios.get(`/user?email=${user.email}&password=${user.password}`)
    
    // const res= await axios.post('/user',user)
   localStorage.setItem('user',JSON.stringify(data[0]))

    

} catch (error) {
    console.log(error);
    
}
}

export const asyncLogoutUser=(user)=>async(dispatch,getState)=>{
try {
     const {data}= await axios.get(`/user?email=${user.email}&password=${user.password}`)
    
    // const res= await axios.post('/user',user)
   localStorage.removeItem('user')

    

} catch (error) {
    console.log(error);
    
}
}

export const asyncCurrentUser=(user)=>async(dispatch,getState)=>{
try {
    
    // const res= await axios.post('/user',user)
 const user = JSON.parse(localStorage.getItem('user'))
if (user) {dispatch(loaduser(user))
   
    
}
    else console.log("no login found");
    
    

} catch (error) {
    console.log(error);
    
}
}


// export const asyncUserDetails=(user)=>async(dispatch,getState)=>{
// try {
    
   
//     console.log(res);

    

// } catch (error) {
//     console.log(error);
    
// }
// }