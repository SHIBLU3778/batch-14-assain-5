import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function Technologies() {
  // All technologies loaded from the JSON file
  const [technologies, setTechnologies] = useState([]);
  // Technologies the user has picked so far
  const [stack, setStack] = useState([]);
  // True while the JSON file is being fetched
  const [isLoading, setIsLoading] = useState(true);

  // useEffect runs once when this component first mounts.
  // We use it here because fetching data is a "side effect" - it happens
  // outside of React's normal render flow, and we only want to do it once,
  // not on every re-render.
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setIsLoading(false);
      });
  }, []);

  function handleAddToStack(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      {isLoading ? (
        // Simple loading state while the JSON file is being fetched
        <div className="text-center text-gray-400 py-20">Loading technologies...</div>
      ) : (
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Cards grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAddToStack}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Technologies;
