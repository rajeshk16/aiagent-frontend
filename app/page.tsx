import { Layout } from "@/components/layout"
import { ProfileCarousel } from "@/components/profile-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
          <span className="px-2 py-1 text-sm bg-black text-white rounded-full">New</span>
          <span className="text-sm">Your Digital Employee is Ready! 🎉</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">
            10x your Data
            <br />
            Migration using AI Agents
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Experience seamless data migrations with our
            <br />
            cutting-edge AI technology
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/projects/create">
              Get Started
            </Link>
          </Button>
        </div>

        <ProfileCarousel />
      </div>
    </Layout>
  )
}

