interface DroppableBox {
  id: string;
  name: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const droppableBoxes: Array<DroppableBox> = [
  { id: '1', name: 'First Group' },
  { id: '2', name: 'Second Group' },
];

export const users: Array<Users> = [
  {
    id: '1',
    name: 'Beniu',
    email: 'beniu33@opi.io',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '2',
    name: 'Kazio',
    email: 'kazzy@fw.io',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '3',
    name: 'Frania',
    email: 'ainfra@hipk.io',
    avatar:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '4',
    name: 'Mysia',
    email: 'siasia@pafve.io',
    avatar:
      'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '5',
    name: 'Lusia',
    email: 'lus@lus.io',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];
