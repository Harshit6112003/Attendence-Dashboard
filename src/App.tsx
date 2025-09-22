// App.tsx
import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
// import LiveCameras from './components/LiveCameras';
import EmployeeManagement from './components/EmployeeManagement';
// import Settings from './components/Settings';
import Attendance from './components/Attendance'; 


const checkedInEmployees = [
  {
    id: '1',
    name: 'John Smith',
    employeeId: 'EMP001',
    department: 'Engineering',
    checkInTime: '09:15:30',
    camera: 'Entry Camera 1',
    status: 'inside',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    employeeId: 'EMP002',
    department: 'Marketing',
    checkInTime: '08:45:20',
    camera: 'Entry Camera 2',
    status: 'inside',
  },
  {
    id: '3',
    name: 'Mike Davis',
    employeeId: 'EMP003',
    department: 'Sales',
    checkInTime: '09:30:15',
    camera: 'Entry Camera 1',
    status: 'inside',
  },
  {
    id: '4',
    name: 'Lisa Wang',
    employeeId: 'EMP004',
    department: 'Engineering',
    checkInTime: '08:30:45',
    camera: 'Entry Camera 3',
    status: 'inside',
  },
  {
    id: '5',
    name: 'David Brown',
    employeeId: 'EMP005',
    department: 'HR',
    checkInTime: '09:00:12',
    camera: 'Entry Camera 2',
    status: 'inside',
  },
  {
    id: '6',
    name: 'Mark Wilson',
    employeeId: 'EMP006',
    department: 'Finance',
    checkInTime: '10:00:00',
    camera: 'Entry Camera 3',
    status: 'outside',
  },
];

const recentActivity = [
  {
    id: '1',
    name: 'John Smith',
    action: 'entry',
    time: '09:15 AM',
    camera: 'Entry Camera 1',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    action: 'exit',
    time: '09:12 AM',
    camera: 'Exit Camera 1',
  },
  {
    id: '3',
    name: 'Unknown Person',
    action: 'unknown',
    time: '09:10 AM',
    camera: 'Entry Camera 2',
  },
  {
    id: '4',
    name: 'Mike Davis',
    action: 'entry',
    time: '09:08 AM',
    camera: 'Entry Camera 3',
  },
  {
    id: '5',
    name: 'Lisa Wang',
    action: 'entry',
    time: '09:05 AM',
    camera: 'Entry Camera 1',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const currentUser = {
    name: 'Admin User',
    role: 'Admin',
    avatar: '',
  };

  const dashboardStats = {
    totalEmployees: 124,
    presentToday: 87,
    exitedToday: 32,
    unknownDetections: 5,
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <Dashboard
            stats={dashboardStats}
            recentActivity={recentActivity}
            checkedInEmployees={checkedInEmployees}
          />
        );
      // case 'cameras':
      //   return <LiveCameras />;
      case 'attendance': // Changed to consistent spelling
        return <Attendance />;
      case 'students': // changed id to lowercase for consistency
        return <EmployeeManagement />;
      // case 'settings':
      //   return <Settings />;
      default:
        return (
          <Dashboard
            stats={dashboardStats}
            recentActivity={recentActivity}
            checkedInEmployees={checkedInEmployees}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        currentUser={currentUser}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 flex flex-col ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeSection}</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">{/* Bell icon, notification dot can go here */}</div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
