//export const typeDefs = ["type User {\n  id: Int!\n  password: String\n  firstName: String!\n  LastName: String!\n  FullName: String\n  email: String\n  verifiedEmail: Boolean!\n  PhoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  age: Int\n  ProfilePhoto: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLatitude: Float\n  lastLongitude: Float\n  lastOrientation: Float\n  CreateAt: String!\n  UpdateAt: String!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String!\n}\n"];
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
  CreateAt: string;
  UpdateAt: string;
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
