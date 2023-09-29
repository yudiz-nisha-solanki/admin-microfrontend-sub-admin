import React from 'react'
import { useRoutes } from 'react-router-dom'
const SubAdmin = () => <h1>Sub Admin in subadmin</h1>

function SubAdminRoutes () {
  const element = useRoutes([
    // {
    //   path: "/",
    //   element: <Dashboard />,
    //   children: [
    //     {
    //       path: "messages",
    //       element: <DashboardMessages />,
    //     },
    //     { path: "tasks", element: <DashboardTasks /> },
    //   ],
    // },
    // { path: '/', element: <Dashboard /> },
    { path: '/sub-admin', element: <SubAdmin /> }
  ])

  return element
}

export default SubAdminRoutes
