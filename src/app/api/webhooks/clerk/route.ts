import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { User } from '@prisma/client'
import { createUser, deleteUser, updateUser } from '@/actions/users'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local',
    )
  }

  const wh = new Webhook(SIGNING_SECRET)

  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  const eventType = evt.type

  switch (eventType) {
    case 'user.created':
      try {
        const { id, email_addresses, first_name, last_name, image_url } =
          evt.data

        if (!id || !email_addresses) {
          return new Response('Error occurred -- missing data', {
            status: 400,
          })
        }

        const user = {
          clerkUserId: id,
          email: email_addresses[0].email_address,
          ...(first_name ? { firstName: first_name } : {}),
          ...(last_name ? { lastName: last_name } : {}),
          ...(image_url ? { imageUrl: image_url } : {}),
        }

        await createUser(user as User)

        return new Response('Usuário criado com sucesso!', {
          status: 200,
        })
      } catch (error) {
        return new Response(`Error occurred -- user.created -- ${error}`, {
          status: 400,
        })
      }
    case 'user.deleted':
      try {
        const { id } = evt.data

        if (!id) {
          return new Response('Error occurred -- missing data', {
            status: 400,
          })
        }

        await deleteUser(id)

        return new Response('Usuário deletado com sucesso', { status: 200 })
      } catch (error) {
        return new Response(`Error occurred -- user.deleted -- ${error}`, {
          status: 400,
        })
      }
    case 'user.updated':
      try {
        const { id, email_addresses, first_name, last_name, image_url } =
          evt.data

        if (!id || !email_addresses) {
          return new Response('Error occurred -- missing data', {
            status: 400,
          })
        }

        const updatedUser = {
          clerkUserId: id,
          email: email_addresses[0].email_address,
          ...(first_name ? { firstName: first_name } : {}),
          ...(last_name ? { lastName: last_name } : {}),
          ...(image_url ? { imageUrl: image_url } : {}),
        }

        await updateUser(id, updatedUser as User)

        return new Response('Usuário atualizado com sucesso', { status: 200 })
      } catch (error) {
        return new Response(`Error occurred -- user.updated -- ${error}`, {
          status: 400,
        })
      }
  }
}
