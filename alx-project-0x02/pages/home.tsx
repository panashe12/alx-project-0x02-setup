import Card from "@/components/common/Card";

// pages/home.tsx
export default function HomePage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card." />
        <Card title="Card 3" content="This is the third card." />
      </div>
    </div>
     
     
  );
}

