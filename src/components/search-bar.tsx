'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { Input } from '~/components/ui/input'

export function SearchBar({ search }: { search: string }) {
  const router = useRouter()

  const initialRender = useRef(true)

  const [text, setText] = useState(search)
  const [query] = useDebounce(text, 750)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(`/`)
    } else {
      router.push(`/?search=${query}`)
    }
  }, [query])

  return (
    <div>
      <Input
        className="mx-auto max-w-3xl rounded-lg"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        placeholder="Keyword"
      />
    </div>
  )
}
