export default function FeatureSection({ title, description, icon, items }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6 text-accent">{icon}</div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-accent mr-2">✓</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
