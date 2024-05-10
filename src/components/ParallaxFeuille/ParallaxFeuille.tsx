import { Component, createEffect, createSignal } from "solid-js";
import feuille from "../../assets/feuille.svg"


import "./ParallaxFeuille.scss";

interface ParallaxFeuilleProps{
    id: string;
    rotation: number;
}
const ParallaxFeuille: Component<ParallaxFeuilleProps> = (props: ParallaxFeuilleProps) => {
  const [offsetY, setOffsetY] = createSignal<number>(window.scrollY);
  const handleScroll = (): void => {
    setOffsetY(window.scrollY);
  };
  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
      <img
        id={props.id}
        alt="Feuille qui tombe le long de la page"
        src={feuille.src}

        style={{rotate: `${props.rotation + offsetY() * 0.5}deg`}}
      />
  );
};
export default ParallaxFeuille;
