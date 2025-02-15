import React from 'react';
import { Button } from "@/components/ui/button";
import './Hero.css';
import useStore from '@/store/index';

const Hero = () => {
    // Access the setExploration action from the store
    const { setExploration } = useStore();

    return (
        <section
            className="hero-section w-full py-12 md:py-24 lg:py-32 xl:py-48"
            style={{
                backgroundColor: "rgb(132, 117, 50)",  // Your background color
            }}
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        {/* Golden Glow Text */}
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-glow">
                            Welcome to Our {(useStore.getState().currentExploration)} Prince Residancy  
             
                        </h1>

                        {/* Deep Orange Shadow Text */}
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-shadow">
                            Discover the power of our innovative solutions. Start your journey with us today and unlock endless
                            possibilities.
                        </p>
                    </div>
                    <div className="space-x-4">
                        {/* Explore Hotel Button */}
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setExploration('Hotel')}
                        >
                            Explore Hotel
                        </Button>

                        {/* Explore Club House Button */}
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setExploration('ClubHouse')}
                        >
                            Explore Club House
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
