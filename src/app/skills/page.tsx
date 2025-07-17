import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AnimatedElement from '../../components/AnimatedElement'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      {
        name: 'React & Next.js',
        level: 90,
        description: 'Building modern, responsive web applications with React and Next.js',
      },
      {
        name: 'TypeScript',
        level: 85,
        description: 'Writing type-safe JavaScript code for better maintainability',
      },
      {
        name: 'CSS & TailwindCSS',
        level: 95,
        description: 'Creating beautiful, responsive layouts with modern CSS frameworks',
      },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 88,
        description: 'Building scalable server-side applications and APIs',
      },
      {
        name: 'Python',
        level: 82,
        description: 'Data processing and backend development with Python',
      },
      {
        name: 'Databases',
        level: 85,
        description: 'Working with SQL and NoSQL databases',
      },
    ],
  },
  {
    title: 'Design',
    skills: [
      {
        name: 'UI/UX Design',
        level: 88,
        description: 'Creating user-centered designs and interfaces',
      },
      {
        name: 'Figma',
        level: 90,
        description: 'Prototyping and design system creation',
      },
      {
        name: 'Adobe Creative Suite',
        level: 80,
        description: 'Graphics and visual design',
      },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      {
        name: 'DevOps',
        level: 75,
        description: 'CI/CD, Docker, and cloud services',
      },
      {
        name: 'Testing',
        level: 85,
        description: 'Unit testing, integration testing, and E2E testing',
      },
      {
        name: 'Agile Methodologies',
        level: 90,
        description: 'Scrum and Kanban practices',
      },
    ],
  },
]

function SkillBar({ name, level, description }: { name: string; level: number; description: string }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills, design capabilities, and professional expertise.
                Each skill represents years of practical experience and continuous learning.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedElement key={category.title} delay={categoryIndex * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h2>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 