import React from 'react';

export function validate(input) {
  let errors = {};
  if(!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.-*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function  Form() {

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [input, setInput] = React.useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = React.useState({});

  function handleInputChange(e) {
    
    // setInput( prev => ({
    //   ...prev,
    //   [e.target.name]: e.target.value
    // }))

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    const objErrors = validate({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(objErrors);
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={input.username} 
          onChange={handleInputChange} 
          placeholder="Email valid" 
          className={errors.username && "danger"} 
        />
        {/* { !input.username && <p>Campo requerido</p> } */}
        {
          errors.username && (<p className="danger">{errors.username}</p>)
        }
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={input.password} 
          onChange={handleInputChange} 
          placeholder="Password with numbers" 
          className={errors.password && "danger"} 
        />
        {
          errors.password && (<p className="danger">{errors.password}</p>)
        }
      </div>
      {/* {(errors.username || errors.password) ? null : <input type="submit" />} */}
      <input type="submit" value="Submit" />
    </form>
  )
}
