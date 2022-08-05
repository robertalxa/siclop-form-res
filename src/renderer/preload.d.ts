import { Channels, User } from 'main/preload';

declare global {
  interface Window {
    electron: {
      getProfileInfo(args: unknown[]): void;
      sendMessage(channel: Channels, args: unknown[]): void;
      on(
        channel: string,
        func: (...args: unknown[]) => void
      ): (() => void) | undefined;
      once(channel: string, func: (...args: unknown[]) => void): void;
    };

    user: {
      createUser(channel: User, args: unknown[]): void;
      on(
        channel: string,
        func: (...args: unknown[]) => void
      ): (() => void) | undefined;
      once(channel: string, func: (...args: unknown[]) => void): void;
    };
  }
}

export {};
