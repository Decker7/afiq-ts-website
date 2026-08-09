import { type Metadata } from 'next'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ArrowUpRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 11 11 5m0 0H6.5M11 5v4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExperienceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
        {children}
      </div>
    </Section>
  )
}

function ExperienceItem({
  title,
  organization,
  period,
  location,
  technologies,
  href,
  children,
}: {
  title: string
  organization: string
  period: string
  location: string
  technologies: string[]
  href: string
  children: React.ReactNode
}) {
  return (
    <Card as="article" className="py-10 first:pt-0 last:pb-0">
      <div className="relative z-10 flex w-full flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <span
            aria-hidden="true"
            className="mr-3 h-4 w-0.5 rounded-full bg-teal-500 dark:bg-teal-400"
          />
          {organization}
        </p>
        <p className="shrink-0 text-sm font-medium tabular-nums text-zinc-400 dark:text-zinc-500">
          {period}
        </p>
      </div>
      <h3 className="relative z-10 mt-4 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="relative z-10 mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {location}
      </p>
      <ul
        aria-label="Technologies used"
        className="relative z-10 mt-5 flex flex-wrap gap-2"
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-white/10"
          >
            {technology}
          </li>
        ))}
      </ul>
      <ul className="relative z-10 mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-zinc-600 marker:text-teal-500 dark:text-zinc-400 dark:marker:text-teal-400">
        {children}
      </ul>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
      >
        Company website
        <ArrowUpRightIcon className="h-4 w-4 stroke-current" />
      </Link>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience and education for Muhammad Afiq Apandi.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Production engineering across mobile, AWS, and the web."
      intro="My experience covers a production React Native platform and its serverless AWS backend, along with client website delivery, maintenance, troubleshooting, and SEO."
    >
      <div className="space-y-20">
        <ExperienceSection title="Professional experience">
          <ExperienceItem
            href="https://ensonex.ai"
            title="Full-Stack Developer"
            organization="EnsoNex Sdn. Bhd. / DMSA Global"
            period="2026 - Present"
            location="Cyberjaya, Selangor"
            technologies={['React Native', 'AWS Amplify Gen 2', 'GraphQL']}
          >
            <li>
              Designed and built an e-signature workflow that replaced nine
              manual steps, two third-party editor downloads, and several email
              round trips with one browser-based signing link.
            </li>
            <li>
              Integrated the Documenso API to generate documents from templates
              and used webhooks to track signing status.
            </li>
            <li>
              Designed DynamoDB tables and access patterns for document and
              signature data, exposed through AppSync GraphQL and Lambda
              resolvers.
            </li>
            <li>
              Work hands-on with Lambda, AppSync, DynamoDB, EC2, Lightsail,
              CloudFormation, Amplify Gen 2, Cognito, IAM, and CloudWatch.
            </li>
            <li>
              Use Claude Code and Codex daily for scaffolding, debugging, and
              self-review, with the work read and tested before merging.
            </li>
          </ExperienceItem>
          <ExperienceItem
            href="https://nexlaw.ai"
            title="Front-End / Web Developer Intern"
            organization="Nexlaw AI Sdn. Bhd."
            period="2025"
            location="Puchong, Selangor"
            technologies={['WordPress', 'Shopify', 'Wix', 'Astro', 'SEO']}
          >
            <li>
              Looked after more than 50 client websites by building pages,
              publishing blog posts, customising themes and plugins, and running
              updates.
            </li>
            <li>
              Resolved plugin conflicts, broken layouts, and hosting or DNS
              issues across cPanel, ServerFreak, and Cloudflare.
            </li>
            <li>
              Delivered on-page SEO for nexlaw.ai and client sites, covering
              metadata, heading structure, internal links, and content.
            </li>
          </ExperienceItem>
        </ExperienceSection>
        <ExperienceSection title="Education">
          <Card as="article">
            <Card.Title as="h3">
              B.CompSci (Software Engineering) with Honours
            </Card.Title>
            <Card.Eyebrow decorate>2021 - 2025</Card.Eyebrow>
            <Card.Description>
              Universiti Malaysia Pahang Al-Sultan Abdullah. CGPA 3.53 and
              Yayasan Terengganu scholarship.
            </Card.Description>
          </Card>
        </ExperienceSection>
      </div>
    </SimpleLayout>
  )
}
