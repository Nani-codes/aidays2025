import React from 'react'
import WorkshopCard, { Workshop } from './WorkshopCard'
import Link from 'next/link'

const workshopsSample: Workshop[] = [
  {
    title: 'Introduction to React',
    description: 'Learn the basics of React and how to build React applications.',
    badge: 'Beginner',
    audience: ['Frontend Developers', 'React Beginners']
  },
  {
    title: 'Advanced React',
    description: 'Learn advanced React patterns and optimizations.',
    badge: 'Intermediate',
    audience: ['React Developers']
  },
  {
    title: 'React Native',
    description: 'Build mobile applications with React Native.',
    badge: 'Intermediate',
    audience: ['React Developers', 'Mobile Developers']
  },
  {
    title: 'State Management with Redux',
    description: 'Learn how to manage state in your React applications with Redux.',
    badge: 'Intermediate',
    audience: ['React Developers']
  },
  {
    title: 'React Performance',
    description: 'Optimize the performance of your React applications.',
    badge: 'Advanced',
    audience: ['React Developers']
  },
  {
    title: 'Testing React Applications',
    description: 'Learn how to test your React applications.',
    badge: 'Intermediate',
    audience: ['React Developers', 'Testers']

  }
]

const WorkshopOverview = () => {
  return (
    <section className="mx-auto max-w-7xl p-6">
      <h2 className="mb-4 text-2xl font-bold">Workshops</h2>
      <Link href="/workshops">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          workshopsSample.map((workshop, index) => (
            <WorkshopCard key={index} {...workshop} />
          ))
        }
      </div>
      </Link>
    </section>
  )
}

export default WorkshopOverview