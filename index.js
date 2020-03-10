import React from 'react';
import ReactDom from 'react-dom';

const Hello = () => <div>What's up?</div>

ReactDom.render(<Hello />, document.getElementById('app'))
