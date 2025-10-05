import { profileConfig } from '@/config/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {profileConfig.experience.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through my professional experience and career milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {profileConfig.experience.items.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                      <span className="text-gray-500">{exp.location}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                        {exp.workMode}
                      </span>
                    </div>
                    
                    {/* Description as bullet points */}
                    <div className="mb-4 space-y-2">
                      {(exp.description || '')
                        .split(';')
                        .map(item => item.trim())
                        .filter(Boolean)
                        .map((point, i) => (
                          <div key={i} className="flex items-start">
                            <span className="mt-2 mr-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                            <p className="text-gray-600">{point ? point[0].toUpperCase() + point.slice(1) : ''}</p>
                          </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
