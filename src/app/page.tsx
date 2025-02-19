import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <p>More to come here</p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/landing" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Go to Landing Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
