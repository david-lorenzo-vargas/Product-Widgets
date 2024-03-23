import ProductWidgets from "./Components/Organisms/ProductWidgets";

const Home = () => {
  return (
    <div className="w-max h-max overflow-y-auto flex flex-col items-center bg-white rounded-lg py-10">
      <ProductWidgets />
    </div>
  );
};

export default Home;
