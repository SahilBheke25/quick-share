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
}

export type LoginError = {
  data: null;
  error_code: number;
  error_message: string;
}