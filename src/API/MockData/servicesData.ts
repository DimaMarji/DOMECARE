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
  

  export const newMockServices=[ {
    id: 15,
    name: 'Service Group 5',
    children: [
      { id: 16, name: 'Sub-service 5.1' },
      {
        id: 17,
        name: 'Sub-service 5.2',
        children: [{ id: 18, name: 'Sub-service 5.2.1' }],
      },
    ],
  },{
    id: 18,
    name: 'Service Group 6',
    children: [
      { id: 19, name: 'Sub-service 6.1' },
      {
        id: 20,
        name: 'Sub-service 6.2',
        children: [{ id: 21, name: 'Sub-service 6.2.1' }],
      },
    ],
  }]