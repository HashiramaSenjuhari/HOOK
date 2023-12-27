import React, { useState, useEffect, useContext } from 'react';
import './App.css';

export const ToggleTheme = React.createContext();

function UseState() {
  // Progression 1 - Update State Using useState
  const [currAge, setAge] = useState(19);

  const handleAge = () => {
    setAge(currAge + 1);
  };

  // Progression 2 - Multiple State
  const [currSib, setSib] = useState(1);

  const handleSib = () => {
    setSib(currSib + 1);
  };

  // Progression 3 - Use Object State
  const [state, setState] = useState({ age: 19, siblings: 3 });

  const handleState = (val) => {
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };

  const { age, siblings } = state;

  // Progression 4 - Initialize State from Function
  const [ageFromFunc, setAgeFromFunc] = useState(() => 19);
  const [sibFromFunc, setSibFromFunc] = useState(() => 3);

  return (
    <div>
      {/* Progression 1 */}
      <h3>My Current Age is {currAge}</h3>
      <button onClick={handleAge}>Get Older</button>

      {/* Progression 2 */}
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>
      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSib}>Get more Sib</button>

      {/* Progression 3 */}
      <h3>My Current Age is {age}</h3>
      <h4>My siblings {siblings}</h4>
      <button onClick={() => handleState('age')}>age</button>
      <button onClick={() => handleState('siblings')}>sib</button>

      {/* Progression 4 */}
      <h3>My Current Age is {ageFromFunc}</h3>
      <h4>My siblings {sibFromFunc}</h4>
      <button onClick={() => setAgeFromFunc((prevAge) => prevAge + 1)}>age</button>
      <button onClick={() => setSibFromFunc((prevSib) => prevSib + 1)}>sib</button>
    </div>
  );
}

function UseEffect() {
  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);

  useEffect(() => {
    alert(`Something changed ${currAge}`);
  }, [currAge]);

  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>age</button>
      <button onClick={() => setSib((prevSib) => prevSib + 1)}>sib</button>
    </div>
  );
}

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? 'black' : 'grey',
    color: theme ? 'grey' : 'black',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={themeStyle}>This is made by Kalvium</div>;
}

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((currentState) => !currentState);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
      <UseState />
      <UseEffect />
    </ToggleTheme.Provider>
  );
}

export default App;