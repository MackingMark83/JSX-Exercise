function App() {
  return (
    <div>
      <Tweet
        name="Marcus Clemmons"
        username="Marcus83"
        date={new Date().toDateString()}
        message="Hello"
      />
      <Tweet
        name="Nita Brown"
        username="Nita81"
        date={new Date().toDateString()}
        message="Hey"
      />
      <Tweet
        name="Roger Clemmons"
        username="Roger58"
        date={new Date().toDateString()}
        message="Wrong"
      />
    </div>
  );
}
