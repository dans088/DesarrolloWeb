import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import People from './People';
import data from './data';


function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 02 cada cierto tiempo se actualiza, constante valoración
     const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    // 01 cada cierto tiempo se actualiza, constante valoración
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider)
  }, [index])
    
  return (
  <section className="section">
  <div className="title">
  <h2>
  reviews
  </h2>
  <div className="underline"></div>
  </div>
  <div className="section-center">
  {people.map((person, personIndex) => {
        return <People key={person.id} {...person} personIndex={personIndex} index={index} />
  })}
  <button className="prev" onClick={() => setIndex(index - 1)}>
    <FiChevronLeft />
  </button>
  <button className="next" onClick={() => setIndex(index + 1)}>
    <FiChevronRight />
  </button>
  </div>
  </section> 
  );
}

export default App;
