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
  firstname: string;
  lastname: string;
  email: string;
  trainingPreference: string;
  premium: boolean;
}

export interface ServicePageProps {
  content?: any;
  handleFunction?: any;
}

export interface ServiceProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  subscribers: string;
}