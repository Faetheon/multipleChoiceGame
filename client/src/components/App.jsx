import React, {useState} from 'react';

import MenuHeader from './MenuHeader.jsx';

function App() {
  const [count, setCount] = useState(0);
    return (
      <div>
        <MenuHeader />
        <p onClick={() => {setCount(count + 1)}}>You've clicked this {count} times!</p>
        Hello World
      </div>
    );
}

export default App;