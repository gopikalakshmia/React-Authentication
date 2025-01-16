import { redirect } from "react-router-dom";
function Logout() {
    return ( <h1>Logout</h1> );
}

export default Logout;

export const logoutAction=()=>{
    console.log("token",localStorage.getItem('token'));
    console.log('logout');
 localStorage.removeItem("token");
 console.log("after removal",localStorage.getItem('token'));
    redirect('/');
}