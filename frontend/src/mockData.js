export const student = {
  id: 'n1234567',
  fullName: 'Erfan Tafazoli Nasr',
  semester: 'Semester 2, 2026',
};

export const lecturer = {
  initial: 'LM',
  name: 'Lecturer',
};

export const assignment = {
  code: 'IFN636',
  title: 'IFN636 Assessment 1 - Requirements Analysis',
  dueDate: '28 Aug 2026, 23:59',
  weighting: '50%',
  description:
    'Conduct a thorough requirements analysis for a proposed university course management system. Your report must include stakeholder identification, functional and non-functional requirements, use case diagrams, and a requirements traceability matrix.',
};

export const assessments = [
  {
    id: 'A1',
    label: 'Assessment 1 - Requirements Analysis (Active)',
    windowOpen: true,
  },
  {
    id: 'A2',
    label: 'Assessment 2 - Final Project (Not Started)',
    windowOpen: false,
  },
];

export const enrolledCount = 48;

export const submissions = [
  {
    id: 'S-1001',
    assessmentId: 'A1',
    studentId: 'n12345678',
    studentName: 'Alexandra Petrov',
    fileName: 'n12345678_IFN636_A1_Report.pdf',
    fileSize: '1.2 MB',
    submissionDate: '14 Aug 2026, 10:22',
    status: 'Submitted',
  },
  {
    id: 'S-1002',
    assessmentId: 'A1',
    studentId: 'n98723401',
    studentName: 'James Okonkwo',
    fileName: 'n98723401_IFN636_Assignment1_Final.pdf',
    fileSize: '874 KB',
    submissionDate: '14 Aug 2026, 11:05',
    status: 'Submitted',
  },
  {
    id: 'S-1003',
    assessmentId: 'A1',
    studentId: 'n44512786',
    studentName: 'Mei-Lin Huang',
    fileName: 'n44512786_IFN636_A1.pdf',
    fileSize: '2.1 MB',
    submissionDate: '15 Aug 2026, 08:47',
    status: 'Submitted',
  },
  {
    id: 'S-1004',
    assessmentId: 'A1',
    studentId: 'n67892384',
    studentName: 'Carlos Mendes',
    fileName: 'n67892384_report_IFN636.pdf',
    fileSize: '1.6 MB',
    submissionDate: '15 Aug 2026, 13:30',
    status: 'Submitted',
  },
  {
    id: 'S-1005',
    assessmentId: 'A1',
    studentId: 'n38198456',
    studentName: 'Priya Nair',
    fileName: 'n38198456_IFN636_Submission.pdf',
    fileSize: '955 KB',
    submissionDate: '16 Aug 2026, 09:14',
    status: 'Submitted',
  },
];

export const assessmentOptions = assessments.map((assessment) => assessment.label);
