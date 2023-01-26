import * as Types from '../../../../types';
import { ChargePointPartnerItem } from '../ChargePointPartnerItem';

export type ResChargePointsPartnerItemsParams = Types.HttpListResponse<
  'items',
  ChargePointPartnerItem
>;
