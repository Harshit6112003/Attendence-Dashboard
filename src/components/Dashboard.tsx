import React from 'react';
import {  Clock, Camera, Monitor, Eye, Play, Settings } from 'lucide-react';

interface DashboardProps {
  stats: {
    totalEmployees: number;
    presentToday: number;
    exitedToday: number;
    unknownDetections: number;
  };
  recentActivity: Array<{
    id: string;
    name: string;
    action: 'entry' | 'exit' | 'unknown';
    time: string;
    camera: string;
  }>;
  // checkedInEmployees: Array<{
  //   id: string;
  //   name: string;
  //   employeeId: string;
  //   department: string;
  //   checkInTime: string;
  //   camera: string;
  //   status: 'inside' | 'outside';
  // }>;
}

const Dashboard: React.FC<DashboardProps> = ({ recentActivity,  }) => {
  // const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  //   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
  //     <div className="flex items-center justify-between">
  //       <div>
  //         <p className="text-sm font-medium text-gray-600">{title}</p>
  //         <div className="flex items-center space-x-2 mt-2">
  //           <p className="text-3xl font-bold text-gray-900">{value}</p>
  //           {trend && (
  //             <span className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
  //               <TrendingUp className="w-4 h-4 mr-1" />
  //               {Math.abs(trend)}%
  //             </span>
  //           )}
  //         </div>
  //       </div>
  //       <div className={`p-3 rounded-full ${color}`}>
  //         <Icon className="w-6 h-6 text-white" />
  //       </div>
  //     </div>
  //   </div>
  // );

  const getActionColor = (action: string) => {
    switch (action) {
      case 'entry': return 'text-green-600 bg-green-50';
      case 'exit': return 'text-red-600 bg-red-50';
      case 'unknown': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'entry': return '🟢';
      case 'exit': return '🔴';
      case 'unknown': return '⚠️';
      default: return '⚪';
    }
  };

  const CameraFeed = ({ cameraName, location, status }: { cameraName: string; location: string; status: 'active' | 'inactive' }) => (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {status === 'active' ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3 mx-auto animate-pulse">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="text-white text-sm font-medium">{cameraName}</div>
            <div className="text-green-400 text-xs mt-1">1920x1080 • 30 FPS</div>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 mx-auto">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="text-white text-sm font-medium">{cameraName}</div>
            <div className="text-red-400 text-xs mt-1">Offline</div>
          </div>
        )}
      </div>

      <div className="absolute top-3 left-3 bg-black bg-opacity-50 rounded-lg px-2 py-1">
        <div className="text-white text-xs font-medium">{location}</div>
      </div>

      {status === 'active' && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          ● LIVE
        </div>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
        <div className="flex space-x-1">
          <button className="p-1.5 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
            <Play className="w-3 h-3" />
          </button>
          <button className="p-1.5 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
            <Settings className="w-3 h-3" />
          </button>
        </div>
        <button className="p-1.5 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
          <Eye className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalEmployees}
          icon={Users}
          color="bg-blue-600"
          trend={5}
        />
        <StatCard
          title="Present Today"
          value={stats.presentToday}
          icon={UserCheck}
          color="bg-green-600"
          trend={12}
        />
        <StatCard
          title="Exited Today"
          value={stats.exitedToday}
          icon={UserX}
          color="bg-red-600"
          trend={-3}
        />
        <StatCard
          title="Unknown Detections"
          value={stats.unknownDetections}
          icon={AlertTriangle}
          color="bg-orange-600"
          trend={-15}
        />
      </div> */}

      {/* Live Camera Feeds */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Camera className="w-5 h-5 mr-2 text-blue-600" />
              Live Camera Feeds
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="p-2 rounded-md bg-white shadow-sm">
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                <option>All Cameras</option>
                <option>Entry Cameras</option>
                <option>Exit Cameras</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CameraFeed cameraName="Entry Camera 1" location="Main Entrance" status="active" />
            <CameraFeed cameraName="Entry Camera 2" location="Side Entrance" status="active" />
          </div>
        </div>
      </div>

      
        {/* Real-Time Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Real-Time Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{getActionIcon(activity.action)}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{activity.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActionColor(activity.action)}`}>
                        {activity.action.charAt(0).toUpperCase() + activity.action.slice(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {activity.camera} • {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Inside Employees */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                Currently Inside ({checkedInEmployees.filter(emp => emp.status === 'inside').length})
              </h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {checkedInEmployees.filter(emp => emp.status === 'inside').map((employee) => (
                <div key={employee.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{employee.name}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        Inside
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {employee.department} • {employee.employeeId} • In: {employee.checkInTime}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      via {employee.camera}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {(() => {
                        const checkIn = new Date(`2024-01-01 ${employee.checkInTime}`);
                        const now = new Date(`2024-01-01 ${new Date().toLocaleTimeString()}`);
                        const diff = Math.floor((now.getTime() - checkIn.getTime()) / (1000 * 60 * 60));
                        return `${diff}h ${Math.floor(((now.getTime() - checkIn.getTime()) % (1000 * 60 * 60)) / (1000 * 60))}m`;
                      })()}
                    </div>
                    <div className="text-xs text-gray-500">Working</div>
                  </div>
                </div>
              ))}
              {checkedInEmployees.filter(emp => emp.status === 'inside').length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <UserCheck className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No employees currently inside</p>
                </div>
              )}
            </div>
          </div>
        </div> */}
    

      {/* AI Model Training Section */}
      {/* <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Face Recognition Model</h3>
              <p className="text-sm text-gray-600 mt-1">Train and manage the facial recognition system</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>🧠</span>
                <span>Train Model</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                View Logs
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-green-900">Model Status</div>
                  <div className="text-lg font-bold text-green-800">Ready & Active</div>
                  <div className="text-xs text-green-700">Last trained: 2 hours ago</div>
                </div>
              </div>
            </div>

            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📊</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-900">Recognition Accuracy</div>
                  <div className="text-lg font-bold text-blue-800">96.8%</div>
                  <div className="text-xs text-blue-700">Excellent performance</div>
                </div>
              </div>
            </div>

           
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">👥</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-purple-900">Training Dataset</div>
                  <div className="text-lg font-bold text-purple-800">124 Employees</div>
                  <div className="text-xs text-purple-700">2,480 face samples</div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Training Activity</h4>
              <div className="space-y-3">
                {[
                  { time: '2 hours ago', action: 'Model training completed', status: 'success', details: 'Accuracy improved to 96.8%' },
                  { time: '1 day ago', action: 'New employee added', status: 'info', details: 'Sarah Johnson - Marketing Dept' },
                  { time: '2 days ago', action: 'Dataset updated', status: 'info', details: '15 new face samples added' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' : 
                      activity.status === 'info' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                      <div className="text-xs text-gray-600 mt-1">{activity.details}</div>
                      <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Model Performance Metrics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Recognition Speed</span>
                    <span className="font-medium text-gray-900">0.3s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">False Positive Rate</span>
                    <span className="font-medium text-gray-900">2.1%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Model Confidence</span>
                    <span className="font-medium text-gray-900">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Today's Summary</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">8.2 hrs</div>
              <div className="text-sm text-gray-600">Average Working Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">9:15 AM</div>
              <div className="text-sm text-gray-600">Peak Entry Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">6:30 PM</div>
              <div className="text-sm text-gray-600">Peak Exit Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Attendance Rate</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Department-wise Attendance</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { dept: 'Engineering', present: 24, total: 28, color: 'bg-blue-600' },
              { dept: 'Marketing', present: 12, total: 15, color: 'bg-green-600' },
              { dept: 'Sales', present: 18, total: 22, color: 'bg-purple-600' },
            ].map((dept) => (
              <div key={dept.dept} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-900">{dept.dept}</span>
                  <span className="text-sm text-gray-500">{dept.present}/{dept.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${dept.color}`} 
                    style={{ width: `${(dept.present / dept.total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {Math.round((dept.present / dept.total) * 100)}% Present
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;