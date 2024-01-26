'use client'

import { navLinks } from '@/app/shared/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const DashboardNav = () => {
    const pathname = usePathname()
    return (
        <nav className='grid items-start gap-4 w-full'>
            {
                navLinks.map((link) => (
                    <Link href={link.href} key={link.href}
                        className={cn("hover:bg-accent hover:text-primary w-full p-1.5 rounded duration-300", { 'bg-accent text-primary': pathname === link.href })}
                    >
                        <span className='flex items-center space-x-4'>
                            <link.icon className='h-4 w-4' />
                            <h3>{link.name}</h3>
                        </span>
                    </Link>
                ))
            }
        </nav>
    )
}

export default DashboardNav
