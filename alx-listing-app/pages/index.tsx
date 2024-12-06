
import Card from "../components/common/Card";
import Button from "../components/common/Button";



export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center space-y-4">
        <Card title="Sample Listing" description="This is a description of the sample listing." imageUrl="/assets/property.png" />
        <Button />
      </div>
    </>
  );
}
