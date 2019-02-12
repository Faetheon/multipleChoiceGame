import React, {useState} from 'react';

import MenuHeader from './MenuHeader.jsx';
import SelectedStory from './SelectedStory.jsx';
import storyData from '../stories/AWalkInTheWoods.js';

function App() {
  const [count, setCount] = useState(0);
  const [currentStory, updateCurrentStory] = useState('No story selected');
    return (
      <div>
        <MenuHeader updateCurrentStory={updateCurrentStory}/>
        {
          currentStory === 'A Walk In The Woods' ? 
            <SelectedStory storyData={storyData} /> 
              :
            <p onClick={() => {setCount(count + 1)}}>You've clicked this {count} times!</p> 
        }
      </div>
    );
}

export default App;