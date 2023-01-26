import { useMutation, UseMutationOptions } from 'react-query';
import { ChargePointsTypes } from '..';
import * as Types from '../../../types';
import { fetchChargePointsPartnerAssign } from '../fetches/fetchChargePointsPartnerAssign';

export function useChargePointsPartnerAssignMutation(
  options?: UseMutationOptions<
    ChargePointsTypes.Responses.ResChargePointsPartnerAssign,
    Types.HttpError,
    ChargePointsTypes.Requests.ReqChargePointsPartnerAssignParams
  >,
) {
  return useMutation(fetchChargePointsPartnerAssign, {
    retry: 0,
    ...options,
  });
}
