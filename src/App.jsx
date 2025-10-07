import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certification from './components/Certification'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Timeline from './components/ui/Timeline'
import SectionWrapper from './components/SectionWrapper'
const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "University of Engineering and Management, Jaipur",
    location: "Jaipur, Rajasthan, India",
    years: "2022 - 2026",
    cgpa: "8.9 CGPA",
    description: "Specialized in Artificial Intelligence, Machine Learning, and Full-Stack Development.",
    highlights: [
      "AI/ML Research",
      "Web Development",
      "Cloud Computing",
      "Database Management System"
    ]
  },
  {
    degree: "Higher Secondary Education (12th)",
    university: "Bihar School Examination Board, Patna",
    location: "Bihar, India",
    years: "2020 - 2022",
    cgpa: "72%",
    description: "Focused on Mathematics, Physics, and Chemistry",
    highlights: [
      "Mathematics",
      "Computer Science",
      "Physics"
    ]
  },
  {
    degree: "Secondary Education (10th)",
    university: "Bihar School Examination Board, Patna",
    location: "Bihar, India",
    years: "2019 - 2020",
    cgpa: "82.3%",
    description: "Achieved excellence in academics with a strong foundation in science and mathematics.",
    highlights: [
      "Academic Excellence",
      "Science",
      "Mathematics"
    ]
  }
];

const experienceData = [
  {
    position: "Frontend Developer",
    company: "Provis Technology",
    duration: "Jul 2023 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Building modern web applications using React and Tailwind CSS.",
    achievements: [
      "Developed reusable UI components",
      "Improved performance by 30%",
      "Mentored 2 junior developers"
    ],
    tech: ["React", "Tailwind CSS", "TypeScript"]
  },
  {
    position: "Software Engineering Intern",
    company: "TechNova",
    duration: "Jan 2023 - Jun 2023",
    location: "Bangalore, India",
    type: "Internship",
    description: "Worked on backend APIs and automation scripts.",
    achievements: [
      "Automated data migration tasks",
      "Implemented RESTful APIs",
      "Collaborated with cross-functional teams"
    ],
    tech: ["Node.js", "Express", "MongoDB"]
  }
];

function App() {
  return (
    <div className="flex flex-col items-center text-black dark:text-white">
      <Navbar />

      <SectionWrapper id="hero">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="education">
        <Timeline data={educationData} type="education" />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <Timeline data={experienceData} type="experience" />
      </SectionWrapper>

      <SectionWrapper id="certification">
        <Certification />
      </SectionWrapper>

      <SectionWrapper id="contacts">
        <Contacts />
      </SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;
