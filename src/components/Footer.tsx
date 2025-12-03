import Link from "next/link";
import { personalInfo, navItems } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  LinkedIn
                </Link>
              </li>
              {/* <li>
                <Link
                  href={personalInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Facebook
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center space-y-2 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p>
              Built with <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">TypeScript</span>,{" "}
              <span className="font-semibold">Tailwind CSS</span>,{" "}
              <span className="font-semibold">Drizzle ORM</span>, and{" "}
              <span className="font-semibold">Neon DB</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
