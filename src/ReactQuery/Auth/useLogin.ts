import { useDispatch } from 'react-redux';
import { useDataMutation } from '../ApiCrud/useDataMutation';
import { message } from 'antd';
import { useCookies } from 'react-cookie';
import { ServicesNames } from '../../Constants/servicesNames';
import { setUserData } from '../../Redux/authSlice';


export interface ILoginResponse{
        accessToken: string,
        refreshToken:  string,
        id : string|number,
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        image: string
    
}

const useLogin = () => {
  const dispatch = useDispatch();
  
  const [cookies, setCookie] = useCookies(["accessToken"]);

  const mutation = useDataMutation<{ token: string; user: object }, { email: string; password: string }>(
    "post", ServicesNames.Login,
    {
      onSuccess: (data:ILoginResponse) => {
        dispatch(setUserData({user: data }));
        setCookie('accessToken', data.accessToken, { path: '/' });
    message.success("Login successful");
      },
      onError: (error) => {
        console.log(error)
        message.error(error?.response?.data?.message);
      },
    }
  );

  return mutation;
};

export default useLogin;
