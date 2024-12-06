
import Card from "../components/common/Card";
import Button from "../components/common/Button";



export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center space-y-4">
        <Card title="Villa Arrecife Beach House" description="Sidemen, Bali, Indonesia" imageUrl="/assets/property.png" rating={4.76} />
      </div>
    </>
  );
}
