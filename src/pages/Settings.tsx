import React from 'react';
import { 
  Settings as SettingsIcon, Bell, Lock, User, 
  Globe, Palette, Volume2
} from 'lucide-react';

const settingsSections = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: User,
    settings: [
      { id: 'name', label: 'Display Name', type: 'text', value: 'John Doe' },
      { id: 'email', label: 'Email Address', type: 'email', value: 'john@example.com' },
      { id: 'timezone', label: 'Time Zone', type: 'select', value: 'UTC-5' },
    ]
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    settings: [
      { id: 'email_notif', label: 'Email Notifications', type: 'toggle', value: true },
      { id: 'session_remind', label: 'Session Reminders', type: 'toggle', value: true },
      { id: 'messages', label: 'Message Notifications', type: 'toggle', value: true },
    ]
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: Palette,
    settings: [
      { id: 'theme', label: 'Theme', type: 'select', value: 'light' },
      { id: 'font_size', label: 'Font Size', type: 'select', value: 'medium' },
    ]
  },
  {
    id: 'audio',
    title: 'Audio & Video',
    icon: Volume2,
    settings: [
      { id: 'input_device', label: 'Input Device', type: 'select', value: 'default' },
      { id: 'output_device', label: 'Output Device', type: 'select', value: 'default' },
    ]
  },
];

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <SettingsIcon className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account preferences</p>
        </div>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <label htmlFor={setting.id} className="text-gray-700 font-medium">
                      {setting.label}
                    </label>
                    {setting.type === 'toggle' ? (
                      <button
                        className={`
                          relative inline-flex h-6 w-11 items-center rounded-full
                          transition-colors duration-200 ease-in-out focus:outline-none
                          ${setting.value ? 'bg-blue-600' : 'bg-gray-200'}
                        `}
                      >
                        <span
                          className={`
                            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                            ${setting.value ? 'translate-x-6' : 'translate-x-1'}
                          `}
                        />
                      </button>
                    ) : (
                      <input
                        type={setting.type}
                        id={setting.id}
                        value={setting.value}
                        className="premium-input px-3 py-2 rounded-lg bg-white focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}