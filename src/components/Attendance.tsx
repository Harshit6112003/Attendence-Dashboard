import React, { useState } from 'react';
import { Search, Camera, Calendar, Download } from 'lucide-react';

const attendanceData = [
  { name: 'John Smith', userId: 'EMP001', date: '2025-09-19', time: '09:15 AM', status: 'entry', avatar: 'JS' },
  { name: 'Sarah Johnson', userId: 'EMP002', date: '2025-09-19', time: '09:12 AM', status: 'entry', avatar: 'SJ' },
  { name: 'Unknown Person', userId: 'UNKNOWN', date: '2025-09-19', time: '09:10 AM', status: 'entry', avatar: 'UP' },
  { name: 'Mike Davis', userId: 'EMP003', date: '2025-09-19', time: '09:08 AM', status: 'exit', avatar: 'MD' },
  { name: 'Lisa Wang', userId: 'EMP004', date: '2025-09-19', time: '09:05 AM', status: 'entry', avatar: 'LW' },
  { name: 'Alex Chen', userId: 'EMP005', date: '2025-09-19', time: '09:03 AM', status: 'entry', avatar: 'AC' },
  { name: 'Emily Brown', userId: 'EMP006', date: '2025-09-19', time: '09:00 AM', status: 'entry', avatar: 'EB' }
];

const cameras = ['Camera 1', 'Camera 2', 'Camera 3'];

const AttendanceTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCamera, setSelectedCamera] = useState(cameras[0]);

  const filteredData = attendanceData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search person..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative inline-block w-36">
            <select
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="appearance-none w-full bg-white border border-blue-200 text-blue-600 rounded-lg py-2 px-4 pl-9 shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {cameras.map((camera) => (
                <option key={camera} value={camera}>
                  {camera}
                </option>
              ))}
            </select>
            <Camera className="w-4 h-4 text-blue-600 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Calendar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-900">User ID</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Person</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">
                  No records found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      row.userId === 'UNKNOWN' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {row.userId}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {row.avatar}
                      </div>
                      <span className="font-medium text-gray-900">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{row.date}</td>
                  <td className="py-4 px-6 text-gray-700">{row.time}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        row.status === 'entry'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row.status === 'entry' ? 'Entry' : 'Exit'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;