// ===========================
// REACT PORTFOLIO COMPONENTS
// Installation: npm install react-icons
// ===========================

import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Portfolio.css';

// Navigation Component
function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">NC</div>
                <ul className="nav-menu" style={{ display: isOpen ? 'flex' : 'flex' }}>
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

// Hero Section Component
function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Narsimha Chellaboina</h1>
                    <p className="hero-subtitle">Full Stack Software Engineer</p>
                    <p className="hero-tagline">Python • Cloud • Data Streaming • Backend Systems</p>
                    <p className="hero-description">Building scalable, impact-driven backend systems that solve real-world problems</p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Let's Work Together</a>
                        <a href="#about" className="btn btn-secondary">Learn More</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-card card-1">
                        <i className="fas fa-server"></i>
                        <p>Scalable Systems</p>
                    </div>
                    <div className="floating-card card-2">
                        <i className="fas fa-cloud"></i>
                        <p>Cloud Native</p>
                    </div>
                    <div className="floating-card card-3">
                        <i className="fas fa-code"></i>
                        <p>Clean Code</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// About Section Component
function AboutSection() {
    const highlights = [
        {
            icon: 'lightbulb',
            title: 'Problem Solver',
            description: 'Break down complex systems, identify bottlenecks, and implement solutions with 25-75% improvements'
        },
        {
            icon: 'hands',
            title: 'Ownership Mentality',
            description: 'End-to-end responsibility from architecture to deployment to 24x7 monitoring'
        },
        {
            icon: 'chart-line',
            title: 'Impact Focused',
            description: 'Every line of code measured by real-world impact: speed, reliability, and cost savings'
        },
        {
            icon: 'book',
            title: 'Continuous Learner',
            description: 'Stay ahead with AWS, Azure, Kubernetes, and emerging technologies'
        }
    ];

    const stats = [
        { number: '2.7+', label: 'Years Experience' },
        { number: '50+', label: 'Production Issues Resolved' },
        { number: '75%', label: 'Max Cost Reduction' },
        { number: '99.95%', label: 'Uptime Maintained' }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a dedicated Full Stack Software Engineer who transforms complex technical challenges into elegant, scalable solutions. My expertise lies in building high-performance backend systems, optimizing data pipelines, and leveraging cloud platforms to drive real business value.
                        </p>
                        <div className="about-highlights">
                            {highlights.map((item, index) => (
                                <div key={index} className="highlight">
                                    <i className={`fas fa-${item.icon}`}></i>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Skills Section Component
function SkillsSection() {
    const skillCategories = [
        {
            title: 'Languages & CS',
            icon: 'code',
            skills: ['Python', 'JavaScript', 'Data Structures', 'Algorithms']
        },
        {
            title: 'Web Frameworks',
            icon: 'cube',
            skills: ['Django', 'FastAPI', 'Flask', 'React']
        },
        {
            title: 'Databases',
            icon: 'database',
            skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
        },
        {
            title: 'Cloud Platforms',
            icon: 'cloud',
            skills: ['AWS (EC2, S3, Lambda, ECS, EKS)', 'Azure (Functions, App Service)', 'Docker', 'Kubernetes']
        },
        {
            title: 'Data & Streaming',
            icon: 'stream',
            skills: ['Kafka', 'ETL Pipelines', 'Pandas', 'Data Processing']
        },
        {
            title: 'Observability',
            icon: 'eye',
            skills: ['Prometheus', 'Grafana', 'Loki', 'CloudWatch']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3><i className={`fas fa-${category.icon}`}></i> {category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Experience Component
function ExperienceSection() {
    const experiences = [
        {
            company: 'ATD Master Project — American Tire Distributors',
            role: 'Software Engineer',
            period: 'Nov 2022 – Present',
            location: 'Hyderabad, TS',
            metrics: ['30% faster incident detection', '99.95% uptime', '75% cost savings', '45% faster recovery'],
            achievements: [
                'Developed 2 reusable Python templates for Kafka-to-Kafka and Kafka-to-Mongo pipelines',
                'Integrated Prometheus metrics into 10+ pipelines, improving observability by 30%',
                'Resolved 50+ production incidents, reducing recovery time by 45%',
                'Led migration of 20+ workflows from SCDF to Python, cutting costs by 75%'
            ],
            techStack: 'Python • Kafka • MongoDB • Prometheus • Grafana • Loki'
        },
        {
            company: 'AI Translation HUB — Stanley Black & Decker',
            role: 'Software Engineer',
            period: '',
            location: 'Hyderabad, TS',
            metrics: ['30% efficiency gain', '40% faster deployments', '25% faster data retrieval', '10+ business units'],
            achievements: [
                'Implemented Azure AI Document Translator REST API for 10+ business units',
                'Automated document workflows with Azure Functions, improving efficiency by 30%',
                'Designed microservices architecture, reducing deployment downtime by 40%',
                'Resolved 30+ high-priority issues monthly using Azure Application Insights'
            ],
            techStack: 'Python • Django REST Framework • Azure • Microservices'
        },
        {
            company: 'Client Requisition Tracker — Mouri Tech',
            role: 'Software Engineer',
            period: '',
            location: 'Hyderabad, TS',
            metrics: ['60% fewer errors', '70% faster deployments', '5+ departments', 'Weekly releases'],
            achievements: [
                'Built email thread API using exchangelib for Outlook integration',
                'Created Data Filter API to track project and employee statuses',
                'Implemented Pydantic validation, reducing runtime errors by 60%',
                'Architected CI/CD pipeline using GitHub Actions, Docker, and AWS ECS'
            ],
            techStack: 'Python • FastAPI • AWS (ECS, ECR) • React • CI/CD'
        },
        {
            company: 'Solix Data Archiving — Stanley Black & Decker',
            role: 'Python Developer',
            period: '',
            location: 'Hyderabad, TS',
            metrics: ['75% less downtime', '200K+ records', '100% data integrity', '25% faster queries'],
            achievements: [
                'Migrated 200K+ records from SQL Server to MySQL using pyodbc',
                'Restructured database schemas for compatibility with 100% data integrity',
                'Leveraged Solix Tool for analysis, improving query performance by 25%'
            ],
            techStack: 'Python • MSSQL • MySQL • AWS • Data Migration'
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>{exp.company}</h3>
                                <p className="role">{exp.role} {exp.period && `| ${exp.period}`}</p>
                                <p className="company">{exp.location}</p>
                                <div className="impact-metrics">
                                    {exp.metrics.map((metric, idx) => (
                                        <span key={idx} className="metric">{metric}</span>
                                    ))}
                                </div>
                                <ul className="achievements">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                                <p className="tech-stack"><strong>Tech Stack:</strong> {exp.techStack}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Projects Component
function ProjectsSection() {
    const projects = [
        {
            icon: 'stream',
            title: 'Kafka Stream Processing Standardization',
            problem: 'Multiple inconsistent Kafka pipelines, difficult to maintain',
            solution: '2 reusable Python templates for Kafka-to-Kafka and Kafka-to-Mongo',
            impact: '75% cost savings, standardized architecture, faster scaling',
            tech: ['Python', 'Kafka', 'MongoDB']
        },
        {
            icon: 'eye',
            title: 'Observability Infrastructure',
            problem: 'Limited pipeline visibility, slow incident detection',
            solution: 'Prometheus, Grafana, and Loki integration across 10+ pipelines',
            impact: '30% faster detection, 45% shorter recovery, 99.95% uptime',
            tech: ['Prometheus', 'Grafana', 'Loki']
        },
        {
            icon: 'arrow-right',
            title: 'SCDF to Python Migration',
            problem: 'High infrastructure costs with SCDF',
            solution: 'Migrated 20+ workflows to Python-based pipelines',
            impact: '75% cost reduction, improved maintainability',
            tech: ['Python', 'Kafka', 'Docker', 'Kubernetes']
        },
        {
            icon: 'globe',
            title: 'Azure AI Translation Service',
            problem: 'Global teams unable to collaborate across languages',
            solution: 'Microservices with Azure AI Document Translator',
            impact: '10+ business units, 30% efficiency gain, 40% faster deploys',
            tech: ['Python', 'Azure', 'Microservices']
        },
        {
            icon: 'cogs',
            title: 'Automated Document Management',
            problem: 'Manual document processing bottlenecks',
            solution: 'Serverless Azure Function App automation',
            impact: '30% operational efficiency improvement',
            tech: ['Azure Functions', 'Python', 'REST APIs']
        },
        {
            icon: 'database',
            title: 'Data Migration Pipeline',
            problem: '200K+ records migration with minimal downtime',
            solution: 'SQL Server to MySQL migration with schema restructuring',
            impact: '75% downtime reduction, 100% data integrity',
            tech: ['Python', 'MSSQL', 'MySQL']
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-icon"><i className={`fas fa-${project.icon}`}></i></div>
                            <h3>{project.title}</h3>
                            <p className="project-problem"><strong>Problem:</strong> {project.problem}</p>
                            <p className="project-solution"><strong>Solution:</strong> {project.solution}</p>
                            <p className="project-impact"><strong>Impact:</strong> {project.impact}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Education & Certifications Component
function EducationSection() {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-grid">
                    <div className="education-card">
                        <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                        <div className="edu-item">
                            <h4>Bachelor of Computer Science</h4>
                            <p className="university">Osmania University</p>
                            <p className="location">Hyderabad, Telangana</p>
                            <p className="year">Graduated: January 2021</p>
                        </div>
                    </div>

                    <div className="education-card">
                        <h3><i className="fas fa-certificate"></i> Certifications</h3>
                        <div className="cert-item">
                            <p>AWS Partner: Cloud Practitioner Essentials (2023)</p>
                        </div>
                        <div className="cert-item">
                            <p>Docker Essentials</p>
                        </div>
                    </div>

                    <div className="education-card">
                        <h3><i className="fas fa-trophy"></i> Awards & Recognition</h3>
                        <div className="award-item">
                            <p><strong>4-star Gold Badge</strong> — HackerRank Python</p>
                        </div>
                        <div className="award-item">
                            <p><strong>1st Place Winner</strong> — AI.4 Hackathon (MouriTech)</p>
                        </div>
                        <div className="award-item">
                            <p><strong>Team Lead</strong> — Full-cycle software project delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Contact Section Component
function ContactSection() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Build Something Remarkable</h2>
                <p className="contact-subtitle">I'm always interested in hearing about new projects and opportunities.</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:chnarsimha986@gmail.com">chnarsimha986@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaPhone />
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:+919014972263">+91 9014972263</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Location</h4>
                                <p>Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/chellaboina-narsimha-b529b3233" className="social-link linkedin" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Narsi12" className="social-link github" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://medium.com/@chnarsimha986" className="social-link medium" title="Medium">
                            <FaMedium />
                        </a>
                    </div>
                </div>

                <div className="cta-buttons">
                    <a href="mailto:chnarsimha986@gmail.com" className="btn btn-primary">Send Me an Email</a>
                    <a href="https://www.linkedin.com/in/chellaboina-narsimha-b529b3233" className="btn btn-secondary">Connect on LinkedIn</a>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Narsimha Chellaboina. All rights reserved.</p>
            </div>
        </footer>
    );
}

// Main Portfolio Component
export default function Portfolio() {
    return (
        <div className="portfolio">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
