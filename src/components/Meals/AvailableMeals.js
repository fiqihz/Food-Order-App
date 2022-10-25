const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className="max-w-5xl w-[90%] my-8 mx-auto">
      <ul>
        {DUMMY_MEALS.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
