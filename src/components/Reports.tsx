// import React, { useState } from 'react';
// import { Calendar, Download, Filter, FileText, BarChart3, Clock, Users } from 'lucide-react';

// const Reports: React.FC = () => {
//   const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-01-31' });
//   const [reportType, setReportType] = useState('attendance');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');

//   const attendanceData = [
//     {
//       id: '1',
//       employeeName: 'John Smith',
//       employeeId: 'EMP001',
//       department: 'Engineering',
//       date: '2024-01-15',
//       checkIn: '09:15:30',
//       checkOut: '18:30:45',
//       totalHours: '9h 15m',
//       status: 'present',
//     },
//     {
//       id: '2',
//       employeeName: 'Sarah Johnson',
//       employeeId: 'EMP002',
//       department: 'Marketing',
//       date: '2024-01-15',
//       checkIn: '08:45:20',
//       checkOut: '17:45:30',
//       totalHours: '9h 0m',
//       status: 'present',
//     },
//     {
//       id: '3',
//       employeeName: 'Mike Davis',
//       employeeId: 'EMP003',
//       department: 'Sales',
//       date: '2024-01-15',
//       checkIn: '09:30:15',
//       checkOut: '19:15:20',
//       totalHours: '9h 45m',
//       status: 'present',
//     },
//   ];

//   const summaryStats = {
//     totalWorkingDays: 22,
//     averageAttendance: 87,
//     totalPresent: 456,
//     totalAbsent: 68,
//     averageWorkingHours: 8.5,
//     overtimeHours: 124,
//   };

//   const departmentData = [
//     { name: 'Engineering', present: 24, absent: 4, total: 28 },
//     { name: 'Marketing', present: 12, absent: 3, total: 15 },
//     { name: 'Sales', present: 18, absent: 4, total: 22 },
//     { name: 'HR', present: 5, absent: 1, total: 6 },
//     { name: 'Finance', present: 8, absent: 2, total: 10 },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Report Controls */}
//       <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900">Attendance Reports</h3>
//             <p className="text-sm text-gray-600 mt-1">Generate comprehensive attendance and analytics reports</p>
//           </div>

//           <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//             {/* Date Range */}
//             <div className="flex items-center space-x-2">
//               <Calendar className="w-4 h-4 text-gray-400" />
//               <input
//                 type="date"
//                 value={dateRange.start}
//                 onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <span className="text-gray-500">to</span>
//               <input
//                 type="date"
//                 value={dateRange.end}
//                 onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Report Type */}
//             <select
//               value={reportType}
//               onChange={(e) => setReportType(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="attendance">Attendance Report</option>
//               <option value="hours">Working Hours</option>
//               <option value="department">Department Summary</option>
//               <option value="overtime">Overtime Report</option>
//             </select>

//             {/* Department Filter */}
//             <select
//               value={selectedDepartment}
//               onChange={(e) => setSelectedDepartment(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">All Departments</option>
//               <option value="Engineering">Engineering</option>
//               <option value="Marketing">Marketing</option>
//               <option value="Sales">Sales</option>
//               <option value="HR">HR</option>
//               <option value="Finance">Finance</option>
//             </select>

//             {/* Export Button */}
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
//               <Download className="w-4 h-4" />
//               <span>Export</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Summary Statistics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <Calendar className="w-8 h-8 text-blue-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.totalWorkingDays}</p>
//               <p className="text-sm text-gray-600">Working Days</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <BarChart3 className="w-8 h-8 text-green-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.averageAttendance}%</p>
//               <p className="text-sm text-gray-600">Avg Attendance</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <Users className="w-8 h-8 text-blue-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.totalPresent}</p>
//               <p className="text-sm text-gray-600">Total Present</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <Users className="w-8 h-8 text-red-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.totalAbsent}</p>
//               <p className="text-sm text-gray-600">Total Absent</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <Clock className="w-8 h-8 text-purple-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.averageWorkingHours}h</p>
//               <p className="text-sm text-gray-600">Avg Hours</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="flex items-center space-x-3">
//             <Clock className="w-8 h-8 text-orange-600" />
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{summaryStats.overtimeHours}h</p>
//               <p className="text-sm text-gray-600">Overtime</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Department Analytics */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//         <div className="p-6 border-b border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900">Department-wise Analytics</h3>
//         </div>
//         <div className="p-6">
//           <div className="space-y-4">
//             {departmentData.map((dept) => (
//               <div key={dept.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="font-medium text-gray-900">{dept.name}</span>
//                     <span className="text-sm text-gray-500">
//                       {dept.present}/{dept.total} ({Math.round((dept.present / dept.total) * 100)}%)
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className="bg-green-600 h-2 rounded-full"
//                       style={{ width: `${(dept.present / dept.total) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Detailed Attendance Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-900">Detailed Attendance Log</h3>
//             <div className="flex space-x-2">
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Filter className="w-4 h-4" />
//               </button>
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                 <FileText className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Employee</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Department</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Date</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Check In</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Check Out</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Total Hours</th>
//                 <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {attendanceData.map((record) => (
//                 <tr key={record.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="py-4 px-6">
//                     <div>
//                       <div className="font-medium text-gray-900">{record.employeeName}</div>
//                       <div className="text-sm text-gray-500">{record.employeeId}</div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6 text-gray-900">{record.department}</td>
//                   <td className="py-4 px-6 text-gray-900">
//                     {new Date(record.date).toLocaleDateString()}
//                   </td>
//                   <td className="py-4 px-6 text-gray-900">{record.checkIn}</td>
//                   <td className="py-4 px-6 text-gray-900">{record.checkOut}</td>
//                   <td className="py-4 px-6 text-gray-900">{record.totalHours}</td>
//                   <td className="py-4 px-6">
//                     <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Present
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Quick Export Options */}
//       <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Export Options</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {[
//             { title: 'Daily Summary', desc: 'Today\'s attendance summary', format: 'CSV' },
//             { title: 'Weekly Report', desc: 'Last 7 days attendance', format: 'Excel' },
//             { title: 'Monthly Report', desc: 'Current month detailed report', format: 'PDF' },
//             { title: 'Custom Range', desc: 'Select custom date range', format: 'Excel' },
//           ].map((option, index) => (
//             <button
//               key={index}
//               className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h4 className="font-medium text-gray-900">{option.title}</h4>
//                 <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
//                   {option.format}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600">{option.desc}</p>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;