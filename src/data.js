// ─── COURSES DATA ────────────────────────────────────────────────────────────
export const COURSES = [
  {
    id: "school",
    icon: "🏫",
    tag: "School Coaching",
    tagClass: "bg-blue-50 text-blue-700 border border-blue-200",
    title: "School Coaching",
    subtitle: "Class VIII · IX · X",
    shortDesc:
      "Expert coaching across SSC, ICSE and CBSE boards with strong focus on concept clarity and writing practice.",
    fullDesc:
      'Our school coaching programme is designed for students in Class VIII, IX and X studying under SSC, ICSE or CBSE boards. We offer small batches with personalised attention, regular weekly tests, and structured board exam preparation. Our teaching philosophy centres on concept clarity over rote learning — ensuring students understand the "why" behind every topic.',
    boards: ["SSC", "ICSE", "CBSE"],
    subjects: ["Mathematics", "Science", "English", "Geography"],
    classes: ["Class VIII", "Class IX", "Class X"],
    fee: "₹25,000 – ₹40,000 per year",
  },
  {
    id: "commerce",
    icon: "📊",
    tag: "Junior College",
    tagClass: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    title: "Junior College Commerce",
    subtitle: "XI & XII Commerce",
    shortDesc:
      "Specialised coaching for Commerce students preparing for HSC board exams with subject experts.",
    fullDesc:
      "Our Junior College Commerce programme caters to XI and XII Commerce students under the Maharashtra State Board. We provide in-depth coaching in all major Commerce subjects, with dedicated focus on answer writing, presentation skills, and board exam strategies. Faculty are experienced Commerce specialists who make complex topics accessible.",
    boards: ["Maharashtra State Board"],
    subjects: ["Accountancy", "Economics", "OCM", "SP"],
    classes: ["XI Commerce", "XII Commerce"],
    fee: "₹35,000 – ₹50,000 per year",
  },
  {
    id: "degree",
    icon: "🎓",
    tag: "Degree Coaching",
    tagClass: "bg-slate-100 text-slate-700 border border-slate-200",
    title: "Degree Coaching",
    subtitle: "BCom · BAF · BBI",
    shortDesc:
      "University-level coaching for Commerce degree students from Mumbai University affiliated colleges.",
    fullDesc:
      "Srichand Classes also provides specialised coaching for students pursuing Commerce degrees from Mumbai University. Our degree coaching covers all core subjects for BCom, BAF (Bachelor of Accounting and Finance) and BBI (Bachelor of Banking and Insurance). Exam-focused preparation with concise notes, mock papers and subject mentoring.",
    boards: ["Mumbai University"],
    subjects: ["All Core Subjects"],
    classes: ["BCom", "BAF", "BBI"],
    fee: "Contact us for details",
  },
];

