import { Component, createSignal } from "solid-js";
import pergolaJpg from "../../assets/images/pergola.jpg"
import pergolawebp from "../../assets/images/pergola.webp"
import serreJpg from "../../assets/images/serre.jpg"
import serrewebp from "../../assets/images/serre.webp"
import fleche from "../../assets/fleche.svg"


import "./ImagesContainer.scss";

const images = [{ jpg: pergolaJpg, webp: pergolawebp, alt: "Pergola avec des plants de courge grimpant" }, { jpg: serreJpg.src, webp: serrewebp, alt: "Serre et vu sur la montagne" }]

const ImagesContainer: Component = () => {
    const [number, setNumber] = createSignal<number>(0);

    return (
        <div id="images-container">
            {number() !== 0 && <button onClick={() => { setNumber(number() - 1) }} class="go_back_button"><img src={fleche.src} alt="Fleche de retour à l'image précédente" class="go_back" /></button>}
            <img
                alt={images[number()].alt}
                src={images[number()].webp.src}
                loading="lazy"
            />
            {number() !== images.length - 1 && <button onClick={() => { setNumber(number() + 1) }}><img src={fleche.src} alt="Fleche pour aller à l'image suivante" /></button>}
        </div>
    );
};
export default ImagesContainer;
