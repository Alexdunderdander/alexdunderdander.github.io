import { useEffect, useRef, useState } from "react";

interface ListGroupProps {
  menuItems: string[];
  onSelectItem: (index: number) => void;
}

function Menu({ menuItems, onSelectItem }: ListGroupProps) {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const hasPassedHeader = currentScrollY > 80;

      if (scrollingDown && hasPassedHeader) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ul className={isHidden ? "menu-items menu-hidden" : "menu-items"}>
        {menuItems.map((menuItem, index) => (
          <li
            className="menu-item"
            key={index}
            onClick={() => {
              onSelectItem(index);
            }}
          >
            {menuItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
