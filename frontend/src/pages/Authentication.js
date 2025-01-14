
import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const authenticationAction=async({request,params})=>{

const queryParams=new URL(request.url).searchParams;

const mode=queryParams.get('mode')||'login';

  const data=await request.formData();
  const formDta={email:data.get('email'),password:data.get('password')};
  console.log(formDta);
  const response=await fetch("http://localhost:8080/"+mode,{method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formDta)
  })
  console.log(response.status);
  if(response.status==422 ||response.status==401 )
    return response
  if (!response.ok){
    throw json({message:'some error while post data in authentication'});
  }
return redirect('/');

}