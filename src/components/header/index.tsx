import HamburgerButton from '@/components/hamburger-button'

export default function Header(): JSX.Element {
  return (
    <header className='flex sticky gap-3 top-0 p-2.5 bg-white'>
      <HamburgerButton />
      <hr className='absolute left-0 right-0 bottom-0'/>
    </header>
  )
}