import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Best Sneakers</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              iste saepe explicabo fuga ducimus illum asperiores similique harum
              accusamus assumenda ipsam qui incidunt ratione eius fugiat, aut
              voluptates laboriosam deleniti?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/72c30bcb-c38d-4629-92c9-7107f1d951e0/air-force-1-07-ayakkab%C4%B1s%C4&B1-MSJ6C8.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Best Sneakers</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              iste saepe explicabo fuga ducimus illum asperiores similique harum
              accusamus assumenda ipsam qui incidunt ratione eius fugiat, aut
              voluptates laboriosam deleniti?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4&B1-SqKG2H.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
