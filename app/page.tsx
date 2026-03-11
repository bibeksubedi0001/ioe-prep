"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Video, 
  Target, 
  BarChart, 
  CheckCircle2, 
  PlayCircle, 
  Menu, 
  X, 
  ArrowRight,
  GraduationCap,
  Clock,
  Users,
  Star,
  ChevronDown,
  Lightbulb,
  Award,
  ShieldCheck,
  Zap,
  BrainCircuit
} from 'lucide-react';
import Link from 'next/link';

// --- Data for Interactive Sections ---

const sampleQuestions = [
  {
    subject: "Mathematics",
    topic: "Calculus",
    question: "The value of the integral ∫(0 to π/2) log(tan x) dx is:",
    options: ["π/2", "π", "0", "1"],
    correct: 2, // Index 2 -> "0"
    explanation: "Using the definite integral property ∫(0 to a) f(x)dx = ∫(0 to a) f(a-x)dx. Let I = ∫log(tan x)dx. Then I = ∫log(tan(π/2 - x))dx = ∫log(cot x)dx. Adding both equations gives 2I = ∫log(tan x * cot x)dx = ∫log(1)dx = 0. Therefore, I = 0."
  },
  {
    subject: "English",
    topic: "Vocabulary",
    question: "Choose the word which is most nearly OPPOSITE in meaning to 'EPHEMERAL':",
    options: ["Transient", "Permanent", "Pungent", "Eccentric"],
    correct: 1,
    explanation: "'Ephemeral' means lasting for a very short time. Therefore, its exact opposite is 'Permanent', which means lasting or intended to last indefinitely."
  },
  {
    subject: "Civil Eng.",
    topic: "Structural Analysis",
    question: "The maximum bending moment for a simply supported beam of span 'L' carrying a uniformly distributed load 'w' per unit length is:",
    options: ["wL²/4", "wL²/8", "wL²/12", "wL²/2"],
    correct: 1,
    explanation: "For a simply supported beam with a UDL, the maximum bending moment occurs at the center of the span and is calculated using the formula M_max = wL²/8."
  },
  {
    subject: "Computer Eng.",
    topic: "Data Structures",
    question: "Which data structure is primarily used for implementing a breadth-first search (BFS) on a graph?",
    options: ["Stack", "Queue", "Priority Queue", "Linked List"],
    correct: 1,
    explanation: "BFS explores the neighbor nodes first, before moving to the next level neighbors. A Queue (FIFO) perfectly models this behavior, ensuring nodes are visited in the order they were discovered."
  }
];

