export type Category =
  | 'Voice AI'
  | 'AI Automation'
  | 'AI Agents'
  | 'SaaS & Software'
  | 'RAG & Intelligence'
  | 'Systems Integration'

export type VisualKind = 'call' | 'flow' | 'chat' | 'dashboard' | 'agent' | 'integration'

export type Project = {
  slug: string
  title: string
  featuredTitle?: string // homepage-only title override
  category: Category
  industry?: string
  summary: string
  problem: string
  built: string
  how: string
  flow: { label: string; note?: string }[]
  stack?: string[]
  outcomes: string[]
  results?: { value: string; label: string }[]
  visual: VisualKind
  wide?: boolean
  featured?: boolean
}

export const categories: ('All Projects' | Category)[] = [
  'All Projects',
  'Voice AI',
  'AI Automation',
  'AI Agents',
  'SaaS & Software',
  'RAG & Intelligence',
  'Systems Integration',
]

/*
  RULES: only publish numbers/clients you can back up. Entries marked
  "// VERIFY" are descriptive text written from the project title and
  stack only; replace with real details when you have them.
*/
export const projects: Project[] = [
  {
    slug: 'daveys-plumbing',
    title: "24/7 AI Voice Agent for Davey's Plumbing",
    featuredTitle: "Davey's Plumbing: 24/7 AI Voice Agent",
    category: 'Voice AI',
    industry: 'Plumbing & home services (United States)',
    summary:
      'An inbound voice agent that answers every call, troubleshoots common issues, books jobs and hands over to a person when needed.',
    problem:
      'Calls arriving after hours or while the team was on a job went unanswered, so leads went to competitors and booking relied on staff being free.',
    built:
      'An AI voice agent that answers every call, troubleshoots common issues from a knowledge base, books appointments through the Joober API, and transfers to a person when needed.',
    how:
      'Each call is answered instantly. The agent qualifies the customer, checks the knowledge base for common issues, books an appointment straight into Joober, and transfers to a human when the situation calls for it.',
    flow: [
      { label: 'Incoming Call', note: 'Answered at any hour' },
      { label: 'AI Voice Agent', note: 'Troubleshoots from a knowledge base' },
      { label: 'Customer Qualification', note: 'Captures details and urgency' },
      { label: 'Joober Appointment Booking', note: 'Booked via the Joober API' },
      { label: 'Human Handoff When Needed', note: 'Transfers to staff' },
    ],
    stack: ['VAPI', 'GPT-4', 'Python FastAPI', 'Joober API'],
    outcomes: [
      'No missed calls or lost leads outside office hours',
      'Appointments land directly in the scheduling system, with no re-entry',
      'Staff stay on jobs instead of answering the phone',
      'Coverage around the clock without hiring extra call handlers',
    ],
    results: [
      { value: '0', label: 'missed calls after hours' },
      { value: '24/7', label: 'call handling' },
      { value: '3 weeks', label: 'to deploy' },
      { value: '100%', label: 'calls captured and logged' },
    ],
    visual: 'call',
    wide: true,
    featured: true,
  },
  {
    slug: 'ai-voice-receptionist',
    title: 'AI Voice Receptionist',
    category: 'Voice AI',
    summary:
      'First-line call handling that answers common questions, takes caller details, and books meetings or callbacks.',
    problem: 'Routine calls take up staff time, and calls outside working hours go unanswered.',
    built:
      'A voice agent that answers common questions, takes the caller’s details, and books meetings or callbacks.',
    how: 'The agent picks up, answers from approved information, collects the caller’s details and books a meeting or callback.',
    flow: [
      { label: 'Incoming Call' },
      { label: 'Speech to Text', note: 'Deepgram' },
      { label: 'Conversation', note: 'GPT-4o' },
      { label: 'Voice Reply', note: 'ElevenLabs' },
      { label: 'Meeting or Callback Booked' },
    ],
    stack: ['VAPI', 'GPT-4o', 'ElevenLabs', 'Deepgram'],
    outcomes: [
      'Callers get an answer instead of voicemail',
      'Staff only handle calls that need a person',
      'Callbacks and meetings are booked automatically',
    ],
    visual: 'call',
  },
  {
    slug: 'voice-ai-insurance',
    title: 'Voice AI Solutions for Insurance Businesses',
    featuredTitle: 'AI Voice Agents for Insurance & Law Firms',
    category: 'Voice AI',
    industry: 'Insurance',
    summary: 'Voice agents that handle inbound calls and capture caller details for insurance teams.', // VERIFY
    problem: 'Insurance teams field a steady stream of routine calls that pull staff away from complex work.', // VERIFY
    built: 'Voice agents that answer calls, collect the information a team needs, and route to the right person.', // VERIFY
    how: 'The agent answers, gathers caller details, and passes the conversation to staff with the information already captured.', // VERIFY
    flow: [
      { label: 'Incoming Call' },
      { label: 'AI Voice Agent' },
      { label: 'Caller Details Captured' },
      { label: 'Routed to Staff' },
    ],
    outcomes: [
      'Callers get answered instead of waiting',
      'Staff receive calls with details already captured',
    ],
    visual: 'call',
    featured: true,
  },
  {
    slug: 'voice-ai-law-firms',
    title: 'Voice AI Solutions for Law Firms',
    category: 'Voice AI',
    industry: 'Legal',
    summary: 'Voice agents that answer inbound enquiries and capture details for law firm teams.', // VERIFY
    problem: 'Law firms miss enquiries when fee earners are in meetings or the office is closed.', // VERIFY
    built: 'Voice agents that answer calls, capture the caller’s details and matter, and route to the right person.', // VERIFY
    how: 'The agent answers, records who is calling and why, and hands the details to the firm.', // VERIFY
    flow: [
      { label: 'Incoming Call' },
      { label: 'AI Voice Agent' },
      { label: 'Enquiry Captured' },
      { label: 'Routed to the Firm' },
    ],
    outcomes: [
      'Enquiries are captured outside office hours',
      'The team gets structured details instead of voicemail',
    ],
    visual: 'call',
  },
  {
    slug: 'ai-sales-agent-platform',
    title: 'AI Sales Agent Platform',
    category: 'AI Agents',
    summary: 'An agent platform that sources leads, drafts personalised outreach and keeps the pipeline organised.', // VERIFY
    problem: 'Prospecting and outreach are repetitive and hard to keep consistent by hand.', // VERIFY
    built: 'A platform connecting Apollo lead data, GPT-4o drafting, n8n orchestration and an Airtable pipeline.', // VERIFY
    how: 'n8n pulls leads from Apollo, GPT-4o prepares the outreach, and results are stored in Airtable.', // VERIFY
    flow: [
      { label: 'Leads', note: 'Apollo' },
      { label: 'Orchestration', note: 'n8n' },
      { label: 'Personalised Outreach', note: 'GPT-4o' },
      { label: 'Pipeline Records', note: 'Airtable' },
    ],
    stack: ['Apollo', 'GPT-4o', 'n8n', 'Airtable'],
    outcomes: ['Less manual prospecting work', 'One organised view of the pipeline'],
    visual: 'agent',
    featured: true,
  },
  {
    slug: 'ai-meeting-insights-agent',
    title: 'AI Meeting Insights Agent',
    category: 'AI Agents',
    summary: 'An agent that turns Zoom meetings into searchable knowledge using RAG.', // VERIFY
    problem: 'Useful detail from meetings is hard to find again afterwards.', // VERIFY
    built: 'A workflow that takes Zoom meeting content through n8n into a Qdrant vector store for retrieval.', // VERIFY
    how: 'Meeting content is processed by n8n, stored in Qdrant, and retrieved with RAG when someone asks a question.', // VERIFY
    flow: [
      { label: 'Zoom Meeting' },
      { label: 'n8n Workflow' },
      { label: 'Qdrant Vector Store' },
      { label: 'RAG Answers' },
    ],
    stack: ['Zoom', 'n8n', 'Qdrant', 'RAG'],
    outcomes: ['Past meetings become searchable', 'Answers come from what was actually discussed'],
    visual: 'chat',
  },
  {
    slug: 'rag-document-intelligence',
    title: 'RAG Document Intelligence System',
    category: 'RAG & Intelligence',
    summary: 'Ask questions of your own documents and get answers grounded in the source material.', // VERIFY
    problem: 'Knowledge locked inside documents is slow to search and easy to miss.', // VERIFY
    built: 'A retrieval-augmented system built with LangChain, Pinecone and Groq, with a Next.js interface.', // VERIFY
    how: 'Documents are indexed in Pinecone. Questions retrieve the relevant passages, and the model answers from them.', // VERIFY
    flow: [
      { label: 'Documents Uploaded' },
      { label: 'Indexed', note: 'Pinecone' },
      { label: 'Retrieval', note: 'LangChain' },
      { label: 'Answer', note: 'Groq' },
    ],
    stack: ['LangChain', 'Pinecone', 'Groq', 'Next.js'],
    outcomes: ['Faster answers from your own documents', 'Responses tied to source material'],
    visual: 'chat',
    featured: true,
  },
  {
    slug: 'rag-support-chatbot',
    title: 'RAG Support Chatbot',
    category: 'RAG & Intelligence',
    summary: 'A 24/7 support assistant trained on your own documents that replies in several languages and cites its sources.',
    problem: 'Customers and staff ask the same product, assembly and adjustment questions again and again.',
    built:
      'A chatbot that answers from uploaded PDFs and catalogs, replies in several languages, cites its sources, and hands over to a person when it is unsure.',
    how: 'Questions are matched against uploaded documents. The answer cites its source, and uncertain cases go to a person.',
    flow: [
      { label: 'Customer Question' },
      { label: 'Document Retrieval', note: 'PDFs and catalogs' },
      { label: 'Answer with Sources' },
      { label: 'Human Handoff', note: 'When unsure' },
    ],
    outcomes: [
      'Answers at any hour, in the customer’s language',
      'Experts spend time on complex cases, not repeat questions',
      'Every answer shows its source, so it can be checked',
    ],
    visual: 'chat',
  },
  {
    slug: 'n8n-automation-systems',
    title: 'n8n Automation Systems',
    category: 'AI Automation',
    summary: 'Multi-platform workflow and AI integration built on n8n.',
    problem: 'Teams move data between tools by hand, which is slow and error-prone.', // VERIFY
    built: 'Workflows that connect multiple platforms and add AI steps where they help.', // VERIFY
    how: 'A trigger starts the workflow, data moves between connected platforms, and AI steps handle the judgement work.', // VERIFY
    flow: [
      { label: 'Trigger' },
      { label: 'Multi-platform Workflow', note: 'n8n' },
      { label: 'AI Step' },
      { label: 'Systems Updated' },
    ],
    stack: ['n8n'],
    outcomes: ['Less manual data movement', 'Consistent, repeatable processes'],
    visual: 'flow',
  },
  {
    slug: 'api-workflow-retry-system',
    title: 'Automated API Workflow',
    category: 'AI Automation',
    summary: 'An API workflow with conditional logic and an automatic retry system.',
    problem: 'API calls fail intermittently, and manual re-runs waste time.', // VERIFY
    built: 'An automated workflow with conditional branching and retries when a call fails.', // VERIFY
    how: 'Each call is checked, branches follow conditions, and failed requests retry automatically.', // VERIFY
    flow: [
      { label: 'Trigger' },
      { label: 'Conditional Logic' },
      { label: 'API Call' },
      { label: 'Retry on Failure' },
      { label: 'Result Logged' },
    ],
    outcomes: ['Failures recover without manual re-runs', 'Clear handling for each condition'],
    visual: 'flow',
  },
  {
    slug: 'uk-logistics-route-automation',
    title: 'Route Data Automation for a UK Logistics Company',
    category: 'AI Automation',
    industry: 'Logistics (United Kingdom)',
    summary: 'An AI pipeline that updates route data across three systems in one run.',
    problem: 'The operations team spent five hours every Monday updating route data by hand across three separate systems.',
    built: 'An AI pipeline that pulls, processes and updates all three systems in one run, with no manual input.',
    how: 'The pipeline collects route data, processes it, and writes the update to all three systems together.',
    flow: [
      { label: 'Pull Route Data' },
      { label: 'Process' },
      { label: 'Update All Three Systems' },
    ],
    outcomes: [
      'Hours of repetitive work returned to the operations team every week',
      'Fewer copy-and-paste errors, and the systems always agree',
      'Volume can grow without adding administrative headcount',
    ],
    results: [{ value: '18 hrs', label: 'saved every week' }],
    visual: 'flow',
  },
  {
    slug: 'b2b-scheduling-platform',
    title: 'B2B Scheduling Platform',
    category: 'SaaS & Software',
    industry: 'B2B SaaS (United States)',
    summary: 'A multi-tenant scheduling product with billing and a custom calendar engine, from MVP to 10K users.',
    problem: 'A founder needed a production-ready product, not a prototype, to start onboarding business customers quickly.',
    built: 'A multi-tenant platform with Stripe billing, a custom calendar engine and a full CI/CD pipeline.',
    how: 'Each business customer gets its own tenant with scheduling and subscription billing, shipped through automated deployment.',
    flow: [
      { label: 'Customer Signs Up' },
      { label: 'Tenant Created' },
      { label: 'Calendar Engine' },
      { label: 'Stripe Billing' },
    ],
    stack: ['Stripe'],
    outcomes: [
      'Revenue-ready from launch, with subscriptions and billing built in',
      'Architecture that supports many customers without rework',
      'Safe, repeatable releases through automated deployment',
    ],
    results: [
      { value: '9 weeks', label: 'kickoff to production' },
      { value: '10K', label: 'users' },
    ],
    visual: 'dashboard',
    wide: true,
  },
  {
    slug: 'dealer-customer-portal',
    title: 'Dealer and Customer Portal',
    category: 'SaaS & Software',
    summary: 'A self-service portal for quotes, orders and documents.',
    problem: 'Quote requests, order status and document requests all go through email and phone calls.',
    built: 'A portal covering quote requests, order tracking, document downloads and status notifications.',
    how: 'Customers log in to request quotes, follow orders and download documents, and get notified as status changes.',
    flow: [
      { label: 'Quote Request' },
      { label: 'Order Tracking' },
      { label: 'Document Downloads' },
      { label: 'Status Notifications' },
    ],
    outcomes: [
      'Customers find order status themselves',
      'Fewer “where is my order?” calls and emails',
      'Documents are always one click away',
    ],
    visual: 'dashboard',
  },
  {
    slug: 'erp-crm-integration',
    title: 'ERP & CRM Data Integration',
    category: 'Systems Integration',
    summary: 'Integrations that sync ERP and CRM data into a single dashboard.',
    problem: 'Data sits in separate systems, so teams re-enter it or work from out-of-date numbers.',
    built: 'Integrations that sync ERP and CRM data into a single dashboard.',
    how: 'Data from both systems is synced on a schedule and shown in one place.',
    flow: [
      { label: 'ERP' },
      { label: 'CRM' },
      { label: 'Sync Layer' },
      { label: 'Single Dashboard' },
    ],
    outcomes: [
      'One view of customers, orders and activity',
      'No double entry between systems',
      'Decisions are based on current data',
    ],
    visual: 'integration',
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const featuredProjects = () => projects.filter((p) => p.featured)

export const relatedProjects = (p: Project, n = 3) => {
  const same = projects.filter((x) => x.slug !== p.slug && x.category === p.category)
  const rest = projects.filter((x) => x.slug !== p.slug && x.category !== p.category)
  return [...same, ...rest].slice(0, n)
}