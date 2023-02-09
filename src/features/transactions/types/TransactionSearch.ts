export interface TransactionSearch {
  availability: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
  connectors: {
    additionalProp1: {
      type: string;
    };
    additionalProp2: {
      type: string;
    };
    additionalProp3: {
      type: string;
    };
  };
  currency: string;
  device: {
    chargePointModel: string;
    chargePointSerialNumber: string;
    chargePointVendor: string;
    deviceId: string;
    firmwareVersion: string;
    iccId: string;
    imsi: string;
    meterSerialNumber: string;
    meterType: string;
  };
  id: string;
  location: {
    address: string;
    lat: number;
    lon: number;
  };
  name: string;
  partner: {
    id: string;
    name: string;
  };
  status: string;
  tariffGroupId: string;
}
