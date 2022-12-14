import { TUser } from 'interfaces/TUser';
import { Channels, User } from 'main/preload';

declare global {
  interface Window {
    electron: {
      getConnectionStatus(): string;
      sendMessage(channel: Channels, args: unknown[]): void;
      on(
        channel: string,
        func: (...args: unknown[]) => void
      ): (() => void) | undefined;
      once(channel: string, func: (...args: unknown[]) => void): void;
    };

    user: {
      createUser(channel: User, newUser: TUser): void;
      on(
        channel: string,
        func: (...args: unknown[]) => void
      ): (() => void) | undefined;
      once(channel: string, func: (...args: unknown[]) => void): void;
    };
  }
}

export {};
