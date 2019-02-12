import React from 'react';

const MenuOption = ({optionName, updateCurrentStory}) => (
  <div className={`${optionName}`} onClick={() => {updateCurrentStory ? updateCurrentStory('A Walk In The Woods') : null}}>{optionName}</div>
);

export default MenuOption;