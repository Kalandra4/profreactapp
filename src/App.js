import Display from "./Components/Display";
import { useState } from "react";
import me from "./images/me.jpg";
import './App.css';

function App() {

  const [name, setName] = useState("");

  const clickName = () => {
    setName("My Name is Kalandra.");
  };

  const clickSkills = () => {
    setName("I am a Front-End Developer.");
  };

  const [count, setCount] = useState(0);
  
  return (
    <>
      <section className="card">
        <img src={me} alt="Kalandra" className="profileImg"/>
        <Display myname={name} />
        <button
          className="btn"
          onClick={clickName}
        >
          Name
        </button>

        {/* Uppercase = CONTENT */}
        {/* lowercase = content */}
        {/* camelCase = contentType */}
        {/* PascalCase = ContentType */}

        {/* DRY - Don't Repeat Yourself */}
        {/* DIE - Duplicate Is Evil */}

        {/* <Button onClickHandler={clickName} btnText={Name} />
        <Button onClickHandler={clickSkills} btnText={Skills} /> */}

        <button className="btn" onClick={clickSkills}>Skills</button>
        <div>
          <Display myname={count} />
          {/* <Button onClickHandler={setCount} /> */}
          <button className="btn-like" onClick={() => setCount(count + 1)}>
            <i className="fas fa-heart fa-2x"></i>
          </button>
        </div>
        <footer className="social-link">
          <a 
            href="https://twitter.com/kalandra67"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </footer>
      </section>
    </>
  );
}

export default App;
