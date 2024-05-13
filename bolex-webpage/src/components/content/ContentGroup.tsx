


interface ContentGroupProps {
    items: string[];
    onSelectItem: (index: number) => void;
    selectedIndex: number;
}

function ContentGroup({items, onSelectItem, selectedIndex} : ContentGroupProps) {
    return (
        <>
            <ul className="content-items">
                {items.map((item, index) => (
                    <li 
                        className={selectedIndex === index ? 'content-item active' : 'content-item'} 
                        key={index} 
                        onClick={() => {
                            onSelectItem(index);
                        }}
                    >
                        {item}
                    </li>
                ))} 
            </ul>
        </>
    );
}

export default ContentGroup;