export const mockServices = [
    {
      id: 1,
      name: 'Service Group 1',
      
      children: [
        {
          id: 2,
          name: 'Sub-service 1.1',
          
          children: [
            { id: 3, name: 'Sub-service 1.1.1' },
            { id: 4, name: 'Sub-service 1.1.2' },
          ],
        },
        { id: 5, name: 'Sub-service 1.2' },
      ],
    },
    {
      id: 6,
      name: 'Service Group 2',
      
      children: [
        { id: 7, name: 'Sub-service 2.1' },
        {
          id: 8,
          name: 'Sub-service 2.2',
          
          children: [{ id: 9, name: 'Sub-service 2.2.1' }],
        },
      ],
    },{
      id: 9,
      name: 'Service Group 3',
      
      children: [
        { id: 10, name: 'Sub-service 3.1' },
        {
          id: 11,
          name: 'Sub-service 3.2',
          
          children: [{ id: 9, name: 'Sub-service 2.2.1' }],
        },
      ],
    },
  ];
  