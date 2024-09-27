import { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, message, Image } from "antd";
import { useCookies } from "react-cookie";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useDataMutation } from "../../ReactQuery/ApiCrud/useDataMutation";
import { Title, Text, Button } from "../../Components";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const [token, setToken] = useState(cookies?.token);

  const  push = useNavigate();

  const mutation = useDataMutation<
    { token: string },
    { email: string; password: string }
  >("post", "user_register/login_user", {
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
    <div className={"loginContainer"}>
      <Col lg={7}>
        <Text
          typographyFontColor={"#3C65F5"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          Welcome back!
        </Text>
        <Title
          className="login-title"
          typographyType={{
            type: "semi-bold-semi-bold-semi-bold",
            size: "32px-32px-32px",
          }}
        >
          Member Login
        </Title>
        <Text
          typographyFontColor={"#6c757d"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          Access to all features. No credit card required.
        </Text>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            requiredMark={false}
            label="Username or Email address *"
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your email or username!",
              },
            ]}
          >
            <Input placeholder="Steven Job" />
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
      <Image className="login-image1" alt="login" src={LoginImage1} />
    </div>
  );
};

export default Login;
