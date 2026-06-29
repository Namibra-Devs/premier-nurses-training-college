// Comprehensive search data for PNTC website
// This data structure makes all site content searchable

export const searchableContent = [
  // Programs
  {
    id: "rn-program",
    title: "Registered General Nursing Program",
    category: "Programs",
    excerpt: "Professional nursing program preparing students for registration as general nurses.",
    keywords: ["nursing", "RGN", "registered nurse", "general nursing", "healthcare", "patient care"],
    path: "/academics#programs",
  },
  {
    id: "midwifery-program",
    title: "Registered Midwifery Program",
    category: "Programs",
    excerpt: "Specialized training in maternal and newborn care for aspiring midwives.",
    keywords: ["midwifery", "maternal care", "newborn", "pregnancy", "delivery", "women health"],
    path: "/academics#programs",
  },
  {
    id: "rna-program",
    title: "Registered Nurse Assistant (Clinical) Program",
    category: "Programs",
    excerpt: "Clinical nursing assistant training program for entry-level healthcare professionals.",
    keywords: ["nurse assistant", "RNA", "clinical", "entry level", "healthcare assistant"],
    path: "/academics#programs",
  },

  // Admissions
  {
    id: "admission-requirements",
    title: "Admission Requirements",
    category: "Admissions",
    excerpt: "Core and elective subject requirements for all nursing programs. C6 in English, Maths, and Science for RGN/Midwifery.",
    keywords: ["requirements", "admission", "entry", "qualifications", "WASSCE", "grades", "C6", "E8"],
    path: "/admissions",
  },
  {
    id: "how-to-apply",
    title: "How to Apply",
    category: "Admissions",
    excerpt: "Step-by-step application process for prospective students.",
    keywords: ["apply", "application", "register", "enroll", "admission process", "submit"],
    path: "/admissions",
  },
  {
    id: "apply-online",
    title: "Apply Online",
    category: "Admissions",
    excerpt: "Submit your application online through our application portal.",
    keywords: ["apply online", "online application", "portal", "submit application"],
    path: "https://apply.pntc.edu.gh/register",
    external: true,
  },
  {
    id: "purchase-voucher",
    title: "Buy Admission Voucher",
    category: "Admissions",
    excerpt: "Purchase your admission form voucher to begin the application process.",
    keywords: ["voucher", "buy", "purchase", "admission form", "payment"],
    path: "https://apply.pntc.edu.gh/purchase-voucher",
    external: true,
  },
  {
    id: "financial-aid",
    title: "Financial Aid & Scholarships",
    category: "Admissions",
    excerpt: "Information about scholarships, grants, and financial assistance available to students.",
    keywords: ["scholarship", "financial aid", "grants", "loans", "funding", "tuition assistance"],
    path: "/admissions",
  },

  // About
  {
    id: "about-pntc",
    title: "About PNTC",
    category: "About",
    excerpt: "Learn about Premier Nurses' Training College's mission, vision, and history.",
    keywords: ["about", "history", "background", "who we are", "PNTC story"],
    path: "/aboutus",
  },
  {
    id: "mission-vision",
    title: "Mission & Vision",
    category: "About",
    excerpt: "Our mission to provide quality nursing education and vision to be continentally acclaimed.",
    keywords: ["mission", "vision", "goals", "objectives", "values"],
    path: "/aboutus#vissionAndValues",
  },
  {
    id: "leadership",
    title: "Leadership & Faculty",
    category: "About",
    excerpt: "Meet our experienced leadership team and qualified faculty members.",
    keywords: ["leadership", "faculty", "staff", "teachers", "instructors", "principal", "administration"],
    path: "/aboutus#leadership",
  },
  {
    id: "accreditation",
    title: "Accreditation & Affiliations",
    category: "About",
    excerpt: "PNTC is accredited by the Nursing and Midwifery Council of Ghana and affiliated with recognized institutions.",
    keywords: ["accreditation", "affiliated", "recognized", "approved", "certification", "NMC"],
    path: "/aboutus",
  },

  // Academics
  {
    id: "curriculum",
    title: "Curriculum",
    category: "Academics",
    excerpt: "Comprehensive curriculum covering theoretical and practical nursing education.",
    keywords: ["curriculum", "courses", "subjects", "syllabus", "program structure"],
    path: "/academics",
  },
  {
    id: "academic-calendar",
    title: "Academic Calendar",
    category: "Academics",
    excerpt: "Important dates, semester schedules, and academic deadlines.",
    keywords: ["calendar", "schedule", "dates", "semester", "academic year", "term"],
    path: "/academics",
  },
  {
    id: "faculty-directory",
    title: "Faculty Directory",
    category: "Academics",
    excerpt: "Directory of our qualified and experienced teaching staff.",
    keywords: ["faculty", "lecturers", "instructors", "tutors", "teaching staff"],
    path: "/academics",
  },

  // Students
  {
    id: "student-life",
    title: "Student Life",
    category: "Students",
    excerpt: "Campus life, student activities, clubs, and organizations at PNTC.",
    keywords: ["student life", "campus", "activities", "clubs", "organizations", "events"],
    path: "/students",
  },
  {
    id: "alumni",
    title: "Alumni Network",
    category: "Students",
    excerpt: "Connect with PNTC alumni and access alumni resources.",
    keywords: ["alumni", "graduates", "former students", "network"],
    path: "/students#alumni",
  },
  {
    id: "student-portal",
    title: "Student Portal",
    category: "Students",
    excerpt: "Access the student information system for grades, schedules, and resources.",
    keywords: ["student portal", "MIS", "login", "grades", "results", "timetable"],
    path: "https://mis.pntc.edu.gh/login",
    external: true,
  },
  {
    id: "facilities",
    title: "Facilities",
    category: "Students",
    excerpt: "State-of-the-art facilities including labs, library, and clinical training centers.",
    keywords: ["facilities", "infrastructure", "labs", "library", "equipment", "resources"],
    path: "/students",
  },

  // Contact
  {
    id: "contact-us",
    title: "Contact Us",
    category: "Contact",
    excerpt: "Get in touch with PNTC for inquiries, support, or more information.",
    keywords: ["contact", "email", "phone", "address", "location", "reach us"],
    path: "/contactus",
  },
  {
    id: "location",
    title: "Location & Directions",
    category: "Contact",
    excerpt: "Find us at Moshie Zongo, Kumasi, Ghana. View map and directions.",
    keywords: ["location", "address", "map", "directions", "kumasi", "moshie zongo"],
    path: "/contactus",
  },

  // Additional Pages
  {
    id: "faq",
    title: "Frequently Asked Questions",
    category: "Information",
    excerpt: "Common questions about admissions, programs, and student life.",
    keywords: ["FAQ", "questions", "answers", "help", "common questions"],
    path: "/#faq",
  },
];

// Search function with fuzzy matching
export const searchContent = (query) => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const words = searchTerm.split(" ").filter(word => word.length > 0);

  return searchableContent
    .map(item => {
      let score = 0;

      // Title exact match (highest priority)
      if (item.title.toLowerCase().includes(searchTerm)) {
        score += 100;
      }

      // Title word match
      words.forEach(word => {
        if (item.title.toLowerCase().includes(word)) {
          score += 50;
        }
      });

      // Keywords match
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 80;
        }
        words.forEach(word => {
          if (keyword.toLowerCase().includes(word)) {
            score += 30;
          }
        });
      });

      // Excerpt match
      if (item.excerpt.toLowerCase().includes(searchTerm)) {
        score += 40;
      }

      // Category match
      if (item.category.toLowerCase().includes(searchTerm)) {
        score += 60;
      }

      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Return top 10 results
};

// Get popular searches or suggestions
export const popularSearches = [
  "Admission Requirements",
  "Apply Online",
  "Nursing Programs",
  "Tuition Fees",
  "Student Portal",
  "Contact",
];

// Category filter options
export const searchCategories = [
  "All",
  "Programs",
  "Admissions",
  "About",
  "Academics",
  "Students",
  "Contact",
];
