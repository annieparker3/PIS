import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Shield, Rocket, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const services = [
    {
      title: "AI-Powered Applications",
      description: "Build intelligent applications powered by cutting-edge AI and machine learning.",
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable solutions designed for enterprise needs and large-scale operations.",
      icon: <Globe className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Innovation Labs",
      description: "Explore new technologies and prototype innovative solutions in our dedicated labs.",
      icon: <Rocket className="h-6 w-6 text-red-500" />
    },
    {
      title: "Data Intelligence",
      description: "Turn your data into actionable insights with our advanced analytics platform.",
      icon: <Zap className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Digital Transformation",
      description: "Guide your business through digital transformation with our expert consulting.",
      icon: <Users className="h-6 w-6 text-green-500" />
    },
    {
      title: "Security & Compliance",
      description: "Ensure your systems are secure and compliant with industry standards.",
      icon: <Shield className="h-6 w-6 text-indigo-500" />
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and goals to understand your requirements."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our experts design a solution architecture tailored to your specific needs."
    },
    {
      number: "03",
      title: "Agile Development",
      description: "We develop your solution using agile methodologies for maximum flexibility."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support and maintenance."
    }
  ]

  const benefits = [
    {
      title: "Expert Team",
      description: "Our team consists of industry experts with years of experience."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and best practices in all our projects."
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to achieve your goals."
    },
    {
      title: "Proven Track Record",
      description: "We have a history of delivering successful projects for clients worldwide."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Who We Are
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-300 md:text-2xl">
              Driving innovation through intelligent technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To be a global leader in intelligent systems, transforming industries through cutting-edge technology and innovative thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What We Do
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We offer a comprehensive range of technology services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 mt-12">
            {services.map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="w-full py-20 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How We Do It
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our proven process ensures successful project delivery and maximum value for our clients.
            </p>
          </div>
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose PARKER IS
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We're committed to delivering exceptional value and results for our clients.
            </p>
          </div>
          <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {benefits.map((benefit, i) => (
              <Card key={i} className="p-6 text-center border-0 shadow-lg">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </Card>
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
              Let's discuss how our intelligent systems can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
