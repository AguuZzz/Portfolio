import React from "react";
import "../../index.css"

export function Aboutme() {
  return (
    <div className="aboutme">
        <h1 style={{
        fontSize: '23px',
        color: 'rgb(165 164 164)',
        textAlign: 'center',
        marginBottom: '10px',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
      }}>
        Hello, let me introduce myself, I'm Agustín. <span className="wavehand">👋</span>
      </h1><br/>
      <p>
        I've been in the <span style={{ color: "red" }}>programming</span> world
        since I was 10 years old, when I discovered I could{" "}
        <span style={{ color: "red" }}>automate</span> my tasks by writing a
        series of commands in Batch. Since then, I've started to admire and dive
        deeper into the topic, learning new ways to develop{" "}
        <span style={{ color: "red" }}>applications</span>,{" "}
        <span style={{ color: "red" }}>scripts</span>, and{" "}
        <span style={{ color: "red" }}>websites</span>. 💻✨
      </p><br/>
      <p>
        I don't have work experience, but I do have a lot of lines of code in my{" "}
        <span style={{ color: "red" }}>projects</span>, a great ease of learning
        new <span style={{ color: "red" }}>technologies</span>, and extensive{" "}
        <span style={{ color: "red" }}>technical</span> knowledge. 🚀📚🖥️
      </p>
    </div>
  );
}
