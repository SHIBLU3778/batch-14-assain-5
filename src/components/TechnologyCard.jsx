// One single technology card in the grid.
// This component doesn't hold any state itself — the parent (Technologies.jsx)
// tells it whether it's already added, and what to do when the button is clicked.
function TechnologyCard({ tech, isAdded, onAdd }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">

      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-semibold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 flex-1">{tech.description}</p>

      {/* Category chip + difficulty + rating */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded-md">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 ml-auto">
          <span className="text-yellow-500">★</span>
          {tech.rating}
        </span>
      </div>

      {/* Add to Stack button - changes look once added */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "bg-gray-100 text-gray-400 text-sm font-medium py-2 rounded-lg cursor-not-allowed"
            : "bg-gray-900 text-white text-sm font-medium py-2 rounded-lg hover:opacity-90 transition-opacity"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
