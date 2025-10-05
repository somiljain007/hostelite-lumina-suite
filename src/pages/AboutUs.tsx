import { Users, Target, Rocket, Heart } from 'phosphor-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const AboutUs = () => {
  const developers = [
    { name: "Rajesh Kumar", role: "Full Stack Developer" },
    { name: "Priya Sharma", role: "UI/UX Designer" },
    { name: "Amit Patel", role: "Backend Engineer" },
    { name: "Sneha Reddy", role: "Frontend Developer" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              About Hostelite
            </h1>
            <p className="text-lg opacity-70">Building the future of hostel management</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="glass-card p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target size={32} weight="light" className="text-primary" />
              <h2 className="text-3xl font-light tracking-tight">Our Vision</h2>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              At Hostelite, we envision a world where hostel management is seamless, efficient, and student-centric. 
              Our mission is to bridge the gap between students and hostel administration through innovative technology, 
              creating a transparent ecosystem where complaints are heard, menus are accessible, and communication flows 
              effortlessly. We believe that every student deserves a comfortable living experience, and every warden 
              deserves powerful tools to manage their responsibilities with ease.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="glass-card p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Rocket size={32} weight="light" className="text-primary" />
              <h2 className="text-3xl font-light tracking-tight">Our Mission</h2>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              To revolutionize hostel management by providing a comprehensive digital platform that enhances 
              communication, streamlines operations, and improves the quality of life for students and hostel staff alike.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <Users size={32} weight="light" className="text-primary" />
              <h2 className="text-3xl font-light tracking-tight">Meet Our Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {developers.map((dev, index) => (
                <ScrollAnimation key={index} delay={100 * index}>
                  <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center">
                        <Heart size={28} weight="light" className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light tracking-tight mb-1">{dev.name}</h3>
                        <p className="opacity-70">{dev.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AboutUs;
