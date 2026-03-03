"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Banner from "@/assets/banner.png"

export function HeroBanner() {
  const slides = [1, 2, 3, 4, 5]
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const handleSlideClick = (index: number) => {
    api?.scrollTo(index)
  }

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api) {
      return
    }

    const autoSlide = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
        return
      }

      api.scrollTo(0)
    }, 3000)

    return () => {
      clearInterval(autoSlide)
    }
  }, [api])

  return (
    <div className="mx-auto w-full max-w-full space-y-3 rounded-xl p-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              <Card className="m-px overflow-hidden rounded-xl border-0 shadow-none">
                <CardContent className="relative h-44 overflow-hidden p-0 sm:h-52 md:h-60 lg:h-64">
                  <Image
                    src={Banner}
                    alt={`Banner slide ${slide}`}
                    fill
                    priority={slide === 1}
                    className="object-cover"
                    sizes="100vw"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-2 pb-1">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            onClick={() => handleSlideClick(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index + 1
                ? "h-2 w-6 bg-primary"
                : "h-2 w-2 bg-muted opacity-70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
