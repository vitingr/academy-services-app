export interface GoogleAuth {
  clientId: string;
  clientSecret: string;
}

export interface PlanCardProps {
  type: string;
}

export interface UserContextProps {
  data: Object;
  setData: React.Dispatch<React.SetStateAction<Object>>;
  getInfo: () => Promise<void>;
}

export interface UserProps {
  id: any;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  trainingPreference: string;
  premium: boolean;
}

