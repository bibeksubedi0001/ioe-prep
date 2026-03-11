export type QuizQuestion = {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const questionBank: QuizQuestion[] = [
  {
    id: 'math-calculus-log-tan-integral',
    subject: 'Mathematics',
    topic: 'Calculus',
    question: 'The value of the integral \u222b(0 to \u03c0/2) log(tan x) dx is:',
    options: ['\u03c0/2', '\u03c0', '0', '1'],
    correct: 2,
    explanation:
      'Using symmetry, let I = \u222b(0 to \u03c0/2) log(tan x) dx. Substituting x -> \u03c0/2 - x gives I = \u222b(0 to \u03c0/2) log(cot x) dx. Adding both gives 2I = \u222b(0 to \u03c0/2) log(1) dx = 0, so I = 0.',
  },
  {
    id: 'math-algebra-eigenvalues-trace',
    subject: 'Mathematics',
    topic: 'Linear Algebra',
    question: 'For a 2x2 matrix A, the sum of eigenvalues is equal to:',
    options: ['det(A)', 'trace(A)', 'rank(A)', '||A||'],
    correct: 1,
    explanation:
      'For any square matrix, the characteristic polynomial has coefficient of \u03bb^(n-1) equal to -trace(A), so the sum of eigenvalues equals trace(A).',
  },
  {
    id: 'math-probability-bayes',
    subject: 'Mathematics',
    topic: 'Probability',
    question: 'If P(A)=0.6, P(B)=0.5 and P(A\u2229B)=0.3, then P(A|B) is:',
    options: ['0.5', '0.6', '0.3', '0.8'],
    correct: 1,
    explanation:
      'By definition, P(A|B)=P(A\u2229B)/P(B)=0.3/0.5=0.6.',
  },
  {
    id: 'english-vocab-ephemeral-opposite',
    subject: 'English',
    topic: 'Vocabulary',
    question: "Choose the word most nearly OPPOSITE in meaning to 'EPHEMERAL':",
    options: ['Transient', 'Permanent', 'Pungent', 'Eccentric'],
    correct: 1,
    explanation:
      "'Ephemeral' means short-lived. 'Permanent' is the opposite, meaning lasting for a long or indefinite time.",
  },
  {
    id: 'english-grammar-subject-verb',
    subject: 'English',
    topic: 'Grammar',
    question: 'Neither of the solutions ____ acceptable to the committee.',
    options: ['are', 'have been', 'is', 'were'],
    correct: 2,
    explanation:
      "'Neither' is singular, so the correct verb form is 'is'.",
  },
  {
    id: 'english-reading-main-idea',
    subject: 'English',
    topic: 'Comprehension',
    question: 'In technical reading, identifying the main idea usually requires attention to:',
    options: ['Only the title', 'Topic sentences and transitions', 'Figures only', 'Last word of each line'],
    correct: 1,
    explanation:
      'Topic sentences and transition phrases carry the logical flow and central claim of a passage.',
  },
  {
    id: 'civil-structural-udl-bm',
    subject: 'Civil Eng.',
    topic: 'Structural Analysis',
    question:
      "The maximum bending moment for a simply supported beam of span L with UDL w per unit length is:",
    options: ['wL^2/4', 'wL^2/8', 'wL^2/12', 'wL^2/2'],
    correct: 1,
    explanation:
      'For a simply supported beam carrying full-span UDL, the maximum moment occurs at midspan and equals wL^2/8.',
  },
  {
    id: 'civil-fluid-reynolds',
    subject: 'Civil Eng.',
    topic: 'Fluid Mechanics',
    question: 'Flow in a circular pipe is typically considered turbulent when Reynolds number is greater than:',
    options: ['500', '1200', '2300', '10000'],
    correct: 2,
    explanation:
      'In basic classification, Re < 2300 is laminar; transition begins around 2300 and above is generally turbulent.',
  },
  {
    id: 'civil-soil-effective-stress',
    subject: 'Civil Eng.',
    topic: 'Soil Mechanics',
    question: 'Effective stress in soil is given by:',
    options: ['\u03c3 + u', '\u03c3 - u', 'u - \u03c3', '\u03c3/u'],
    correct: 1,
    explanation:
      "Terzaghi's effective stress relation is \u03c3' = \u03c3 - u, where \u03c3 is total stress and u is pore water pressure.",
  },
  {
    id: 'computer-ds-bfs-queue',
    subject: 'Computer Eng.',
    topic: 'Data Structures',
    question: 'Which data structure is primarily used for implementing BFS on a graph?',
    options: ['Stack', 'Queue', 'Priority Queue', 'Linked List'],
    correct: 1,
    explanation:
      'BFS is level-order traversal and uses FIFO behavior, which is implemented by a queue.',
  },
  {
    id: 'computer-os-deadlock',
    subject: 'Computer Eng.',
    topic: 'Operating Systems',
    question: 'Which of the following is NOT a Coffman deadlock condition?',
    options: ['Mutual exclusion', 'Hold and wait', 'Preemption', 'Circular wait'],
    correct: 2,
    explanation:
      'The deadlock conditions are mutual exclusion, hold and wait, no preemption, and circular wait. So preemption is NOT one of them.',
  },
  {
    id: 'computer-db-normalization',
    subject: 'Computer Eng.',
    topic: 'Database Systems',
    question: 'A relation is in 3NF if it is in 2NF and has no:',
    options: ['Candidate keys', 'Primary key', 'Transitive dependency', 'Foreign key'],
    correct: 2,
    explanation:
      '3NF removes transitive dependencies of non-key attributes on candidate keys.',
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'Is this course suitable for all engineering streams?',
    a: 'Yes. We cover common topics like Mathematics and English and include dedicated modules for Civil, Computer, Electrical, Electronics, and Mechanical streams.',
  },
  {
    q: 'How similar are the mock tests to the actual IOE CBT?',
    a: 'The mock interface is designed to mirror the IOE CBT flow, including timer pressure, navigation, and section switching behavior.',
  },
  {
    q: 'Can I access the materials on my phone?',
    a: 'Yes. The platform is fully responsive, so you can study from desktop, tablet, or mobile with synced progress.',
  },
  {
    q: 'What if I have doubts while studying?',
    a: 'Each lesson includes a discussion thread. Instructors and peers actively answer doubts, usually on the same day.',
  },
  {
    q: 'Do I get a study plan based on my available time?',
    a: 'Yes. You can choose between crash, comprehensive, and weekend-only plans with daily checklists.',
  },
];