const faqs = [
  {
    q: "Is this course suitable for all engineering streams?",
    a: "Yes! We cover the common syllabus (Mathematics and English) extensively, and provide specialized modules for major streams including Civil, Computer, Electrical, Electronics, and Mechanical Engineering."
  },
  {
    q: "How similar are the mock tests to the actual IOE CBT?",
    a: "Our mock test platform is designed to perfectly mimic the IOE Computer Based Test (CBT) interface. This helps you get familiar with the navigation, timer, and pressure of the real exam."
  },
  {
    q: "Can I access the materials on my phone?",
    a: "Absolutely. Our platform is fully responsive. You can watch video lectures, read notes, and even take practice quizzes on your mobile device while commuting."
  },
  {
    q: "What if I have doubts while studying?",
    a: "We have a dedicated community forum and Q&A section under every video. Our expert instructors and peer community typically resolve doubts within a few hours."
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for Sample Questions
  const [activeSubject, setActiveSubject] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // State for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubjectChange = (index: number) => {
    setActiveSubject(index);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const handleCheckAnswer = () => {
    if (selectedOption !== null) {
      setIsAnswerChecked(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2.5 rounded-xl shadow-sm shadow-indigo-200">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
                IOE<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Prep</span>
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
              <Link href="#practice" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Practice</Link>
              <Link href="#study-plans" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Study Plans</Link>
              <Link href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
                <Link href="/login" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Log in</Link>
                <Link href="/signup" className="text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-indigo-600 transition-all shadow-sm hover:shadow-indigo-200 hover:-translate-y-0.5">
                  Get Started
                </Link>
              </div>
            </nav>

            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-5">
                <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600">Features</Link>
                <Link href="#practice" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600">Practice</Link>
                <Link href="#study-plans" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600">Study Plans</Link>
                <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-600">Pricing</Link>
                <hr className="border-slate-100" />
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Link href="/login" className="flex items-center justify-center text-base font-semibold text-slate-900 bg-slate-100 py-3 rounded-xl">Log in</Link>
                  <Link href="/signup" className="flex items-center justify-center text-base font-semibold text-white bg-indigo-600 py-3 rounded-xl shadow-sm">Get Started</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-100 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                  </span>
                  Admissions for 2026 Batch Open
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Crack the IOE MSc Entrance. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Without the guesswork.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Stop wandering through random PDFs. Get a structured, day-by-day study plan, comprehensive video lectures, and realistic mock tests designed specifically for the Pulchowk Campus MSc Entrance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2 group">
                    Start Your Prep Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <PlayCircle className="h-5 w-5 text-indigo-600" />
                    Watch Demo
                  </button>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span>7-day money-back</span>
                  </div>
                </div>
              </motion.div>

              {/* Hero Visuals / Mock UI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative hidden md:block"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
                <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden p-6 relative">
                  
                  {/* Mock Dashboard Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="font-bold text-slate-900">Your Progress</h3>
                      <p className="text-sm text-slate-500">2-Month Comprehensive Plan</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                      <span className="font-bold text-indigo-600">68%</span>
                    </div>
                  </div>

                  {/* Mock Task List */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-slate-900 text-sm">Calculus: Integration</div>
                        <div className="text-xs text-slate-500">Video Lecture • Completed</div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-2xl bg-white border-2 border-indigo-500 shadow-md shadow-indigo-100 flex items-center gap-4 transform -translate-x-2">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                        <PlayCircle className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold text-slate-900 text-sm">Calculus: Differential Eq.</div>
                        <div className="text-xs text-indigo-600 font-medium">Up Next • 45 mins</div>
                      </div>
                      <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg">Play</button>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 opacity-70">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <Target className="h-5 w-5 text-slate-500" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-slate-900 text-sm">Calculus Quiz</div>
                        <div className="text-xs text-slate-500">Practice • 30 Questions</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-6 -bottom-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                  >
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Award className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Mock Test 4</div>
                      <div className="font-bold text-slate-900">Score: 82/100</div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="border-y border-slate-200 bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by students from top engineering colleges</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using text as placeholders for college logos */}
              <div className="font-display font-bold text-xl text-slate-800">Pulchowk Campus</div>
              <div className="font-display font-bold text-xl text-slate-800">Thapathali Campus</div>
              <div className="font-display font-bold text-xl text-slate-800">WRC Pokhara</div>
              <div className="font-display font-bold text-xl text-slate-800">ERC Dharan</div>
              <div className="font-display font-bold text-xl text-slate-800">Kathmandu Univ.</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
              <p className="text-lg text-slate-600">We've reverse-engineered the IOE MSc Entrance exam to provide exactly what you need, and nothing you don't.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Structured Study Plans",
                  description: "Whether you have 1 month or 3 months, follow our day-by-day checklist so you always know exactly what to study next."
                },
                {
                  icon: Video,
                  title: "Concept-Driven Videos",
                  description: "No more rote memorization. Our expert instructors break down complex engineering concepts into easy-to-understand modules."
                },
                {
                  icon: Target,
                  title: "Targeted Practice",
                  description: "Thousands of MCQs categorized by topic and difficulty, complete with detailed step-by-step text and video solutions."
                },
                {
                  icon: BarChart,
                  title: "Realistic Mock Tests",
                  description: "Simulate the actual computer-based testing environment of IOE. Get detailed analytics on your pacing and accuracy."
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Notes",
                  description: "Downloadable cheat sheets, formula books, and summary notes for quick revision before the exam day."
                },
                {
                  icon: Users,
                  title: "Doubt Resolution",
                  description: "Stuck on a problem? Ask in our active community forum and get answers from instructors and peers within hours."
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Sample Questions Section */}
        <section id="practice" className="py-24 bg-white border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-100">
                  <Zap className="h-4 w-4" /> Try it yourself
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Experience our <br/>practice platform.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our question bank isn't just a list of PDFs. It's an interactive platform that tracks your progress, times your responses, and provides detailed explanations for every single option.
                </p>
                
                <div className="flex flex-col gap-3">
                  {sampleQuestions.map((sq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubjectChange(idx)}
                      className={`text-left px-6 py-4 rounded-2xl font-semibold transition-all flex items-center justify-between ${
                        activeSubject === idx 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <BrainCircuit className={`h-5 w-5 ${activeSubject === idx ? 'text-indigo-400' : 'text-slate-400'}`} />
                        {sq.subject}
                      </div>
                      {activeSubject === idx && <ArrowRight className="h-5 w-5 text-indigo-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-slate-50 rounded-[2rem] p-6 md:p-10 border border-slate-200 shadow-inner">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Quiz Header */}
                    <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-slate-50/50">
                      <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                        {sampleQuestions[activeSubject].topic}
                      </span>
                      <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                        <Clock className="h-4 w-4" /> 01:30
                      </span>
                    </div>
                    
                    {/* Question Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
                        {sampleQuestions[activeSubject].question}
                      </h3>
                      
                      <div className="space-y-3 mb-8">
                        {sampleQuestions[activeSubject].options.map((opt, idx) => {
                          let optionClass = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700";
                          
                          if (selectedOption === idx) {
                            optionClass = "border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600";
                          }
                          
                          if (isAnswerChecked) {
                            if (idx === sampleQuestions[activeSubject].correct) {
                              optionClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
                            } else if (selectedOption === idx) {
                              optionClass = "border-red-500 bg-red-50 text-red-900 ring-1 ring-red-500";
                            } else {
                              optionClass = "border-slate-200 text-slate-400 opacity-50";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              disabled={isAnswerChecked}
                              onClick={() => setSelectedOption(idx)}
                              className={`w-full text-left px-6 py-4 rounded-xl border-2 font-medium transition-all flex items-center justify-between ${optionClass}`}
                            >
                              <span><span className="mr-3 font-bold opacity-50">{String.fromCharCode(65 + idx)}.</span> {opt}</span>
                              {isAnswerChecked && idx === sampleQuestions[activeSubject].correct && (
                                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                              )}
                              {isAnswerChecked && selectedOption === idx && idx !== sampleQuestions[activeSubject].correct && (
                                <X className="h-5 w-5 text-red-600" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <AnimatePresence>
                        {!isAnswerChecked ? (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <button 
                              onClick={handleCheckAnswer}
                              disabled={selectedOption === null}
                              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                                selectedOption !== null 
                                  ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-md' 
                                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              }`}
                            >
                              Check Answer
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, height: 0, y: 10 }} 
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            className="bg-indigo-50 border border-indigo-100 rounded-xl p-6"
                          >
                            <div className="flex items-start gap-3">
                              <Lightbulb className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-indigo-900 mb-2">Explanation</h4>
                                <p className="text-indigo-800/80 leading-relaxed text-sm">
                                  {sampleQuestions[activeSubject].explanation}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Study Plans Preview */}
        <section id="study-plans" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">Stop guessing. <br/><span className="text-indigo-400">Start following a plan.</span></h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  The biggest reason students fail the MSc entrance isn't lack of intelligence—it's lack of structure. Our study plans tell you exactly which videos to watch, which notes to read, and which questions to solve every single day.
                </p>
                
                <div className="space-y-6">
                  {[
                    "1-Month Crash Course for quick revision",
                    "2-Month Comprehensive Plan for thorough prep",
                    "Weekend-only plan for working professionals",
                    "Daily progress tracking and motivation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <div className="bg-emerald-500/20 p-2 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                      </div>
                      <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="border-b border-slate-700 bg-slate-900/50 p-4 flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day 14: Structural Engineering</div>
                  </div>
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Video className="h-4 w-4" /> Watch
                      </h4>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-700/50 border border-slate-600 hover:bg-slate-700 transition-colors cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <PlayCircle className="h-6 w-6 text-indigo-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-lg">Bending Moment Diagrams</div>
                          <div className="text-sm text-slate-400">45 mins • Concept Video</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Target className="h-4 w-4" /> Practice
                      </h4>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-700/50 border border-slate-600 hover:bg-slate-700 transition-colors cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                          <Target className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-lg">BMD & SFD Quiz</div>
                          <div className="text-sm text-slate-400">20 Questions • 30 mins</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Don't just take our word for it</h2>
              <p className="text-lg text-slate-600">Join hundreds of successful students who secured their spot at Pulchowk Campus.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The 2-month study plan was a lifesaver. I was working full-time and the structured approach helped me utilize my limited time perfectly. Secured rank 12 in Structural!",
                  author: "Sandeep K.",
                  program: "MSc Structural Engineering",
                  initials: "SK",
                  color: "bg-blue-100 text-blue-700"
                },
                {
                  quote: "The mock tests are incredibly close to the real IOE CBT environment. It completely removed my exam anxiety. The detailed solutions for math problems were brilliant.",
                  author: "Pooja S.",
                  program: "MSc Information & Communication",
                  initials: "PS",
                  color: "bg-emerald-100 text-emerald-700"
                },
                {
                  quote: "Unbeatable value. I paid 5x more for a physical institute and learned half as much. The video lectures here actually focus on concepts rather than just formulas.",
                  author: "Rabin B.",
                  program: "MSc Power Systems",
                  initials: "RB",
                  color: "bg-purple-100 text-purple-700"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.program}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Got questions? We've got answers.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all ${openFaq === idx ? 'border-indigo-600 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <button 
                    className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-50 border-t border-slate-100"
                      >
                        <div className="px-6 py-5 text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">Simple, transparent pricing</h2>
              <p className="text-lg text-slate-600">High-quality education shouldn't cost a month's salary. Get full access for less than the cost of a few textbooks.</p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 relative overflow-hidden shadow-2xl border border-slate-200">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-3xl font-bold">IOEPrep+</h3>
                </div>
                <p className="text-slate-500 mb-8 text-lg">Everything you need to ace the exam.</p>
                
                <div className="mb-8 pb-8 border-b border-slate-100">
                  <span className="text-6xl font-display font-bold tracking-tight">Rs. 2,999</span>
                  <span className="text-slate-500 font-medium text-lg"> / 6 months</span>
                </div>

                <ul className="space-y-5 mb-10">
                  {[
                    "Access to all 500+ Video Lectures",
                    "1-Month & 2-Month Study Plans",
                    "10,000+ Practice MCQs with solutions",
                    "15 Full-length CBT Mock Tests",
                    "Downloadable PDF Notes",
                    "Priority Doubt Resolution"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="bg-indigo-50 p-1 rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1">
                  Subscribe Now
                </button>
                <p className="text-center text-sm font-medium text-slate-500 mt-6">7-day money-back guarantee. No questions asked.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Ready to secure your seat?</h2>
            <p className="text-xl text-indigo-100 mb-10">Join thousands of students who have transformed their preparation with IOEPrep.</p>
            <button className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-indigo-600 p-2 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
                  IOE<span className="text-indigo-600">Prep</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
                The most structured, affordable, and effective way to prepare for the IOE MSc Entrance Examination in Nepal.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Study Plans</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Syllabus</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Past Papers</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} IOEPrep. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm">
              Not affiliated with Tribhuvan University or IOE.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
