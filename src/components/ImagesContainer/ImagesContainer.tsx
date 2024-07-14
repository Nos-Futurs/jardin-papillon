import { Component, createSignal } from "solid-js";
import photo_1jpg from "../../assets/images/photo_1.jpg"
import photo_1webp from "../../assets/images/photo_1.webp"
import fleursJpg from "../../assets/images/fleurs.jpg"
import fleurswebp from "../../assets/images/fleurs.webp"
import foinJpg from "../../assets/images/foin.jpg"
import foinwebp from "../../assets/images/foin.webp"
import plansJpg from "../../assets/images/plans.jpg"
import planswebp from "../../assets/images/plans.webp"
import fleche from "../../assets/fleche.svg"


import "./ImagesContainer.scss";

const images = [{ jpg: photo_1jpg, webp: photo_1webp, alt: "" }, { jpg: fleursJpg, webp: fleurswebp, alt: "" }, { jpg: foinJpg, webp: foinwebp, alt: "" }, { jpg: plansJpg, webp: planswebp, alt: "" }]

const ImagesContainer: Component = () => {
    const [number, setNumber] = createSignal<number>(0);

    return (
        <div id="images-container">
            {number() !== 0 && <button onClick={(): void => { setNumber(number() - 1) }} class="go_back_button"><img src={fleche.src} alt="Fleche de retour à l'image précédente" class="go_back" /></button>}
            <img
                alt={images[number()].alt}
                srcset={`${images[number()].webp.src}, ${images[number()].jpg.src}`}
                loading="lazy"
            />
            {number() !== images.length - 1 && <button onClick={(): void => { setNumber(number() + 1) }}><img src={fleche.src} alt="Fleche pour aller à l'image suivante" /></button>}
        </div>
    );
};
export default ImagesContainer;
