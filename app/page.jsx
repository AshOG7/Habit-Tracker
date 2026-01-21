"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(0);

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggle = (i) => {
    const t = [...tasks];
    t[i].done = !t[i].done;
    setDone(t.filter(x => x.done).length);
    setTasks(t);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>Chole Bottle Tracker</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask}>Add</button>

      {tasks.map((t, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          style={{
            cursor: "pointer",
            textDecoration: t.done ? "line-through" : "none"
          }}
        >
          {t.text}
        </div>
      ))}

      <p>{done} / {tasks.length} done</p>

      <div style={{
        height: 200,
        width: 100,
        margin: "auto",
        border: "3px solid black",
        borderRadius: "50px",
        position: "relative"
      }}>
        {[...Array(done)].map((_, i) => (
          <div key={i} style={{
            height: 12,
            width: 12,
            background: "goldenrod",
            borderRadius: "50%",
            position: "absolute",
            bottom: 10 + i * 14,
            left: 40
          }} />
        ))}
      </div>
    </div>
  );
}
