'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ArrowLeft, CreditCard, Users, GraduationCap, FileText } from 'lucide-react';

const teamTiers = [
  {
    id: 'beginners',
    name: 'Beginners Team',
    price: '$20',
    description: 'Perfect for small teams getting started',
    features: [
      'Guided learning path',
      'Mentorship program',
      'Basic project access',
      'Community support'
    ],
    color: 'border-green-500 bg-green-50 dark:bg-green-900/20'
  },
  {
    id: 'average',
    name: 'Average Team',
    price: '$50',
    description: 'For growing teams with advanced needs',
    features: [
      'Advanced project access',
      'Team collaboration',
      'Code review sessions',
      'Skill development workshops'
    ],
    color: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
  },
  {
    id: 'master',
    name: 'Master Devs Team',
    price: '$110',
    description: 'For elite teams demanding the best',
    features: [
      'Exclusive projects',
      'Leadership opportunities',
      'Direct client interaction',
      'Priority support'
    ],
    color: 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
  }
];

const step1Schema = z.object({
  selectedTier: z.string().min(1, 'Please select a team tier'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const step2Schema = z.object({
  education: z.string().min(10, 'Please provide your education details'),
  experience: z.string().min(10, 'Please provide your experience details'),
  skills: z.string().min(10, 'Please list your technical skills'),
  motivation: z.string().min(10, 'Please explain your motivation')
});

const step3Schema = z.object({
  cardNumber: z.string().min(1, 'Card number is required'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvv: z.string().min(1, 'CVV is required'),
  cardholderName: z.string().min(1, 'Cardholder name is required')
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

export default function JoinPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(searchParams.get('tier') || '');
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data>>({});

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      selectedTier: selectedTier,
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      education: '',
      experience: '',
      skills: '',
      motivation: ''
    }
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    }
  });

  const onStep1Submit = (data: Step1Data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const onStep2Submit = (data: Step2Data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const onStep3Submit = async (data: Step3Data) => {
    try {
      // In a real application, you would:
      // 1. Process payment with Stripe
      // 2. Create user account
      // 3. Send confirmation email
      
      console.log('Final form data:', { ...formData, ...data });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to success page or dashboard
      router.push('/join/success');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getSelectedTier = () => teamTiers.find(tier => tier.id === selectedTier);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step}</span>
                  )}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8">
            <span className={`text-sm ${currentStep >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              Team Selection
            </span>
            <span className={`text-sm ${currentStep >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              Education & Experience
            </span>
            <span className={`text-sm ${currentStep >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              Payment
            </span>
          </div>
        </div>

        {/* Step 1: Team Selection & Personal Info */}
        {currentStep === 1 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join Our Team</CardTitle>
              <CardDescription>
                Choose your team tier and provide your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
                {/* Team Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Your Team Tier</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {teamTiers.map((tier) => (
                      <div
                        key={tier.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedTier === tier.id
                            ? `${tier.color} scale-105 shadow-lg`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => {
                          setSelectedTier(tier.id);
                          step1Form.setValue('selectedTier', tier.id);
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{tier.name}</h4>
                          <Badge variant="secondary">{tier.price}/month</Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {tier.description}
                        </p>
                        <ul className="text-sm space-y-1">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {step1Form.formState.errors.selectedTier && (
                    <p className="text-sm text-red-500 mt-2">
                      {step1Form.formState.errors.selectedTier.message}
                    </p>
                  )}
                </div>

                {/* Personal Information */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input
                      {...step1Form.register('name')}
                      placeholder="John Doe"
                      className={step1Form.formState.errors.name ? 'border-red-500' : ''}
                    />
                    {step1Form.formState.errors.name && (
                      <p className="text-sm text-red-500 mt-1">
                        {step1Form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      {...step1Form.register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={step1Form.formState.errors.email ? 'border-red-500' : ''}
                    />
                    {step1Form.formState.errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {step1Form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <Input
                      {...step1Form.register('password')}
                      type="password"
                      placeholder="••••••••"
                      className={step1Form.formState.errors.password ? 'border-red-500' : ''}
                    />
                    {step1Form.formState.errors.password && (
                      <p className="text-sm text-red-500 mt-1">
                        {step1Form.formState.errors.password.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <Input
                      {...step1Form.register('confirmPassword')}
                      type="password"
                      placeholder="••••••••"
                      className={step1Form.formState.errors.confirmPassword ? 'border-red-500' : ''}
                    />
                    {step1Form.formState.errors.confirmPassword && (
                      <p className="text-sm text-red-500 mt-1">
                        {step1Form.formState.errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Continue to Education & Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Education & Experience */}
        {currentStep === 2 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Education & Experience</CardTitle>
              <CardDescription>
                Tell us about your background and skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Education & Qualifications</label>
                  <Textarea
                    {...step2Form.register('education')}
                    placeholder="Describe your educational background, degrees, certifications..."
                    rows={4}
                    className={step2Form.formState.errors.education ? 'border-red-500' : ''}
                  />
                  {step2Form.formState.errors.education && (
                    <p className="text-sm text-red-500 mt-1">
                      {step2Form.formState.errors.education.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Professional Experience</label>
                  <Textarea
                    {...step2Form.register('experience')}
                    placeholder="Describe your work experience, projects, roles..."
                    rows={4}
                    className={step2Form.formState.errors.experience ? 'border-red-500' : ''}
                  />
                  {step2Form.formState.errors.experience && (
                    <p className="text-sm text-red-500 mt-1">
                      {step2Form.formState.errors.experience.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Technical Skills</label>
                  <Textarea
                    {...step2Form.register('skills')}
                    placeholder="List your technical skills, programming languages, tools..."
                    rows={3}
                    className={step2Form.formState.errors.skills ? 'border-red-500' : ''}
                  />
                  {step2Form.formState.errors.skills && (
                    <p className="text-sm text-red-500 mt-1">
                      {step2Form.formState.errors.skills.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Motivation</label>
                  <Textarea
                    {...step2Form.register('motivation')}
                    placeholder="Why do you want to join our team? What are your goals?"
                    rows={3}
                    className={step2Form.formState.errors.motivation ? 'border-red-500' : ''}
                  />
                  {step2Form.formState.errors.motivation && (
                    <p className="text-sm text-red-500 mt-1">
                      {step2Form.formState.errors.motivation.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" size="lg">
                    Continue to Payment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment Information */}
        {currentStep === 3 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Payment Information</CardTitle>
              <CardDescription>
                Complete your registration with payment details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Selected Tier Summary */}
              {getSelectedTier() && (
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Selected Plan</h3>
                  <div className="flex justify-between items-center">
                    <span>{getSelectedTier()?.name}</span>
                    <Badge variant="secondary">{getSelectedTier()?.price}/month</Badge>
                  </div>
                </div>
              )}

              <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                  <Input
                    {...step3Form.register('cardholderName')}
                    placeholder="John Doe"
                    className={step3Form.formState.errors.cardholderName ? 'border-red-500' : ''}
                  />
                  {step3Form.formState.errors.cardholderName && (
                    <p className="text-sm text-red-500 mt-1">
                      {step3Form.formState.errors.cardholderName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <Input
                    {...step3Form.register('cardNumber')}
                    placeholder="1234 5678 9012 3456"
                    disabled
                    className={step3Form.formState.errors.cardNumber ? 'border-red-500' : ''}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Payment processing is disabled in development mode
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <Input
                      {...step3Form.register('expiryDate')}
                      placeholder="MM/YY"
                      disabled
                      className={step3Form.formState.errors.expiryDate ? 'border-red-500' : ''}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <Input
                      {...step3Form.register('cvv')}
                      placeholder="123"
                      disabled
                      className={step3Form.formState.errors.cvv ? 'border-red-500' : ''}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Complete Registration
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
