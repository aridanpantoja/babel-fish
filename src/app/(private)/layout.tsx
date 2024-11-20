import React from 'react'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-primary/50">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center rounded-md bg-background p-4 shadow-md">
        {children}
      </div>
    </div>
  )
}
