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
    question: 'The value of the integral ∫(0 to π/2) log(tan x) dx is:',
    options: ['π/2', 'π', '0', '1'],
    correct: 2,
    explanation:
      'Using symmetry, let I = ∫(0 to π/2) log(tan x) dx. Substituting x → π/2 - x gives I = ∫(0 to π/2) log(cot x) dx. Adding both gives 2I = ∫log(1) dx = 0, so I = 0.',
  },
  {
    id: 'math-algebra-eigenvalues-trace',
    subject: 'Mathematics',
    topic: 'Linear Algebra',
    question: 'For a square matrix A, the sum of all eigenvalues equals:',
    options: ['det(A)', 'trace(A)', 'rank(A)', '||A||'],
    correct: 1,
    explanation:
      'The characteristic polynomial shows that the sum of eigenvalues equals trace(A) (sum of diagonal elements).',
  },
  {
    id: 'math-probability-bayes',
    subject: 'Mathematics',
    topic: 'Probability',
    question: 'If P(A)=0.6, P(B)=0.5 and P(A∩B)=0.3, then P(A|B) is:',
    options: ['0.5', '0.6', '0.3', '0.8'],
    correct: 1,
    explanation:
      'By definition, P(A|B) = P(A∩B) / P(B) = 0.3 / 0.5 = 0.6.',
  },
  {
    id: 'math-diff-eq-order',
    subject: 'Mathematics',
    topic: 'Differential Equations',
    question: "The order of the differential equation d²y/dx² + (dy/dx)³ + y = 0 is:",
    options: ['1', '2', '3', '6'],
    correct: 1,
    explanation:
      'Order is determined by the highest derivative present. The highest derivative here is d²y/dx², so the order is 2.',
  },
  {
    id: 'math-vector-curl',
    subject: 'Mathematics',
    topic: 'Vector Calculus',
    question: 'A vector field F is said to be irrotational if:',
    options: ['div F = 0', 'curl F = 0', '∇²F = 0', 'F · ∇ = 0'],
    correct: 1,
    explanation:
      'A vector field is irrotational when its curl is zero everywhere, meaning there is no rotational component at any point.',
  },
  {
    id: 'english-vocab-ephemeral-opposite',
    subject: 'English',
    topic: 'Vocabulary',
    question: "Choose the word most nearly OPPOSITE in meaning to 'EPHEMERAL':",
    options: ['Transient', 'Permanent', 'Pungent', 'Eccentric'],
    correct: 1,
    explanation:
      "'Ephemeral' means short-lived. Its antonym is 'Permanent', meaning lasting indefinitely.",
  },
  {
    id: 'english-grammar-subject-verb',
    subject: 'English',
    topic: 'Grammar',
    question: 'Neither of the solutions ____ acceptable to the committee.',
    options: ['are', 'have been', 'is', 'were'],
    correct: 2,
    explanation:
      "'Neither' takes a singular verb. The correct form is 'is'.",
  },
  {
    id: 'english-reading-main-idea',
    subject: 'English',
    topic: 'Comprehension',
    question: 'Identifying the main idea of a technical passage requires attention to:',
    options: ['Only the title', 'Topic sentences and transitions', 'Figures only', 'Last word of each line'],
    correct: 1,
    explanation:
      'Topic sentences introduce the central claim of each paragraph; transitions connect ideas logically.',
  },
  {
    id: 'english-synonym-verbose',
    subject: 'English',
    topic: 'Vocabulary',
    question: "Which word is closest in meaning to 'VERBOSE'?",
    options: ['Concise', 'Wordy', 'Silent', 'Accurate'],
    correct: 1,
    explanation:
      "'Verbose' means using more words than necessary. 'Wordy' is its closest synonym.",
  },
  {
    id: 'civil-structural-udl-bm',
    subject: 'Civil Eng.',
    topic: 'Structural Analysis',
    question: 'The maximum bending moment for a simply supported beam of span L with UDL w per unit length is:',
    options: ['wL²/4', 'wL²/8', 'wL²/12', 'wL²/2'],
    correct: 1,
    explanation:
      'For a simply supported beam with full-span UDL, maximum moment occurs at mid-span: M_max = wL²/8.',
  },
  {
    id: 'civil-fluid-reynolds',
    subject: 'Civil Eng.',
    topic: 'Fluid Mechanics',
    question: 'Turbulent flow in a circular pipe is generally assumed when Reynolds number exceeds:',
    options: ['500', '1200', '2300', '10000'],
    correct: 2,
    explanation:
      'Re < 2300 → laminar; 2300–4000 → transitional; Re > 4000 → fully turbulent. The common threshold cited is 2300.',
  },
  {
    id: 'civil-soil-effective-stress',
    subject: 'Civil Eng.',
    topic: 'Soil Mechanics',
    question: "Terzaghi's effective stress principle states σ' equals:",
    options: ['σ + u', 'σ − u', 'u − σ', 'σ / u'],
    correct: 1,
    explanation:
      "σ' = σ − u, where σ is total stress and u is pore water pressure. Effective stress governs soil strength.",
  },
  {
    id: 'civil-surveying-contour',
    subject: 'Civil Eng.',
    topic: 'Surveying',
    question: 'Contour lines of different elevations can cross each other only in case of:',
    options: ['A valley', 'A hill', 'An overhanging cliff', 'A plain area'],
    correct: 2,
    explanation:
      'Contour lines never cross except at overhanging cliffs or caves, where multiple elevations exist at the same horizontal point.',
  },
  {
    id: 'computer-ds-bfs-queue',
    subject: 'Computer Eng.',
    topic: 'Data Structures',
    question: 'Which data structure is primarily used for implementing BFS on a graph?',
    options: ['Stack', 'Queue', 'Priority Queue', 'Linked List'],
    correct: 1,
    explanation:
      'BFS explores level by level using FIFO order, which is naturally implemented by a queue.',
  },
  {
    id: 'computer-os-deadlock',
    subject: 'Computer Eng.',
    topic: 'Operating Systems',
    question: 'Which of the following is NOT a Coffman condition for deadlock?',
    options: ['Mutual exclusion', 'Hold and wait', 'Preemption allowed', 'Circular wait'],
    correct: 2,
    explanation:
      'The four Coffman conditions are: mutual exclusion, hold and wait, no preemption, and circular wait. "Preemption allowed" prevents deadlock, so it is NOT a condition.',
  },
  {
    id: 'computer-db-normalization',
    subject: 'Computer Eng.',
    topic: 'Database Systems',
    question: 'A relation is in 3NF if it is in 2NF and has no:',
    options: ['Candidate keys', 'Primary key', 'Transitive dependency', 'Foreign key'],
    correct: 2,
    explanation:
      '3NF eliminates transitive dependencies: non-key attributes must depend only on candidate keys, not on other non-key attributes.',
  },
  {
    id: 'computer-network-osi',
    subject: 'Computer Eng.',
    topic: 'Computer Networks',
    question: 'Which OSI layer is responsible for end-to-end error detection and flow control?',
    options: ['Network layer', 'Data Link layer', 'Transport layer', 'Session layer'],
    correct: 2,
    explanation:
      'The Transport layer (Layer 4) provides end-to-end communication, reliability, error detection and flow control (e.g., TCP).',
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'Is this course suitable for all engineering streams?',
    a: 'Yes. We cover common topics like Mathematics and English extensively, and include dedicated modules for Civil, Computer, Electrical, Electronics, and Mechanical streams.',
  },
  {
    q: 'How similar are the mock tests to the actual IOE CBT?',
    a: 'The mock interface mirrors the IOE CBT flow exactly, including timer pressure, navigation controls, and section switching behavior.',
  },
  {
    q: 'Can I access the materials on my phone?',
    a: 'Yes. The platform is fully responsive — study from desktop, tablet, or mobile with synced progress across all devices.',
  },
  {
    q: 'What if I have doubts while studying?',
    a: 'Each lesson includes a discussion thread. Instructors and peers actively answer doubts, usually on the same day.',
  },
  {
    q: 'Do I get a study plan based on my available time?',
    a: 'Yes. Choose between a 1-month crash course, a 2-month comprehensive plan, or a weekend-only plan — all with daily checklists.',
  },
];
