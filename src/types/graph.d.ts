export const typeDefs = ["type Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  adress: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAdress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAdress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  createAt: String!\n  updateAt: String\n}\n\ntype User {\n  id: Int!\n  password: String\n  firstName: String!\n  LastName: String!\n  FullName: String\n  email: String\n  verifiedEmail: Boolean!\n  PhoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  age: Int\n  ProfilePhoto: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLatitude: Float\n  lastLongitude: Float\n  lastOrientation: Float\n  createAt: String!\n  updateAt: String!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  password: string | null;
  firstName: string;
  LastName: string;
  FullName: string | null;
  email: string | null;
  verifiedEmail: boolean;
  PhoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  age: number | null;
  ProfilePhoto: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLatitude: number | null;
  lastLongitude: number | null;
  lastOrientation: number | null;
  createAt: string;
  updateAt: string;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  adress: string;
  isFav: boolean;
  createAt: string;
  updateAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAdress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAdress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string;
}
