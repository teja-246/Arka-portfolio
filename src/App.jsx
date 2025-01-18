import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, FileText, BookOpen, FileCode2, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 flex items-center gap-2">
        <Brain className="w-16 h-16 text-teal-500" />
        <span className="bg-gradient-to-r text-4xl from-blue-500 to-teal-500 bg-clip-text text-transparent">AD</span>
      </Link>
      <div className="space-x-8">
        <Link to="/papers" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <FileText className="w-4 h-4" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">PAPERS</span>
        </Link>
        <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <BookOpen className="w-4 h-4" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">BLOGS</span>
        </Link>
        <Link to="/cv" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <FileCode2 className="w-4 h-4" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">CV</span>
        </Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="min-h-screen bg-gray-900 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px]">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400"
              alt="Profile"
              className="rounded-2xl w-64 h-64 object-cover mx-auto md:mx-0 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-teal-500/20"></div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Arkapravo Dey</h1>
            <p className="text-xl text-gray-400">Undergraduate Student Researcher</p>
          </div>
          
          <div className="space-y-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <div className="space-y-2">
              <p className="text-lg text-white">National Institute of Technology, Rourkela</p>
              <p className="text-gray-400">Electronics and Communication Engineering• 2023 - 2027</p>
            </div>
          </div>
          
          <div className="space-y-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white">Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-100 rounded-full text-sm">Deep Learning</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm">Computer Vision</span>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-100 rounded-full text-sm">Natural Language Processing</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <div className="space-y-2 text-gray-400">
              <p>arka2005dey@gmail.com</p>
              <p>Rourkela, Odisha</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Papers = () => (
  <div className="min-h-screen bg-gray-900 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] p-8">
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Research Papers</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
          <p className="text-lg text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
);

const Blogs = () => (
  <div className="min-h-screen bg-gray-900 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] p-8">
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Blog Posts</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
          <p className="text-lg text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
);

const CV = () => (
  <div className="min-h-screen bg-gray-900 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px] p-8">
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Curriculum Vitae</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
          <p className="text-lg text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
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