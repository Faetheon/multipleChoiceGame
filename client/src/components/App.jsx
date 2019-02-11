import React from 'react';

import MenuHeader from './MenuHeader.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <div>
        <MenuHeader />
        Hello World
      </div>
    );
  };
}

export default App;