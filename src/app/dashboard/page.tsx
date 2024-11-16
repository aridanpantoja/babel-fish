'use client'

import { formatDate } from '@/lib/utils'
import { useFish } from '@/providers/fish-context'
import { Cake, Fish } from 'lucide-react'
import Image from 'next/image'
import underConstructionImage from '@/public/images/under-construction-bro.png'

export default function Dashboard() {
  const { name, doa, isLoading } = useFish()

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
          <Fish className="size-8" />
        </div>

        <h1 className="text-xl font-bold">{isLoading ? 'Nemo' : name}</h1>

        <div className="text-muted-foreground">
          <ul>
            <li className="flex items-center gap-1">
              <Cake className="size-4" />
              <span>{isLoading ? ' 30 de maio de 2003' : formatDate(doa)}</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 w-full">
          <Image src={underConstructionImage} alt="Em construção" />
        </div>
      </div>
    </>
  )
}
