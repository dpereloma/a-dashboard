import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Экземпляза объекта "axios".
 */
export type ApiService = AxiosInstance;

/**
 * Конфигурация сервиса - ApiService.
 */
export type ApiServiceConfig = AxiosRequestConfig;

/**
 * Результат выполнения запроса.
 *
 * @template T - Тип данных получаемые в ответе.
 */
export type ApiServiceResponse<T = any> = Promise<AxiosResponse<T>>;

/**
 * Ошибка от сервера.
 */
export interface ApiErrorResponse {
  code: string;
  details: Record<string, any>;
  message: string;
  translationKey: string;
}

/**
 * Экземпляр объекта "axios" с установленным BASE_URL для работы с API.
 */
export const apiService = axios.create({
  baseURL: 'https://ev2go.secreate.dev/api',
});
