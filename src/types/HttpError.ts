export interface HttpError {
  code: string;
  details: Record<string, any>;
  message: string;
  translationKey: string;
}
