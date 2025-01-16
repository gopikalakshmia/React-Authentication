import { redirect } from "react-router-dom";

export const getToken=()=>{
   
return localStorage.getItem('token');
}


export const tokenLoader=()=>{
    return localStorage.getItem('token');
}

export const checkAuthLoader=()=>{
    const token=localStorage.getItem('token');
    if(!token)
        return redirect("/auth");
    return null

}