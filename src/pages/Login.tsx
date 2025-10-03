import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Buildings } from 'phosphor-react';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState<'student' | 'warden'>('student');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 animate-fade-up">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]" 
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      <div className="w-full max-w-md glass-card rounded-3xl p-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light tracking-tighter mb-2">Welcome to Hostelite</h1>
          <p className="text-sm opacity-60">
            {isSignUp ? 'Create your account' : 'Sign in to continue'}
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setUserType('student')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              userType === 'student'
                ? 'neumorphic-btn bg-primary/10 text-primary'
                : 'bg-muted/50 hover:bg-muted'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <User size={20} weight="light" />
              <span className="text-sm">Student</span>
            </div>
          </button>
          <button
            onClick={() => setUserType('warden')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              userType === 'warden'
                ? 'neumorphic-btn bg-primary/10 text-primary'
                : 'bg-muted/50 hover:bg-muted'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Buildings size={20} weight="light" />
              <span className="text-sm">Warden</span>
            </div>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-sm mb-2 opacity-80">Username</label>
            <div className="relative">
              <User 
                size={20} 
                weight="light" 
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-input border border-border rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm mb-2 opacity-80">Password</label>
            <div className="relative">
              <Lock 
                size={20} 
                weight="light" 
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-input border border-border rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl neumorphic-btn bg-gradient-to-r from-primary to-secondary text-foreground font-medium"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Sign Up/Sign In */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm hover:text-primary transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
