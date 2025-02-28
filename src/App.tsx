import React, { useState } from 'react'
    import {
      Wrench,
      Zap,
      Sparkles,
      LifeBuoy,
      Users,
      Rocket,
      Menu,
    } from 'lucide-react'

    function App() {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      }

      return (
        <div className="font-sans antialiased">
          {/* Header Navigation */}
          <nav className="bg-gray-900 text-white py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
              <a href="#" className="text-xl font-bold flex items-center">
                <Zap className="h-6 w-6 mr-2 text-yellow-400" />
                Bolt.DIY
              </a>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={toggleMobileMenu}>
                  <Menu className="h-6 w-6" />
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  Home
                </a>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  Features
                </a>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  About
                </a>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  Community
                </a>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen ? (
              <div className="md:hidden mt-4">
                <a href="#" className="block py-2 hover:text-yellow-400 transition duration-300">
                  Home
                </a>
                <a href="#" className="block py-2 hover:text-yellow-400 transition duration-300">
                  Features
                </a>
                <a href="#" className="block py-2 hover:text-yellow-400 transition duration-300">
                  About
                </a>
                <a href="#" className="block py-2 hover:text-yellow-400 transition duration-300">
                  Community
                </a>
              </div>
            ) : null}
          </nav>

          {/* Hero Section */}
          <header className="bg-gray-900 text-white py-20 px-6 text-center">
            <div className="container mx-auto">
              {/* Remove the Zap icon here to avoid duplication */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Bolt.DIY: Build Anything, Simply.
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Empowering creators with intuitive tools and lightning-fast workflows.
              </p>
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
              >
                Get Started
              </a>
            </div>
          </header>

          {/* Features Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Feature 1 */}
                <div className="text-center">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-semibold mb-2">
                    Intuitive Tools
                  </h3>
                  <p className="text-gray-600">
                    User-friendly interface designed for creators of all skill
                    levels.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center">
                  <Sparkles
                    className="h-12 w-12 mx-auto mb-4 text-yellow-400"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    Fast Workflows
                  </h3>
                  <p className="text-gray-600">
                    Streamlined processes to accelerate your project development.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center">
                  <LifeBuoy
                    className="h-12 w-12 mx-auto mb-4 text-yellow-400"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    Expert Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated assistance to help you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-gray-100 py-16 px-6">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    About Bolt.DIY
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We believe in empowering individuals to bring their ideas to
                    life. Bolt.DIY provides the platform and resources to make
                    creation accessible to everyone.
                  </p>
                  <p className="text-gray-600">
                    Our mission is to simplify the complex, making it easier for
                    you to build, innovate, and inspire.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Team working on a project"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Join Our Community
              </h2>
              <div className="flex justify-center space-x-6">
                <Users className="h-8 w-8 text-gray-600 hover:text-yellow-400 transition duration-300" />
                {/* Add more community icons/links as needed */}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-900 text-white py-16 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8">
                Build your next project with Bolt.DIY.
              </p>
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
              >
                Start Building
              </a>
              <div className="mt-8">
                <Rocket className="h-12 w-12 mx-auto text-yellow-400" />
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 px-6">
            <div className="container mx-auto text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Bolt.DIY. All rights reserved.
              </p>
              <div className="mt-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 mx-4">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 mx-4">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </div>
      )
    }

    export default App
