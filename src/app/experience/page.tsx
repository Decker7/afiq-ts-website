import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
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
  technologies: string
  href: string
  children: React.ReactNode
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>
        {organization} · {period}
      </Card.Eyebrow>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        <p>{location}</p>
        <p className="mt-2 font-medium text-zinc-700 dark:text-zinc-300">
          {technologies}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">{children}</ul>
      </div>
      <Card.Cta>Visit company website</Card.Cta>
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
            technologies="React Native, AWS Amplify Gen 2, GraphQL"
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
            technologies="WordPress, Shopify, Wix, Astro, SEO"
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
