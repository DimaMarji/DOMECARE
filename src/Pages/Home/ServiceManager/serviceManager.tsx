import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, Checkbox, Input, Modal, Image } from 'antd';
import {unlinkService, editService, addService } from '../../../Redux/servicesSlice';
import EditIcon from "../../../assets/Icons/Services/ic_edite.svg";
import UnlinkIcon from "../../../assets/Icons/Services/unlink.svg";
import "./styles.scss"
import { addSelectedServices, filterAvailableServices, handleChildToggle, handleParentToggle, isParentChecked, isParentIndeterminate } from './helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from '../../../Components';

const { Panel } = Collapse;

const {Search}= Input

const ServiceManager = () => {
  
  const {search,pathname} =useLocation();
  const navigate=useNavigate()
  const isAddService=search.split("=")?.[1]=="add-services";
  const stateServices = useSelector((state) => state?.services?.services);
  const stateNewServices = useSelector((state) => state?.services?.newServices);
  const services =isAddService? filterAvailableServices(stateServices,stateNewServices): stateServices

  const dispatch = useDispatch();

  const [editingServiceId, setEditingServiceId] = useState(null);
  const [newName, setNewName] = useState('');
  const [isUnlinkModalOpen, setIsUnlinkModalOpen] = useState(false);
  const [serviceToUnlink, setServiceToUnlink] = useState(null);
 const [checkedItems, setCheckedItems] = useState({});


  const handleEditService = (id) => {
    dispatch(editService({ id, newName }));
    setEditingServiceId(null);
    setNewName('');
  };

  const handleUnlinkService = (id) => {
    setServiceToUnlink(id);
    setIsUnlinkModalOpen(true);
  };

  const confirmUnlinkService = () => {
    dispatch(unlinkService({ id: serviceToUnlink }));
    setIsUnlinkModalOpen(false);
    setServiceToUnlink(null);
  };

  const handleAddServices = () => {
    const services = addSelectedServices(checkedItems);
    services.forEach(service => {
      dispatch(addService(service));
    });
  };

  const actionsButton= (service,isChild?:boolean)=>isAddService?null 
  :<div className='actions-container'  onClick={(e) => e.stopPropagation()}>   
  {!isChild && <Button type="link" danger onClick={() => handleUnlinkService(service.id)}>
  <Image preview={false} width={20} src={UnlinkIcon}/>
  </Button>}
  <Button type="link" onClick={() => setEditingServiceId(service.id)}>
    <Image preview={false} width={20} src={EditIcon}/>
  </Button>
  </div>

  const linkButton=<div className='add-service-header'>
    <Search placeholder="Search.." enterButton={false} prefix={<SearchOutlined/>}/>
  <div className='link-service-buttons'>
    <Button onClick={()=>{
    setCheckedItems({})
    navigate(pathname)
  }} type='secondary'>
    <CloseOutlined/>
  </Button>
    <Button  onClick={()=>{
    handleAddServices()
  }} type='primary'>
    Link
  </Button>
  </div>
  </div>

  const renderServices = (services) => {
    return services?.map((service) => (
      <Panel
        header={
          <div className='service-item'>
           <Checkbox
           onClick={(e)=>e.stopPropagation()}
          checked={isParentChecked(service.id, service.children?.map((child) => child.id) || [],checkedItems)}
          indeterminate={isParentIndeterminate(service.id, service.children?.map((child) => child.id) || [],checkedItems)}
          onChange={(e) =>
            setCheckedItems(handleParentToggle(
              service.id,
              service.children?.map((child) => child.id) || [],
              e.target.checked,
              checkedItems
            ))
          }
        >
              {editingServiceId === service.id ? (
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onBlur={() => handleEditService(service.id)}
                />
              ) : (
                <span>{service.name}</span>
              )}
            </Checkbox>
           {actionsButton(service)}
          </div>
        }
        key={service.id}
      >


{service.children && (
          <div>
            {service.children.map((child) => (
               <div className='service-item'>
              <Checkbox
                key={child.id}
                onClick={(e)=>e.stopPropagation()}
                checked={checkedItems[service.id]?.includes(child.id) || false}
                onChange={(e) => setCheckedItems(handleChildToggle(service.id, child.id, e.target.checked,checkedItems))}
              >
                  {editingServiceId === child.id ? (
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onBlur={() => handleEditService(child.id)}
                />
              ) : (
                <span>{child.name}</span>
              )}
                
              </Checkbox>
               {actionsButton(child,true)}
               </div>
            ))}
          </div>
        )}
      </Panel>
    ));
  };

  return (
    <div className='services-container'>
      {isAddService && linkButton}
      <Collapse>{renderServices(services)}</Collapse>

      <Modal
        title="Confirm Unlink"
        open={isUnlinkModalOpen}
        onOk={confirmUnlinkService}
        okButtonProps={{
          className:"default-button"
        }}
        onCancel={() => setIsUnlinkModalOpen(false)}
      >
        <p>Are you sure you want to unlink this service? If it has subservices, they will also be removed.</p>
      </Modal>
    </div>
  );
};

export default ServiceManager;
