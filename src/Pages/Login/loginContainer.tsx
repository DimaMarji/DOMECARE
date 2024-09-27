import { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, message, Image, Row, Typography } from "antd";
import { useCookies } from "react-cookie";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useDataMutation } from "../../ReactQuery/ApiCrud/useDataMutation";
import { ServicesNames } from "../../Constants/servicesNames";
import LoginImage from "../../assets/Images/Login/img-web1.png";
import LogoImage from "../../assets/Images/Login/Logo.png";

import PasswordIcon from "../../assets/Icons/Login/ic_password.svg";
import UserIcon from "../../assets/Icons/Login/ic_user.svg";
import { Button } from "../../Components";


const {Text}=Typography

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const [token, setToken] = useState(cookies?.token);

  const  push = useNavigate();

  const mutation = useDataMutation<
    { token: string },
    { email: string; password: string }
  >("post", ServicesNames.Login, {
    onSuccess: (data) => {
      setCookie("token", data.token, { path: "/" });
      setToken(data.token);
      message.success("Login successful");
      setLoading(false);
    },
    onError: () => {
      message.error("Login failed");
      setLoading(false);
    },
  });

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    mutation.mutate(values);
  };

  useEffect(() => {
    if (cookies?.token) {
      push("/");
    }
  }, [cookies?.token]);

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
            name="login"
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
              loading={loading}
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
