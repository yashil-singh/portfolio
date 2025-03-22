import { ListItemType } from "@/lib/types";
import ListItem from "./ListItem";
import { LucideIcon } from "lucide-react";

const List = ({
  title,
  Icon,
  listData,
}: {
  title: string;
  Icon: LucideIcon;
  listData: ListItemType[];
}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-secondary rounded-lg p-3">
          <Icon className="text-primary size-6" />
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
