import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <header id="Header">Header</header>
      <main id="Main">
        <article id="Article"> Article</article>
        <nav id="Nav">Nav</nav>
        <footer id="Footer">Footer</footer>
      </main>
      <aside id="Side_left">left</aside>
      <aside id="Side_right">right</aside>
    </div>
  );
}
