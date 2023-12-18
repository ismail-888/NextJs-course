import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-blue-500 p-5">
      <Link href={'/'} className="px-2 py-1 bg-white text-blue-500">Home</Link>
    </header>
  )
}

export default Header