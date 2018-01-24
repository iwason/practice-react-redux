// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
//const helloStyle = { color: 'red', backgroundColor: 'gray',fontSize: '1.4em'};
const items = [
  { name: 'aaa', color: 'black' },
  { name: 'bbb', color: 'green' },
  { name: 'ccc', color: 'pink' },
  { name: 'ddd', color: 'yellow' },
];

const MyButton = () => (
  <div>
    <button onClick={() => alert('clicked')}> click me!</button>
    </div>
);


let textData = '';
const setTextData = (event) => {
  textData = event.target.value;
  if (textData.length > 10) {
    textData = textData.slice(0, 10);
  }
  render();

};
let nameData = '';
const setNameData = (event) => {
  nameData = event.target.value;
  render();
};

let colorData = 'black';

const addData = () => {
  items.push({ name: nameData, color: colorData });
  nameData = '';
  render();
};

const Hello2 = ({ name, color, onDelete }) => (
  <div>
    <p>
      <span style={{ color }}>Hello {name}!</span>
      <button onClick={() => onDelete()}>Delete</button>
    </p>
  </div>
);

const deleteItem = (index) => {
  items.splice(index, 1);
  render();
};

const MyBox = () => (
  <div>
    <input type='text'value={textData} onChange={setTextData} />
    </div>
)
const MyForm = () => (
  <div>
    <input type="text" value={nameData} onChange={setNameData} />
    <button onClick={addData}>Add Data</button>
  </div>
);
const Hello3 = ({name,color}) => (

  <div style={{color}}><p>Hello {name}</p></div>
);

const Sample = () => (
  <div>sample component</div>
)

const App = () => (
  <div>
  <MyForm />
  <ColorList />
    {items.map((item,index) => (
    <Hello2 name={item.name} color={item.color} onDelete={() => deleteItem(index)} />
      ))}
    <MyBox />
  </div>
);

// const render = () => ReactDOM.render(<App />,
//     document.body.appendChild(document.createElement('div')),);
// render();


const foo = 'abc';
const bar = { foo ,moge:'mog'}; // same as { foo: foo }
console.log(bar);

const obj = { first: 'Ebisu', last: 'JS' };
function printName({ first, last }) { console.log(first, last); }
printName(obj);
const f5 = x => x + 1;

