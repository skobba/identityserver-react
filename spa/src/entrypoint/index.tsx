import React from 'react';
import { render } from 'react-dom';

import App from '../components/app';

function run(): void {
  render(<App />, document.getElementById('root'));
}

run();
