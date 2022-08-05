import { useState } from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import icon from '../../assets/logosiclop.png';
import './App.css';

const Hello = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = await window.user.createUser('ipc-user', {
      name,
      user: username,
      password,
    });

    console.log(data);
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>PROTÓTIPO HIBRIDO SICLOP</h1>
      <form onSubmit={handleSubmit}>
        <div className="Hello">
          <label htmlFor="nome" className="label">
            Nome:{' '}
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username" className="label">
            Username:{' '}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Digite o username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="label">
            password:{' '}
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite o password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Salvar
          </button>
        </div>
      </form>
      {/* <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
