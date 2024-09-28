import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, Checkbox, Button, Input, Modal } from 'antd';
import { toggleService, unlinkService, editService } from '../../../Redux/servicesSlice';

const { Panel } = Collapse;

const ServiceManager = () => {
  const services = useSelector((state) => state?.services?.services);
  const dispatch = useDispatch();

  const [editingServiceId, setEditingServiceId] = useState(null);
  const [newName, setNewName] = useState('');
  const [unlinkModalVisible, setUnlinkModalVisible] = useState(false);
  const [serviceToUnlink, setServiceToUnlink] = useState(null);

  const handleCheckboxToggle = (id, checked) => {
    dispatch(toggleService({ id, checked }));
  };

  const handleEditService = (id) => {
    dispatch(editService({ id, newName }));
    setEditingServiceId(null);
    setNewName('');
  };

  const handleUnlinkService = (id) => {
    setServiceToUnlink(id);
    setUnlinkModalVisible(true);
  };

  const confirmUnlinkService = () => {
    dispatch(unlinkService({ id: serviceToUnlink }));
    setUnlinkModalVisible(false);
    setServiceToUnlink(null);
  };

  console.log(services)
  const renderServices = (services) => {
    return services?.map((service) => (
      <Panel
        header={
          <div>
            <Checkbox
              checked={service.checked}
              onChange={(e) => handleCheckboxToggle(service.id, e.target.checked)}
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
            <Button type="link" onClick={() => setEditingServiceId(service.id)}>
              Edit
            </Button>
            <Button type="link" danger onClick={() => handleUnlinkService(service.id)}>
              Unlink
            </Button>
          </div>
        }
        key={service.id}
      >
        {service.children ? renderServices(service.children) : null}
      </Panel>
    ));
  };

  return (
    <div>
      <Collapse>{renderServices(services)}</Collapse>

      <Modal
        title="Confirm Unlink"
        visible={unlinkModalVisible}
        onOk={confirmUnlinkService}
        onCancel={() => setUnlinkModalVisible(false)}
      >
        <p>Are you sure you want to unlink this service? If it has children, they will also be removed.</p>
      </Modal>
    </div>
  );
};

export default ServiceManager;
