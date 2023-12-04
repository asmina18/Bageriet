import React, { useState } from 'react';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
  

    // Nulstil formular efter håndtering af data
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Brugernavn:</label>
          <input
            type="text"
            id="username"
            placeholder="Indtast dit brugernavn..."
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Adgangskode:</label>
          <input
            type="password"
            id="password"
            placeholder="Indtast din adgangskode..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Log ind</button>
        </div>
      </form>
    </div>
  );
}
