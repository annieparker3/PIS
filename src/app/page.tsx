import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Shield, Code, Zap, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Advanced Development",
      description: "Cutting-edge software solutions built with the latest technologies."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your business processes."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Secure Systems",
      description: "Enterprise-grade security to protect your most valuable assets."
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "Global Solutions",
      description: "Scalable solutions that work across borders and timezones."
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "Team Excellence",
      description: "World-class talent dedicated to your success."
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-500" />,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with technology."
    },
  ]

  const pricingTiers = [
    {
      name: "Beginners Team",
      price: "$20",
      description: "Perfect for small teams getting started",
      features: [
        "Guided learning path",
        "Mentorship program",
        "Basic project access",
        "Community support"
      ],
      buttonText: "Get Started",
      className: "border-green-500"
    },
    {
      name: "Average Team",
      price: "$50",
      description: "For growing teams with advanced needs",
      features: [
        "Advanced project access",
        "Team collaboration",
        "Code review sessions",
        "Skill development workshops"
      ],
      buttonText: "Get Started",
      className: "border-blue-500 scale-105 shadow-lg"
    },
    {
      name: "Master Devs Team",
      price: "$110",
      description: "For elite teams demanding the best",
      features: [
        "Exclusive projects",
        "Leadership opportunities",
        "Direct client interaction",
        "Priority support"
      ],
      buttonText: "Contact Sales",
      className: "border-purple-500"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Welcome to the Future
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              PARKER INTELLIGENT SYSTEMS
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-300 md:text-2xl">
              ...the next evolution of technology
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300">
              We build intelligent systems that transform businesses and empower people.
              Our cutting-edge solutions combine AI, cloud computing, and human expertise to drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/join">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Rocket className="mr-2 h-4 w-4" /> Join Our Team
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose PARKER IS
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 mt-12">
            {features.map((feature, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Team Pricing
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Choose the perfect plan for your team's needs. Scale as you grow.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`flex flex-col p-6 bg-white rounded-2xl border ${tier.className} transition-all duration-300 hover:shadow-xl dark:bg-slate-800`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-3 text-gray-500 dark:text-gray-400">
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex">
                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/join">
                    <Button className="w-full" size="lg">
                      {tier.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Join the next evolution of technology and stay ahead of the competition with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/join">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
