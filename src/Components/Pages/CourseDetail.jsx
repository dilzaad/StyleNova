
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  CheckCircle2,
  Code2,
  Palette,
  Braces,
  Layers,
  Sparkles,
  GraduationCap
} from 'lucide-react'

const courseData = {
  1: {
    title: 'Web Development',
    category: 'Development',
    description:
      'Learn how to create beautiful, responsive and modern websites from scratch using essential web technologies.',
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: '24 Lessons',
    icon: Code2,
    color: 'from-violet-600 to-indigo-600',
    topics: [
      'Introduction to HTML',
      'CSS Styling and Layouts',
      'Responsive Web Design',
      'JavaScript Fundamentals',
      'Building a Complete Website'
    ]
  },
  2: {
    title: 'React JS Mastery',
    category: 'Frontend Development',
    description:
      'Discover component-based development and learn how to build interactive user interfaces with React.',
    level: 'Intermediate',
    duration: '6 Weeks',
    lessons: '20 Lessons',
    icon: Layers,
    color: 'from-cyan-500 to-blue-600',
    topics: [
      'React Components and JSX',
      'Props and State',
      'React Hooks: useState and useEffect',
      'React Router and Navigation',
      'Building a React Project'
    ]
  },
  3: {
    title: 'JavaScript Essentials',
    category: 'Programming',
    description:
      'Strengthen your programming foundations with JavaScript, from basic syntax to interactive browser features.',
    level: 'Beginner',
    duration: '5 Weeks',
    lessons: '18 Lessons',
    icon: Braces,
    color: 'from-amber-500 to-orange-600',
    topics: [
      'Variables and Data Types',
      'Conditions and Loops',
      'Functions and Arrays',
      'Objects and Array Methods',
      'DOM Manipulation and Events'
    ]
  },
  4: {
    title: 'UI/UX Design',
    category: 'Creative Design',
    description:
      'Learn the fundamentals of user interface and user experience design to create clear, engaging digital products.',
    level: 'Beginner',
    duration: '4 Weeks',
    lessons: '16 Lessons',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    topics: [
      'UI and UX Fundamentals',
      'Color Theory and Typography',
      'Layouts and Visual Hierarchy',
      'Wireframes and Prototypes',
      'Designing a Complete Interface'
    ]
  }
}

const CourseDetail = () => {
  const { id } = useParams()
  const course = courseData[id]

  if (!course) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-950 px-5 text-center text-white">
        <div className="rounded-2xl bg-violet-500/10 p-5 text-violet-400">
          <GraduationCap size={44} />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold">
          Course Not Found
        </h1>

        <p className="mt-3 max-w-md text-gray-400">
          Sorry, we could not find this course. Please explore our
          available learning paths.
        </p>

        <Link
          to="/Courses"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-bold transition hover:bg-violet-500"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </Link>
      </div>
    )
  }

  const Icon = course.icon

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-8 lg:px-12">

      {/* Back Navigation */}
      <div className="mx-auto mb-8 max-w-7xl">
        <Link
          to="/Courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-violet-400"
        >
          <ArrowLeft size={18} />
          Back to all courses
        </Link>
      </div>

      {/* Course Hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center lg:p-14">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Sparkles size={16} />
              {course.category}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
              {course.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                <Clock size={17} className="text-violet-400" />
                {course.duration}
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                <BookOpen size={17} className="text-pink-400" />
                {course.lessons}
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                <GraduationCap size={18} className="text-blue-400" />
                {course.level}
              </span>
            </div>

            <a
              href="#curriculum"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Explore Curriculum
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Course Visual */}
          <div className="flex min-h-64 items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-8 sm:min-h-80">
            <div
              className={`rounded-[2rem] bg-gradient-to-br ${course.color} p-10 shadow-2xl transition duration-500 hover:rotate-3 hover:scale-105 sm:p-14`}
            >
              <Icon size={90} strokeWidth={1.3} />
            </div>
          </div>

        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        className="mx-auto max-w-7xl scroll-mt-24 py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              What you will learn
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Course Curriculum
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              Explore the main topics included in this learning path.
              Follow them step by step to build your understanding.
            </p>

            <div className="mt-8 space-y-4">
              {course.topics.map((topic, index) => (
                <div
                  key={topic}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-gray-900/70 p-5 transition hover:border-violet-500/40 hover:bg-gray-900"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 font-bold text-violet-400 transition group-hover:bg-violet-500/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="font-semibold text-gray-200">
                      {topic}
                    </h3>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="mt-2 shrink-0 text-gray-600 transition group-hover:text-violet-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Course Summary Card */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-gray-900 p-6 sm:p-8 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/10 p-5">
              <GraduationCap size={34} className="text-violet-400" />

              <h3 className="mt-4 text-2xl font-extrabold">
                Your Learning Journey
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Build your knowledge with a structured collection
                of topics and practical learning goals.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400">Course</span>
                <span className="max-w-40 text-right text-sm font-semibold">
                  {course.title}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400">Level</span>
                <span className="text-sm font-semibold">
                  {course.level}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400">Duration</span>
                <span className="text-sm font-semibold">
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Lessons</span>
                <span className="text-sm font-semibold">
                  {course.lessons}
                </span>
              </div>
            </div>

            <a
              href="#curriculum"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-5 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Start Exploring
              <ArrowRight size={18} />
            </a>

            <p className="mt-4 text-center text-xs text-gray-500">
              Demo learning page · No enrollment system connected
            </p>
          </aside>

        </div>
      </section>

    </div>
  )
}

export default CourseDetail
