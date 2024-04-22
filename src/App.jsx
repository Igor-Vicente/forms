import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';
import LoginState from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginState />
        <Signup />
      </main>
    </>
  );
}

export default App;
