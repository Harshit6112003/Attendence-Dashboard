import React, { useState } from 'react';
import { Camera, Grid3X3, Monitor, Eye, Settings, Play, Pause } from 'lucide-react';

interface Camera {
  id: string;
  name: string;
  location: 'entry' | 'exit';
  status: 'active' | 'inactive';
  resolution: string;
  fps: number;
}

const LiveCameras: React.FC = () => {
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('grid');
  const [selectedCamera, setSelectedCamera] = useState<string>('cam-1');

  const cameras: Camera[] = [
    { id: 'cam-1', name: 'Entry Camera 1', location: 'entry', status: 'active', resolution: '1920x1080', fps: 30 },
    { id: 'cam-2', name: 'Entry Camera 2', location: 'entry', status: 'active', resolution: '1920x1080', fps: 30 },
    { id: 'cam-3', name: 'Entry Camera 3', location: 'entry', status: 'active', resolution: '1920x1080', fps: 25 },
    { id: 'cam-4', name: 'Exit Camera 1', location: 'exit', status: 'active', resolution: '1920x1080', fps: 30 },
    { id: 'cam-5', name: 'Exit Camera 2', location: 'exit', status: 'inactive', resolution: '1920x1080', fps: 0 },
  ];

  const CameraFeed = ({ camera }: { camera: Camera }) => (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
      {/* Simulated Video Feed */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {camera.status === 'active' ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="text-white text-sm">Live Feed Active</div>
            <div className="text-green-400 text-xs mt-1">{camera.resolution} • {camera.fps} FPS</div>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="text-white text-sm">Camera Offline</div>
            <div className="text-red-400 text-xs mt-1">No Signal</div>
          </div>
        )}
      </div>

      {/* Camera Info Overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-lg px-3 py-2">
        <div className="text-white text-sm font-medium">{camera.name}</div>
        <div className="flex items-center space-x-2 mt-1">
          <div className={`w-2 h-2 rounded-full ${camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-xs text-gray-300 capitalize">{camera.location}</span>
        </div>
      </div>

      {/* Live Indicator */}
      {camera.status === 'active' && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          ● LIVE
        </div>
      )}

      {/* Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
            {camera.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
        <button className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors">
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Camera Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Live Camera Feeds</h3>
            <p className="text-sm text-gray-600 mt-1">Monitor all entry and exit points in real-time</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('single')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'single' ? 'bg-white shadow-sm' : ''}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>

            {/* Camera Selector */}
            {viewMode === 'single' && (
              <select
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {cameras.map((camera) => (
                  <option key={camera.id} value={camera.id}>
                    {camera.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Camera Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{camera.name}</p>
                <p className="text-xs text-gray-500 capitalize">{camera.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Camera Feeds */}
      {viewMode === 'single' ? (
        /* Single Camera View */
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <CameraFeed camera={cameras.find(c => c.id === selectedCamera) || cameras[0]} />
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <div key={camera.id} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <CameraFeed camera={camera} />
            </div>
          ))}
        </div>
      )}

      {/* Real-Time Detection Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Current Detections</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { name: 'John Smith', action: 'Entry', camera: 'Entry Camera 1', time: '09:15:23', confidence: 95 },
              { name: 'Sarah Johnson', action: 'Exit', camera: 'Exit Camera 1', time: '09:12:45', confidence: 92 },
              { name: 'Unknown Person', action: 'Entry', camera: 'Entry Camera 2', time: '09:10:12', confidence: 78 },
            ].map((detection, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {detection.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{detection.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      detection.action === 'Entry' ? 'bg-green-100 text-green-800' : 
                      detection.action === 'Exit' ? 'bg-red-100 text-red-800' : 
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {detection.action}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {detection.camera} • {detection.time} • {detection.confidence}% confidence
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCameras;