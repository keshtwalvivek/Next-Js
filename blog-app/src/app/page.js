import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to bg-blue-500 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1>Browse our blog collection</h1>
        <Link
          className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded"
          href={"/blogs"}
        >
          Explore Blog
        </Link>
      </div>
    </div>
  );
}
