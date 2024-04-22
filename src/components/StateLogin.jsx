import { useState } from 'react';

export default function LoginState() {
  const [enteredValues, setenteredValues] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(identifier, value) {
    setenteredValues((prevState) => ({ ...prevState, [identifier]: value }));
  }
  console.log('RENDERED!');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(evt) => handleInputChange('email', evt.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(evt) => handleInputChange('password', evt.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
