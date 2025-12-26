import { Users, Code, Brain, Rocket, Database, Cloud, Shield, Palette, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function Teams() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-background">
          {/* Leadership Section */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Leadership</h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Meet the visionary leaders guiding encode ai towards innovation and excellence
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                <h3 className="mb-1 text-xl font-semibold">Sarah Chen</h3>
                <p className="mb-2 text-sm text-primary">President</p>
                <p className="text-sm text-muted-foreground">
                  ML Engineer passionate about democratizing AI education and building inclusive tech communities
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                <h3 className="mb-1 text-xl font-semibold">Marcus Williams</h3>
                <p className="mb-2 text-sm text-primary">Vice President</p>
                <p className="text-sm text-muted-foreground">
                  Computer Vision researcher focused on real-time applications and ethical AI development
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                <h3 className="mb-1 text-xl font-semibold">Priya Patel</h3>
                <p className="mb-2 text-sm text-primary">Technical Lead</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack developer specializing in AI integration and scalable system architecture
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                <h3 className="mb-1 text-xl font-semibold">Alex Kim</h3>
                <p className="mb-2 text-sm text-primary">Events Coordinator</p>
                <p className="text-sm text-muted-foreground">
                  NLP enthusiast organizing impactful workshops, hackathons, and community events
                </p>
              </div>
            </div>
          </section>

          {/* Teams Section */}
          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">Our Teams</h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Specialized teams working on cutting-edge AI technologies and real-world applications
                </p>
              </div>
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Machine Learning Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing predictive models, recommendation systems, and advanced algorithms
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Emma Rodriguez</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">James Liu</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Sofia Martinez</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Ryan O'Connor</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Aisha Khan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Learning Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Building neural networks, transformers, and exploring state-of-the-art architectures
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">David Zhang</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Isabella Santos</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Michael Okafor</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Yuki Tanaka</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Olivia Brown</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Computer Vision Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating image recognition, object detection, and generative AI systems
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Lucas Silva</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Maya Gupta</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Noah Williams</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Zara Ahmed</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Ethan Park</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Natural Language Processing Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Natural Language Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Building chatbots, sentiment analysis tools, and language models
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Ava Thompson</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Carlos Mendez</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Leah Cohen</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Omar Hassan</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Chloe Wang</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Engineering Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Managing data pipelines, warehouses, and ensuring quality datasets
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Gabriel Rossi</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Hannah Lee</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Isaac Nkosi</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Jasmine Patel</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Kevin Nguyen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MLOps Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">MLOps</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploying and monitoring AI models in production with scalability
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Liam Anderson</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Mia Johnson</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Nathan Kumar</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Rachel Green</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Samuel Adeyemi</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Ethics Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Ethics</h3>
                  <p className="text-sm text-muted-foreground">
                    Researching responsible AI, bias detection, and ethical deployment
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Sophia Clarke</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Tyler Morrison</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Amara Obi</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Benjamin Cole</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Diana Fernandez</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Stack Development Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Full Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building web applications and platforms to showcase AI models
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Emily Davis</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Felix Müller</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Grace Nakamura</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Henry Wilson</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Iris Chen</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Team */}
                <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring novel AI techniques, publishing papers, and driving innovation
                  </p>
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Team Members</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Jack Peterson</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Kira Sato</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Leo Ramirez</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Morgan Taylor</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                        <p className="text-center text-xs font-medium">Nina Sharma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
