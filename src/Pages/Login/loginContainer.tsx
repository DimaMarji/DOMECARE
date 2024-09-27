import { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, message, Image, Row } from "antd";
import { useCookies } from "react-cookie";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useDataMutation } from "../../ReactQuery/ApiCrud/useDataMutation";
import { Title, Text, Button } from "../../Components";
import { ServicesNames } from "../../Constants/servicesNames";
import LoginImage from "../../assets/Images/Login/img-web1.png";
import LogoImage from "../../assets/Images/Login/Logo.png";

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
      <Col lg={12} className="image-col">
      
      <Image preview={false} className={"loginImage"} alt="login" src={LoginImage} />
      </Col>

      <Col lg={12} className="form-col">
      <Col lg={11} className="form-content">
      <Image preview={false} className={"login-logo"} alt="login" src={LogoImage} />
        <Text
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
         Welcome back! Please login to your account.
        </Text>
       
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            requiredMark={false}
            // label=" *"
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your email or username!",
              },
            ]}
          >
            <Input placeholder="Username or Phone Number" />
          </Form.Item>
          <Form.Item
            requiredMark={false}
            label="Password *"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="************" />
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="login-footer">
          <Text
            typographyType={{
              type: "regular-regular-regular",
              size: "14px-14px-14px",
            }}
          >
            Don't have an Account?
          </Text>

          <Text
            className="register-link"
            typographyType={{
              type: "regular-regular-regular",
              size: "14px-14px-14px",
            }}
          >
          </Text>
        </div>
      </Col>
      </Col>
    </Row>
  );
};

export default Login;
