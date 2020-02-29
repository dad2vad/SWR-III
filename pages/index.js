import React from "react";
import Head from "next/head";
import PokemonList, {
  Fallback as PokemonListFallback
} from "../components/pokemon-list";
import { Fallback as PokemonShortFallback } from "../components/pokemon-short";

const isServer = typeof window === "undefined";

const fallback = (
  <PokemonListFallback>
    {Array.from({ length: 9 }, (_, index) => (
      <PokemonShortFallback key={index} />
    ))}
  </PokemonListFallback>
);

function HomePage() {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <section className="container mx-auto">
        {!isServer ? (
          <React.Suspense fallback={fallback}>
            <PokemonList />
          </React.Suspense>
        ) : (
          fallback
        )}
      </section>
    </>
  );
}

export default HomePage;
