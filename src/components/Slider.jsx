// Import af ikoner fra React-icons og useState hook fra React
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";

// Import af billedfiler og styling
import img1 from "../assets/Billeder/slide1.jpg";
import img2 from "../assets/Billeder/slide2.jpg";
import img3 from "../assets/Billeder/slide3.jpg";
import style from "../Styles/slide.module.scss";

// Funktion for slider-komponenten
export function Slider() {
  // Array med stier til billeder for slideren
  const sliderArray = [img1, img2, img3];

  // State hook til at holde styr på det aktuelle slide-indeks
  const [slideIndex, setSlideIndex] = useState(0);

  // Funktion til at skifte til næste slide
  const nextSlide = () => {
    // Håndtering af tilfælde, hvor vi er på det sidste slide
    if (slideIndex < sliderArray.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    } else {
      setSlideIndex(0); // Gå tilbage til det første slide
    }
  };

  // Funktion til at skifte til forrige slide
  const previousSlide = () => {
    // Håndtering af tilfælde, hvor vi er på det første slide
    if (slideIndex === 0) {
      setSlideIndex(sliderArray.length - 1); // Gå til det sidste slide
    } else {
      setSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Funktion til at håndtere navigation ved at klikke på punkter under slideren
  const handleSliderNav = (index) => {
    setSlideIndex(index);
  };

  // console.log("Aktuelt slide-indeks:", slideIndex);


  return (
    <header className={style.HeaderSlider}>
      <div>
        {/* Knap til at gå til forrige slide */}
        <button onClick={previousSlide}>
          <GoChevronLeft />
        </button>

        <h1>Vi elsker at lave brød</h1>

        {/* Knap til at gå til næste slide */}
        <button onClick={nextSlide}>
          <GoChevronRight />
        </button>
      </div>

      {/* Visning af det aktuelle billede */}
      <img src={sliderArray[slideIndex]} alt={`Slide ${slideIndex + 1}`} />

      {/* Section med punkter til navigation */}
      <section>
        {sliderArray.map((item, index) => (
          <span
            key={index}
            style={
              // Anvend en anden baggrundsfarve for at markere det aktuelle slide
              slideIndex === index
                ? { backgroundColor: "rgb(122, 122, 122)" }
                : null
            }
            onClick={() => handleSliderNav(index)}
          />
        ))}
      </section>

    </header>
  );
}
