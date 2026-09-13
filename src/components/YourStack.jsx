// The sidebar showing everything the user has added so far.
function YourStack({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-fit sticky top-20">
      <h3 className="font-semibold text-gray-900">Your Stack</h3>

      {/* Heading changes depending on whether anything is selected */}
      <p className="text-sm text-gray-400 mb-4">
        {isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        // Empty state: dashed box with a placeholder message
        <div className="border border-dashed border-gray-200 rounded-lg py-10 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        // List of selected technologies
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All button only makes sense when something is selected */}
      {!isEmpty && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 border border-red-200 text-red-500 text-sm font-medium py-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default YourStack;
