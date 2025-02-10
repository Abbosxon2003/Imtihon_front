import Hero from "../../components/hero/Hero";
import { Loading } from "../../components/loading/Loading";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../redux/api/products";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({});

  return (
    <div>
      {isLoading ? (
        <div className="h-[55vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <Hero />
          {data && <Products data={data} title="" />}
        </>
      )}
    </div>
  );
};

export default Home;
