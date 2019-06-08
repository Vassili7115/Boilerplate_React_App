import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

const appTitle = "Matthieu - Boilerplate React App"

ReactDOM.render(
  <div>
    <Favicon url="https://www.additioapp.com/wp-content/uploads/2017/04/cropped-favicon.png" />
    {appTitle}
  </div>,
  document.getElementById('app')
  );

module.hot.accept();
