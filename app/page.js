import Image from "next/image";
export default function profile() {
  return (
    <main className="bg-black">
      <div className="bg-red-900 w-full h-[70px]">
        <h1 className="text-white text-2xl font-bold flex justify-center items-center pt-4">
          Welcome to Epic Movie site
        </h1>
      </div>
      <div className="w-full h-[80vh] bg-gradient-to-r from-black  to-red-900">
        <h1 className="text-5xl font-extrabold text-red-400 flex justify-center items-center pt-10">
          Meet your TV concierge
        </h1>
        <h2 className="text-2xl text-white flex justify-center items-center pt-10 whitespace-pre-line text-base">
          Need something to watch? We're on it. Movienow combines free movies &
          TV with the best free streaming services, so there's always more to
          discover
        </h2>
        <div className="flex justify-center items-center mt-15 ">
          <button className="bg-yellow-500 flex justify-center items-center w-[200px] h-[60px] rounded-full ">
            Start Streaming
          </button>
        </div>
        <div className="flex justify-center items-center text-white text-bold mt-10">
          <ul className="flex gap-15">
            <li>Discover Your Music</li>
            <li>Movie & shows</li>
            <li> Live TV</li>
            <li> Your Media</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-white  to-gray-700 w-fully h-[60px]">
        <h1 className="text-red-900 text-4xl flex justify-center items-center">
          Our latest movies
        </h1>
      </div>
      <div className="flex gap-300 mt-20">
        <h1 className="text-white text-xl ml-10 font-bold">New Release</h1>
        <h1 className="text-white text-xl">See all</h1>
      </div>
      <div className="grid grid-cols-6 mb-5 ml-4 mt-15">
        <div>
          <Image
            src="/images/Release2.jpeg"
            alt="pics"
            width="280"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
        <div>
          <Image
            src="/images/Release3.jpeg"
            alt="pics"
            width="280"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
        <div>
          <Image
            src="/images/Release4.jpeg"
            alt="pics"
            width="280"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
        <div>
          <Image
            src="/images/Release5.jpeg"
            alt="pics"
            width="280"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
        <div>
          <Image
            src="/images/Release6.jpeg"
            alt="pics"
            width="280"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
        <div>
          <Image
            src="/images/Release1.jpeg"
            alt="pics"
            width="260"
            height="400"
            className="rounded w-[220px] h-[350px]"
          />
        </div>
      </div>
      <div className="flex gap-310 mt-20">
        <h1 className="text-white text-xl ml-10 font-extrabold">Deals</h1>
        <h2 className="text-white text-xl">See all</h2>
      </div>

      <div className="grid grid-cols-7 mb-20 ml-4 mt-20">
        <div className="bg-gradient-to-t from-black  to-gray-400 w-[180px] h-[280px] ">
          <h1 className="text-white text-4xl font-bold flex justify-center items-center mt-18 ml-7">
            $5 and under
          </h1>
        </div>
        <div>
          <Image
            src="/images/Deal1.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
        <div>
          <Image
            src="/images/Deal2.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
        <div>
          <Image
            src="/images/Deal3.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
        <div>
          <Image
            src="/images/Deal4.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
        <div>
          <Image
            src="/images/Deal5.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
        <div>
          <Image
            src="/images/Deal6.jpeg"
            alt="pics"
            width="180"
            height="280"
            className="w-[180px] h-[280px] rounded"
          />
        </div>
      </div>

      <div>
        <div className="ml-8 grid grid-cols-3 gap-10 pb-10">
          <div>
            <Image
              src="/images/Action-pic1.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic2.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic3.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic4.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic5.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic6.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic7.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic3.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
          <div>
            <Image
              src="/images/Action-pic1.jpeg"
              alt="pics"
              width="400"
              height="500"
              className="rounded 4xl w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
