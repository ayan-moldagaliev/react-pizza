import { useState } from "react";

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li onClick={() => handleClick(index)} className={activeIndex === index && 'active'}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;