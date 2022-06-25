interface IBar {
  title: string;
  value: string;
}

const Bar = ({ title, value }: IBar) => {
  console.log(value);
  const height = `h-[${value}px]`;
  return (
    <div className="flex flex-col items-center">
      <div className={`rounded-lg w-10 h-[30px] bg-red`}></div>
      <span className="text-mediumBrown text-xs">{title}</span>
    </div>
  );
};

export default Bar;
