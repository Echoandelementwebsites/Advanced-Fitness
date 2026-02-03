import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-dark text-white selection:bg-primary selection:text-white">
            {/* Google Fonts */}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Oswald:wght@400;500;700&display=swap');
                `}
            </style>

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-glass-border">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-heading font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
                        Advanced<span className="text-white">Fitness</span>
                    </Link>
                    <ul className="hidden md:flex space-x-8 font-heading uppercase tracking-wide text-sm font-medium">
                        <li><a href="#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors duration-300">Classes</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
                    </ul>
                    {/* Mobile Menu Icon Placeholder */}
                    <button className="md:hidden text-white hover:text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-secondary py-12 mt-auto border-t border-glass-border">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <div className="mb-6">
                        <h4 className="text-2xl font-heading font-bold text-white uppercase mb-2">Advanced Fitness</h4>
                        <p className="text-sm">Nairobi, Kenya</p>
                    </div>

                    <p className="text-sm mb-6">&copy; {new Date().getFullYear()} Advanced Fitness Nairobi. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 text-sm font-heading tracking-wider">
                        <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-primary transition-colors">FACEBOOK</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
