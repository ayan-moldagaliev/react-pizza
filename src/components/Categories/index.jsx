import { useEffect, useState } from "react";

const Categories = ({categoryId, onChangeCategory}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [isMobile, setIsMobile] = useState(false);

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
              value={categoryId}
              onChange={(e) => onChangeCategory(Number(e.target.value))}
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
              onClick={() => onChangeCategory(index)}
              className={categoryId === index ? "active" : ""}
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
