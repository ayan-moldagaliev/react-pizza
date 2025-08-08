import { useEffect, useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="categories">
      {isMobile ? (
        <div className="categories__mobile">
          <div className="select-wrapper">
            <select
              value={activeIndex}
              onChange={(e) => handleClick(Number(e.target.value))}
            >
              {categories.map((category, index) => (
                <option key={category} value={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <ul>
          {categories.map((category, index) => (
            <li
              key={category}
              onClick={() => handleClick(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
