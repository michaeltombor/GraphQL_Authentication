import React from 'react';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
    );
};

export default App;