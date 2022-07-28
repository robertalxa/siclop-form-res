import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.sendMessage('ipc-example', ['ping']);

const use = async () => {
  console.log(
    await window.electron.getProfileInfo([
      { name: 'Roberto', username: 'robert', password: '123456' },
    ])
  );
};

use();

window.user.buscaUsers('ipc-user', [
  'create',
  { name: 'Roberto', username: 'robert', password: '123456' },
]);
