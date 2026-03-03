import { useState } from "react";
import {
  ListGroup,
  ContentGroup,
  contentData,
  Grainient,
  TextType,
} from "./components/AllComponents";

function App() {
  const contentGroups = contentData;
  const menuItems = contentGroups.map((item) => item.title);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
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
          text={["Alexander Berts", "Computer Engineering Student"]}
          typingSpeed={75}
          deletingSpeed={25}
        />
      </div>
      <ListGroup
        menuItems={menuItems}
        onSelectItem={handleSelectItem}
        selectedIndex={selectedIndex}
      />
      <ContentGroup groups={contentGroups} />
    </div>
  );
}

export default App;
