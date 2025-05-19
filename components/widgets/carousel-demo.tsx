import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

function CarouselDemo() {
  const imagesList = ["image-1.jpeg", "image-2.jpg", "image-3.png"];
  
  // Reference to the Next button element
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextBtnRef.current) {
        nextBtnRef.current.click(); // Programmatically click Next button every 3 seconds
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-[80%] mx-auto">
      <CarouselContent>
        {imagesList.map((image, index) => (
          <CarouselItem key={index} className="flex justify-center items-center">
            <img
              src={`/image/${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext ref={nextBtnRef} />
    </Carousel>
  );
}

export { CarouselDemo };
