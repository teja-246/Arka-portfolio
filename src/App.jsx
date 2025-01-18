import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
        Portfolio
      </Link>
      <div className="space-x-6">
        <Link to="/papers" className="text-gray-300 hover:text-white">Papers</Link>
        <Link to="/blogs" className="text-gray-300 hover:text-white">Blogs</Link>
        <Link to="/cv" className="text-gray-300 hover:text-white">CV</Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="min-h-screen bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <img 
            src="/api/placeholder/300/300"
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Name</h1>
            <p className="text-gray-400 text-xl">Your Title/Role</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <div className="space-y-2">
              <p className="text-gray-300">University Name</p>
              <p className="text-gray-400">Degree • Year - Year</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <div className="space-y-2">
              <p className="text-gray-300">Email: your.email@example.com</p>
              <p className="text-gray-300">Location: City, Country</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Papers = () => (
  <div className="min-h-screen bg-gray-800 text-white p-8">
    <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
    <div className="space-y-6">
      <p className="text-gray-400">Add your papers here</p>
    </div>
  </div>
);

const Blogs = () => (
  <div className="min-h-screen bg-gray-800 text-white p-8">
    <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
    <div className="space-y-6">
      <p className="text-gray-400">Add your blog posts here</p>
    </div>
  </div>
);

const CV = () => (
  <div className="min-h-screen bg-gray-800 text-white p-8">
    <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
    <div className="space-y-6">
      <p className="text-gray-400">Add your CV details here</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;