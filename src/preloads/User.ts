import { contextBridge, ipcRenderer } from 'electron';

// eslint-disable-next-line import/prefer-default-export
export const apiUser = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sendMessage`
   */

  insereUser: async () => {
    ipcRenderer.send('create');
  },

  buscaUsers: async () => {
    ipcRenderer.send('select');
  },

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },

  /** -'
   * Provide an easier way to listen to events
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
};

contextBridge.exposeInMainWorld('User', apiUser);
