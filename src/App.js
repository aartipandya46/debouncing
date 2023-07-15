import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [show, setShow] = useState(false);

  const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  function debounce(fn, delay) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this);
      }, delay);
    };
  }

  return (
    <div className="App">
      <h1>Good morning!</h1>
      <Modal show={show} />
      <input type="text" onChange={debounce(fetchApi, 2000)} />
      <button onClick={() => setShow(true)}>Open</button>
    </div>
  );
}
