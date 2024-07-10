import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Recipe App</h1>
      <Link href={"./recipe-list"}>Explore receipe</Link>
    </main>
  );
}
