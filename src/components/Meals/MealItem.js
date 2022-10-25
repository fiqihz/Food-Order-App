import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className="flex justify-between mb-2">
      <div>
        <h3 className="font-bold text-xl ">{props.meal.name}</h3>
        <div className="italic">{props.meal.description}</div>
        <div className="font-bold text-xl text-indigo-300 mb-2">
          ${props.meal.price}
        </div>
      </div>
      <div className="flex items-center">
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
