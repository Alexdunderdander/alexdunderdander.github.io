export interface ContentGroupItemProps {
  title: string;
  place?: string;
  description?: string;
  date?: string;
}

function ContentGroupItem({
  title,
  place,
  description,
  date,
}: ContentGroupItemProps) {
  return (
    <div className="content-group-item">
      <h3>{title}</h3>
      {place && <p className="place">{place}</p>}
      {description && <p>{description}</p>}
      {date && <span className="date">{date}</span>}
    </div>
  );
}

export default ContentGroupItem;
