export interface AuthRegisterResponse {
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
  id: string;
  legalDetails: {
    form: string;
    name: string;
  };
  name: string;
  naturalDetails: {
    birthDate: string;
    firstName: string;
    identification: string;
    lastName: string;
    middleName: string;
  };
  type: string;
  userId: string;
}
