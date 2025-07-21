"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedElement from "../../components/AnimatedElement";
import {
  achievements,
  education,
  experiences,
  scholarship,
} from "@/data/portfolio";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-24 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <AnimatedElement>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting user-centric digital experiences with a passion for
                front-end innovation and Filipino impact.
              </p>
            </div>
          </AnimatedElement>

          {/* Profile Section */}
          <AnimatedElement delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/pajah-grad-pic-sq.JPG"
                  alt="Graduation Picture with Pajah"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hi there! 👋
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-justify">
                  <p>
                    I&apos;m passionate about front-end, web, and mobile
                    application development, with a focus on creating intuitive
                    user experiences. I have a solid foundation in web
                    development technologies and am actively enhancing my
                    back-end skills to become a well-rounded developer.
                  </p>
                  <p>
                    I believe in crafting clean, user-centric interfaces that
                    solve real-world problems. Beyond coding, I enjoy designing,
                    drawing, and painting, which fuel my creativity. As a
                    lifelong learner, I&apos;m eager to explore new technologies
                    and contribute to innovative projects.
                  </p>
                  <p>
                    Driven by my Filipino roots, I aim to build technology
                    solutions that benefit and serve the Filipino people.
                    Through accessible applications and community-focused
                    platforms, I strive to create impactful digital experiences
                    that empower communities across the Philippines.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Experience Section */}
          <AnimatedElement delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="border-l-2 border-[#457B9D] dark:border-[#457B9D] pl-4"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="text-[#457EAF] dark:text-[#457B9D] mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Education Section */}
          <AnimatedElement delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="border-l-2 border-[#457B9D] dark:border-[#457B9D] pl-4"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-[#457EAF] dark:text-[#457B9D] mb-2">
                      {edu.school}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Achievements Section */}
          <AnimatedElement delay={350}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Achievements</h2>
              <div className="space-y-8">
                {achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="border-l-2 border-[#457B9D] dark:border-[#457B9D] pl-4"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {ach.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                      {ach.title}
                    </h3>
                    <div className="text-[#457EAF] dark:text-[#457B9D] mb-2">
                      {ach.school}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Scholarship Section */}
          <AnimatedElement delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Scholarship</h2>
              <div className="space-y-8">
                {scholarship.map((sch) => (
                  <div
                    key={sch.title}
                    className="border-l-2 border-[#457B9D] dark:border-[#457B9D] pl-4"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {sch.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">
                      {sch.title}
                    </h3>
                    <div className="text-[#457EAF] dark:text-[#457B9D] mb-2">
                      {sch.school}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Presentations and Research Studies Section */}
          {/* <AnimatedElement delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Presentations and Research Studies</h2>
              <div className="space-y-8">
                {presentations.map((pres) => (
                  <div key={pres.title} className="border-l-2 border-[#457B9D] dark:border-[#457B9D] pl-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{pres.period}</div>
                    <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">{pres.title}</h3>
                    <div className="text-[#457EAF] dark:text-[#457B9D] mb-2">{pres.school}</div>
                    <p className="text-gray-600 dark:text-gray-400">{pres.description}</p>
                    <p className="text-gray-600 dark:text-gray-400">{pres.development}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement> */}

          {/* Call to Action */}
          <AnimatedElement delay={400}>
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Interested in collaborating or want to learn more about my work?
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-[#457B9D] hover:bg-[#457EAF] dark:bg-[#457B9D] dark:hover:bg-[#457EAF] text-white rounded-lg transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-colors dark:text-gray-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <Footer />
    </>
  );
}
