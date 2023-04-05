export class MemoryStoreAdapter<T> {
  private value: T | null = null;

  public get(): T | null {
    return this.value;
  }

  public save(value: T) {
    this.value = value;
  }
}
