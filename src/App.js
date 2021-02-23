import React, { useState } from 'react';
import Test from './Test';

function App() {

  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(prev => prev + 1);
  }

  return (
    <div className="App">
      <Test person="Leo" handleClick={handleClick}/>
      <Test person="Shang" handleClick={handleClick}/>
      <Test person="Nina" handleClick={handleClick}/>
      Person Clicks: {click}
    </div>
  );
}

export default App;
