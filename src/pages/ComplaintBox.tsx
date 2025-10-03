import ScrollAnimation from '@/components/ScrollAnimation';
import { ChatCircle, PaperPlaneTilt, WarningCircle, CheckCircle, Clock } from 'phosphor-react';
import { useState } from 'react';

const ComplaintBox = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'maintenance',
    description: '',
  });

  const categories = [
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'food', label: 'Food Quality' },
    { value: 'cleanliness', label: 'Cleanliness' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'other', label: 'Other' },
  ];

  const complaints = [
    {
      id: 1,
      title: 'AC not working in Room 204',
      category: 'Maintenance',
      status: 'pending',
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'Water leakage in common bathroom',
      category: 'Maintenance',
      status: 'in-progress',
      date: '5 days ago',
    },
    {
      id: 3,
      title: 'WiFi connectivity issues',
      category: 'Facilities',
      status: 'resolved',
      date: '1 week ago',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} weight="light" className="text-yellow-500" />;
      case 'in-progress':
        return <WarningCircle size={16} weight="light" className="text-blue-500" />;
      case 'resolved':
        return <CheckCircle size={16} weight="light" className="text-green-500" />;
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Complaint submitted:', formData);
    // Handle submission logic here
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Complaint Box
              </span>
            </h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Submit your concerns and track their resolution status
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Submit Complaint Form */}
          <ScrollAnimation>
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <ChatCircle size={28} weight="light" className="text-primary" />
                <h2 className="text-3xl font-light tracking-tighter">Submit Complaint</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">
                    Complaint Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Brief title of your complaint"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={6}
                    placeholder="Provide detailed information about your complaint"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl neumorphic-btn bg-gradient-to-r from-primary to-secondary inline-flex items-center justify-center gap-3 group"
                >
                  <span className="font-medium">Submit Complaint</span>
                  <PaperPlaneTilt
                    size={20}
                    weight="light"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Recent Complaints */}
          <ScrollAnimation delay={100}>
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-3xl font-light tracking-tighter mb-6">Your Complaints</h2>

              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="p-6 rounded-2xl bg-background/30 hover:bg-background/50 transition-colors border border-border/30"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-lg">{complaint.title}</h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(complaint.status)}
                        <span className="text-xs capitalize opacity-70">{complaint.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs">
                        {complaint.category}
                      </span>
                      <span className="opacity-60">{complaint.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default ComplaintBox;
