/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Layers, 
  Settings,
  CheckCircle2,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tools: string[];
  year: string;
  category: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Biodegradable Polymer Research (PBAT & PLA)",
    description: "Advanced research on PBAT and PLA chemicals to enhance durability and mechanical strength of biodegradable materials. Developed a solution that replaces inefficient paper bags and harmful plastics with high-efficiency, eco-friendly alternatives.",
    tools: ["Material Science", "Chemical Research", "Sustainability"],
    year: "2024-2025",
    category: "Research & Development"
  },
  {
    title: "Multi-Purpose Sieving Machine",
    description: "Designed and fabricated a flexible sieving machine with interchangeable meshes for various industrial operations. Features a high-speed motor and circular disc mechanism for efficient material separation.",
    tools: ["AutoCAD", "Fabrication", "Mechanical Design"],
    year: "2022",
    category: "Mechanical Design"
  }
];

const EXPERIENCE: Experience[] = [
  {
    role: "Graduate Engineering Trainee (GET) - Quality Assurance",
    company: "Current Organization",
    period: "2024 - Present (1 Year)",
    description: [
      "Specializing in Quality Assurance (QA) processes and standards.",
      "Implementing rigorous quality control protocols to ensure product excellence.",
      "Collaborating with cross-functional teams to optimize manufacturing efficiency.",
      "Analyzing production data to identify and resolve quality bottlenecks."
    ]
  },
  {
    role: "Industrial Intern",
    company: "RINL Steel Plant",
    period: "6 Months (2019)",
    description: [
      "Gained hands-on experience with industrial drilling machines and manufacturing processes.",
      "Assisted in maintenance and operation of heavy machinery in a steel plant environment."
    ]
  },
  {
    role: "AEP Intern (Heat Exchangers)",
    company: "AEP",
    period: "1 Month (2024)",
    description: [
      "Designed and drafted critical components: Baffle Plates, Dish Ends, Nozzles, and Saddle Supports.",
      "Utilized CAD software for precise engineering documentation."
    ]
  },
  {
    role: "Drone Technologies Intern",
    company: "AU-ICDT, Andhra University",
    period: "1 Month (2024)",
    description: [
      "Explored cutting-edge aerial technologies and drone assembly.",
      "Gained practical insights into flight dynamics and drone applications."
    ]
  }
];

const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Mechanical Engineering",
    institution: "Vignan Institute of Information Technology, Visakhapatnam",
    period: "2022 - 2025",
    score: "8.5 / 10 CGPA"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "DR.B.R.A.G.M.R. Polytechnic, Rajahmundry",
    period: "2019 - 2022",
    score: "82.4%"
  },
  {
    degree: "Matriculation",
    institution: "Master Mind’s English Medium High School, Visakhapatnam",
    period: "2018 - 2019",
    score: "9.7 / 10 CGPA"
  }
];

