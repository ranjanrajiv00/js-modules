import { add, muliply, Parentwa } from './math.js';
import '../assets/css/app.css';

console.log('app.js');

const result = add(10, 210);

console.log('Add Result - ', result);
console.log('Multiply Result - ', muliply(10, 900));

document.getElementById('root').innerHTML = 'Result ->> ' + Math.random() + '-' + result;