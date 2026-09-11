import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

export default function App() {

    //Hook 
    const [number, setNumber] = useState(0);
  return (
    <div>
        <i className="bi bi-6-circle-fill fs-4"></i>
        <div className='text-danger'>
            <h1>Finance App</h1>
            <p>Hello World</p>

            <button onClick={() => {
                setNumber(number + 1);
                console.log("number", number + 1);
                }}>Click Me</button>

            Number is {number}
        </div>
    </div>
  );
}
