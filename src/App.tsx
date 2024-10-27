function App() {
  return (
    <article>
      <h1>So what to use in a simple, non ugly style sheet?</h1>
      <h2>Text</h2>
      <p>
        Does not really matter which font as long as it is web-safe. The key here is to avoid any complexity connected
        to font importing, hosting, caching etc.
      </p>
      <p>Line height should be 1.4.</p>
      <p>Use minimum 16px font-size for body text. Go bigger, rather than smaller.</p>
      <h2>Sizing</h2>
      <p>
        Optimal width of a block of text should be 74ch, minimal 60ch and maximal 100ch. Anything wider or narower than
        set amount of characters is hard to read
      </p>
      <h2>Spacing</h2>
      <p>Any two elements should have a space to breathe, at least 15px</p>
      <h2>Colors</h2>
      <p>Aim at legible contrast. Use contrast checker tool to achieve 4.5:1 minimum contrast ratio</p>
      <p>Limit the number of colors, ideally 2 or 3 main colors.</p>
      <p>Remember the 60:30:10 rule.</p>
      <h2>Icons</h2>
      <p>Icons should always have a label.</p>
    </article>
  );
}

export default App;
