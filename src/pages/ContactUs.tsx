import { MapPin, Phone, Envelope, Clock, Globe, ChatCircle } from 'phosphor-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Block A, University Campus\nCity Name, State - 123456\nIndia"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      detail: "+91 98765 43210\n+91 98765 43211\nMon-Sat: 9AM - 6PM"
    },
    {
      icon: Envelope,
      title: "Email Address",
      detail: "support@hostelite.com\nadmin@hostelite.com\ninfo@hostelite.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed"
    },
    {
      icon: Globe,
      title: "Website",
      detail: "www.hostelite.com\nwww.hostelite.edu\nFollow us on social media"
    },
    {
      icon: ChatCircle,
      title: "Emergency Contact",
      detail: "24/7 Helpline\n+91 98765 43299\nFor urgent complaints only"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg opacity-70">We're here to help and answer any questions you might have</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <ScrollAnimation key={index} delay={index * 50}>
                <div className="glass-card p-6 hover:shadow-glow transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center mb-4">
                      <Icon size={28} weight="light" className="text-white" />
                    </div>
                    <h3 className="text-xl font-light tracking-tight mb-3">{info.title}</h3>
                    <p className="opacity-70 whitespace-pre-line text-sm leading-relaxed">{info.detail}</p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation delay={300}>
          <div className="glass-card p-8">
            <h2 className="text-3xl font-light tracking-tight mb-6 text-center">Send us a Message</h2>
            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm opacity-70 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm opacity-70 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm opacity-70 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm opacity-70 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="neumorphic-btn w-full py-3 text-lg font-light tracking-tight"
              >
                Send Message
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ContactUs;
