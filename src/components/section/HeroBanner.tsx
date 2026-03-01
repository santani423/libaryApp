"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export function HeroBanner() {
  const slides = [1, 2, 3, 4, 5]
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
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
    <div className="mx-auto w-full max-w-full space-y-2 rounded-lg p-4 ">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              <Card className="m-px">
                <CardContent className="flex h-44 items-center justify-center p-6 sm:h-52 md:h-60 lg:h-64">
                  <span className="text-4xl font-semibold">{slide}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}
