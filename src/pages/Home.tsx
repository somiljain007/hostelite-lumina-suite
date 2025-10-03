import ScrollAnimation from '@/components/ScrollAnimation';
import { Notepad, ChatsCircle, Bell, ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      id: 'mess-menu',
      icon: Notepad,
      title: 'Mess Menu',
      description: 'View daily meal schedules and weekly menu plans with nutritional information',
      gradient: 'from-primary to-secondary',
      link: '/mess-menu',
    },
    {
      id: 'complaint-box',
      icon: ChatsCircle,
      title: 'Complaint Box',
      description: 'Submit and track maintenance requests, grievances, and feedback',
      gradient: 'from-secondary to-accent',
      link: '/complaint-box',
    },
    {
      id: 'notice-board',
      icon: Bell,
      title: 'Notice Board',
      description: 'Stay updated with important announcements, events, and hostel notifications',
      gradient: 'from-accent to-primary',
      link: '/notice-board',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 animate-fade-up">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px]" 
            style={{ background: 'var(--gradient-glow)' }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hostelite
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-70">
            Experience premium hostel management with our luxury platform designed for modern student living
          </p>
          
          <button className="group px-8 py-4 rounded-full neumorphic-btn bg-gradient-to-r from-primary to-secondary inline-flex items-center gap-3">
            <span className="font-medium">Explore Features</span>
            <ArrowRight 
              size={20} 
              weight="light" 
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-center mb-20">
              Everything You Need
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.id} delay={index * 100}>
                <Link to={feature.link}>
                  <div
                    id={feature.id}
                    className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-glow transition-all`}>
                      <feature.icon size={32} weight="light" />
                    </div>
                    
                    <h3 className="text-2xl font-light tracking-tighter mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="opacity-70 leading-relaxed">
                      {feature.description}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight size={16} weight="light" />
                    </button>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="glass-card rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg opacity-70 mb-8">
                Join thousands of students and wardens managing their hostel life seamlessly
              </p>
              <button className="px-10 py-5 rounded-full neumorphic-btn bg-gradient-to-r from-primary to-secondary text-lg font-medium">
                Create Account
              </button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-60">
            © 2025 Hostelite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
