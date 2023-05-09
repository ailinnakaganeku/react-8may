import React, { useState, useCallback, useMemo } from 'react';
import './style.css';

const VOCAL_STRING = 'aáAÁeéEÉiíIÍoOóÓuúUÚ';

const App = () => {
  const [state, setState] = useState('');

  // Utilizando useCallback, evitamos que se cree una nueva instancia de la función handleKeyDown cada vez que se renderiza el componente.
  const handleKeyDown = useCallback((e) => {
    if (VOCAL_STRING.includes(e.key)) {
      console.log(e.key);
    }
  }, []);

  // Utilizando useMemo, se crea una vez durante el ciclo de vida del componente.
  const vocalRegex = useMemo(() => /[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, []);
  const handleChange = (e) => {
    // Filtrar las vocales en la entrada del usuario
    const inputText = e.target.value.replace(vocalRegex, '');
    setState(inputText);
  };

  return (
    <div>
      <h1>Hello StackBlitz! Ailin</h1>
      <p>Start editing to see some magic happen :)</p>
      <input
        type="text"
        id="text-input"
        value={state}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default App;
