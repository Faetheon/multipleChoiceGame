import React, {useState} from 'react';
import MenuOption from './menuComponents/MenuOption.jsx';

function MenuHeader() {
  const [menuOptionArr, setMenuOptionArr] = useState(['Home', 'Stories', 'About Me', 'Feedback']);
  return (
    <div className='menu-header'>
      {
        menuOptionArr.map((elem, i) => (
          <MenuOption optionName={elem} key={i} />
        ))
      }
    </div>
  );
};

export default MenuHeader;