import { useState } from "react";
import { ListGroup, ContentGroup } from "./components/AllComponents";
import { contentData } from "./components/content/ContentData";

function App() {
  const contentGroups = contentData;
  const menuItems = contentGroups.map((item) => item.title);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="content-container">
      <ListGroup
        menuItems={menuItems}
        onSelectItem={handleSelectItem}
        selectedIndex={selectedIndex}
      />
      <ContentGroup groups={contentGroups} />
      {/* <ContentGroup /> */}
    </div>
  );
}

export default App;
