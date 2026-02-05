import React from 'react';
import {
  Construction,
  Building2,
  Layers,
  PencilRuler,
  AppWindow,
  HardHat
} from 'lucide-react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'infra',
    title: 'Infrastructure & Construction',
    description:
      'Large-scale civil engineering and urban development projects with a focus on durability and innovation.',
    icon: 'HardHat',
    image: '/assets/services/infrastructure-construction.jpg',
    steps: [
      'Initial Feasibility',
      'Structural Design',
      'Site Preparation',
      'Main Construction',
      'Final Handover'
    ]
  },
  {
    id: 'glass',
    title: 'Aluminium & Glass Works',
    description:
      'Modern aesthetic solutions for facades, windows, and structural glass elements that define modern skylines.',
    icon: 'AppWindow',
    image: '/assets/services/aluminium-glass-works.jpg',
    steps: [
      'Design Mapping',
      'Material Sourcing',
      'Precision Cutting',
      'On-site Installation',
      'Polishing & Finish'
    ]
  },
  {
    id: 'fab',
    title: 'Fabrication & Structural Works',
    description:
      'Precision metal fabrication for heavy-duty industrial frameworks and decorative structural components.',
    icon: 'Construction',
    image: '/assets/services/fabrication-structural-works.jpg',
    steps: [
      'CAD Modeling',
      'Welding & Cutting',
      'Structural Testing',
      'Erection',
      'Quality Audit'
    ]
  },
  {
    id: 'interiors',
    title: 'Interior & Exterior Solutions',
    description:
      'Comprehensive design and fit-out services transforming spaces into functional and luxurious environments.',
    icon: 'PencilRuler',
    image: '/assets/services/interior.jpg',
    steps: [
      'Concept Art',
      'Space Planning',
      'Material Selection',
      'Fit-out Phase',
      'Final Styling'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Project Solutions',
    description:
      'Tailored engineering and architectural services for unique, specialized requirements and future industries.',
    icon: 'Layers',
    image: '/assets/services/custom-project.jpg',
    steps: [
      'Discovery Call',
      'Prototype Design',
      'Agile Execution',
      'Iterative Review',
      'Global Launch'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Skyline Business Plaza',
    category: 'Infrastructure',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    description:
      'A 24-story commercial hub featuring integrated smart systems.'
  },
  {
    id: '2',
    title: 'Crystal Facade Mall',
    category: 'Aluminium',
    imageUrl:
      'https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&q=80&w=1000',
    description:
      'Full-curtain glass wall installation using premium reflective panels.'
  },
  {
    id: '3',
    title: 'Industrial Heavy Bay',
    category: 'Fabrication',
    imageUrl:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
    description:
      'Structural steel framework for a 50,000 sq ft logistics facility.'
  },
  {
    id: '4',
    title: 'Royal Executive Suite',
    category: 'Interiors',
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    description:
      'Ultra-luxurious interior design for global corporate headquarters.'
  }
];

export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  HardHat: <HardHat className="w-8 h-8 text-blue-400" />,
  AppWindow: <AppWindow className="w-8 h-8 text-blue-400" />,
  Construction: <Construction className="w-8 h-8 text-blue-400" />,
  PencilRuler: <PencilRuler className="w-8 h-8 text-blue-400" />,
  Layers: <Layers className="w-8 h-8 text-blue-400" />,
  Building2: <Building2 className="w-8 h-8 text-blue-400" />
};
