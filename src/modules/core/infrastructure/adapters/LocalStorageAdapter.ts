import { KeyValueStorageService } from '../../application/ports';

export class LocalStorageAdapter<T> implements KeyValueStorageService<T> {
  set(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): T | null {
    const json = localStorage.getItem(key) as string;

    return json ? (JSON.parse(json) as T) : null;
  }
}
