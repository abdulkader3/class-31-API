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
    <>
      <div className="w-full h-[855px] relative">
        <div className="absolute top-4 left-4 hover:bg-[#F27BBD] hover:text-white rounded-[10px] transition-all transparent-box">
          <div className="w-[150px] h-auto rounded-[10px]">
            <p className=' p-2 '>I know there are always sometimes when you just want to know some anime character's name and find out their personalities, show name, and everything.</p>
          </div>
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 hover:bg-[#F27BBD] hover:text-white rounded-[10px] transition-all transparent-box">
          <div className="w-[150px] h-auto rounded-[10px]">
            <p className=' p-2 '>So, as for this web page, I, myself, am a big anime fan. I am the one who custom built this page.</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 hover:bg-[#F27BBD] rounded-[10px] hover:text-white transition-all transparent-box">
          <div className="w-[150px] h-auto rounded-[10px]">
            <p className=' p-2 '>Of course, you can always Google about anything, but Google doesn't give you precise details about anime, and they don't know what you really want.</p>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://staticg.sportskeeda.com/editor/2022/09/17b8e-16635957088029-1920.jpg"
          alt="cover photo"
        />
      </div>







      <div className="main flex flex-wrap gap-10">
        {shantami.map((box) => (
          <div
            key={box.id}
            className="card w-[350px] h-[500px] bg-green-300 rounded-[20px] flex flex-wrap flex-col items-center gap-[20px]"
          >
            <div className="img w-[150px] h-[150px] rounded-full overflow-hidden">
              <img src={box.image || ''} alt="photo" />
            </div>
            <div className="text text-center">
              <p className="text-lg font-semibold text-white">ID: {box.character_id}</p>
              <h1 className="text-xl font-bold text-white">User Name: {box.name}</h1>
              <p className="text-lg font-semibold text-white">Address: {box.address}</p>
              <p className="text-lg font-semibold text-white">Birthday: {box.date_of_birth}</p>
              <p className="text-lg font-semibold text-white">Popularity: {box.popularity}</p>
              <p className="text-lg font-semibold text-white">Rank: {box.rank}</p>
              <p className="text-lg font-semibold text-white">Look's Out Of 10: {box.looks_out_of_10}</p>
              <p className="text-lg font-semibold text-white">Show Name: {box.show_name}</p>
              <p className="text-lg font-semibold text-white">Best Friends: {box.best_friends}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
