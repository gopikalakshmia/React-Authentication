import { useState } from "react";
import { Form, useSearchParams, Link, useActionData } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [searchPrams] = useSearchParams();
  const isLogin = searchPrams.get("mode") === "Login";
  const data = useActionData();
  if (data) console.log(data.error);

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {data&&data.message &&<p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "SignUp" : "Login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
