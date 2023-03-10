const Articulo = (props) => {
  return (
    <div className="flex gap-x-4">
      <div className="">
        <img src={props.img} className="w-20 h-24" />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-2xl font-bold text-neutral-grayish-blue">{props.num}</p>
        <p className="text-neutral-very-dark-blue font-bold text-sm w-[%50]">{props.title}</p>
        <p className="text-xs text-neutral-dark-grayish-blue">{props.description}</p>
      </div>
    </div>
  );
};

export default Articulo;
