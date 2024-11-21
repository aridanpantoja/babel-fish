'use server'

import prisma from '@/lib/db'
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
