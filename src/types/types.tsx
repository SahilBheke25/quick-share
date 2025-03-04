export type UserCredentials = {
  username: string;
  password: string;
};

export type Equipments = {
  id: number;
  equipment_name: string;
  description: string;
  rent_per_day: number;
  quantity: number;
  equipment_img: string;
  status: string;
  uploaded_at: string;
  user_id: number;
};

export type LoginError = {
  data: null;
  error_code: number;
  error_message: string;
};

export type User = {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  pincode: number;
  uid: number;
};

export type UserDetails = {
  error_code: number;
  error_message: string;
  data: User;
};

export type Resp = {
  error_code: number;
  error_message: string;
  data: null | User | Equipments;
};

export type Bill = {
  id: number;
  payment_date: string;
  total_amount: number;
  rent_id: number;
};

export type Requirement = {
  userId: number;
  equipmentId: number;
  billingData: {
    rent_at: string;
    rent_till: string;
    quantity: number;
  };
};
