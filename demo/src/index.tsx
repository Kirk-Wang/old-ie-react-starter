import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Component from '../../src';

const awards = [
    { src: 'if_Apple_56029.png' },
    { src: 'if_Apricot_56024.png' },
    { src: 'if_Banana_56018.png' },
    { src: 'if_Cherry_56023.png' },
    { src: 'if_Mango_56026.png' },
    { src: 'if_Orange_56025.png' },
    { src: 'if_Peach_56027.png' },
    { src: 'if_Pear_56020.png' },
];

awards.forEach((x) => {
    x.src = `/awards/${x.src}`;
});

function render() {
    return new Promise((resolve) => {
        ReactDOM.render(<Component awards={awards} />, document.getElementById('demo'));
        resolve();
    });
}

async function start() {
    await render();
}

start();
