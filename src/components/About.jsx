export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            With over 5 years of experience in web development, I specialize in
            creating performant, accessible, and responsive web applications. My
            journey has taken me through startups and enterprise environments,
            giving me a well-rounded perspective on building digital products.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            When I'm not coding, you can find me hiking in the mountains,
            reading sci-fi novels, or experimenting with new cooking recipes. I
            believe in continuous learning and staying curious about new
            technologies and design trends.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "∞", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
