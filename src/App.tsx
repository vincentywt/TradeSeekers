import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { services } from './data/services'
import ServiceCard from './components/ServiceCard'
import { ClipboardCheck, ShieldCheck } from 'lucide-react'
import FeatureSection from './components/FeatureSection'

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16"> {/* Proper navbar spacing */}
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Home Services, Simplified
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              Expertise you can trust, results that last
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="What service do you need?"
                className="px-6 py-3 rounded-lg text-dark flex-grow max-w-xl"
              />
              <button className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors">
                Search Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Services - RESTORED CONTENT */}
        <section className="max-w-7xl mx-auto px-4 py-16" id="services">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Popular Home Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Features Section - RESTORED CONTENT */}
        <section className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureSection
              title="Find & Compare Trades"
              description="Discover and evaluate qualified tradespeople in your area."
              icon={<ClipboardCheck className="h-12 w-12" />}
              items={[
                'Easy search by trade type and location',
                'Compare ratings and reviews',
                'View verified credentials',
                'Get multiple quotes'
              ]}
            />
            <FeatureSection
              title="Quality Assurance"
              description="Real feedback and quality verification systems."
              icon={<ShieldCheck className="h-12 w-12" />}
              items={[
                'Verified customer reviews',
                'Photo galleries of work',
                'Quality guarantees',
                'Performance metrics'
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
