import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center" style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <p className="py-4">More to come here</p>
      <ul className="py-4" style={{ listStyle: "none", padding: "0" }}>
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
