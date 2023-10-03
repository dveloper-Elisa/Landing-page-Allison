export default function Collection() {
  return (
    <>
      <h1 className="text-center text-white font-extrabold tracking-widest my-10 text-[25px]">
        Our Collection.
      </h1>

      <div
        id="collection"
        className="md:flex md:flex-row md:gap-4 gap-4 md:justify-between items-center  mx-16"
      >
        <div className="bg-gray-800 overflow-hidden text-white flex gap-12">
          <div className="flex flex-col p-2 justify-center">
            <h4 className="text-amber-300 animate-pulse text-[60px] first-letter:uppercase text-center">
              provided by this week
            </h4>
            <p className="text-white">This is the bughat New Vasion</p>
            <p className="tracking-widest text-[45px] font-extrabold">UPTO</p>
            <strong className="font-bold text-[25px]">55% OFF</strong>
          </div>
          <img
            src="./public/photo/12-removebg-preview.png"
            alt="photo not found"
            className="-hue-rotate-180 max-h-[16rem] -rotate-12 "
          />
        </div>
        <div className=" text-white flex gap-4 mt-10 flex-col justify-end items-center max-w-lg">
          <div className="flex justify-between max-w-[100%] bg-gray-800">
            <div className="flex flex-col p-2 justify-between">
              <h4>Hammer</h4>
              <p>
                here we buy new brand <br />
                of Hammer only
              </p>
              <p className="tracking-widest font-extrabold">UPTO</p>
              <button
                type="button"
                className="bg-green-600 p-1 my-1 rounded-md w-fit text-white "
              >
                Order
              </button>
            </div>
            <img
              src="./public/photo/2-removebg-preview.png"
              alt="photo not found"
              className="h-[20vh] md:w-[12vw] w-fit p-1 "
            />
          </div>

          <div className="flex justify-between flex-row gap-4 ">
            <div className="flex flex-col items-center bg-gray-800 ">
              <div className="flex flex-col p-1 justify-between ">
                <h4>New Hammer </h4>
              </div>
              <img
                src="./public/photo/8-removebg-preview.png"
                alt="photo not found"
                className=" h-[20vh] md:w-[12vw] w-fit"
              />
              <button
                type="button"
                className="bg-green-600 rounded-md w-full text-white "
              >
                Order
              </button>
            </div>
            <div className="flex bg-gray-800 justify-between text-center">
              <div className="flex flex-col p-1 justify-between w-fit">
                <h4>White Hammer </h4>

                <img
                  src="./public/photo/9-removebg-preview.png"
                  alt="photo not found"
                  className=" rounded h-[19vh] md:w-[12vw] w-fit"
                />
                <button
                  type="button"
                  className="bg-green-600 rounded-md text-white w-full"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
