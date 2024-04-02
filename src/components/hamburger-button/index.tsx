'use client'

import { IconArrowLeft, IconSearch, IconX } from "@tabler/icons-react"
import Hamburger from "hamburger-react"
import { useDebouncedCallback } from 'use-debounce';

import { useToggle } from "@/hooks/use-toggle"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function HamburgerButton(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get('query') ?? '')
  const { value: hamburgerValue, toggle: hamburgerToggle } = useToggle()
  const { value: searchValue, toggle: searchToggle } = useToggle()

  const handleQuery = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if(value) {
      params.set('query', value)
    } else params.delete('query')

    router.replace(`${pathname}?${params.toString()}`)
  }

  const handleSearch = useDebouncedCallback((value: string) => {
    handleQuery(value)
  }, 300)

  return (
    <>
      <div className="z-30">
        <Hamburger
          toggled={hamburgerValue}
          toggle={() => hamburgerToggle()}
        />
      </div>
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={() => hamburgerToggle(false)}
        className={`${!hamburgerValue ? 'hidden' : ''} fixed inset-0 border-none bg-transparent backdrop-blur-sm z-20`}
      />
      <div className='flex justify-end items-center w-full relative'>
        <input
          type="text"
          placeholder='Buscar por título'
          hidden={!searchValue}
          value={search}
          onChange={(e) => {
            const { value } = e.target
            setSearch(value)
            handleSearch(value)
          }}
          className={`py-3.5 px-9 w-full border-lg shadow-custom font-inherit`}
        />
        <IconArrowLeft
          className={`w-7 h-7 absolute left-1 ${!searchValue ? 'hidden' : ''}`}
          onClick={() => searchToggle(false)}
        />
        <IconSearch
          onClick={() => searchToggle(true)}
          className={`w-7 h-7 absolute right-1 ${searchValue ? 'hidden' : ''}`}
        />
        <IconX
          onClick={() => {
            setSearch('')
            handleQuery('')
          }}
          className={
            `w-7 h-7 absolute right-1 ${!searchValue || !Boolean(search) ? 'hidden' : ''}`
          }
        />
      </div>
    </>
  )
}