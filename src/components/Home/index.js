import Cloth from "../../Cloth.png";
import { Button } from "@material-tailwind/react";
import { InstagramEmbed } from "react-social-media-embed";
import Form from "../Form";

export default function Home() {
  return (
    <>
      <div className="bg-green-200 w-screen h-screen flex flex-col items-center lg:px-20">
        <img
          className="w-32 h-32 my-20"
          src="https://img.icons8.com/dotty/80/null/womens-t-shirt.png"
          alt="tshort"
        />
        <div className="border w-60 h-96 bg-white flex flex-col px-1">
          <div className="border border-dashed py-4">
            <p className="text-center font-bold text-lg mt-3">
              ENVIRONMENTAL SAVINGS
            </p>
            <p className="text-center text-sm">
              OF RECYCLED CONTENT IN THE RAW MATERIALS
            </p>
            <p className="text-center text-xs font-bold">
              Calculation per 1kg material:
            </p>
          </div>

          <div className="flex flex-row py-6 justify-around items-center">
            <img
              className="w-7 h-7"
              src="https://img.icons8.com/ios/50/null/wet.png"
              alt="water"
            />
            <p>396 LITERS</p>
          </div>
          <div className="flex flex-row py-6 justify-around items-center">
            <img
              className="w-7 h-7"
              src="https://img.icons8.com/external-line-rakhmat-setiawan/64/null/external-carbondioxide-ecology-and-energy-line-line-rakhmat-setiawan.png"
              alt="co2"
            />
            <p>42 CO2</p>
          </div>
          <div className="flex flex-row py-6 justify-around items-center">
            <img
              className="w-7 h-7"
              src="https://img.icons8.com/ios/50/null/electricity.png"
              alt="energy"
            />
            <p>83.5 kWh</p>
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center items-center">
      <p className="text-4xl font-bold my-5 text-center">Our Goal</p>
        <video controls src="videos/textile.mp4" width="820"></video>
      </div>

      <div className="w-screen h-fit my-5 flex flex-col lg:flex-row lg:px-20 items-center justify-around">
        <img
          className="w-20 h-20 xl:w-36 xl:h-36 mt-10"
          src={Cloth}
          alt="cloth"
        />
        <p className="text-4xl my-2 font-bold text-center lg:ml-5">
          Fast Fashion is out of Fashion
        </p>
        <div className="text-xl lg:text-2xl lg:px-5 text-center">
          <p className="p-2">
            - Global textiles production almost doubled between 2000 and 2015
          </p>
          <p className="p-2">
            - About 5.8 million tonnes of textiles are discarded every year in
            the EU, <br /> approximately 11kg per person
          </p>
          <Button
            variant="outlined"
            className="text-black border-black my-3"
            onClick={() => window.gtag("event", "form_submit")}
          >
            See More
          </Button>
        </div>
      </div>
      <p className="text-4xl font-bold mt-10 text-center"> Useful Videos</p>
      <div className="flex overflow-x-auto no-scrollbar py-10">
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/HpxYfVUaTH8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/eTHsMtcpg_Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/ZJJccLEGfHo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/tLfNUD0-8ts"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/zhfAsnONwdE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/T_LQBakvEgo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mt-10 text-center"> Combine Tips</p>
        <div className="flex flex-wrap justify-around py-5">
          <InstagramEmbed
            url="https://www.instagram.com/p/ClTtvTCKriQ/"
            captioned
            className="w-auto h-auto mt-3"
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/Ce_XDysKo9C/"
            captioned
            className="w-auto h-auto mt-3"
          />
        </div>
        <Button
          variant="outlined"
          className="text-black border-black mb-5"
          onClick={() => window.gtag("event", "form_submit")}
        >
          See More
        </Button>
      </div>

      <div className="flex flex-col items-center my-4">
        <p className="text-4xl font-bold my-4 text-center"> DIY Suggestions</p>
        <iframe
          className="w-full h-80 my-3 lg:w-1/2"
          src="https://www.youtube.com/embed/fj7vja5DxZ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button
          variant="outlined"
          className="text-black border-black mb-5"
          onClick={() => window.gtag("event", "form_submit")}
        >
          See More
        </Button>
      </div>
      <div className="bg-blue-50 h-fit">
        <Form />
      </div>
    </>
  );
}
