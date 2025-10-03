import ScrollAnimation from '@/components/ScrollAnimation';
import { Megaphone, CalendarBlank, PushPin, Tag } from 'phosphor-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Hostel Maintenance Schedule',
      category: 'Important',
      date: 'Dec 28, 2024',
      pinned: true,
      content: 'The hostel will undergo routine maintenance on December 30th. Water supply will be affected from 10 AM to 2 PM. Please plan accordingly.',
    },
    {
      id: 2,
      title: 'New Year Celebration Event',
      category: 'Events',
      date: 'Dec 27, 2024',
      pinned: true,
      content: 'Join us for the New Year celebration on December 31st at 8 PM in the common hall. Food and music will be arranged.',
    },
    {
      id: 3,
      title: 'WiFi Password Updated',
      category: 'Announcement',
      date: 'Dec 26, 2024',
      pinned: false,
      content: 'The WiFi password has been updated for security purposes. Please collect the new password from the warden\'s office.',
    },
    {
      id: 4,
      title: 'Examination Schedule Released',
      category: 'Academic',
      date: 'Dec 25, 2024',
      pinned: false,
      content: 'End semester examination schedule has been released. Check the academic portal for detailed timetable.',
    },
    {
      id: 5,
      title: 'Mess Timing Changes',
      category: 'Important',
      date: 'Dec 24, 2024',
      pinned: false,
      content: 'Due to staff shortage, dinner timing will be from 7:30 PM to 9:00 PM instead of 7:00 PM until further notice.',
    },
    {
      id: 6,
      title: 'Sports Day Registration',
      category: 'Events',
      date: 'Dec 23, 2024',
      pinned: false,
      content: 'Register for the annual sports day scheduled for January 15th. Last date for registration is January 5th.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Important':
        return 'from-red-500 to-orange-500';
      case 'Events':
        return 'from-primary to-secondary';
      case 'Announcement':
        return 'from-blue-500 to-cyan-500';
      case 'Academic':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const pinnedNotices = notices.filter(n => n.pinned);
  const regularNotices = notices.filter(n => !n.pinned);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Notice Board
              </span>
            </h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Stay updated with important announcements and upcoming events
            </p>
          </div>
        </ScrollAnimation>

        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <ScrollAnimation delay={100}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <PushPin size={24} weight="light" className="text-primary" />
                <h2 className="text-2xl font-light tracking-tighter">Pinned Notices</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pinnedNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(notice.category)} text-white text-xs`}>
                        {notice.category}
                      </div>
                      <PushPin size={20} weight="fill" className="text-primary" />
                    </div>

                    <h3 className="text-2xl font-light tracking-tighter mb-3">
                      {notice.title}
                    </h3>

                    <p className="opacity-70 leading-relaxed mb-4">
                      {notice.content}
                    </p>

                    <div className="flex items-center gap-2 text-sm opacity-60">
                      <CalendarBlank size={16} weight="light" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* Regular Notices */}
        <ScrollAnimation delay={200}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Megaphone size={24} weight="light" className="text-primary" />
              <h2 className="text-2xl font-light tracking-tighter">All Notices</h2>
            </div>

            <div className="space-y-4">
              {regularNotices.map((notice, index) => (
                <div
                  key={notice.id}
                  className="glass-card rounded-2xl p-6 hover:bg-background/50 transition-all cursor-pointer group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(notice.category)} flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all`}>
                      <Tag size={20} weight="light" className="text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-light tracking-tighter">
                          {notice.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(notice.category)} text-white text-xs`}>
                          {notice.category}
                        </span>
                      </div>

                      <p className="opacity-70 leading-relaxed mb-3">
                        {notice.content}
                      </p>

                      <div className="flex items-center gap-2 text-sm opacity-60">
                        <CalendarBlank size={16} weight="light" />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default NoticeBoard;
