import DroppableBox from './components/DroppableBox';
import Info from './components/Info';
import UserCard from './components/UserCard';
import { droppableBoxes, users } from './data';

function App() {
  return (
    <>
      <Info />

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2em' }}>
        {droppableBoxes.map((box) => (
          <DroppableBox boxTitle={box.name} key={box.id}>
            {users.map((user) => (
              <UserCard id={user.id} name={user.name} email={user.email} avatar={user.avatar} key={user.id} />
            ))}
          </DroppableBox>
        ))}
      </div>
    </>
  );
}

export default App;
