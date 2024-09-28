import { createSlice } from '@reduxjs/toolkit';
import { mockServices } from '../API/MockData/servicesData';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: mockServices,
  },
  reducers: {
    unlinkService: (state, action) => {
      const removeServiceById = (services, id) => {
        return services.filter((service) => {
          if (service.children) {
            service.children = removeServiceById(service.children, id);
          }
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
  },
});

export const { unlinkService, editService } = servicesSlice.actions;

export default servicesSlice.reducer;
