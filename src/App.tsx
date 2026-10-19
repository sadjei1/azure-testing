
import './App.css'
import { useState } from "react";

function App() {
   const [runs, setRuns] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);


  return (
    <>
       <main className="container">
      <header className="header">
        <div className="logo">T</div>
        <div>
          <h2>TestFlow</h2>
          <p>Frontend playground</p>
        </div>
        <span className="status">Online</span>
      </header>

      <section className="hero">
        <p className="eyebrow">YOUR WORKSPACE</p>
        <h1>Welcome back!</h1>
        <p>Test your components and interactions here.</p>
      </section>

      <section className="stats">
        <article className="card">
          <span>Tests passed</span>
          <h2>{24 + runs}</h2>
          <p>↑ Looking good</p>
        </article>
        <article className="card">
          <span>Pending tests</span>
          <h2>3</h2>
          <p>Awaiting review</p>
        </article>
      </section>

      <section className="card actions">
        <h2>Interactive testing</h2>
        <p>Click the button to test React state.</p>
        <button onClick={() => setRuns(runs + 1)}>
          Run test ({runs})
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor="name">Test input</label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSubmitted(false);
            }}
            placeholder="Enter your test name"
          />
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p className="success">
            Successfully submitted: {name || "Untitled test"}
          </p>
        )}
      </section>

      <footer>Built with React + Vite</footer>
    </main>
     
    </>
  )
}

export default App
