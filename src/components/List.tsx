import { ListItemType } from "@/lib/types";
import ListItem from "./ListItem";

const List = ({
  title,
  imageSrc,
  listData,
}: {
  title: string;
  imageSrc: string;
  listData: ListItemType[];
}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-secondary rounded-lg p-3">
          <img src={imageSrc} alt={imageSrc} className="size-6" />
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {listData.map((data) => (
          <ListItem data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
};

export default List;
