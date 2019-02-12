import React, {useState} from 'react';

function SelectedStory({storyData}) {
  const [storyChoiceKeys, updateStoryChoiceKeys] = useState(Object.keys(storyData.choiceOne.choices))
  return (
    <div className='selected-story'>
      <div className='prelude'>
        {storyData ? storyData.prelude : null}
      </div>
      {
        storyChoiceKeys.map((elem, i) => (
          <div className={`choice ${i + 1}`} key={i}>{storyData.choiceOne.choices[elem]}</div>
        ))
      }
    </div>
  );
}

export default SelectedStory;