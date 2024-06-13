import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [shantami, pritytome] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6669c4fce41b4d34e4025bba')
      .then(response => response.json())
      .then(json => pritytome(json.record));
  }, []);

  return (
    <div className="main flex flex-wrap gap-10">
      {shantami.map((box) => (
        <div key={box.id} className="card w-[350px] h-[500px] bg-orange-400 rounded-[20px] flex flex-wrap flex-col items-center gap-[20px]">
          <div className="img w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={box.image|| ""} alt="photo" />
          </div>
          <div className="text">
            <p className='text-lg font-semibold text-white'>ID: {box.character_id}</p>
            <h1 className='text-xl font-bold text-white'>User Name: {box.name}</h1>
            <p className='text-lg font-semibold text-white'>Address: {box.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
