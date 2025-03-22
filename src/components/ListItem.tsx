import { ListItemType } from "@/lib/types";

const ListItem = ({ data }: { data: ListItemType }) => {
  const { date, title, description, location, subTitle } = data;
  return (
    <>
      <div className="before:bg-secondary after:bg-primary relative pl-16 before:absolute before:left-6 before:h-[calc(100%+30px)] before:w-1 after:absolute after:top-10.5 after:left-5 after:size-3 after:rounded-full">
        <p className="mt-2">{date}</p>
        <h3 className="text-primary text-lg font-bold">{title}</h3>
        <span className="font-semibold">{subTitle}</span>
        <br />
        <span>{location}</span>
        <p className="text-muted-foreground mt-2 text-justify italic">
          {description}
        </p>
      </div>
    </>
  );
};

export default ListItem;
