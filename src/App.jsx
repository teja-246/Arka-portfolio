import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, FileText, BookOpen, FileCode2, Github, Linkedin, Twitter, Network, Cpu, Eye, MessageSquare } from 'lucide-react';

// Neural Network Background Animation Component
const NeuralNetworkBg = () => (
  <div className="fixed inset-0 z-0 opacity-20">
    <div className="absolute inset-0 grid grid-cols-6 gap-4 p-8">
      {Array(24).fill(0).map((_, i) => (
        <div key={i} className="relative">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse" 
               style={{ 
                 animationDelay: `${i * 0.2}s`,
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`
               }}
          />
          <div className="absolute w-2 h-2 bg-teal-500 rounded-full animate-ping"
               style={{ 
                 animationDelay: `${i * 0.3}s`,
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`
               }}
          />
        </div>
      ))}
    </div>
  </div>
);

const Navbar = () => (
  <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 flex items-center gap-2">
        <Brain className="w-14 h-14 text-teal-500 animate-pulse" />
        <span className="bg-gradient-to-r text-4xl from-blue-500 to-teal-500 bg-clip-text text-transparent">AD</span>
      </Link>
      <div className="space-x-8">
        <Link to="/papers" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <FileText className="w-7 h-7" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">PAPERS</span>
        </Link>
        <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <BookOpen className="w-7 h-7" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">BLOGS</span>
        </Link>
        <Link to="/cv" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
          <FileCode2 className="w-7 h-7" />
          <span className="relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all after:duration-300 group-hover:after:w-full">CV</span>
        </Link>
      </div>
    </div>
  </nav>
);

const ResearchCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/40 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 group hover:bg-gray-800/60 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div className="relative min-h-screen bg-gray-900 overflow-hidden">
    <NeuralNetworkBg />
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-3xl group-hover:bg-blue-600/30 transition-colors duration-500"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQG-cBKzBoC8HA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701497442940?e=1742428800&v=beta&t=NR3f8xIqePpGDls5Q5HHmCwJ0ET-pAobj2mcAhJXZtc"
              alt="Profile"
              className="relative rounded-2xl w-64 h-64 object-cover mx-auto md:mx-0 shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-7xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
              Arkapravo Dey
            </h1>
            <p className="text-xl text-gray-400">Undergraduate Student Researcher</p>
          </div>
          
          <div className="space-y-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <div className="space-y-2">
              <p className="text-lg text-white">National Institute of Technology, Rourkela</p>
              <p className="text-gray-400">Electronics and Communication • 2023 - 2027</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResearchCard 
              icon={Network}
              title="Machine Learning"
              description="Deep neural networks and advanced ML algorithms"
            />
            <ResearchCard 
              icon={Cpu}
              title="Deep Learning"
              description="CNN, RNN, and transformer architectures"
            />
            <ResearchCard 
              icon={Eye}
              title="Computer Vision"
              description="Object detection and image segmentation"
            />
            <ResearchCard 
              icon={MessageSquare}
              title="NLP"
              description="Natural language understanding and generation"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <div className="space-y-2 text-gray-400">
              <p>arka2005dey@gmail.com</p>
              <p>Rourkela, Odisha</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/arkapravo-dey" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/arkapravo-dey-0299532a2/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Papers = () => (
  <div className="relative min-h-screen bg-gray-900 p-8">
    <NeuralNetworkBg />
    <div className="container mx-auto max-w-4xl relative z-10">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Research Papers</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
          <p className="text-lg text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
);

const Blogs = () => (
  <div className="relative min-h-screen bg-gray-900 p-8">
    <NeuralNetworkBg />
    <div className="container mx-auto max-w-4xl relative z-10">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Blog Posts</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
          <p className="text-lg text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
);

const CV = () => (
  <div className="relative min-h-screen bg-gray-900 p-8">
    <NeuralNetworkBg />
    <div className="container mx-auto max-w-4xl relative z-10">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Curriculum Vitae</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
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