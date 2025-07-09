import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <Facebook className="h-5 w-5" />
    },
  ]

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Support', href: '/support' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PARKERIS
              </span>
            </div>
            <p className="text-slate-300">
              The next evolution of technology. We build intelligent systems that transform businesses and empower people.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {section.title}
              </h3>
              <div className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-slate-400">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-r-0 border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} PARKER INTELLIGENT SYSTEMS. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
