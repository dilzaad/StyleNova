
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Code2,
  Palette,
  Braces,
  Layers,
  ArrowRight,
  Clock,
  BookOpen,
  Sparkles
} from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Web Development',
    category: 'Development',
    description:
      'Learn to build beautiful and responsive websites using HTML, CSS and modern web technologies.',
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: '24 Lessons',
    icon: Code2,
    color: 'from-violet-600 to-indigo-600',
    glow: 'group-hover:shadow-violet-500/10',
    tag: 'Popular'
  },
  {
    id: 2,
    title: 'React JS Mastery',
    category: 'Frontend',
    description:
      'Build interactive user interfaces with React components, props, hooks and routing.',
    level: 'Intermediate',
    duration: '6 Weeks',
    lessons: '20 Lessons',
    icon: Layers,
    color: 'from-cyan-500 to-blue-600',
    glow: 'group-hover:shadow-blue-500/10',
    tag: 'Trending'
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    category: 'Programming',
    description:
      'Understand JavaScript fundamentals, functions, arrays, objects and DOM manipulation.',
    level: 'Beginner',
    duration: '5 Weeks',
    lessons: '18 Lessons',
    icon: Braces,
    color: 'from-amber-500 to-orange-600',
    glow: 'group-hover:shadow-orange-500/10',
    tag: 'Essential'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    category: 'Design',
    description:
      'Explore visual design, layouts, colors and user-friendly interface design principles.',
    level: 'Beginner',
    duration: '4 Weeks',
    lessons: '16 Lessons',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    glow: 'group-hover:shadow-pink-500/10',
    tag: 'Creative'
  }
]

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-12 text-white sm:px-8 lg:px-12">

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gray-900 px-6 py-14 sm:px-12 sm:py-20">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <Sparkles size={16} />
            Learn something new
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            Upgrade your skills.
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Build your future.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Explore our learning paths, strengthen your skills and
            turn your ideas into real projects. Your next step starts here.
          </p>

          <a
            href="#course-list"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Explore Courses
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Course Heading */}
      <section
        id="course-list"
        className="mx-auto max-w-7xl scroll-mt-24 pt-16"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              Find your path
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Explore Courses
            </h2>

            <p className="mt-3 text-gray-400">
              Choose a skill and start learning at your own pace.
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            {courses.length} Learning Paths
          </span>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => {
            const Icon = course.icon

            return (
              <article
                key={course.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl ${course.glow}`}
              >
                {/* Card Header */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${course.color} p-6`}
                >
                  <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-white/20 transition duration-500 group-hover:scale-125" />

                  <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-sm">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-xs font-semibold">
                      {course.tag}
                    </span>
                  </div>

                  <p className="relative mt-8 text-sm font-medium text-white/80">
                    {course.category}
                  </p>

                  <h3 className="relative mt-1 text-2xl font-extrabold">
                    {course.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="min-h-20 text-sm leading-6 text-gray-400">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300">
                      <BookOpen
                        size={14}
                        className="mr-1 inline"
                      />
                      {course.lessons}
                    </span>

                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300">
                      <Clock
                        size={14}
                        className="mr-1 inline"
                      />
                      {course.duration}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm text-gray-400">
                      {course.level}
                    </span>

                    <Link
                      to={`/Courses/${course.id}`}
                      className="inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:gap-3 hover:text-pink-400"
                    >
                      Explore
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto mt-16 max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/50 via-gray-900 to-pink-950/40 px-6 py-12 text-center sm:px-12">
        <Sparkles className="mx-auto text-violet-400" size={32} />

        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          Your learning journey starts today.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Pick a course, practice consistently and keep building
          something amazing.
        </p>

        <a
          href="#course-list"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-gray-200"
        >
          Find Your Course
          <ArrowRight size={18} />
        </a>
      </section>

    </div>
  )
}

export default Courses
