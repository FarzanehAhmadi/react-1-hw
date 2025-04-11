"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "./PlanetWishlistItem";
import PlanetCard from "./PlanetCard";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";

<PlanetWishlistItem />;

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  const planets = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const onAddOrRemovePlanet = (name, index) => {
    if (selectedPlanets.includes(name)) {
      onAddPlanet(selectedPlanets.filter((planet) => planet !== name));
    } else {
      onAddPlanet([...selectedPlanets, name]);
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>
            {selectedPlanets.length === 0
              ? "No planets in wishlist :("
              : `You have ${selectedPlanets.length} in your wishlist`}
          </p>

          <AddWishlistItem onAddWishlistItem={onAddPlanet} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planetName, index) => {
              const planet = planets.find((p) => p.name === planetName);
              if (planet) {
                return (
                  <PlanetWishlistItem
                    key={index}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => removeFromWishlist(planet.name)}
                  />
                );
              }
              return null;
            })}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet, index) => {
            const isSelected = selectedPlanets.includes(planet.name);
            return (
              <PlanetCard
                key={index}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isSelected}
                onAddOrRemovePlanet={onAddOrRemovePlanet}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
