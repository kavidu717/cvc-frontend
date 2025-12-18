import { useState } from "react";
export default function ImageSlider(props) {
  const images = props.image || [];
   const [activeImage, setActiveImage]= useState(0)
  return (
    <div className="w-full flex flex-col justify-center items-center relative gap-4">
      
      {/* Main Image */}
      <img
        src={images[activeImage]}
        alt=""
        className="w-[300px] h-[300px] aspect-square object-cover rounded-xl"
      />

      {/* Other photos */}
      <div className="flex gap-2">
        {images.map((img, index) => (
          <img onClick={()=>{
            setActiveImage(index)
          }}
            key={index}
            src={img}
          
            className="w-20 h-20 object-cover rounded-xl cursor-pointer"
          />
        ))}
      </div>

    </div>
  );
}
