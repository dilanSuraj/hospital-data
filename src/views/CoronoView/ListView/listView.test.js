import React from 'react';
import ReactDOM from 'react-dom';
import Surveys from './Surveys';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Surveys />, div);
  ReactDOM.unmountComponentAtNode(div);
});
