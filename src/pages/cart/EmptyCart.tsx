import { NavLink } from "react-router-dom";
import NotFoundButton from "../notfound/NotFoundButton";
const EmptyCart = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center py-[110px]">
      <h2 className="text-3xl font-bold text-gray-700 font-poppins">
        Your Cart is Empty
      </h2>
      <p className="text-gray-500 mt-2">
        Looks like you haven't added anything to your cart yet.
      </p>
      <div className="mt-5">
        <NavLink to={"/"}>
          <NotFoundButton title={"Start Shopping"} />
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyCart;
