interface DroppableBox {
  id: string;
  name: string;
}

interface Users {
  id: string;
  name: string;
  telephone: string;
}

export const droppableBoxes: Array<DroppableBox> = [
  { id: '1', name: 'First Group' },
  { id: '2', name: 'Second Group' },
];

export const users: Array<Users> = [
  {
    id: '1',
    name: 'Beniu',
    telephone: '897 998 789',
  },
  {
    id: '2',
    name: 'Kazio',
    telephone: '789 809 900',
  },
  {
    id: '3',
    name: 'Frania',
    telephone: '534 897 450',
  },
  {
    id: '4',
    name: 'Mysia',
    telephone: '898 466 254',
  },
  {
    id: '5',
    name: 'Lusia',
    telephone: '235 236 346',
  },
];
