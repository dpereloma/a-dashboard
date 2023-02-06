import { ChargePointPartnerItem } from '../ChargePointPartnerItem';

export type ResChargePoint = Omit<
  ChargePointPartnerItem,
  'availability' | 'tariffGroupId'
>;
