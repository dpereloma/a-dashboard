export interface Transaction {
  authStatus: string;
  clientId: string;
  cpDeviceId: string;
  cpId: string;
  details: {
    deviceConnectorId: number;
    meterStart: number;
    meterStop: number;
    stopReason: string;
    tariff: {
      currency: string;
      firstFreePeriodMin: number;
      price: number;
      unit: string;
    };
  };
  deviceTransactionId: number;
  energyW: number;
  id: string;
  partnerId: string;
  startAt: string;
  stopAt: string;
  tag: string;
  tagId: string;
}
