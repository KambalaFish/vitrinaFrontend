type LocalStorageValue = object | string | number;
export class LocalStorageBase<T extends LocalStorageValue> {
  readonly key: string;
  constructor(key: string) {
    this.key = key;
  }

  persist(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  remove() {
    localStorage.removeItem(this.key);
  }
  get(): T | null {
    const unparsedUser = localStorage.getItem(this.key);
    if (!unparsedUser) {
      return null;
    }
    return JSON.parse(unparsedUser) as T;
  }
}
