import Image from "next/image";
import Index from "./component";
import Index2 from "./component/index2";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="p-4 lg:p-6 bg-gradient-to-r from-purple-800 via-black to-blue-900">
        <Index/>
      </div>
      <Index2/>
    </div>
  );
}
