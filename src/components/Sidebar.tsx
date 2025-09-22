
import { Users, Camera, Home, User } from 'lucide-react';

interface SidebarProps {
  currentUser: {
    name: string;
    role: 'Admin' | 'HR' | 'Viewer';
    avatar?: string;
  };
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { name: 'Dashboard', id: 'dashboard', icon: Home },
  // { name: 'Live Cameras', id: 'cameras', icon: Camera },
  { name: 'Attendance', id: 'attendance', icon: Users },
  { name: 'Students', id: 'students', icon: Users },
  // { name: 'Settings', id: 'settings', icon: Settings },
];

const getRoleColor = (role: string) => {
  switch (role) {
    case 'Admin': return 'bg-red-100 text-red-800';
    case 'HR': return 'bg-blue-100 text-blue-800';
    case 'Viewer': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const Sidebar: React.FC<SidebarProps> = ({ currentUser, activeSection, onSectionChange }) => (
  <aside className="w-64 h-screen fixed top-0 left-0 bg-white shadow-lg flex flex-col z-30">
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">VisionTrack</h1>
          <p className="text-sm text-gray-500">Attendance System</p>
        </div>
      </div>
    </div>

    <nav className="flex-1 px-4 py-6 overflow-y-auto">
      {navigation.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors mb-2 ${
            activeSection === item.id
              ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </nav>

    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(currentUser.role)}`}>
            {currentUser.role}
          </span>
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
