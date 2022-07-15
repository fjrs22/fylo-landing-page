export default function EarlyAccess() {
  return (
    <section className="access">
      <div className="access-container">
        <h1 className="access-header">Get early access today</h1>
        <p className="access-text">
          It only takes a minute to sign up and our free starter tier extremely
          generous. If you have any questions, our support team would be happy
          to help you.
        </p>
        <form>
          <input
            type="email"
            placeholder="email@example.com"
            className="input"
          />
          <button className="button-get">Get Started For Free</button>
        </form>
      </div>
    </section>
  );
}