// ─── FACULTY DATA ─────────────────────────────────────────────────────────────
export const FACULTY = [
  {
    id: "sanjeev",
    name: "Sanjeev Sir",
    subject: "Mathematics",
    badge: "Senior Faculty",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    borderColor: "border-blue-400",
    image: "/images/faculty/sanjeev thariani.jpeg",
    bio: "Sanjeev Sir is a veteran Mathematics teacher with over 20 years of experience coaching students across SSC, ICSE and CBSE boards. His systematic approach to problem-solving has helped hundreds of students achieve distinction in board examinations.",
    highlights: [
      "20+ years of Mathematics teaching experience",
      "Expert in SSC, ICSE and CBSE board patterns",
      "Known for simplifying complex algebraic concepts",
      "Conducts dedicated problem-solving sessions every week",
    ],
  },
  {
    id: "harsh",
    name: "Harsh Sir",
    subject: "Science",
    badge: "Senior Faculty",
    badgeClass: "bg-green-50 text-green-700 border border-green-200",
    borderColor: "border-green-400",
    image: "/images/faculty/harsh thariani.jpeg",
    bio: "Harsh Sir specialises in Physics and Chemistry for school-level students. With a strong academic background and practical teaching approach, he makes Science engaging and approachable for all types of learners.",
    highlights: [
      "Specialisation in Physics and Chemistry",
      "Concept-first teaching methodology",
      "Board exam question pattern expert",
      "Regular practical demonstrations for clarity",
    ],
  },
  {
    id: "sandeep",
    name: "Sandeep Sir",
    subject: "Accountancy & Commerce",
    badge: "Commerce Expert",
    badgeClass: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    borderColor: "border-indigo-400",
    image: "/images/faculty/sandeep thariani.jpeg",
    bio: "Sandeep Sir is the commerce specialist at Srichand Classes, handling Accountancy, Economics and OCM for XI–XII and degree-level students. His structured notes and exam-oriented preparation have produced consistently excellent results.",
    highlights: [
      "Expert in Accountancy and Economics",
      "Handles XI, XII and degree-level Commerce",
      "Known for concise, exam-ready notes",
      "Strong results in HSC Commerce every year",
    ],
  },
  {
    id: "vinesh",
    name: "Vinesh Sir",
    subject: "English & Geography",
    badge: "Faculty",
    badgeClass: "bg-slate-100 text-slate-700 border border-slate-300",
    borderColor: "border-slate-400",
    image: "/images/faculty/vinesh thariani.jpeg",
    bio: "Vinesh Sir handles English language skills and Geography with a focus on writing quality and presentation. His writing practice sessions are popular among students aiming for high scores in language papers across all boards.",
    highlights: [
      "Specialises in English language and comprehension",
      "Geography coaching for SSC, ICSE and CBSE",
      "Structured writing practice sessions",
      "Focus on answer presentation and scoring techniques",
    ],
  },
];

// ─── BRANCHES DATA ────────────────────────────────────────────────────────────
export const BRANCHES = [
  {
    id: "sion",
    name: "Sion",
    tag: "Main Branch",
    tagClass: "bg-blue-600 text-white",
    icon: "🏢",
    since: "Est. 1958",
    address:
      "5A-1/2, Road Number 24,\nSindhi Colony,\nOpp. Gurukripa Hotel,\nMumbai 400022",
    phone: "98197 73151",
    maps: "https://maps.google.com/?q=Sindhi+Colony+Sion+Mumbai",
  },
  {
    id: "matunga",
    name: "Matunga East",
    tag: "Branch",
    tagClass: "bg-slate-600 text-white",
    icon: "🏫",
    since: "Established",
    address:
      "547, Ishan Tower,\nJame Jamshed Road,\nNear King's Circle,\nMumbai 400019",
    phone: "98201 46010",
    maps: "https://maps.google.com/?q=Ishan+Tower+Matunga+East+Mumbai",
  },
  {
    id: "chembur",
    name: "Chembur",
    tag: "Branch",
    tagClass: "bg-slate-600 text-white",
    icon: "🏫",
    since: "Operational since 2019",
    address: "Near Diamond Garden,\nChembur,\nMumbai",
    phone: "98203 52980",
    maps: "https://maps.google.com/?q=Diamond+Garden+Chembur+Mumbai",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    cls: "Class X – SSC",
    rating: 5,
    text: "Great writing practice sessions. My board scores improved significantly after joining Srichand Classes.",
  },
  {
    name: "Rohan Mehta",
    cls: "XII Commerce",
    rating: 5,
    text: "Very helpful teachers. Sandeep Sir made Accountancy easy. I secured distinction in HSC.",
  },
  {
    name: "Ananya Nair",
    cls: "Class IX – ICSE",
    rating: 5,
    text: "Strong exam preparation. The weekly tests really helped me stay on track throughout the year.",
  },
  {
    name: "Vikram Joshi",
    cls: "BCom",
    rating: 4,
    text: "Excellent degree coaching. The study material and mock papers are very thorough and exam-focused.",
  },
  {
    name: "Shreya Patil",
    cls: "Class X – CBSE",
    rating: 5,
    text: "The small batch size ensures personal attention. Faculty know every student by name and track progress closely.",
  },
  {
    name: "Aarav Kulkarni",
    cls: "XI Commerce",
    rating: 5,
    text: "Made the shift from SSC to Commerce very smooth. The faculty are patient and explain concepts thoroughly.",
  },
];
