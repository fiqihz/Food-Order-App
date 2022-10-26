import Card from "../UI/Card";
import MealItem from "./MealItem";

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
    <section className="max-w-4xl w-[90%] my-8 mx-auto">
      <Card>
        <ul>
          {DUMMY_MEALS.map((data) => (
            <div key={data.id} className="mb-4">
              <MealItem meal={data} />
              <hr />
            </div>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
