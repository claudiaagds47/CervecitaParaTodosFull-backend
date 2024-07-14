import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import style from "../styles/Home.module.css"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'


export function EmblaCarousel() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()] )

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
   
    <div className={style.embla} ref={emblaRef}>
      <div className={style.embla__container}>
        <div className={style.embla__slide}>Slide 1
          <Image src="/Cervezababa.svg" alt="Slide 1" width={200} height={200} />
          <div></div>
        </div>
        <div className={style.embla__slide}>Slide 2
          <Image src="/Cervezabombon.svg" alt="Slide 2" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 3
          <Image src="/Cervezados.svg" alt="Slide 3" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 4
          <Image src="/Cervezajabalina.svg" alt="Slide 4" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 5
          <Image src="/Cervezaocaso.svg" alt="Slide 5" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 6
          <Image src="/Cervezared.svg" alt="Slide 6" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 7
          <Image src="/Cervezaslvdr.svg" alt="Slide 7" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 8
          <Image src="" alt="Slide 8 " width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 9
          <img src="/image3.jpg" alt="Slide 3" />
        </div>
        <div className={style.embla__slide}>Slide 10
          <img src="/image3.jpg" alt="Slide 3" />
        </div>
        
      </div>
    </div>
  );
};
