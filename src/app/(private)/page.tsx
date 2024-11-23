import { getCurrentUser } from '@/actions/users'
import { RegistrationForm } from '@/components/registration-form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import prisma from '@/lib/db'
import { formatDate } from '@/lib/utils'

export default async function Home() {
  const user = await getCurrentUser()

  if (!user) return null

  const fishs = await prisma.fish.findMany({
    where: {
      ownerId: user.id,
    },
  })

  return (
    <>
      <Avatar className="size-32">
        <AvatarFallback>AR</AvatarFallback>
        <AvatarImage src={user.imageUrl || ''} />
      </Avatar>

      <h1>{user.email}</h1>

      <div className="">
        <RegistrationForm />

        {fishs.map((fish) => (
          <div key={fish.id}>
            <h2>{fish.name}</h2>
            <p>{formatDate(fish.birthdate)}</p>
          </div>
        ))}
      </div>
    </>
  )
}
