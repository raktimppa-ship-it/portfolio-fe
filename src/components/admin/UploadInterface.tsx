import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

export function UploadInterface() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">File Upload</h2>
      </div>

      <Card>
        <CardContent className="p-8 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">File Upload</h3>
          <p className="text-gray-500">This feature is available in the standalone admin panel. You can upload and manage images here.</p>
        </CardContent>
      </Card>
    </div>
  );
}