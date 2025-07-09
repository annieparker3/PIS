import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center py-12">
      <div className="container px-4 md:px-6 max-w-md mx-auto">
        <Card className="border-0 shadow-lg text-center">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Welcome to PARKER IS!</CardTitle>
            <CardDescription className="text-lg">
              Your registration has been completed successfully
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="text-left">
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    Check your email
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    We've sent you a welcome email with next steps and access instructions.
                  </p>
                </div>
              </div>
              
              <div className="text-left space-y-3">
                <h3 className="font-semibold">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Verify your email address
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Complete your profile setup
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Join your team workspace
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Start collaborating with your team
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full" size="lg">
                <Link href="/login">
                  Sign In to Your Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  Return to Homepage
                </Link>
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Need help? Contact us at{' '}
                <a 
                  href="mailto:anitadarkofirdaus@gmail.com" 
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  anitadarkofirdaus@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 