import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-background">
          {/* Header */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Events</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Join us for workshops, hackathons, and networking events. Stay connected with the AI community.
              </p>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Upcoming Events</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">AI Hackathon 2025</h3>
                    <p className="text-muted-foreground">
                      48-hour hackathon focused on building innovative AI solutions for real-world problems. Teams of
                      3-5 members will compete for prizes worth $10,000.
                    </p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Featured</div>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Tech Hub Building, Room 301</span>
                  </div>
                </div>
                <Button className="gap-2">
                  Register Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold">Introduction to Large Language Models</h3>
                  <p className="text-muted-foreground">
                    Hands-on workshop covering the fundamentals of LLMs, prompt engineering, and fine-tuning techniques.
                    Perfect for beginners and intermediate learners.
                  </p>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>February 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>6:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Online (Zoom)</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Register Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold">Guest Speaker: Dr. Emily Zhang</h3>
                  <p className="text-muted-foreground">
                    Join us for an inspiring talk by Dr. Emily Zhang, AI Research Scientist at OpenAI, discussing the
                    future of AI safety and alignment.
                  </p>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>7:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Register Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Past Events */}
          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold tracking-tight">Past Events</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">Winter AI Workshop Series</h3>
                    <span className="text-sm text-muted-foreground">January 2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Five-week series covering neural networks, computer vision, NLP, reinforcement learning, and
                    generative AI. Over 200 members participated with hands-on coding sessions and project
                    presentations.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">Fall Hackathon 2024</h3>
                    <span className="text-sm text-muted-foreground">November 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    24-hour hackathon where 50 teams built AI-powered solutions for sustainability challenges. Winning
                    projects included an AI-driven waste sorting system and a carbon footprint prediction model.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">Industry Networking Night</h3>
                    <span className="text-sm text-muted-foreground">October 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Evening networking event with 15 AI professionals from leading tech companies. Members had the
                    opportunity to discuss career paths, interview tips, and industry trends.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">Deep Learning Fundamentals Workshop</h3>
                    <span className="text-sm text-muted-foreground">September 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive 3-hour workshop introducing neural network architectures, backpropagation, and
                    optimization techniques. Participants built their first neural network from scratch using PyTorch.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">AI Ethics Panel Discussion</h3>
                    <span className="text-sm text-muted-foreground">August 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Panel featuring AI researchers, ethicists, and policy experts discussing bias in AI systems, privacy
                    concerns, and responsible AI development practices.
                  </p>
                </div>
              </div>
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
