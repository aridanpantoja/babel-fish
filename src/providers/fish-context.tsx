'use client'

import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

interface FishData {
  name: string
  doa: Date
}

interface FishDataContext {
  name: string
  doa: Date
  isLoading: boolean
  createFish: (values: FishData) => void
}

const fishContext = createContext<FishDataContext>({} as FishDataContext)
const fishDataLocalStorageKey = 'babel-fish-data'

export function FishProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState('')
  const [doa, setDoa] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const data: FishData | null = getLocalStorage(fishDataLocalStorageKey)

    if (!data) {
      router.push('/')
    } else {
      setName(data.name)
      setDoa(new Date(data.doa))
      setIsLoading(false)
    }
  }, [router])

  function createFish(values: FishData) {
    setName(values.name)
    setDoa(values.doa)

    setLocalStorage(fishDataLocalStorageKey, JSON.stringify(values))
    router.push('/dashboard')
  }

  return (
    <fishContext.Provider value={{ createFish, name, doa, isLoading }}>
      {children}
    </fishContext.Provider>
  )
}

export function useFish(): FishDataContext {
  const context = useContext(fishContext)

  if (!context) {
    throw new Error('useChatProvider must be used within a ChatProvider')
  }

  return context
}
