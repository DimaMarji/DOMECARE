import { createSlice } from '@reduxjs/toolkit';
import { mockServices, newMockServices } from '../API/MockData/servicesData';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: mockServices,
    newServices:newMockServices
  },
  reducers: {
    unlinkService: (state, action) => {
      const removeServiceById = (services, id) => {
        return services.filter((service) => {
          if (service.children) {
            service.children = removeServiceById(service.children, id);
          }
          if(service.id == id) state.newServices=[...state.newServices,service]
          return service.id !== id;
        });
      };
      state.services = removeServiceById(state.services, action.payload.id);
     
    },
    editService: (state, action) => {
      const editServiceById = (services, id, newName) => {
        services.forEach((service) => {
          if (service.id === id) {
            service.name = newName;
          } else if (service.children) {
            editServiceById(service.children, id, newName);
          }
        });
      };
      editServiceById(state.services, action.payload.id, action.payload.newName);
    }, 
    addService: (state, action) => {
      state.services.push(action.payload);
    },
  },
});

export const { unlinkService, editService , addService} = servicesSlice.actions;

export default servicesSlice.reducer;
