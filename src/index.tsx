import * as React from 'react';
import * as ReactDom from 'react-dom';
import Counter from './components/Counter';

ReactDom.render(
    <Counter name="Petter" />,
    document.getElementById("app")
);