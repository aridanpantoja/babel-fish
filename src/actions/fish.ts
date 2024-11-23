'use server'

import prisma from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { Fish } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export async function createFish(data: Fish) {
  try {
    const { userId } = await auth()

    if (!userId) return null

    const newFish: Fish = {
      ...data,
      ownerId: userId,
    }

    const fish = await prisma.fish.create({ data: newFish })

    revalidatePath('/')

    return { fish }
  } catch (error) {
    return { error }
  }
}
