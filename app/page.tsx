import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Sparkles, Brain, Rocket, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Building the future of AI</span>
              </div>
              <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-balance lg:text-7xl">
                Where innovation meets intelligence
              </h1>
              <p className="mb-10 max-w-2xl text-lg text-muted-foreground text-pretty lg:text-xl">
                A community of AI enthusiasts, developers, and innovators pushing the boundaries of artificial
                intelligence through hands-on learning and real-world projects.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </section>

          <section className="border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">What We Do</h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  encode ai is dedicated to exploring and advancing artificial intelligence through collaborative
                  learning and practical application
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Workshops</h3>
                  <p className="text-muted-foreground">
                    Regular hands-on workshops covering machine learning, deep learning, NLP, computer vision, and the
                    latest AI frameworks.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Build Projects</h3>
                  <p className="text-muted-foreground">
                    Collaborate on real-world AI applications, from chatbots and recommendation systems to autonomous
                    agents and generative AI.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Hackathons</h3>
                  <p className="text-muted-foreground">
                    Participate in exciting AI hackathons and competitions where you can showcase your skills and win
                    prizes.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Networking</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow AI enthusiasts, industry professionals, and potential collaborators in a vibrant
                    community.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Guest Speakers</h3>
                  <p className="text-muted-foreground">
                    Learn from industry experts and researchers through talks, panels, and Q&A sessions about
                    cutting-edge AI developments.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Research Groups</h3>
                  <p className="text-muted-foreground">
                    Join specialized research groups focusing on specific AI domains like reinforcement learning, GANs,
                    and transformer models.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">Our Team</h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Meet the dedicated members leading encode ai and fostering innovation
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                  <h3 className="mb-1 text-lg font-semibold">Sarah Chen</h3>
                  <p className="mb-2 text-sm text-primary">President</p>
                  <p className="text-sm text-muted-foreground">
                    ML Engineer passionate about democratizing AI education
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                  <h3 className="mb-1 text-lg font-semibold">Marcus Williams</h3>
                  <p className="mb-2 text-sm text-primary">Vice President</p>
                  <p className="text-sm text-muted-foreground">
                    Computer Vision researcher with focus on real-time applications
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                  <h3 className="mb-1 text-lg font-semibold">Priya Patel</h3>
                  <p className="mb-2 text-sm text-primary">Technical Lead</p>
                  <p className="text-sm text-muted-foreground">Full-stack developer specializing in AI integration</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                  <h3 className="mb-1 text-lg font-semibold">Alex Kim</h3>
                  <p className="mb-2 text-sm text-primary">Events Coordinator</p>
                  <p className="text-sm text-muted-foreground">NLP enthusiast organizing workshops and hackathons</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-y border-border">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Industry Partners</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-balance lg:text-5xl">
                Ready to start your AI journey?
              </h2>
              <p className="mb-10 max-w-2xl text-lg text-muted-foreground text-pretty">
                Join encode ai today and become part of a thriving community pushing the boundaries of artificial
                intelligence.
              </p>
              <Button size="lg" className="gap-2">
                Join the Community <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-primary" />
                  <span className="font-semibold">encode ai</span>
                </div>
                <p className="text-sm text-muted-foreground">© 2025 encode ai. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
