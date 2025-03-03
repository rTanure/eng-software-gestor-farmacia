export interface LoginProps {
  login: string;
  password: string;
}

export interface RegisterProps {
  login: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}