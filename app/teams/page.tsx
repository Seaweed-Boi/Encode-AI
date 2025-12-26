import { Users, Code, Brain, Rocket, Database, Cloud, Shield, Palette, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function Teams() {
  const domains = [
    {
      name: "AIML",
      icon: Brain,
      description: "Exploring machine learning, deep learning, and AI research",
      members: ["Kashish K S B A", "Saharsh", "Rahul Jaikrishna", "Samriddhi Rajesh Kori", "Pratham M J", "Shriya Mohanty", "Ruchitha.L", "Aditi Hubli", "Ananya Raghavendra", "Abirami M"]
    },
    {
      name: "WebDev",
      icon: Code,
      description: "Building modern web applications and digital experiences",
      members: ["Shashank D", "Pratheek J Gowda", "Tanmay M Jain", "Srinidhi Venkata Subramonyam"]
    },
    {
      name: "Competitive Coding",
      icon: Rocket,
      description: "Mastering algorithms and problem-solving competitions",
      members: ["N Riddhi Samitha", "Padarthi Neha Sai", "Lakshanyaa Shree", "Bhavith Kumar Yarava", "Sai Charan B K", "Aarush Anil Hegde", "Navya Mohithe", "Sunay Hegde P T"]
    },
    {
      name: "Logs",
      icon: Database,
      description: "Managing documentation, content, and knowledge systems",
      members: ["Manchikanti Sharvani", "Disha S", "Samitha", "Mrunmayi Mohite", "Piyush Shiv", "Sachchit Tadikonda", "Gagan P", "Svasthi S", "Hrushikesh K"]
    },
    {
      name: "EVM",
      icon: Cloud,
      description: "Organizing events, workshops, and community activities",
      members: ["Hannah Shebin", "Vamsi Krishna", "Rachit Upadhyay", "Mohammed Fahaad", "Pranav Ganesh", "Aryaman D K", "Nihaal Jadav", "Rohini Vishu", "Vishal H", "Shloka Reddy T"]
    },
    {
      name: "Sponsorship & Marketing",
      icon: MessageSquare,
      description: "Building partnerships and promoting club initiatives",
      members: ["Manit Bohra", "Nidhi Sanjay", "Neha PM", "Nikhita Uppar", "Ada Sharma", "Narasappagari Himavarshini", "Saanvi V Sutar", "Navya Suresh", "Keertana BS"]
    },
    {
      name: "Design",
      icon: Palette,
      description: "Creating visual identities and user experiences",
      members: ["Sidda Baasanthi Reddy", "Biswarup Dutta", "Ritu Ravish", "Raashi Hegde", "Vibha Vasisht", "Greeshma G", "Mounika"]
    },
    {
      name: "Public Relations",
      icon: Users,
      description: "Managing communications and community engagement",
      members: ["Chetana Vijayakumar", "Manvith Rao K G", "Deeptanshu Kumar", "Abheetha Mallya", "DHRUV TALAVAT", "Akshat Tripathi", "Krupa Jadhav"]
    },
    {
      name: "Ops",
      icon: Shield,
      description: "Ensuring smooth operations and logistics",
      members: ["Vinitha U S", "Kushal Nayak M", "PAVAN D C", "Raj Deepak Ladha", "Harsh Pandya", "Rithu Preethi Charanesh S"]
    },
    {
      name: "Hospitality",
      icon: MessageSquare,
      description: "Creating welcoming experiences for members and guests",
      members: ["Kaveri sharma", "Abhiram R", "Rahul P", "Hariom Khonde", "Nayan Mondal", "Shraavani Balaji", "Saanvi Aarya Tedla", "Samskruthi Gowda P", "Ayush bastawad", "Advita Sai", "Dhanya vishwanath"]
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Leadership Section */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-20 text-center">
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">Leadership</h1>
              <p className="mx-auto max-w-2xl text-lg font-mono leading-relaxed text-white">
                Meet the visionary leaders guiding encode ai towards innovation and excellence
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-6 h-40 w-40 rounded-none border-2 border-white bg-[rgb(255,102,0)]" />
                <h3 className="mb-2 text-xl font-bold uppercase text-white">Harshita Goyal</h3>
                <p className="mb-3 text-sm font-bold uppercase text-[rgb(255,102,0)]">Club Head</p>
                <p className="font-mono text-sm leading-relaxed text-white">
                  Leading encode ai with vision and passion for AI innovation
                </p>
              </div>
              <div className="flex flex-col items-center rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-6 h-40 w-40 rounded-none border-2 border-white bg-[rgb(255,102,0)]" />
                <h3 className="mb-2 text-xl font-bold uppercase text-white">Rashi Joshi</h3>
                <p className="mb-3 text-sm font-bold uppercase text-[rgb(255,102,0)]">Club Head</p>
                <p className="font-mono text-sm leading-relaxed text-white">
                  Driving community growth and technical excellence
                </p>
              </div>
            </div>
          </section>

          {/* Domains Section */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">Our Domains</h2>
                <p className="mx-auto max-w-2xl text-lg font-mono leading-relaxed text-white">
                  Specialized teams working on cutting-edge AI technologies and real-world applications
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {domains.map((domain) => {
                  const Icon = domain.icon
                  return (
                    <div key={domain.name} className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <h3 className="text-xl font-bold uppercase text-white">{domain.name}</h3>
                      <p className="font-mono text-sm leading-relaxed text-white">
                        {domain.description}
                      </p>
                      <div className="mt-4 space-y-4 border-t-2 border-white pt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-white">Team Members</p>
                        <div className="space-y-2">
                          {domain.members.map((member) => (
                            <div key={member} className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-none bg-[rgb(255,102,0)]" />
                              <p className="font-mono text-xs text-white">{member}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
