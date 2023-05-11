import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="px-4 py-6 mt-24 sm:px-6">
          <div className="text-sm text-center text-gray-500">
            <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100"> Next.js Dev</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
          </div>
        </footer>
    </div>
  )
}
