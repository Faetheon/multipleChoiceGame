import React, {useState} from 'react';
import MenuOption from './menuComponents/MenuOption.jsx';

function MenuHeader({updateCurrentStory}) {
  const [menuOptionArr, editMenuOptionArr] = useState(['Home', 'Stories', 'About Me', 'Feedback']);
  return (
    <div className='menu-header'>
      {
        menuOptionArr.map((elem, i) => (
          elem === 'Stories' ?
          <MenuOption optionName={elem} key={i} updateCurrentStory={updateCurrentStory}/>
            :
          <MenuOption optionName={elem} key={i} />
        ))
      }
    </div>
  );
};

export default MenuHeader;