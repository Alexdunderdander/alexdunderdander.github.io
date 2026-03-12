export interface ContentGroupItemProps {
  title: string;
  place?: string;
  description?: string;
  date?: string;
  grade?: string;
  imageUrl?: string[];
}

function ContentGroupItem({
  title,
  place,
  description,
  date,
  grade,
  imageUrl,
}: ContentGroupItemProps) {
  return (
    <div className="content-group-item">
      {date && <div className="date">{date}</div>}
      <div className="content-group-description">
        <h3>{title}</h3>
        {place && <p className="place">{place}</p>}
        {grade && <p className="grade">{grade}</p>}
        {description && <p className="description">{description}</p>}
      </div>
      <div className="content-group-images">
        {imageUrl &&
          imageUrl.map((url, index) => (
            <div className="content-group-image" key={`${url}-${index}`}>
              <img src={url} alt={title} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ContentGroupItem;
