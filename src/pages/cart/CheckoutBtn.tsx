import React from "react";

const CheckoutBtn: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="relative flex items-center justify-center gap-2 w-[310px] h-[60px] bg-black text-white font-semibold border-2 border-white rounded-sm shadow-lg transition-transform duration-300 active:translate-y-1 hover:bg-white hover:text-black">
        Payment
      </button>
    </div>
  );
};

export default CheckoutBtn;
