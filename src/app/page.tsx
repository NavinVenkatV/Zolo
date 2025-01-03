import Index from "./component";
import Index2 from "./component/index2";
import Index4 from "./component/index4";

export default function Home() {
  return (
    <div className="bg-black h-full w-full overflow-hidden px-auto">
      <div className="p-4 lg:p-6 bg-gradient-to-r from-purple-800 via-black to-blue-900 overflow-hidden">
        <Index />
      </div>
      <Index2 />
      <div className='w-auto h-auto pb-10' style={{
            backgroundImage: 'linear-gradient(to bottom, #000000 70%, #1e3a8a 90%)'
        }}>
            <Index4 />
        </div>
    </div>
  );
}
