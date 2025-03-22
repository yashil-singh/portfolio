const Heading = ({ title }: { title: string }) => {
  return (
    <span className="before:bg-primary relative inline-block before:absolute before:right-0 before:-bottom-3 before:left-0 before:h-1 before:w-10 before:rounded-full">
      <h1 className="text-2xl font-bold">{title}</h1>
    </span>
  );
};

export default Heading;
