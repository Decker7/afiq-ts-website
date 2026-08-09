import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SkillsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function SkillGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills and tools used by full-stack developer Muhammad Afiq Apandi.',
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Technologies I use across product development and operations."
      intro="My toolkit covers application interfaces, backend services, production AWS infrastructure, client websites, and the development workflows used to ship and support them."
    >
      <div className="space-y-20">
        <SkillsSection title="Languages">
          <SkillGroup title="Programming and web">
            JavaScript, TypeScript, PHP, SQL, HTML5, and CSS3.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="Frontend">
          <SkillGroup title="Application interfaces">
            React, React Native, Next.js, Vue, Astro, and responsive UI.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="Backend and APIs">
          <SkillGroup title="Services and integrations">
            Node.js, Laravel, GraphQL with AppSync, REST, and webhooks.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="AWS">
          <SkillGroup title="Production cloud">
            Lambda, AppSync, DynamoDB, EC2, Lightsail, Cognito, IAM, CloudWatch,
            CloudFormation, and Amplify Gen 2.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="Data, CMS, and SEO">
          <SkillGroup title="Web platforms and data">
            MySQL, phpMyAdmin, WordPress, Shopify, Wix, and on-page SEO.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="AI-assisted development">
          <SkillGroup title="Daily development workflow">
            Claude Code, Codex, Claude, and ChatGPT, used in production work for
            scaffolding, debugging, self-review before pull requests, and
            learning unfamiliar services.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="Tooling and operations">
          <SkillGroup title="Delivery and support">
            Git, VS Code, cPanel, Cloudflare, DNS, and domain management.
          </SkillGroup>
        </SkillsSection>
        <SkillsSection title="Languages spoken">
          <SkillGroup title="Communication">
            Malay (native) and English (fluent).
          </SkillGroup>
        </SkillsSection>
      </div>
    </SimpleLayout>
  )
}
