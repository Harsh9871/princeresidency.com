import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ExploreSection from '@/components/ExploreSection'
import GallerySection from '@/components/GallerySection'
import FormSection from '@/components/FormSection'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExploreSection />
            <GallerySection />
            <FormSection/>
            <Footer />

           
        </div>
    )
}

export default Home
