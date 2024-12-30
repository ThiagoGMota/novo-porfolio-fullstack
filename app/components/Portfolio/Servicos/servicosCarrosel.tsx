'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { services } from "./servicos";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react'
import CardServico from "./cardServico";


const CarroselServicos = () => {
    // Group services into pairs
    const servicePairs = services.reduce((result, value, index, array) => {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, [] as typeof services[]);

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-32"
        >
            <CarouselContent>
                {servicePairs.map((pair, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                        <div className="grid grid-rows-2  items-center justify-center h-96 px-2">
                            {pair.map((service) => (
                                <CardServico
                                    key={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <CarouselPrevious />
                <CarouselNext />
            </div>
            
        </Carousel>
    );
};

export default CarroselServicos;

