import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Edit3, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Flyer = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const handleDownload = () => {
    toast({
      title: "🚧 Download Feature",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleShare = () => {
    toast({
      title: "🚧 Share Feature",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    toast({
      title: isEditing ? "View Mode" : "Edit Mode",
      description: isEditing ? "Switched to view mode" : "Edit mode activated! Click on text to edit.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex justify-end gap-3"
      >
        <Button
          onClick={handleEdit}
          variant="outline"
          className="bg-white hover:bg-slate-50 transition-all duration-300"
        >
          <Edit3 className="w-4 h-4 mr-2" />
          {isEditing ? 'View' : 'Edit'}
        </Button>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="bg-white hover:bg-slate-50 transition-all duration-300"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button
          onClick={handleShare}
          variant="outline"
          className="bg-white hover:bg-slate-50 transition-all duration-300"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none"
      >
        <div className="relative h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white text-center"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              Your Amazing Event
            </motion.h1>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h2
              className="text-3xl font-bold text-slate-800 mb-4"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              Join Us for an Unforgettable Experience
            </h2>
            <p
              className="text-lg text-slate-600 leading-relaxed"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              Don't miss out on this incredible opportunity to connect, learn, and grow with industry leaders and passionate individuals. This event promises to deliver exceptional value and memorable moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Date & Time</h3>
              <p
                className="text-slate-600"
                contentEditable={isEditing}
                suppressContentEditableWarning
              >
                Saturday, November 15, 2025<br />
                10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Location</h3>
              <p
                className="text-slate-600"
                contentEditable={isEditing}
                suppressContentEditableWarning
              >
                Grand Convention Center<br />
                123 Main Street, City
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">What to Expect</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span
                  className="text-slate-600"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  Inspiring keynote speakers from around the world
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span
                  className="text-slate-600"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  Interactive workshops and hands-on sessions
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-violet-600 rounded-full mt-2 mr-3"></span>
                <span
                  className="text-slate-600"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  Networking opportunities with industry professionals
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                <span
                  className="text-slate-600"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  Complimentary refreshments and lunch
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
            <p className="text-blue-100 mb-6">
              Limited seats available. Register now to secure your spot!
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold px-8"
              onClick={() => {
                toast({
                  title: "🚧 Registration Feature",
                  description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                });
              }}
            >
              Register Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 pt-8 border-t border-slate-200 text-center"
          >
            <p
              className="text-slate-600 mb-2"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              For more information, contact us at:
            </p>
            <p
              className="text-slate-800 font-semibold"
              contentEditable={isEditing}
              suppressContentEditableWarning
            >
              info@yourevent.com | (555) 123-4567
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flyer;