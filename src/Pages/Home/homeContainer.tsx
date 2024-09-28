import { useState } from "react";
import AddNewServices from "./AddService/AddService";
import Title from "antd/lib/typography/Title";
import "./styles.scss"

const Home: React.FC = () => {
  return (
    <div className="service-page">
      <Title className="font-size-16 service-title">Services</Title>
      <AddNewServices />
    </div>
  );
};

export default Home;
