import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Cpu } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Sort skills by level for better visual
  const data = [...SKILLS].sort((a, b) => b.level - a.level);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-white/10 p-3 rounded shadow-lg">
          <p className="text-white font-bold">{label}</p>
          <p className="text-primary">{`Proficiency: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-12 justify-center">
          <Cpu className="text-accent w-8 h-8" />
          <h2 className="text-4xl font-bold text-white text-center">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-surface/50 p-6 rounded-2xl border border-white/5 shadow-xl h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150} 
                  tick={{ fill: '#94a3b8', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="level" radius={[0, 4, 4, 0]}>
                   {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#06b6d4'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Tags/Categories */}
          <div className="space-y-6">
            <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                        <span 
                            key={skill.name} 
                            className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 transition-colors cursor-default"
                        >
                            {skill.name}
                        </span>
                    ))}
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">GraphQL</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">Docker</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">AWS</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">Figma</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10">UI/UX</span>
                </div>
                
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Focus Areas</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Performance Optimization</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Accessibility (a11y)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div>Generative AI Integration</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;