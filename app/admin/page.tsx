'use client';

import { useAuth } from '@/hooks/use-auth';
import { ShieldCheck, LogOut, LayoutDashboard, Users, BookOpen, BarChart2 } from 'lucide-react';

export default function AdminPage() {
  const { ready, logout } = useAuth();

  if (!ready) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <span className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-slate-800">IOE Prep — Admin</span>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition font-medium"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Dashboard</h1>
        <p className="text-slate-500 text-sm mb-8">Welcome back, admin.</p>

        {/* Placeholder stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Users,       label: 'Total Users',    value: '—', color: 'bg-blue-50 text-blue-600' },
            { icon: BookOpen,    label: 'Questions',      value: '—', color: 'bg-indigo-50 text-indigo-600' },
            { icon: BarChart2,   label: 'Quiz Attempts',  value: '—', color: 'bg-emerald-50 text-emerald-600' },
            { icon: LayoutDashboard, label: 'Pages', value: '—', color: 'bg-amber-50 text-amber-600' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="text-xl font-bold text-slate-800">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-400 text-sm">
          Admin features coming soon — connect a database to unlock full management.
        </div>
      </div>
    </main>
  );
}
