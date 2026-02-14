import { useState } from 'react';
import './App.css'

function App() {
  const mySongs = [
    // eigene
    "So frei",
    "Haut an Haut",
    "Reden wie's uns geht",
    "Jeden Tag",
    "Heute fängt die Zukunft an",
    "Lieblingslied",
    "Das Rauschen der Wellen",
    "Zusammen durch die Nacht",
    "Wenn wir reden",
    "Auf meiner Fensterbank liegt Schnee",
    // andere
    "Bill Withers - Use me",
    "Bill Withers - Ain't no sunshine",
    "Aretha Franklin - One Step Ahead",
    "Roberta Flack - Feel like makin' love",
    "Marvin Gaye - Heard it through the grapevine",
    "Marvin Gaye - Let's get it on",
    "Michael Jackson - Billie Jean",
    "Michael MacDonald - I keep forgettin'",
    "Adele - Rollin' in the deep",
    "Lionel Richie - Easy",
    "Red Hot Chili Peppers - Under the Bridge",
    "Stevie Wonder - Sir Duke",
    // jazz
    "Alone together",
    "Stella by startlight",
    "The shadow of your smile",
    "Summertime",
    "All of Me"
  ];
  const [index, setIndex] = useState(0);

  const handleNewSong = () => {
    const newIndex = Math.floor(mySongs.length * Math.random());
    setIndex(newIndex);
  }

  return (
    <>
      <div className='flex items-center justify-center w-full min-h-screen'>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-3xl font-bold underline text-center'>{mySongs[index]}</div>
          <button className='border-2 shadow-xs hover:bg-gray-200 rounded-md m-2 p-3' onClick={handleNewSong}>Pick new song</button>
        </div>
      </div>
    </>
  )
}

export default App
