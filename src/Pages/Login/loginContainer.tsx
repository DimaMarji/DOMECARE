import { useEffect } from "react";
import { Checkbox, Col, Form, Input, Image, Row, Typography } from "antd";
import { useCookies } from "react-cookie";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/Images/Login/img-web1.png";
import LogoImage from "../../assets/Images/Login/Logo.png";

import PasswordIcon from "../../assets/Icons/Login/ic_password.svg";
import UserIcon from "../../assets/Icons/Login/ic_user.svg";
import { Button } from "../../Components";
import useLogin from "../../ReactQuery/Auth/useLogin";


const {Text}=Typography

const Login = () => {
  const [cookies] = useCookies(["accessToken"]);

  const  push = useNavigate();


  const { mutate, isLoading } = useLogin();

  const onFinish = (values: { email: string; password: string }) => {
    mutate(values);
  };

  useEffect(() => {
    if (cookies?.accessToken) {
      push("/");
    }
  }, [cookies?.accessToken]);

  return (
    <Row className={"loginContainer"}>
      <Col lg={12} className="image-col" sm={0} xs={0}>
      
      <Image preview={false} className={"loginImage"} alt="login" src={LoginImage} />
      </Col>

      <Col lg={12} className="form-col">
      <Col xl={12} lg={13} md={13} sm={14} xs={20} className="form-content">
      <Image preview={false} className={"login-logo"} alt="login" src={LogoImage} />
        <Text
        className="font-size-13"
        >
         Welcome back! Please login to your account.
        </Text>
       
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            requiredMark={false}
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email or username!",
              },
            ]}
          >
            <Input prefix={<Image width={19} preview={false} src={UserIcon}/>} placeholder="Username or Phone Number" />
          </Form.Item>
          <Form.Item
            requiredMark={false}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<Image width={19} preview={false} src={PasswordIcon}/>} placeholder="Password" />
          </Form.Item>
          <div className="remember-container">
            <Form.Item
              style={{ marginBottom: 0 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox defaultChecked>Remember me</Checkbox>
            </Form.Item>
            <a className="login-link" href={""}>Forget Password</a>
          </div>
          <div className="buttons-container">
          <Button
              type="secondary"
              className="register-button"
            >
              Register
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={isLoading}
            >
              Login
            </Button>
          </div>
        </Form>
  
      </Col>
      <div className="login-footer">
          <Text
            className="font-size-10"
          >
            By signing up you agree to our <span className="privacy">Privacy Policy and Terms</span>
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
