export const mockServices = [
    {
      id: 1,
      name: 'Service Group 1',
      checked: false,
      children: [
        {
          id: 2,
          name: 'Sub-service 1.1',
          checked: false,
          children: [
            { id: 3, name: 'Sub-service 1.1.1', checked: false },
            { id: 4, name: 'Sub-service 1.1.2', checked: false },
          ],
        },
        { id: 5, name: 'Sub-service 1.2', checked: false },
      ],
    },
    {
      id: 6,
      name: 'Service Group 2',
      checked: false,
      children: [
        { id: 7, name: 'Sub-service 2.1', checked: false },
        {
          id: 8,
          name: 'Sub-service 2.2',
          checked: false,
          children: [{ id: 9, name: 'Sub-service 2.2.1', checked: false }],
        },
      ],
    },
  ];
  