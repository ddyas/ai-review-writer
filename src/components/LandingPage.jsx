import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  ClockIcon, 
  StarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Reviews',
    description: 'Generate authentic, personalized reviews using advanced AI technology',
    icon: SparklesIcon,
  },
  {
    name: 'Time-Saving',
    description: 'Create multiple review variations in seconds instead of minutes',
    icon: ClockIcon,
  },
  {
    name: 'Customizable Styles',
    description: 'Choose from professional, casual, enthusiastic, or detailed tones',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Review Management',
    description: 'Track and manage your reviews from a centralized dashboard',
    icon: StarIcon,
  },
];

const exampleReviews = [
  {
    style: 'Professional',
    content: 'I had an excellent experience at this establishment. The service was exceptional, demonstrating great attention to detail and professionalism. The quality exceeded my expectations.',
    rating: 5,
  },
  {
    style: 'Casual',
    content: "Really enjoyed my time here! The staff was super helpful and made sure everything was just right. The whole experience was great and I would definitely come back!",
    rating: 5,
  },
];

const footerNavigation = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'API', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Data Protection', href: '#' },
  ],
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
};

function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left column */}
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">
                  <span className="block">Generate Authentic</span>
                  <span className="block text-indigo-600">AI-Powered Reviews</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Transform your customer feedback process with AI-generated reviews that capture genuine experiences. Customize tone, length, and style to match your brand voice.
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/generate"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Try Review Generator
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/login"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Business Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Illustration */}
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative hidden lg:block">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <div className="relative w-full h-full">
                  <div className="relative h-[500px] w-[500px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative transform">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 right-4 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -right-4 -top-4 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        
                        {/* Main illustration icons */}
                        <div className="relative space-y-8">
                          <div className="flex items-center justify-center space-x-8">
                            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-200">
                              <DocumentTextIcon className="h-12 w-12 text-indigo-600" />
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-200">
                              <SparklesIcon className="h-12 w-12 text-purple-600" />
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-200">
                              <StarIcon className="h-16 w-16 text-yellow-400" />
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-8">
                            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-200">
                              <UserGroupIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-200">
                              <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Everything you need</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Smart Review Generation
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Generate authentic reviews that reflect real customer experiences while saving time and maintaining consistency.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Example reviews section */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">EXAMPLES</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            See it in Action
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {exampleReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="pt-6"
                >
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-white" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{review.style} Style</h3>
                      <p className="mt-5 text-base text-gray-500">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                ReviewAI
              </Link>
              <p className="text-gray-500 text-base">
                Making authentic review generation easy and efficient for businesses of all sizes.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.product.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} ReviewAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
