import { useState } from "react";
import Title from "antd/lib/typography/Title";
import "./styles.scss"
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../Components";
import ServiceManager from "./ServiceManager/serviceManager";
import { Col, Row } from "antd";

const Home: React.FC = () => {
  const navigate=useNavigate()
  const {search} =useLocation();
  const isAddService=search.split("=")?.[1]=="add-services";

  return (
   
       <Row>
        
       <Col md={16}>
       <div className="service-page">
      <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <Title className="font-size-16 service-title">{isAddService?"Add New Services":"Services"}</Title>
     { !isAddService && <Button style={{marginRight:24}} onClick={()=>navigate("?page=add-services")}>Add</Button>}
      </div>
     
      <ServiceManager />
      </div>
      </Col>
      </Row>
    
  );
};

export default Home;
