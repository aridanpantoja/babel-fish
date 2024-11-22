'use client'

import { createFish } from '@/actions/fish'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn, formatDate } from '@/lib/utils'
import { formData, formSchema } from '@/schemas/register-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Fish } from '@prisma/client'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function RegistrationForm() {
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  async function onSubmit(values: formData) {
    const newFish = {
      name: values.name,
      birthdate: values.doa,
    }

    await createFish(newFish as Fish)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do peixe</FormLabel>
              <FormControl>
                <Input placeholder="Nemo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="doa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aniversário do peixe</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? (
                          formatDate(field.value)
                        ) : (
                          <span>Escolha uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
