import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import atomize from "@quarkly/atomize";

// The images to show in the slider
const images = [
	"https://placekitten.com/200/300",
	"https://placekitten.com/300/200",
	"https://placekitten.com/200/200",
	"https://placekitten.com/300/300",
	"https://placekitten.com/400/200"
];

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	vertical: true,
};

const CustomSlider = props => (
	<div {...props} style={{ width: "180px", height: "510px" }}>
		<Slider {...settings}>
			{images.map((image, index) => (
				<div key={index}>
					<img src={image} alt="" style={{ width: "180px", height: "170px", objectFit: "cover" }} />
				</div>
			))}
		</Slider>
	</div>
);

export default atomize(CustomSlider)({
	name: "CustomSlider",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "CustomSlider — my awesome component",
	},
	propInfo: {
		yourCustomProps: {
			control: "input"
		}
	}
});