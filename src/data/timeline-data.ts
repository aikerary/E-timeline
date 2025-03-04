export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  };
  tags: string[];
  links?: Array<{
    url: string;
    label: string;
  }>;
}

// Placeholder timeline data
export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'First Computer-Based Training',
    date: '1960',
    description: 'The PLATO (Programmed Logic for Automatic Teaching Operations) system was developed at the University of Illinois. It was the first generalized computer-assisted instruction system.',
    tags: ['CBT', 'Early Development', 'University'],
  },
  {
    id: '2',
    title: 'Distance Learning via Mail',
    date: '1980s',
    description: 'Educational institutions begin offering distance learning courses via mail, allowing students to complete coursework remotely.',
    tags: ['Distance Learning', 'Traditional'],
  },
  // More items would be added here
];
