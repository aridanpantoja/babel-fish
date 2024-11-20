'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <>
      <Avatar className="size-32">
        <AvatarFallback>AR</AvatarFallback>
        <AvatarImage src={user.imageUrl} />
      </Avatar>

      <h1>Olá, {user.firstName}</h1>
    </>
  )
}
