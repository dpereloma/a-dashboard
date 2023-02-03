import { ChargePointsTypes } from '..';
import * as Services from '../../../services';
import { AuthHelpers } from '../../auth';

export async function fetchChargePointsPartnerAssign(
  data: ChargePointsTypes.Requests.ReqChargePointsPartnerAssignParams,
) {
  try {
    const header = await AuthHelpers.authHeader();
    const response =
      await Services.apiService.post<ChargePointsTypes.Responses.ResChargePointsPartnerAssign>(
        '/charging/charge-points/partners',
        data,
        {
          headers: { ...header },
        },
      );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data);
  }
}
