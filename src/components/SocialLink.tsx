import { SocialLinkType } from "@/lib/types";

const SocialLink = ({ data }: { data: SocialLinkType }) => {
  const { name, Icon, isLink, link, value } = data;
  return (
    <div className="text-foreground flex w-full items-center gap-4">
      <div className="bg-secondary flex size-12 min-w-12 items-center justify-center rounded-lg">
        <Icon className="text-primary size-6!" />
      </div>
      <div className="flex flex-col">
        <span className="text-muted-foreground text-sm">{name}</span>
        {isLink ? (
          <a
            href={link ?? ""}
            target="_blank"
            className="text-sm break-words underline"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm font-medium break-all">{value}</span>
        )}
      </div>
    </div>
  );
};

export default SocialLink;
