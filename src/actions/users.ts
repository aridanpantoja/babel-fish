'use server'

import prisma from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { User } from '@prisma/client'

export async function createUser(data: User) {
  try {
    const user = await prisma.user.create({ data })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function updateUser(id: string, data: Partial<User>) {
  try {
    const user = await prisma.user.update({
      where: { clerkUserId: id },
      data,
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.delete({
      where: { clerkUserId: id },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { userId } = await auth()

    if (!userId) return null

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    })

    if (!user) return null

    return user
  } catch (error) {
    console.log(error)
    return null
  }
}
