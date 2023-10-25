import React from "react";

const Login = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <div className="flex flex-row mx-[120px] gap-0 w-[222px] h-[45px] rounded-2xl  font-medium ">
          <div className="btn w-1/2 bg-RedBack hover:bg-deepRed">
            <p className=" text-center pt-[13px] pb-[12px]  text-LetWhite ">
              Login
            </p>{" "}
          </div>
          <div className="btn w-1/2 bg-WhiteBack ">
            {" "}
            <p className="text-center pt-[13px] pb-[12px] text-LetBlack">
              Sign Up
            </p>
            <p className="text-center pt-[13px] pb-[12px] text-LetBlack">
              Sign In
            </p>
          </div>
        </div>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
