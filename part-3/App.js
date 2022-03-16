function App() {
  return (
    <div>
      <Person
        name="Marcus"
        age={38}
        hobbies={['watching football', 'coding']}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Nita"
        age={40}
        hobbies={["cooking", "baking"]}
      />
      <Person
        name="Roger"
        age={62}
        hobbies={['painting', 'watching football']}
      />
    </div>
  );
}
