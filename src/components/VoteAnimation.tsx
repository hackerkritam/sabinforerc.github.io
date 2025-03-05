import React, { useEffect, useState } from 'react';
import { Vote } from 'lucide-react';

const VoteAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center">
        <Vote className="h-6 w-6 mr-2" />
        <span className="font-bold">Vote for a Independent</span>
      </div>
    </div>
  );
};

export default VoteAnimation;