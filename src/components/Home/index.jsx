import Categories from "@components/Categories";
import Sort from "@components/Sort";
import PizzaBlock from "@components/PizzaBlock";
import { useEffect, useState } from "react";
import LoadingBlock from "@components/PizzaBlock/LoadingBlock";

const Home = ({searchValue}) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(0);
  const [sortType, setSortType] = useState({
    id: 0,
    name: "популярности (desc)",
    sortProperty: "rating",
    order: "desc",
  });

  useEffect(() => {
    setLoading(true);
    const fetchPizzas = async () => {
      try {
        const res = await fetch(
          `https://6892363d447ff4f11fbf9279.mockapi.io/pizza?${
            category > 0 ? `category=${category}&` : ""
          }sortBy=${sortType.sortProperty}&order=${sortType.order}`
        );

        if (!res.ok) {
          throw new Error(`Ошибка запроса: ${res.status}`);
        }
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, [category, sortType]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <div className="content__top">
        <Categories
          categoryId={category}
          onChangeCategory={(id) => setCategory(id)}
        />
        <Sort sort={sortType} onChangeSortType={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? new Array(6).fill(0).map((_, i) => <LoadingBlock key={i} />)
          : pizzas
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
