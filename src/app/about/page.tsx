import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Muhammad Afiq Apandi, a full-stack developer based in Cyberjaya, Malaysia.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div
              role="img"
              aria-label="Muhammad Afiq Apandi, Full-Stack Developer"
              className="flex aspect-square rotate-3 flex-col items-center justify-center rounded-2xl bg-zinc-100 px-8 text-center ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
            >
              <span
                aria-hidden="true"
                className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
              >
                MA
              </span>
              <span
                aria-hidden="true"
                className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400"
              >
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Muhammad Afiq, a full-stack developer based in Cyberjaya,
            Malaysia.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I work across a production React Native application and the
              serverless AWS backend behind it, using AppSync GraphQL, Lambda,
              DynamoDB, and Amplify Gen 2.
            </p>
            <p>
              At EnsoNex Sdn. Bhd. / DMSA Global, I designed and built an
              e-signature workflow that replaced nine manual steps, two
              third-party editor downloads, and several email round trips with
              one link both parties sign in the browser.
            </p>
            <p>
              My production AWS work also covers EC2, Lightsail, CloudFormation,
              Cognito, IAM, and CloudWatch. Before that, at Nexlaw AI, I worked
              across more than 50 client websites on WordPress, Shopify, and
              Wix, handling pages, maintenance, live-site issues, hosting, DNS,
              and on-page SEO.
            </p>
            <p>
              I earned a B.CompSci in Software Engineering with Honours from
              Universiti Malaysia Pahang Al-Sultan Abdullah with a 3.53 CGPA and
              a Yayasan Terengganu scholarship. I use Claude Code and Codex
              daily for scaffolding, debugging, and self-review, while reading
              and testing the work before it is merged.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://afiq.dev" icon={WebsiteIcon}>
              Visit afiq.dev
            </SocialLink>
            <SocialLink
              href="https://github.com/Decker7"
              icon={GitHubIcon}
              className="mt-4"
            >
              View GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/muhammad-afiq-bin-apandi"
              icon={LinkedInIcon}
              className="mt-4"
            >
              View LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:afiqm6526@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              afiqm6526@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
