import React from 'react';

function SelectedStory({storyData}) {
  return (
    <div>
      {storyData ? storyData.prelude : null}
    </div>
  );
}

export default SelectedStory;