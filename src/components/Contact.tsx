import { profileConfig } from '@/config/profile';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to work together? Let&apos;s connect and discuss your next project!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-600">
                I&apos;m always interested in new opportunities and exciting projects
              </p>
            </div>
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${profileConfig.personal.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    {profileConfig.personal.email}
                  </a>
                </div>
              </div>

              {profileConfig.personal.phone && (
                <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-200">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href={`tel:${profileConfig.personal.phone}`}
                      className="text-green-600 hover:text-green-700 transition-colors font-medium"
                    >
                      {profileConfig.personal.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-200">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-purple-600 font-medium">{profileConfig.personal.location}</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-200">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-6">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-orange-600 font-medium">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {profileConfig.personal.email && (
                  <a
                    href={`mailto:${profileConfig.personal.email}`}
                    className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
                {profileConfig.personal.discord && (
                  <a
                    href={profileConfig.personal.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="Discord"
                  >
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.2.36-.43.85-.589 1.231a18.27 18.27 0 00-4 0A8.258 8.258 0 0011.38 3 19.736 19.736 0 007.62 4.369C3.4 10.177 2.532 15.87 3.01 21.486a19.88 19.88 0 005.89 1.844c.475-.651.9-1.34 1.27-2.061a12.7 12.7 0 01-2.01-.98c.168-.123.333-.251.492-.383a13.9 13.9 0 0011.717 0c.161.132.326.26.492.383-.646.38-1.325.7-2.011.98.37.721.795 1.41 1.27 2.061a19.88 19.88 0 005.89-1.844c.485-5.676-.8-11.338-4.612-17.117zM9.58 15.568c-1.131 0-2.053-1.041-2.053-2.321 0-1.279.905-2.321 2.053-2.321 1.157 0 2.079 1.051 2.053 2.321 0 1.28-.896 2.321-2.053 2.321zm4.84 0c-1.132 0-2.053-1.041-2.053-2.321 0-1.279.905-2.321 2.053-2.321 1.157 0 2.079 1.051 2.053 2.321 0 1.28-.896 2.321-2.053 2.321z"/>
                    </svg>
                  </a>
                )}
                {profileConfig.personal.linkedin && (
                  <a
                    href={profileConfig.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                
                {profileConfig.personal.github && (
                  <a
                    href={profileConfig.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                
                {profileConfig.personal.twitter && (
                  <a
                    href={profileConfig.personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-400 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}

                {profileConfig.personal.telegram && (
                  <a
                    href={profileConfig.personal.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-sky-500 text-white rounded-xl flex items-center justify-center hover:bg-sky-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="Telegram"
                  >
                    {/* Telegram icon */}
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.036 15.803l-.379 5.337c.543 0 .778-.233 1.059-.512l2.54-2.436 5.264 3.85c.967.534 1.656.253 1.917-.896l3.47-16.27.001-.001c.308-1.438-.52-2.003-1.461-1.652L1.12 9.34c-1.409.548-1.388 1.336-.24 1.692l5.27 1.644L18.91 6.27c.574-.377 1.095-.168.666.209"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
