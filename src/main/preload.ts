import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';
export type User = 'ipc-user';

contextBridge.exposeInMainWorld('electron', {
  sendMessage(channel: Channels, args: unknown[]) {
    ipcRenderer.send(channel, args);
  },
  on(channel: Channels, func: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => ipcRenderer.removeListener(channel, subscription);
  },
  once(channel: Channels, func: (...args: unknown[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args));
  },
  getConnectionStatus: () => ipcRenderer.invoke('get-connection-status', ''),
});

contextBridge.exposeInMainWorld('user', {
  createUser: async (channel: User, args: unknown[]) => {
    ipcRenderer.send(channel, args);
  },

  buscaUsers: async (channel: User, args: unknown[]) => {
    ipcRenderer.send(channel, args);
  },

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },

  // eslint-disable-next-line @typescript-eslint/ban-types
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
});
