import DroppableBox from './components/DroppableBox';
import Info from './components/Info';
import { droppableBoxes } from './data';

function App() {
  return (
    <>
      <Info />

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2em' }}>
        {droppableBoxes.map((box) => (
          <DroppableBox boxTitle={box.name} key={box.id} />
        ))}
      </div>
    </>
  );
}

export default App;
