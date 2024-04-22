import Header from './components/Header.jsx';
import LoginRef from './components/LoginRef.jsx';
import Signup from './components/Signup.jsx';
import LoginState from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginRef />
        <LoginState />
        <Signup />
      </main>
    </>
  );
}

export default App;
