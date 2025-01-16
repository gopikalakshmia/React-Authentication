import { redirect } from "react-router-dom";

export const getToken=()=>{
   
return localStorage.getItem('token');
}


export const tokenLoader=()=>{
    return localStorage.getItem('token');
}