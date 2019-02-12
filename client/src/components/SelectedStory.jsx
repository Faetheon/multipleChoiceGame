import React, {useState} from 'react';

function SelectedStory({storyData}) {
  const [storyChoiceKeys, updateStoryChoiceKeys] = useState(Object.keys(storyData.choiceOne.choices))
  console.log(storyChoiceKeys)
  return (
    <div className='selected-story'>
      {storyData ? storyData.prelude : null}
      {
        storyChoiceKeys.map((elem, i) => (
          <div className={`choice ${i + 1}`} key={i}>{`${i + 1}. ${storyData.choiceOne.choices[elem]}`}</div>
        ))
      }
    </div>
  );
}

export default SelectedStory;