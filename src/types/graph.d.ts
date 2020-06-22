/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  password: string | null;
  firstName: string;
  lastName: string;
  FullName: string | null;
  email: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  age: number | null;
  profilePhoto: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLatitude: number | null;
  lastLongitude: number | null;
  lastOrientation: number | null;
  createAt: string;
  updateAt: string;
  messages: Array<Message> | null;
  chat: Chat | null;
  verifications: Array<Verification> | null;
  ridesAsPassenger: Array<Ride> | null;
  ridesAsDriver: Array<Ride> | null;
  fbId: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  createAt: string;
  updateAt: string | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  participants: Array<User>;
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
  user: User;
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
  passenger: User;
  driver: User;
}

export interface Mutation {
  FacebookConnect: FacebookConnectResponse;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  fbId: string;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
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

export interface InstagramResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Mutation_Instagram {
  InstagramConnect: InstagramResponse | null;
}

export interface InstagramConnectMutation_InstagramArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  instaId: string;
}
