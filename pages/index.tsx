import Head from "next/head";
import Header from "../components/Header/header";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const token = ``;

      const data = await axios.get(`http://localhost:1337/api/properties`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setData(data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Next Level Properties</title>
        <meta name="description" content="Next Level Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {data &&
        data.data?.map((property: any) => {
          return (
            <div key={property.id}>
              <h1>{property.attributes.Name}</h1>
              <h2>{property.attributes.Price}</h2>
            </div>
          );
        })}
    </div>
  );
}
