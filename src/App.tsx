import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const greetings = (name?: string) => {
    return `Seja bem vindo ${name || 'visitante'}`;
  };
  const isKid = (age: number) => {
    if(age < 18){
      console.warn('Criança detectada!');
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greetings()}
        </p>
        {isKid(1) && 
          <p>Não permitido acesso de menores de 18</p>
        }
      </header>
    </div>
  );
}

export default App;
