import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  X,
  ArrowUp,
  MapPin,
  Phone
} from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handle cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = [
    { name: 'HTML', icon: '🌐', level: 90, orbit: 1 },
    { name: 'CSS', icon: '🎨', level: 85, orbit: 1 },
    { name: 'JavaScript', icon: '⚡', level: 88, orbit: 2 },
    { name: 'React', icon: '⚛️', level: 85, orbit: 2 },
    { name: 'Node.js', icon: '🚀', level: 80, orbit: 3 },
    { name: 'Express', icon: '🔧', level: 78, orbit: 3 },
    { name: 'Java', icon: '☕', level: 75, orbit: 4 },
    { name: 'Python', icon: '🐍', level: 82, orbit: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      fullDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard. Implemented responsive design with React and Tailwind CSS, REST API with Express.js, and MongoDB for data storage.',
      image: 'https://devtorium.com/wp-content/webp-express/webp-images/uploads/2021/08/blog_internal-image_-_10_Best_eCommerce_Platforms-5.png.webp',
      tech: ['React', 'Node.js', 'MongoDB', 'express', 'Tailwind CSS'],
      demo: '#',
      github: '#'
    },

    {
      id: 2,
      title: 'Employee Management System',
      description: 'A collaborative task management application with real-time updates',
      fullDescription: 'Developed a real-time task management application using React and Socket.io. Features include project creation, task assignment, progress tracking, team collaboration, and notifications. Implemented drag-and-drop functionality and integrated with third-party APIs.',
      image: 'https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp',
      tech: ['React', , 'Express', 'tailwind CSS',],
      demo: '#',
      github: '#'
    },

    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      fullDescription: 'Created a modern weather dashboard that provides current weather conditions and 7-day forecasts. Features location detection, weather maps, historical data visualization, and severe weather alerts. Built with React and integrated with OpenWeatherMap API.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png',
      tech: ['html', 'API Integration', 'Css', 'JavaScript'],
      demo: '#',
      github: '#'
    },

    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with animations',
      fullDescription: 'Designed and developed a personal portfolio website showcasing projects and skills. Features smooth animations, responsive design, contact form integration, and optimized performance. Built with modern web technologies and best practices.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd8r_wImVXYsPCr20z52MbV1OGUPuj7RRrQ&s',
      tech: ['typescript', 'Tailwind CSS', 'Framer Motion'],
      demo: '#',
      github: '#'
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 animate-scale-in">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.fullDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 hover:scale-105 transition-transform duration-300 neon-border">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Preview
            </Button>
            <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-300">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Generate binary rain effect
  const generateBinaryRain = () => {
    const columns = [];
    for (let i = 0; i < 20; i++) {
      const binaryString = Array.from({ length: 30 }, () => Math.random() > 0.5 ? '1' : '0').join('\n');
      columns.push(
        <div
          key={i}
          className="binary-column"
          style={{
            left: `${i * 5}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {binaryString}
        </div>
      );
    }
    return columns;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold gradient-text">Aryan's Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => smoothScroll(item.toLowerCase())}
                  className="nav-link text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="hover:scale-105 transition-transform duration-300 hidden sm:flex">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Technical Grid */}
          <div className="tech-grid"></div>

          {/* Binary Rain */}
          <div className="binary-rain">
            {generateBinaryRain()}
          </div>

          {/* Floating Code Snippets */}
          <div className="code-snippet code-1">
            const magic = () = {'{'}
            <br />
            &nbsp;&nbsp;return "✨";
            <br />
            {'}'};
          </div>
          <div className="code-snippet code-2">
            function build() {'{'}
            <br />
            &nbsp;&nbsp;dreams.map(idea =
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;reality(idea)
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
          </div>
          <div className="code-snippet code-3">
            if (coffee) {'{'}
            <br />
            &nbsp;&nbsp;code();
            <br />
            {'}'} else {'{'}
            <br />
            &nbsp;&nbsp;sleep();
            <br />
            {'}'}
          </div>
          <div className="code-snippet code-4">
            while (learning) {'{'}
            <br />
            &nbsp;&nbsp;skills++;
            <br />    
            &nbsp;&nbsp;passion.grow();
            <br />
            {'}'}
          </div>

          {/* Existing floating shapes */}
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Aryan Kumar</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              I create beautiful, responsive web applications using modern technologies.
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="neon-border fixed-button"
                onClick={() => smoothScroll('projects')}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="fixed-button"
                onClick={() => smoothScroll('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden hover:scale-110 transition-transform duration-500 neon-border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full stack developer with over 3 years of experience creating
                digital solutions that make a difference. I specialize in modern web technologies
                and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            <div className="space-y-4">
              <div className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
                <p className="text-muted-foreground">Btech </p>
                <p className="text-sm text-muted-foreground">JC Bose University</p>
              </div>
              <div className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">💼 Experience</h3>
                <p className="text-muted-foreground">2+ Years in Web Development</p>
                <p className="text-sm text-muted-foreground">Frontend & Backend Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Solar System */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
          <div className="solar-system-container">
            {/* Sun (Center) */}
            <div className="sun">
              <div className="sun-content">
                <span className="text-lg font-bold">Skills</span>
              </div>
            </div>

            {/* Orbits and Planets */}
            {[1, 2, 3, 4].map((orbitNum) => (
              <div key={orbitNum} className={`orbit orbit-${orbitNum}`}>
                {skills.filter(skill => skill.orbit === orbitNum).map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`planet planet-${orbitNum}-${index + 1}`}
                    title={skill.name}
                  >
                    <div className="planet-content">
                      <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                      <span className="planet-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="project-card cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Click to view details</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's work together!</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in new opportunities and exciting projects.
                  Feel free to reach out if you'd like to collaborate!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>aryan.nda.2163@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 8510882886</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Faridabad , Haryana</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <form
              className="space-y-6"
              action="https://formsubmit.co/aryan.nda.2163@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button className="w-full hover:scale-105 transition-transform duration-300 neon-border" type="submit">
                Send Message
              </Button>
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Aryan Kumar</h3>
              <p className="text-muted-foreground max-w-md">
                Full Stack Developer passionate about creating innovative web solutions that make a difference in people's lives.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform bg-primary/10 p-2 rounded-full hover:bg-primary/20">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform bg-primary/10 p-2 rounded-full hover:bg-primary/20">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform bg-primary/10 p-2 rounded-full hover:bg-primary/20">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="flex flex-col space-y-3">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => smoothScroll(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-left hover:translate-x-2 transform duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'JavaScript', 'Java', 'Express'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2024 John Doe. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-30"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Index;
