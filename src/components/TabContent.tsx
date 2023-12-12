import React, { useState } from 'react';
import Report from './Report';

interface TabContentProps {
  activeTab: string;
  packageDetails: any;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, packageDetails }) => {
  const tabContent: Record<string, JSX.Element> = {
    report: (
    <Report detectionResult={packageDetails} /> 
    ),
    dependencies: (
      <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </p>
      </div>
    ),
    dependents: (
      <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </p>
      </div>
    ),
    versions: (
      <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </p>
      </div>
    ),
  };

  return tabContent[activeTab as keyof typeof tabContent] || null;
};

export default TabContent;