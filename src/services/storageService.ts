export interface IStorageService {
  /**
   * Выдает данные по ключу из хранилища.
   *
   * @param key - Ключ
   */
  get: (key: string) => string | null;

  /**
   * Выдает данные по ключу из хранилища в виде объекта (parsed JSON).
   *
   * @param key - Ключ
   *
   * @template T - Тип данных получаемых из хранилища
   */
  getJson: <T extends Record<string, any> = any>(key: string) => T | null;

  /**
   * Сохраняет данные по ключу в хранилище.
   *
   * @param key - Ключ
   * @param data - Данные
   */
  set: (key: string, data: string) => void;

  /**
   * Сохраняет данные (объект) по ключу в хранилище.
   *
   * @param key - Ключ
   * @param data - Данные
   *
   * @template T - Тип данных сохраняемых в хранилище
   */
  setJson: <T extends Record<string, any> = any>(key: string, data: T) => void;

  /**
   * Удаляет данные по ключу из хранилища.
   *
   * @param key - Ключ
   */
  remove: (key: string) => void;
}

/**
 * Сервис для работы с хранилищем данных.
 */
export class StorageService implements IStorageService {
  public get(key: string) {
    return localStorage.getItem(key);
  }

  public getJson<T = any>(key: string) {
    const data = this.get(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  public set(key: string, data: string | any) {
    if (typeof data !== 'string') {
      return this.setJson(key, data);
    }

    return localStorage.setItem(key, data);
  }

  public setJson<T = any>(key: string, data: T) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  public remove(key: string) {
    return localStorage.removeItem(key);
  }
}
