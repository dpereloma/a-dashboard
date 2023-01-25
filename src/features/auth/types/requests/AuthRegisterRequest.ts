export interface AuthRegisterRequest {
  contacts: {
    email: {
      attributes: {
        additionalProp1: string;
        additionalProp2: string;
        additionalProp3: string;
      };
      contact: string;
      verified: true;
    };
    phone: {
      attributes: {
        additionalProp1: string;
        additionalProp2: string;
        additionalProp3: string;
      };
      contact: string;
      verified: true;
    };
  };
  details: {
    form: string;
    name: string;
  };
  password: string;
}
