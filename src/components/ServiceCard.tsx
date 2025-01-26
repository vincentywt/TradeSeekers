export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={service.image} 
        alt={service.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-primary">{service.name}</h3>
          <span className="px-3 py-1 text-sm border border-accent text-accent rounded-full">
            {service.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{service.benefit}</p>
        <div className="flex justify-between items-center">
          <span className="text-secondary font-bold">From £{service.price}</span>
          <a 
            href={service.link} 
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}
