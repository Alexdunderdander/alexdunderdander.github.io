import ContentGroupItem, {
  type ContentGroupItemProps,
} from "./ContentGroupItem";

export interface ContentGroup {
  title: string;
  items: ContentGroupItemProps[];
}
interface ContentGroupProps {
  groups: ContentGroup[];
  sectionIds?: string[];
}

function ContentGroup({ groups, sectionIds }: ContentGroupProps) {
  return (
    <div className="content-groups">
      {groups.map((group, gi) => (
        <section className="content-group" id={sectionIds?.[gi]} key={gi}>
          <h2>{group.title}</h2>
          <div className="content-group-items">
            {group.items.map((item, idx) => (
              <ContentGroupItem {...item} key={idx} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ContentGroup;
