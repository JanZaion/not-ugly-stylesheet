function App() {
  return (
    <article>
      <h1>So what to use in a simple, non ugly style sheet?</h1>
      <h2>Fonts Face</h2>
      <p>
        Does not really matter which font as long as it is web-safe. The key here is to avoid any complexity connected
        to font importing, hosting, caching etc.
      </p>
      <h2>Sizing</h2>
      <p>
        Optimal width of a block of text should be 74ch, minimal 60ch and maximal 100ch. Anything wider or narower than
        set amount of characters is hard to read
      </p>
      <h2>Spacing</h2>
      <p>Any two elements should have a space to breathe, at least 15px</p>
    </article>
  );
}

export default App;
