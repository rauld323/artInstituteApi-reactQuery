import Head from 'next/head';
import ImageCall from '@/components/artPiece';
import { useQuery } from "react-query";
import restClient from "@/pages/api/RestClient";

export default function Home() {
  const { data } = useQuery(
    "picData",
    () => restClient.get("artworks/"),
  );
  const pics = data.data.title.map(art => art);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageCall name={pics} />
    </>
  );
}