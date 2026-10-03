export const profile = {
  name: 'Kobe Vandenberghe',
  role: 'Software Engineering student',
  location: 'Roeselare, Belgium',
  github: 'https://github.com/Kobe-Vandenberghe',
  linkedin: 'https://www.linkedin.com/in/kobe-vandenberghe/',
  introduction:
    'I’m interested in how software systems are designed, deployed, and kept running. My focus is backend development with .NET, DevOps, and system architecture.',
};

export const interests = [
  {
    number: '01',
    title: 'Backend & architecture',
    description: 'Building with .NET and ASP.NET Core. I enjoy thinking about how services, data, and responsibilities fit together.',
    tools: '.NET · ASP.NET Core · PostgreSQL',
  },
  {
    number: '02',
    title: 'DevOps & infrastructure',
    description: 'Taking software beyond the application: deployments, automation, and the systems that keep it running.',
    tools: 'Azure · Docker · GitHub Actions',
  },
  {
    number: '03',
    title: 'Agentic systems',
    description: 'Building AI agent workflows with MCP, agent tools, and reusable skills. I’m interested in how runtimes give agents the right instructions and context.',
    tools: 'MCP · Agent skills · Agent tools',
  },
];

export const skills = [
  { title: 'Backend', items: ['C# / .NET', 'ASP.NET Core', 'Entity Framework Core', 'Clean Architecture', 'PostgreSQL / SQL'] },
  { title: 'Cloud & delivery', items: ['Azure / Container Apps', 'Docker', 'GitHub Actions', 'Terraform', 'Linux'] },
  { title: 'Agents & infrastructure', items: ['Model Context Protocol (MCP)', 'AI agent workflows', 'Agent tools & skills', 'Custom agent runtimes', 'RabbitMQ / MQTT'] },
];
