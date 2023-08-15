import React, {useState} from 'react';
import './Ver_Slider.css'; // Подключаем стили

function VerticalSlider({ images, title = "Your Trees", buttonLabel = "MINT NEW SEED", onButtonClick }) {
	const [activeIndex, setActiveIndex] = useState(0);
  
	const goUp = () => {
	  if (activeIndex > 0) {
		setActiveIndex(prev => prev - 1);
	  }
	};
  
	const goDown = () => {
	  if (activeIndex < images.length - 3) {
		setActiveIndex(prev => prev + 1);
	  }
	};
  
	return (
	  <div className="slider-container">
		<h3 className="slider-heading">{title}</h3>
		<button onClick={goUp} className="slider-nav-button slider-nav-up" />
		<div className="slider-images">
		  {images.slice(activeIndex, activeIndex + 3).map((imgSrc, index) => (
			<div key={index} className="slider-image-container">
			  <img
				src={imgSrc}
				alt=""
				className="slider-image"
			  />
			</div>
		  ))}
		</div>
		<button onClick={goDown} className="slider-nav-button slider-nav-down" />
		<button onClick={onButtonClick} className="slider-button">
		  {buttonLabel}
		</button>
	  </div>
	);
  }
  
  export default VerticalSlider;