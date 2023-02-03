import { ChargePointsTypes } from '..';
import { AuthHelpers } from '../../auth';
import * as Services from '../../../services';
import * as Types from '../../../types';
import * as Helpers from 'helpers';

/**
 * Search clients.
 *
 * - Method: GET
 * - [Swagger Docs](https://ev2go.secreate.dev/swagger/index.html#/charging/get_charging_charge_points_partners__partnerId__charge_points)
 *
 * @param partnerId - Partner ID
 * @param params - Params
 * @param pagination - Pagination
 *
 * @template TResponse - API response data type
 * @template TError - API error response data type
 */
export async function fetchChargePointsPartnerItems<
  TResponse = ChargePointsTypes.Responses.ResChargePointsPartnerItemsParams,
  TError = Types.HttpError,
>(
  partnerId: string,
  params?: ChargePointsTypes.Requests.ReqChargePointsPartnerItemsParams,
  pagination?: Helpers.RequestPagination,
) {
  try {
    console.log(2222);
    console.log({ ...params, ...Helpers.requestPagination(pagination) });
    const header = await AuthHelpers.authHeader();
    const response = await Services.apiService.get<TResponse>(
      `/charging/charge-points/partners/${partnerId}/charge-points`,
      {
        params: { ...params, ...Helpers.requestPagination(pagination) },
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
