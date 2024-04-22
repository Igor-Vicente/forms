import { useState } from 'react';

export default function LoginState() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handleInputChange(identifier, value) {
    setEnteredValues((prevState) => ({ ...prevState, [identifier]: value }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid) return;
    console.log(enteredValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login State</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            value={enteredValues.email}
            onChange={(evt) => handleInputChange('email', evt.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
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
