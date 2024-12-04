import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What prerequisites are needed for the courses?',
      answer: "Most beginner courses don't require any prior experience. For advanced courses, basic programming knowledge and understanding of related concepts is recommended.",
    },
    {
      question: 'Are the courses available online?',
      answer: 'Yes, all our courses are available both online and offline. Online courses include live sessions, recorded lectures, and interactive assignments.',
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we offer career guidance and job placement assistance to all our students. We have partnerships with leading tech companies and startups.',
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'Course duration varies from 2 to 6 months depending on the program. We also offer flexible timing options to accommodate working professionals.',
    },
    {
      question: 'Do you provide certificates upon completion?',
      answer: 'Yes, we provide industry-recognized certificates upon successful completion of our courses. These certificates can be verified online.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Get answers to common questions about our programs
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div className="mt-4">
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex justify-between w-full px-4 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}