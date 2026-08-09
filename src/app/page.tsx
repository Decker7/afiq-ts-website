import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function WebsiteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM4.38 11.25a7.77 7.77 0 0 1 1.88-4.47 13.18 13.18 0 0 0 1.1 4.47H4.38Zm0 1.5h2.98a13.18 13.18 0 0 0-1.1 4.47 7.77 7.77 0 0 1-1.88-4.47Zm3.5 0h3.37v6.82c-1.46-.55-2.84-3.15-3.37-6.82Zm3.37-1.5H7.88c.53-3.67 1.91-6.27 3.37-6.82v6.82Zm1.5-6.82c1.46.55 2.84 3.15 3.37 6.82h-3.37V4.43Zm0 15.14v-6.82h3.37c-.53 3.67-1.91 6.27-3.37 6.82Zm3.89-8.32a13.18 13.18 0 0 0-1.1-4.47 7.77 7.77 0 0 1 1.88 4.47h-2.98 2.2Zm-1.1 5.97a13.18 13.18 0 0 0 1.1-4.47h2.98a7.77 7.77 0 0 1-1.88 4.47Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const contactLinks = [
  {
    href: 'mailto:afiqm6526@gmail.com',
    label: 'afiqm6526@gmail.com',
    icon: MailIcon,
  },
  {
    href: 'https://afiq.dev',
    label: 'afiq.dev',
    icon: WebsiteIcon,
  },
  {
    href: 'https://www.linkedin.com/in/muhammad-afiq-bin-apandi',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/Decker7',
    label: 'GitHub',
    icon: GitHubIcon,
  },
]

function ContactCard() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none fill-zinc-400 dark:fill-zinc-500" />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        For professional enquiries, email me or view my work and professional
        profiles.
      </p>
      <ul role="list" className="mt-6 space-y-3">
        {contactLinks.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
              <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-3">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Role {
  company: string
  title: string
  initials: string
  year: string
}

function Role({ role }: { role: Role }) {
  return (
    <li className="flex gap-4">
      <div
        aria-hidden="true"
        className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-xs font-semibold tracking-tight text-zinc-700 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-0"
      >
        {role.initials}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={role.year}>{role.year}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'EnsoNex / DMSA Global',
      title: 'Full-Stack Developer',
      initials: 'EN',
      year: '2026',
    },
    {
      company: 'Nexlaw AI',
      title: 'Front-End / Web Developer Intern',
      initials: 'NA',
      year: '2025',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
      <Button
        href="/muhammad-afiq-apandi-cv.pdf"
        download
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

const stack = [
  { initials: 'RN', label: 'React Native' },
  { initials: 'GQL', label: 'AppSync GraphQL' },
  { initials: 'L', label: 'AWS Lambda' },
  { initials: 'DB', label: 'DynamoDB' },
  { initials: 'A2', label: 'Amplify Gen 2' },
]

function StackTiles() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <section aria-label="Core technology stack" className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {stack.map((technology, technologyIndex) => (
          <div
            key={technology.label}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 shadow-sm ring-1 ring-zinc-900/5 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 dark:ring-white/10',
              rotations[technologyIndex % rotations.length],
            )}
          >
            <div className="flex aspect-9/10 flex-col items-center justify-center gap-3 bg-white px-6 text-center dark:bg-zinc-900">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-lg font-bold tracking-tight text-zinc-700 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10"
              >
                {technology.initials}
              </span>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {technology.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const highlights = [
  {
    title: 'Browser-based e-signature workflow',
    eyebrow: 'EnsoNex / DMSA Global',
    description:
      'Replaced nine manual signing steps, two third-party editor downloads, and several email round trips with one link both parties sign in the browser.',
    href: '/experience',
    cta: 'View experience',
  },
  {
    title: 'Production creator marketing platform',
    eyebrow: 'EnsoNex',
    description:
      'Work spanning the iOS and Android app, the AppSync GraphQL API, and the serverless AWS backend behind the platform.',
    href: '/projects',
    cta: 'View project',
  },
  {
    title: '50+ client websites',
    eyebrow: 'Nexlaw AI',
    description:
      'Built and maintained pages across WordPress, Shopify, and Wix while resolving live layout, plugin, hosting, DNS, and SEO issues.',
    href: '/experience',
    cta: 'View experience',
  },
]

function Highlight({ highlight }: { highlight: (typeof highlights)[number] }) {
  return (
    <Card as="article">
      <Card.Title href={highlight.href}>{highlight.title}</Card.Title>
      <Card.Eyebrow decorate>{highlight.eyebrow}</Card.Eyebrow>
      <Card.Description>{highlight.description}</Card.Description>
      <Card.Cta>{highlight.cta}</Card.Cta>
    </Card>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Full-stack developer building production apps and serverless AWS
            systems.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Muhammad Afiq, a full-stack developer based in Cyberjaya,
            Malaysia. I work across a production React Native app and its AWS
            backend using AppSync GraphQL, Lambda, DynamoDB, and Amplify Gen 2.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Decker7"
              aria-label="View Muhammad Afiq on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/muhammad-afiq-bin-apandi"
              aria-label="View Muhammad Afiq on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://afiq.dev"
              aria-label="Visit afiq.dev"
              icon={WebsiteIcon}
            />
            <SocialLink
              href="mailto:afiqm6526@gmail.com"
              aria-label="Email Muhammad Afiq"
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      <StackTiles />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {highlights.map((highlight) => (
              <Highlight key={highlight.title} highlight={highlight} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactCard />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
