import { newMockServices } from "../../../API/MockData/servicesData";

  // Handle parent checkbox toggle (
  export const handleParentToggle = (parentId, childrenIds, isChecked,checkedItems) => {
    const newCheckedItems = { ...checkedItems };

    if (isChecked) {
      newCheckedItems[parentId] = childrenIds;
    } else {
      delete newCheckedItems[parentId];
    }
    return newCheckedItems
  };

  // Handle child checkbox toggle 
  export const handleChildToggle = (parentId, childId, isChecked,checkedItems) => {
    const newCheckedItems = { ...checkedItems };
    const currentChildren = newCheckedItems[parentId] || [];

    if (isChecked) {
      newCheckedItems[parentId] = [...currentChildren, childId];
    } else {
      newCheckedItems[parentId] = currentChildren.filter((id) => id !== childId);
      if (newCheckedItems[parentId].length === 0) {
        delete newCheckedItems[parentId]; 
      }
    }
    return newCheckedItems
  };

  // Utility function to check if a parent is indeterminate
  export const isParentIndeterminate = (parentId, childrenIds,checkedItems) => {
    const checkedChildren = checkedItems[parentId] || [];
    return (
      checkedChildren.length > 0 && checkedChildren.length < childrenIds.length
    );
  };

  // Utility function to check if all children are checked
  export const isParentChecked = (parentId, childrenIds,checkedItems) => {
    const checkedChildren = checkedItems[parentId] || [];
    return checkedChildren.length === childrenIds.length;
  };


export const addSelectedServices = (checkedItems) => {
  const servicesToAdd = [];

  for (const [parentId, childIds] of Object.entries(checkedItems)) {
  
    const parentService = newMockServices.find(service => service.id === Number(parentId));
    
    if (parentService) {
      const serviceToAdd = {
        ...parentService,
        children: parentService.children.filter(child => childIds.includes(child.id)), };

      if (serviceToAdd.children.length > 0) {
        servicesToAdd.push(serviceToAdd);
      }
    }
  }

  return servicesToAdd;
};

export const filterAvailableServices = (existingServices,stateNewServices) => {
  const existingIds = new Set(existingServices.map(service => service.id));

  return stateNewServices.filter(service => {
    const isParentExists = existingIds.has(service.id);
    
    
    return !isParentExists;
  }).map(service => ({
    ...service,
  }));
};

