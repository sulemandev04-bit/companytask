import React from 'react';

export default function SystemAlert() {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const isSubmitted = params.get('leadStatus') === 'transmitted';

  if (!isSubmitted) return null;

  return (
    <div className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 max-w-7xl mt-24 mx-4 sm:mx-6 lg:mx-8 p-4 rounded-xl flex items-center justify-between text-sm animate-fade-in">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span><strong>Logistics Parameter Logged:</strong> Criteria dispatched to terminal operations engine.</span>
      </div>
      <a href="/" className="text-xs underline opacity-80 hover:opacity-100">Clear Logs</a>
    </div>
  );
}