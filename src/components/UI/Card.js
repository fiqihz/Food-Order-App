const Card = (props) => {
  return (
    <div
      className={"p-4 border border-slate-300 rounded-2xl bg-white shadow-lg"}
    >
      {props.children}
    </div>
  );
};

export default Card;
