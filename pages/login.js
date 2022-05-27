import Form from "./Form";

export default function Login() {
  async function handleLogin(email, password) {
    let user = {
      email: email,
      password: password,
    };

    let response = await fetch("https://reqres.in/api/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    let result = await response.json();
    console.log(response.status);

    console.log(result);

    console.log(typeof result);
    
    if (response.status === 201) {
      alert("Login Successful and statuscode " + response.status);

      window.location.assign("/dashboard");
    }
  }

  return (
    <div className="formDiv">
      <h1>Login</h1>
      <Form buttonText="Login" className="form" onClickfunction={handleLogin} />
    </div>
  );
}
