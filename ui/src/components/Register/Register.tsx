import './Register.scss'

const Register = () => {

  async function Register(e: any) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(`http://localhost:5154/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
    console.log(response);
  }



  return (
    <div className={"format"}>
      <form className={"column"} onSubmit={Register}>
        <label>Email </label>
        <input name={"email"} type="text"/>
        <label>Password</label>
        <input name={"password"} type="password"/>
        <button style={{marginTop: 10}}>
          Submit
        </button>
      </form>

    </div>)
}

export default Register