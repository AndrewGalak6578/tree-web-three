import React, { useState, useEffect } from 'react';
import atomize from "@quarkly/atomize"; // The texts to show in the slider

const texts = [{
	title: "Text 2",
	text: "Text 1",
	image: "https://placekitten.com/200/300"
}, {
	title: "Text2",
	text: "Text 2",
	image: "https://placekitten.com/300/300"
}, {
	title: "Text 3",
	text: "Text 3",
	image: "https://placekitten.com/400/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 5",
	text: "Text 5",
	image: "https://placekitten.com/600/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}, {
	title: "Text 4",
	text: "Text 4",
	image: "https://placekitten.com/500/300"
}];

const HorizontalSlider = props => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleLeftClick = () => {
		setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : texts.length - 1);
	};

	const handleRightClick = () => {
		setCurrentIndex(prevIndex => prevIndex < texts.length - 1 ? prevIndex + 1 : 0);
	};

	const handleButtonClick = index => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			handleRightClick();
		}, 10000);
		return () => clearTimeout(timer);
	}, [currentIndex]);
	return <div style={{
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '300px',
		backgroundImage: `url(${texts[currentIndex].image})`,
		backgroundSize: 'cover'
	}}>
		      
		<button onClick={handleLeftClick} style={{
			position: 'absolute',
			left: '10px',
			top: '50%'
		}}>
			Left
		</button>
		      
		<div style={{
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: '2em',
			color: 'white',
			textAlign: 'center'
		}}>
			        
			<div style={{
				fontWeight: 'bold',
				marginBottom: '10px'
			}}>
				{texts[currentIndex].title}
			</div>
			        
			<div>
				{texts[currentIndex].text}
			</div>
			      
		</div>
		      
		<div style={{
			marginBottom: '20px'
		}}>
			        
			{texts.map((_, index) => <button key={index} onClick={() => handleButtonClick(index)} style={{
				marginRight: '5px'
			}}>
				{index + 1}
			</button>)}
			      
		</div>
		      
		<button onClick={handleRightClick} style={{
			position: 'absolute',
			right: '10px',
			top: '50%'
		}}>
			Right
		</button>
		    
	</div>;
};

export default atomize(HorizontalSlider)({
	name: "HorizontalSlider",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "HorizontalSlider — my awesome component"
	},
	propInfo: {
		yourCustomProps: {
			control: "input"
		}
	}
});