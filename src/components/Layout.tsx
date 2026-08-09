import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-100 -translate-y-24 rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-lg outline-2 outline-offset-2 outline-teal-500 motion-safe:transition-transform focus:translate-y-0 dark:bg-white dark:text-zinc-900"
      >
        Skip to content
      </a>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
