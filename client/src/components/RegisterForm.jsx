import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || password.length < 6) {
      setMessage("Error: Enter name, valid email, and password (min 6 chars).");
      return;
    }
    setMessage(`Welcome to FoodSaver, ${name}! Registration successful.`);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="section form-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      {message && <p className="status-msg">{message}</p>}
    </section>
  );
}