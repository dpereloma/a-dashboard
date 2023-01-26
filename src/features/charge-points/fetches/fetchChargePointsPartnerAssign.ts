import { ChargePointsTypes } from '..';
import * as Services from '../../../services';

export async function fetchChargePointsPartnerAssign(
  data: ChargePointsTypes.Requests.ReqChargePointsPartnerAssignParams,
) {
  try {
    const response =
      await Services.apiService.post<ChargePointsTypes.Responses.ResChargePointsPartnerAssign>(
        '/charging/charge-points/partners',
        data,
      );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data);
  }
}
