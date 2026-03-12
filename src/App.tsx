import {
  ListGroup,
  ContentGroup,
  contentData,
  Grainient,
  TextType,
} from "./components/AllComponents";

const toSectionId = (label: string) =>
  `section-${label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")}`;

function App() {
  const contentGroups = contentData;
  const menuItems = contentGroups.map((item) => item.title);
  const sectionIds = menuItems.map(toSectionId);

  const handleSelectItem = (index: number) => {
    const section = document.getElementById(sectionIds[index]);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="content-container">
      <div className="hero-section">
        <Grainient
          color1="#6c269f"
          color2="#3e045d"
          color3="#ad7ae1"
          timeSpeed={1}
        />
        <TextType
          text={["ALEXANDER BERTS", "COMPUTER ENGINEERING STUDENT"]}
          typingSpeed={75}
          deletingSpeed={25}
        />
      </div>
      <ListGroup menuItems={menuItems} onSelectItem={handleSelectItem} />
      <ContentGroup groups={contentGroups} sectionIds={sectionIds} />
    </div>
  );
}

export default App;
