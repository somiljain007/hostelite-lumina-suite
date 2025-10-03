import ScrollAnimation from '@/components/ScrollAnimation';
import { Calendar, Coffee, Clock } from 'phosphor-react';

const MessMenu = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const meals = [
    { time: 'Breakfast', icon: Coffee, hours: '7:00 AM - 9:00 AM' },
    { time: 'Lunch', icon: Coffee, hours: '12:00 PM - 2:00 PM' },
    { time: 'Dinner', icon: Coffee, hours: '7:00 PM - 9:00 PM' },
  ];

  const menuData = {
    Monday: {
      Breakfast: ['Poha', 'Sambar', 'Banana', 'Tea/Coffee'],
      Lunch: ['Rice', 'Dal', 'Paneer Curry', 'Roti', 'Salad'],
      Dinner: ['Veg Biryani', 'Raita', 'Papad', 'Sweet'],
    },
    Tuesday: {
      Breakfast: ['Idli', 'Chutney', 'Apple', 'Tea/Coffee'],
      Lunch: ['Rice', 'Sambar', 'Aloo Gobi', 'Chapati', 'Curd'],
      Dinner: ['Rice', 'Rajma', 'Mixed Veg', 'Roti', 'Pickle'],
    },
    Wednesday: {
      Breakfast: ['Upma', 'Coconut Chutney', 'Boiled Egg', 'Tea/Coffee'],
      Lunch: ['Jeera Rice', 'Dal Fry', 'Bhindi Masala', 'Roti', 'Salad'],
      Dinner: ['Veg Pulao', 'Kadhi', 'Papad', 'Gulab Jamun'],
    },
    Thursday: {
      Breakfast: ['Paratha', 'Curd', 'Pickle', 'Tea/Coffee'],
      Lunch: ['Rice', 'Chana Masala', 'Aloo Matar', 'Roti', 'Buttermilk'],
      Dinner: ['Rice', 'Dal', 'Paneer Butter Masala', 'Naan', 'Salad'],
    },
    Friday: {
      Breakfast: ['Dosa', 'Sambar', 'Chutney', 'Tea/Coffee'],
      Lunch: ['Veg Fried Rice', 'Manchurian', 'Spring Roll', 'Soup'],
      Dinner: ['Rice', 'Rajma', 'Cabbage Sabzi', 'Roti', 'Sweet'],
    },
    Saturday: {
      Breakfast: ['Puri', 'Aloo Bhaji', 'Jalebi', 'Tea/Coffee'],
      Lunch: ['Rice', 'Kadhi', 'Mix Veg', 'Chapati', 'Raita'],
      Dinner: ['Special Thali', 'Rice', 'Dal', 'Paneer', 'Dessert'],
    },
    Sunday: {
      Breakfast: ['Bread Toast', 'Butter/Jam', 'Omelette', 'Tea/Coffee'],
      Lunch: ['Special Biryani', 'Raita', 'Salad', 'Dessert'],
      Dinner: ['Rice', 'Dal Makhani', 'Veg Korma', 'Roti', 'Ice Cream'],
    },
  };

  const currentDay = weekDays[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mess Menu
              </span>
            </h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Weekly meal schedule with nutritious and delicious options
            </p>
          </div>
        </ScrollAnimation>

        {/* Meal Times */}
        <ScrollAnimation delay={100}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {meals.map((meal) => (
              <div key={meal.time} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <meal.icon size={24} weight="light" />
                </div>
                <h3 className="text-xl font-light tracking-tighter mb-2">{meal.time}</h3>
                <div className="flex items-center justify-center gap-2 text-sm opacity-70">
                  <Clock size={16} weight="light" />
                  <span>{meal.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Weekly Menu */}
        <ScrollAnimation delay={200}>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={28} weight="light" className="text-primary" />
              <h2 className="text-3xl font-light tracking-tighter">Weekly Schedule</h2>
            </div>

            <div className="space-y-6">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className={`rounded-2xl p-6 transition-all ${
                    day === currentDay
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30'
                      : 'bg-background/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-light tracking-tighter">
                      {day}
                      {day === currentDay && (
                        <span className="ml-3 text-sm px-3 py-1 rounded-full bg-primary/20 text-primary">
                          Today
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {meals.map((meal) => (
                      <div key={meal.time} className="space-y-2">
                        <h4 className="font-medium text-sm opacity-70">{meal.time}</h4>
                        <ul className="space-y-1">
                          {menuData[day as keyof typeof menuData][meal.time as keyof typeof menuData.Monday].map((item, idx) => (
                            <li key={idx} className="text-sm opacity-80">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

export default MessMenu;
