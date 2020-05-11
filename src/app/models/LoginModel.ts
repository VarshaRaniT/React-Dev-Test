export interface LoginFormState {
  user: string;
  name:any,
  password:any
}
export interface LoginFormProps {
  user:string
  name:any,
  password:any
}

export const LoginInitialState: LoginFormState = {
  user: '',
  name:"",
  password:""
};
