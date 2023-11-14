import React, {useState} from 'react'
import './index.css'
import DataSlider from './DataSlider'
import About_Motorcycle from '../../../assets/aboutMedia/About_Motorcycle.jpg'
import About_Pic from '../../../assets/aboutMedia/About_Pic.JPG'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const imgs = [About_Pic, About_Motorcycle]

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {DataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={imgs[index]} alt="Img"
                        />
                    </div>
                )
            })}

            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
