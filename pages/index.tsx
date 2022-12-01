import Head from "next/head";
import Header from "../components/Header/header";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const token = `dfd8fde05467d73157be262ada5346b0c24d9cd786d86adc61064783e471cd62cc10a618bf97f05c9f2e4165b7b0ad42f53e4bbcae792cbeb4682967fbdd863aab33751f213d15d3a6afbf2d6a960fd3a948d34e7e15330dc913099249e70920c7e15d5e0e1c9b851fab7d661b2abcdd2be5699203fb8942ac386d55494d6be3`;

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
