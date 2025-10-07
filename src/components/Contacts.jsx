import { useState } from "react";
import { Mail, Send, Github, Linkedin, Instagram, Twitter, MapPin, Phone, Sparkles, ExternalLink } from "lucide-react";

export default function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(null);

  const handleSendMessage = () => {
    if (!userEmail || !message) {
      alert("Please enter your email and message.");
      return;
    }
    const mailtoLink = `mailto:mayankrajsingh7646@gmail.com?subject=Message from ${userEmail}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/mayankraj052", color: "from-violet-500 to-purple-500", handle: "@mayankraj052" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername", color: "from-blue-500 to-cyan-500", handle: "/in/yourusername" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/yourusername", color: "from-pink-500 to-rose-500", handle: "@yourusername" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername", color: "from-sky-500 to-blue-500", handle: "@yourusername" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mayankrajsingh7646@gmail.com", href: "mailto:mayankrajsingh7646@gmail.com" }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        {/* Timeline-style layout for large screens */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-indigo-500/50 -translate-x-1/2"></div>

          <div className="space-y-12">
            <div className="relative lg:flex lg:items-start lg:gap-12">
              {/* Contact Form */}
              <div className="lg:w-[calc(50%-2rem)] w-full lg:pr-6">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-3 rounded-xl">
                          <Send className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-slate-300 mb-2">Your Email</label>
                        <div className={`relative transition-all duration-300 ${focused === 'email' ? 'ring-2 ring-violet-500/50' : ''}`}>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-slate-300 mb-2">Your Message</label>
                        <div className={`relative transition-all duration-300 ${focused === 'message' ? 'ring-2 ring-violet-500/50' : ''}`}>
                          <textarea
                            placeholder="Tell me about your project or just say hi!"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            rows={5}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 resize-none"
                          ></textarea>
                        </div>
                      </div>

                      <button
                        onClick={handleSendMessage}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all duration-300 group/btn shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
                      >
                        <Send className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        <span className="text-lg">Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer and vertical timeline marker for large screens */}
              <div className="hidden lg:block relative w-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-l-0.5 border-slate-700/50"></div>
              </div>

              {/* Contact Info & Social Links */}
              <div className="lg:w-[calc(50%-2rem)] w-full lg:pl-6 space-y-8">
                {/* Contact Info */}
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="group relative block"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300`}></div>
                      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex items-center gap-4 hover:border-slate-600 transition-all duration-300">
                        <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-3 rounded-lg">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide">{info.label}</p>
                          <p className="text-slate-200 font-medium">{info.value}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300`}></div>
                        <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-slate-600 transition-all duration-300">
                          <div className={`inline-flex bg-gradient-to-br ${social.color} p-3 rounded-lg mb-3 justify-center mx-auto`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-white font-semibold mb-1">{social.name}</p>
                          <p className="text-xs text-slate-400">{social.handle}</p>
                          <ExternalLink className="absolute top-3 right-3 h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
