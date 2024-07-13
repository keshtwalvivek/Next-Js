import Image from "next/image";

async function timeTake() {
  await new Promise((resvole) => {
    setTimeout(resvole, 3000);
  });
}
export default async function Home() {
  await timeTake();
  return (
    <div>
      <h1>home page</h1>
    </div>
  );
}
