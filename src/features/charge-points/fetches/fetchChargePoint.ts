import { Responses } from '../types';
import { AuthHelpers } from '../../auth';
import * as Services from '../../../services';
import * as Types from '../../../types';

/**
 * Search clients.
 *
 * - Method: GET
 * - [Swagger Docs](https://ev2go.secreate.dev/swagger/index.html#/charging/get_charging_charge_points__id_)
 *
 * @param chargePointId - Charge point ID
 *
 * @template TResponse - API response data type
 * @template TError - API error response data type
 */
export async function fetchChargePoint<
  TResponse = Responses.ResChargePoint,
  TError = Types.HttpError,
>(chargePointId: string) {
  try {
    const header = await AuthHelpers.authHeader();
    const response = await Services.apiService.get<TResponse>(
      `/charging/charge-points/${chargePointId}`,
      {
        headers: { ...header },
      },
    );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data as TError);
  }
}
