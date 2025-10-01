import { profileConfig } from '@/config/profile';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {profileConfig.education.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {profileConfig.education.items.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-xl font-semibold text-blue-600 mb-2">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {edu.duration}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
