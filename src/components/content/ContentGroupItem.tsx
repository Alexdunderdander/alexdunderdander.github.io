export interface ContentGroupItemProps {
  title: string;
  place?: string;
  description?: string;
  date?: string;
  grade?: string;
}

function ContentGroupItem({
  title,
  place,
  description,
  date,
  grade,
}: ContentGroupItemProps) {
  return (
    <div className="content-group-item">
      {date && <span className="date">{date}</span>}
      <div
        className="content-group-description"
        style={{ whiteSpace: "pre-line" }}
      >
        <h3>{title}</h3>
        {place && <p className="place">{place}</p>}
        {grade && <p className="grade">{grade}</p>}
        {description && <p className="description">{description}</p>}
      </div>
    </div>
  );
}

export default ContentGroupItem;
