import React, { useState } from 'react';

const EducationalPlatform = () => {
  // Sample data structure
  const countries = [
    {
      id: 'A',
      name: 'Country A',
      curriculums: [
        { id: 'AA', name: 'Curriculum AA' },
        { id: 'AB', name: 'Curriculum AB' }
      ]
    },
    {
      id: 'B',
      name: 'Country B',
      curriculums: [
        { id: 'BA', name: 'Curriculum BA' },
        { id: 'BB', name: 'Curriculum BB' }
      ]
    },
    {
      id: 'C',
      name: 'Country C',
      curriculums: [
        { id: 'CA', name: 'Curriculum CA' },
        { id: 'CB', name: 'Curriculum CB' }
      ]
    },
    {
      id: 'D',
      name: 'Country D',
      curriculums: [
        { id: 'DA', name: 'Curriculum DA' },
        { id: 'DB', name: 'Curriculum DB' }
      ]
    },
    {
      id: 'E',
      name: 'Country E',
      curriculums: [
        { id: 'EA', name: 'Curriculum EA' },
        { id: 'EB', name: 'Curriculum EB' }
      ]
    }
  ];
  
  // University level degrees/majors and their topics
  const universityDegrees = [
    {
      id: 'CS',
      name: 'Computer Science',
      topics: [
        { id: 'CS-A', name: 'Algorithms' },
        { id: 'CS-B', name: 'Database Systems' }
      ]
    },
    {
      id: 'BUS',
      name: 'Business Administration',
      topics: [
        { id: 'BUS-A', name: 'Marketing' },
        { id: 'BUS-B', name: 'Finance' }
      ]
    },
    {
      id: 'ENG',
      name: 'Engineering',
      topics: [
        { id: 'ENG-A', name: 'Mechanical Engineering' },
        { id: 'ENG-B', name: 'Electrical Engineering' }
      ]
    },
    {
      id: 'MED',
      name: 'Medical Sciences',
      topics: [
        { id: 'MED-A', name: 'Anatomy' },
        { id: 'MED-B', name: 'Physiology' }
      ]
    },
    {
      id: 'HUM',
      name: 'Humanities',
      topics: [
        { id: 'HUM-A', name: 'Philosophy' },
        { id: 'HUM-B', name: 'Literature' }
      ]
    }
  ];
  
  // Experience Hub opportunities
  const experienceOpportunities = [
    {
      id: 'EXP1',
      name: 'Tech Startup Internship',
      field: 'Computer Science',
      type: 'Internship',
      location: 'Remote'
    },
    {
      id: 'EXP2',
      name: 'Community Health Volunteer',
      field: 'Medical Sciences',
      type: 'Volunteer',
      location: 'Various'
    },
    {
      id: 'EXP3',
      name: 'Marketing Agency Assistant',
      field: 'Business Administration',
      type: 'Internship',
      location: 'Hybrid'
    },
    {
      id: 'EXP4',
      name: 'Engineering Research Project',
      field: 'Engineering',
      type: 'Research',
      location: 'On-site'
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeSection, setActiveSection] = useState('country'); // 'country', 'university', or 'experience'

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedCurriculum(null);
    setSelectedDegree(null);
    setSelectedTopic(null);
    setSelectedExperience(null);
    setActiveSection('country');
  };

  const handleCurriculumSelect = (curriculum) => {
    setSelectedCurriculum(curriculum);
  };
  
  const handleDegreeSelect = (degree) => {
    setSelectedDegree(degree);
    setSelectedTopic(null);
    setSelectedCountry(null);
    setSelectedCurriculum(null);
    setSelectedExperience(null);
    setActiveSection('university');
  };
  
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };
  
  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
    setSelectedCountry(null);
    setSelectedCurriculum(null);
    setSelectedDegree(null);
    setSelectedTopic(null);
    setActiveSection('experience');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">Educational Platform</h1>
        </div>
        <nav className="p-2">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Navigation</h2>
          
          {/* Navigation Buttons */}
          <div className="flex flex-wrap mb-4">
            <button
              onClick={() => setActiveSection('country')}
              className={`px-3 py-2 ${
                activeSection === 'country'
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              Countries
            </button>
            <button
              onClick={() => setActiveSection('university')}
              className={`px-3 py-2 ${
                activeSection === 'university'
                  ? 'bg-purple-100 text-purple-600 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              University
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`px-3 py-2 ${
                activeSection === 'experience'
                  ? 'bg-green-100 text-green-600 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              Experience Hub
            </button>
          </div>
          
          {/* Countries Section */}
          {activeSection === 'country' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">Countries</h2>
              <ul>
                {countries.map((country) => (
                  <li key={country.id} className="mb-1">
                    <button
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full text-left px-3 py-2 rounded ${
                        selectedCountry && selectedCountry.id === country.id
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {country.name}
                    </button>
                    
                    {selectedCountry && selectedCountry.id === country.id && (
                      <ul className="ml-4 mt-1">
                        {country.curriculums.map((curriculum) => (
                          <li key={curriculum.id}>
                            <button
                              onClick={() => handleCurriculumSelect(curriculum)}
                              className={`w-full text-left px-3 py-1 rounded ${
                                selectedCurriculum && selectedCurriculum.id === curriculum.id
                                  ? 'bg-blue-50 text-blue-600 font-medium'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              {curriculum.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* University Section */}
          {activeSection === 'university' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">University Degrees</h2>
              <ul>
                {universityDegrees.map((degree) => (
                  <li key={degree.id} className="mb-1">
                    <button
                      onClick={() => handleDegreeSelect(degree)}
                      className={`w-full text-left px-3 py-2 rounded ${
                        selectedDegree && selectedDegree.id === degree.id
                          ? 'bg-purple-100 text-purple-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {degree.name}
                    </button>
                    
                    {selectedDegree && selectedDegree.id === degree.id && (
                      <ul className="ml-4 mt-1">
                        {degree.topics.map((topic) => (
                          <li key={topic.id}>
                            <button
                              onClick={() => handleTopicSelect(topic)}
                              className={`w-full text-left px-3 py-1 rounded ${
                                selectedTopic && selectedTopic.id === topic.id
                                  ? 'bg-purple-50 text-purple-600 font-medium'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              {topic.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Experience Hub Section */}
          {activeSection === 'experience' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">Opportunities</h2>
              <ul>
                {experienceOpportunities.map((experience) => (
                  <li key={experience.id} className="mb-1">
                    <button
                      onClick={() => handleExperienceSelect(experience)}
                      className={`w-full text-left px-3 py-2 rounded ${
                        selectedExperience && selectedExperience.id === experience.id
                          ? 'bg-green-100 text-green-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {experience.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Default Welcome Page */}
        {!selectedCountry && !selectedDegree && !selectedExperience && (
          <div className="flex flex-col items-center justify-center h-full text-gray-600">
            <h2 className="text-2xl mb-4">Welcome to the Educational Platform</h2>
            <p className="text-center max-w-md">
              {activeSection === 'country' && "Select a country from the sidebar to explore available curriculums."}
              {activeSection === 'university' && "Select a university degree from the sidebar to explore available topics."}
              {activeSection === 'experience' && "Select an opportunity from the sidebar to explore ways to apply your knowledge."}
            </p>
          </div>
        )}

        {/* Country Curriculum Views */}
        {selectedCountry && !selectedCurriculum && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedCountry.name}</h2>
            <p className="mb-6">Please select a curriculum from the sidebar to view its content.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCountry.curriculums.map((curriculum) => (
                <div 
                  key={curriculum.id}
                  onClick={() => handleCurriculumSelect(curriculum)}
                  className="bg-white p-6 rounded shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-medium mb-2">{curriculum.name}</h3>
                  <p className="text-gray-600">
                    Click to explore this curriculum's content and resources.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCountry && selectedCurriculum && (
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedCountry.name}</h2>
              <span className="mx-2 text-gray-400">›</span>
              <h3 className="text-xl font-semibold text-blue-600">{selectedCurriculum.name}</h3>
            </div>
            
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-lg font-medium mb-4">Curriculum Overview</h4>
              <p className="mb-4">
                This is where the content for {selectedCurriculum.name} would be displayed. 
                You can add more detailed information about each curriculum here.
              </p>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h5 className="font-medium mb-2">Available Resources</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Lesson Plans
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Study Materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Assessment Tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Educational Videos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* University Degree Views */}
        {selectedDegree && !selectedTopic && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedDegree.name}</h2>
            <p className="mb-6">Please select a topic from the sidebar to view its content.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedDegree.topics.map((topic) => (
                <div 
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  className="bg-white p-6 rounded shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-medium mb-2">{topic.name}</h3>
                  <p className="text-gray-600">
                    Click to explore this topic's content and resources.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDegree && selectedTopic && (
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedDegree.name}</h2>
              <span className="mx-2 text-gray-400">›</span>
              <h3 className="text-xl font-semibold text-purple-600">{selectedTopic.name}</h3>
            </div>
            
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-lg font-medium mb-4">Topic Overview</h4>
              <p className="mb-4">
                This is where the content for {selectedTopic.name} would be displayed. 
                You can add more detailed information about each university topic here.
              </p>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h5 className="font-medium mb-2">Available Resources</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Lectures
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Research Papers
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Case Studies
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Advanced Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Experience Hub Views */}
        {selectedExperience && (
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Experience Hub</h2>
              <span className="mx-2 text-gray-400">›</span>
              <h3 className="text-xl font-semibold text-green-600">{selectedExperience.name}</h3>
            </div>
            
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-lg font-medium mb-4">Opportunity Details</h4>
              
              <div className="flex mb-4">
                <div className="w-1/3 pr-4">
                  <div className="font-medium text-gray-700 mb-1">Field</div>
                  <div>{selectedExperience.field}</div>
                </div>
                <div className="w-1/3 px-4">
                  <div className="font-medium text-gray-700 mb-1">Type</div>
                  <div>{selectedExperience.type}</div>
                </div>
                <div className="w-1/3 pl-4">
                  <div className="font-medium text-gray-700 mb-1">Location</div>
                  <div>{selectedExperience.location}</div>
                </div>
              </div>
              
              <p className="mb-4">
                This is where the details for the {selectedExperience.name} opportunity would be displayed.
                Students can learn about how to apply their knowledge in real-world settings.
              </p>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h5 className="font-medium mb-2">What You'll Learn</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Practical Application of Knowledge
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Professional Skills Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Industry Connections
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">•</span>
                    Real-world Problem Solving
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Apply for This Opportunity
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalPlatform;