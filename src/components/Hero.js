import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

    const image = getImage(data.heroImage)

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                {image && (
                    <GatsbyImage
                        image={image}
                        alt="Advanced Fitness Gym Hero"
                        className="h-full w-full object-cover"
                        style={{ position: "absolute" }}
                    />
                )}
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-hero-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-tight leading-none drop-shadow-lg">
                    TRANSFORM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">YOUR BODY</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                    Join the elite fitness community in Nairobi. State-of-the-art equipment, expert trainers, and a vibe like no other.
                </p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <a
                        href="#contact"
                        className="bg-primary hover:bg-rose-600 text-white font-heading font-bold uppercase tracking-wider py-4 px-10 rounded-none transform transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] border border-primary"
                    >
                        START NOW
                    </a>
                    <a
                        href="https://wa.me/254700000000"
                        className="bg-transparent border border-white/30 hover:border-white text-white font-heading font-bold uppercase tracking-wider py-4 px-10 rounded-none backdrop-blur-sm transition-all hover:bg-white/10"
                    >
                        WHATSAPP US
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