const SKILLS = {
  technical: ["AutoCAD", "CATIA", "HTML Basics", "Quality Assurance", "Advanced Machining", "Material Science"],
  soft: ["Project Management", "Teamwork", "Leadership", "Time Management", "Effective Communication"]
};

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 font-medium uppercase tracking-widest text-xs"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-emerald-500 mt-4 rounded-full"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-slate-900"
        >
          VK<span className="text-emerald-500">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-slate-900 text-white px-5 py-3 rounded-xl text-center font-medium">
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              >
                Mechanical Engineer & QA Specialist
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Thokada <br />
                <span className="text-emerald-600">Vamsi Krishna</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Graduate Engineering Trainee with a passion for sustainable mechanical solutions, 
                quality assurance, and innovative material research.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-200">
                  Get in Touch <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://www.linkedin.com/in/vamsi-krishna-thokada-346650296/" target="_blank" rel="noreferrer" className="p-3 text-slate-400 hover:text-emerald-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:vamsikrishnavamsi2003@gmail.com" className="p-3 text-slate-400 hover:text-emerald-600 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Cpu className="text-emerald-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Engineering Excellence</h3>
                    <p className="text-slate-500 text-sm">Design • Quality • Innovation</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white shadow-lg rounded-2xl p-4 border border-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Settings size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Experience</p>
                      <p className="text-sm font-bold text-slate-900">1 Year GET</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 bg-white shadow-lg rounded-2xl p-4 border border-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">CGPA</p>
                      <p className="text-sm font-bold text-slate-900">8.5 / 10</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading subtitle="Who I Am">About Me</SectionHeading>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                I am a highly motivated Mechanical Engineering graduate with a strong foundation in design, manufacturing, and automation. Currently serving as a Graduate Engineering Trainee in Quality Assurance, I bridge the gap between theoretical engineering and practical industrial excellence.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                My career objective is to apply my technical skills to contribute to innovative projects that support efficient and sustainable engineering solutions. I believe in "Smart Work" and the power of effective collaboration.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {SKILLS.technical.slice(0, 4).map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-slate-100 rounded-3xl overflow-hidden">
                    <img src="https://picsum.photos/seed/mech1/600/600" alt="Mechanical" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-64 bg-emerald-500 rounded-3xl flex items-center justify-center p-8 text-white">
                    <div>
                      <p className="text-4xl font-bold mb-2">1+</p>
                      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Year Experience</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 bg-slate-900 rounded-3xl flex items-center justify-center p-8 text-white">
                    <div>
                      <p className="text-4xl font-bold mb-2">2</p>
                      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Major Projects</p>
                    </div>
                  </div>
                  <div className="h-48 bg-slate-100 rounded-3xl overflow-hidden">
                    <img src="https://picsum.photos/seed/mech2/600/600" alt="Engineering" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="My Journey">Work Experience</SectionHeading>
          
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-emerald-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-xl text-slate-500 font-bold text-sm">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What I've Built">Featured Projects</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-[40px] p-10 border border-slate-100 hover:bg-slate-900 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-white/10 transition-colors">
                    {idx === 0 ? <Layers className="text-emerald-600 group-hover:text-emerald-400" size={32} /> : <Settings className="text-emerald-600 group-hover:text-emerald-400" size={32} />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-8 leading-relaxed transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 group-hover:bg-white/5 group-hover:border-white/10 group-hover:text-emerald-400 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Bento */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Expertise">Skills & Tools</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Cpu size={20} className="text-emerald-500" /> Technical Proficiency
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {SKILLS.technical.map((skill) => (
                  <div key={skill} className="group">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">Skill</p>
                    <p className="text-slate-900 font-bold group-hover:text-emerald-600 transition-colors">{skill}</p>
                    <div className="h-1 bg-slate-100 mt-3 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-600 rounded-3xl p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="space-y-4">
                  {SKILLS.soft.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm font-medium opacity-80 italic">"Engineering is not only about machines, but about the people who build them."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="Academic History">Education</SectionHeading>
              <div className="space-y-12">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{edu.period}</p>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 font-medium mb-3">{edu.institution}</p>
                    <div className="inline-block px-3 py-1 bg-slate-50 rounded-lg text-slate-700 font-bold text-sm">
                      {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionHeading subtitle="Recognition">Awards & Certs</SectionHeading>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">2nd Prize - Vista 2k23</h4>
                    <p className="text-sm text-slate-500">National-Level Technical Competition (Technical Quiz)</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">NPTEL Certification</h4>
                    <p className="text-sm text-slate-500">Advanced Machining Processes (Score: 68.82/100)</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Lead Departmental Fest</h4>
                    <p className="text-sm text-slate-500">Coordinated college events with faculty and external vendors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-emerald-400">great together.</span></h2>
            <p className="text-slate-400 text-lg">
              I'm always open to discussing innovative engineering projects or opportunities in mechanical design and quality assurance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <Mail size={28} />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Email Me</p>
              <a href="mailto:vamsikrishnavamsi2003@gmail.com" className="text-lg font-bold hover:text-emerald-400 transition-colors">vamsikrishnavamsi2003@gmail.com</a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <Phone size={28} />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Call Me</p>
              <a href="tel:7995357662" className="text-lg font-bold hover:text-emerald-400 transition-colors">+91 7995357662</a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Location</p>
              <p className="text-lg font-bold">Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Thokada Vamsi Krishna. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/vamsi-krishna-thokada-346650296/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
