import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';


const EducationalPlatform = () => {
  // Cart state
  const [cart, setCart] = useState([]);
  const { user, setIsAuthenticated } = useAuth();

  // Navigation and selection state
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeSection, setActiveSection] = useState('country');

  // Handlers
  const handleAddToCart = (item) => setCart(prev => [...prev, item]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedCurriculum(null);
    setSelectedDegree(null);
    setSelectedTopic(null);
    setSelectedExperience(null);
    setActiveSection('country');
  };
  const handleCurriculumSelect = (curriculum) => setSelectedCurriculum(curriculum);
  const handleDegreeSelect = (degree) => {
    setSelectedDegree(degree);
    setSelectedTopic(null);
    setSelectedCountry(null);
    setSelectedCurriculum(null);
    setSelectedExperience(null);
    setActiveSection('university');
  };
  const handleTopicSelect = (topic) => setSelectedTopic(topic);
  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
    setSelectedCountry(null);
    setSelectedCurriculum(null);
    setSelectedDegree(null);
    setSelectedTopic(null);
    setActiveSection('experience');
  };

  // Data
  const countries = [
    { id: 'A', name: 'Canada', curriculums: [
        { id: 'AA', name: 'Alberta' },
        { id: 'AB', name: 'British Columbia' },
        { id: 'AC', name: 'Manitoba' },
        { id: 'AD', name: 'New Brunswick' },
        { id: 'AE', name: 'Newfoundland & Labrador' },
        { id: 'AF', name: 'Nova Scotia' },
        { id: 'AG', name: 'Ontario' },
        { id: 'AH', name: 'Prince Edward Island' },
        { id: 'AI', name: 'Quebec' },
        { id: 'AJ', name: 'Saskatchewan' }
      ]
    },
    { id: 'B', name: 'United Kingdom', curriculums: [
        { id: 'BA', name: 'Curriculum BA' },
        { id: 'BB', name: 'Curriculum BB' }
      ]
    },
    { id: 'C', name: 'Country C', curriculums: [
        { id: 'CA', name: 'Curriculum CA' },
        { id: 'CB', name: 'Curriculum CB' }
      ]
    },
    { id: 'D', name: 'Country D', curriculums: [
        { id: 'DA', name: 'Curriculum DA' },
        { id: 'DB', name: 'Curriculum DB' }
      ]
    },
    { id: 'E', name: 'Country E', curriculums: [
        { id: 'EA', name: 'Curriculum EA' },
        { id: 'EB', name: 'Curriculum EB' }
      ]
    }
  ];

  const universityDegrees = [
    { id: 'CS', name: 'Computer Science', topics: [
        { id: 'CS-A', name: 'Algorithms' },
        { id: 'CS-B', name: 'Database Systems' }
      ]
    },
    { id: 'BUS', name: 'Business Administration', topics: [
        { id: 'BUS-A', name: 'Marketing' },
        { id: 'BUS-B', name: 'Finance' }
      ]
    },
    { id: 'ENG', name: 'Engineering', topics: [
        { id: 'ENG-A', name: 'Mechanical Engineering' },
        { id: 'ENG-B', name: 'Electrical Engineering' }
      ]
    },
    { id: 'MED', name: 'Medical Sciences', topics: [
        { id: 'MED-A', name: 'Anatomy' },
        { id: 'MED-B', name: 'Physiology' }
      ]
    },
    { id: 'HUM', name: 'Humanities', topics: [
        { id: 'HUM-A', name: 'Philosophy' },
        { id: 'HUM-B', name: 'Literature' }
      ]
    }
  ];
  
  const experienceOpportunities = [
    { id: 'EXP1', name: 'Tech Startup Internship', field: 'Computer Science', type: 'Internship', location: 'Remote' },
    { id: 'EXP2', name: 'Community Health Volunteer', field: 'Medical Sciences', type: 'Volunteer', location: 'Various' },
    { id: 'EXP3', name: 'Marketing Agency Assistant', field: 'Business Administration', type: 'Internship', location: 'Hybrid' },
    { id: 'EXP4', name: 'Engineering Research Project', field: 'Engineering', type: 'Research', location: 'On-site' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">Educational Platform</h1>
          {user && (
            <p className="text-sm mt-1">
              Logged in as <span className="font-semibold">{user.first_name || user.email}</span>
            </p>
          )}
        </div>

        <nav className="p-2">
          <div className="mt-6">
          <Link
            to="/profile"
            className="block w-full text-left px-3 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 font-medium"
          >
            👤 View Profile
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsAuthenticated(false);
              window.location.href = "/login";
            }}
            className="mt-2 w-full px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium"
          >
            🔓 Logout
          </button>
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Navigation</h2>
          <div className="flex flex-wrap mb-4">
            <button onClick={() => setActiveSection('country')} className={`px-3 py-2 ${activeSection === 'country' ? 'bg-blue-100 text-blue-600 font-medium' : 'hover:bg-gray-100'}`}>Countries</button>
            <button onClick={() => setActiveSection('university')} className={`px-3 py-2 ${activeSection === 'university' ? 'bg-purple-100 text-purple-600 font-medium' : 'hover:bg-gray-100'}`}>University</button>
            <button onClick={() => setActiveSection('experience')} className={`px-3 py-2 ${activeSection === 'experience' ? 'bg-green-100 text-green-600 font-medium' : 'hover:bg-gray-100'}`}>Experience Hub</button>
          </div>

          {activeSection === 'country' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">Countries</h2>
              <ul>
                {countries.map(country => (
                  <li key={country.id} className="mb-1">
                    <button onClick={() => handleCountrySelect(country)} className={`w-full text-left px-3 py-2 rounded ${selectedCountry?.id === country.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>{country.name}</button>
                    {selectedCountry?.id === country.id && (
                      <ul className="ml-4 mt-1">
                        {country.curriculums.map(curr => (
                          <li key={curr.id} className="flex items-center justify-between mb-1">
                            <button onClick={() => handleCurriculumSelect(curr)} className={`w-full text-left px-3 py-1 rounded ${selectedCurriculum?.id === curr.id ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50'}`}>{curr.name}</button>
                            <button onClick={() => handleAddToCart(curr)} className="ml-2 text-green-600 hover:text-green-800 text-sm">+ Cart</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === 'university' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">University Degrees</h2>
              <ul>
                {universityDegrees.map(deg => (
                  <li key={deg.id} className="mb-1">
                    <button onClick={() => handleDegreeSelect(deg)} className={`w-full text-left px-3 py-2 rounded ${selectedDegree?.id === deg.id ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'}`}>{deg.name}</button>
                    {selectedDegree?.id === deg.id && (
                      <ul className="ml-4 mt-1">
                        {deg.topics.map(topic => (
                          <li key={topic.id} className="mb-1">
                            <button onClick={() => handleTopicSelect(topic)} className={`w-full text-left px-3 py-1 rounded ${selectedTopic?.id === topic.id ? 'bg-purple-50 text-purple-600 font-medium' : 'hover:bg-gray-50'}`}>{topic.name}</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-700">Opportunities</h2>
              <ul>
                {experienceOpportunities.map(exp => (
                  <li key={exp.id} className="mb-1">
                    <button onClick={() => handleExperienceSelect(exp)} className={`w-full text-left px-3 py-2 rounded ${selectedExperience?.id === exp.id ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'}`}>{exp.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Main content and cart */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Default view */}
        {!selectedCountry && !selectedDegree && !selectedExperience && (
          <div className="flex flex-col items-center justify-center h-full text-gray-600">
            <h2 className="text-2xl mb-4">Welcome to the Educational Platform</h2>
            <p>Select a section from the sidebar to begin.</p>
          </div>
        )}

        {/* Country curricula grid */}
        {selectedCountry && !selectedCurriculum && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedCountry.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCountry.curriculums.map(curr => (
                <div key={curr.id} className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-lg font-medium mb-2">{curr.name}</h3>
                  <div className="flex space-x-2">
                    <button onClick={() => handleCurriculumSelect(curr)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Explore</button>
                    <button onClick={() => handleAddToCart(curr)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curriculum detail */}
        {selectedCountry && selectedCurriculum && (
          <div>
            <h2 className="text-2xl font-bold">{selectedCurriculum.name}</h2>
            <p>This is where curriculum content would go.</p>
          </div>
        )}

        {/* University topics */}
        {selectedDegree && !selectedTopic && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedDegree.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedDegree.topics.map(topic => (
                <div key={topic.id} className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-lg font-medium mb-2">{topic.name}</h3>
                  <button onClick={() => handleTopicSelect(topic)} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Explore</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topic detail */}
        {selectedDegree && selectedTopic && (
          <div>
            <h2 className="text-2xl font-bold">{selectedTopic.name}</h2>
            <p>This is where topic content would go.</p>
          </div>
        )}

        {/* Experience detail */}
        {selectedExperience && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedExperience.name}</h2>
            <p>Field: {selectedExperience.field}</p>
            <p>Type: {selectedExperience.type}</p>
            <p>Location: {selectedExperience.location}</p>
          </div>
        )}

        {/* Cart summary */}
        <div className="mt-8 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
          {cart.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {cart.map((item, idx) => (<li key={idx}>{item.name}</li>))}
            </ul>
          ) : (
            <p className="text-gray-600">(Your cart is empty)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationalPlatform;
