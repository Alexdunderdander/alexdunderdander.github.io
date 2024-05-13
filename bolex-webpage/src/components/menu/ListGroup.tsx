import { useState } from "react";

interface ListGroupProps {
    menuItems: string[];
    onSelectItem: (index: number) => void;
    selectedIndex: number;
}

function ListGroup({menuItems, onSelectItem, selectedIndex} : ListGroupProps) {

    // const [selectedIndex, setSelectedIndex] = useState(-1);
    // const handleClick = (event: MouseEvent) => console.log(event.clientX, event.clientY);

    return (
        <>
            <ul className="menu-items">
                {menuItems.map((menuItem, index) => (
                    <li 
                        className={selectedIndex === index ? 'menu-item active' : 'menu-item'} 
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

export default ListGroup;
