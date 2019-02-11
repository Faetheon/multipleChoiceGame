import React from 'react';

const MenuOption = ({optionName}) => (
  <div className={`${optionName}`}>{optionName}</div>
);

export default MenuOption;