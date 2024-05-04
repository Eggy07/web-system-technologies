import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const activeClass = 'rounded-lg bg-orange-600 text-white px-8 py-2';

  const sideBarArray = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
    { name: 'Students', path: '/students' },

  ];

  return (
    <aside className="bg-gray-900 text-white  w-38">
      <div className="p-8">
        <div>
          <h2 className="text-lg font-bold mb-4 text-orange-600 px-16">Sidebar</h2>
          <ul>
            {sideBarArray.map((item, index) => (
              <li key={index} className="mb-5">
                <NavLink
                  exact
                  to={item.path}
                  className={`text-white hover: ${location.pathname === item.path ? activeClass : ''}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
