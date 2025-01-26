import { Home, Hammer, ClipboardList, Star, MessageSquare } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary/90 backdrop-blur-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center">
            <Hammer className="h-8 w-8 text-secondary" />
            <span className="ml-2 text-2xl font-bold text-white">TradeSeekers</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-secondary hover:text-accent flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home
              </a>
              <a href="#services" className="text-secondary hover:text-accent flex items-center">
                <ClipboardList className="h-5 w-5 mr-2" />
                Services
              </a>
              <a href="#reviews" className="text-secondary hover:text-accent flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Reviews
              </a>
              <a href="#contact" className="text-secondary hover:text-accent flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
