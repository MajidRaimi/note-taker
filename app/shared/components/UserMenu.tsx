
import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { LogOut } from 'lucide-react'
import { navLinks } from '@/app/shared/data';
import Link from 'next/link'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/dist/types'
const UserMenu = ({ user }: { user: KindeUser }) => {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className='relative h-10 w-10 rounded-full'>
                    <Avatar className='w-10 h-10 rounded-full'>
                        <AvatarImage src={user.picture!} />
                        <AvatarFallback>
                            <Image src={`https://robohash.org/${user.id}`} alt='M' width={'40'} height={'40'} className='rounded-full' />
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-56 p-2' align='end' forceMount>
                <DropdownMenuLabel>
                    <div>
                        <h3>{user.given_name} {user.family_name}</h3>
                        <span className='text-[0.7rem] text-primary'>{user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        navLinks.map((link, index) => (
                            <DropdownMenuItem asChild key={index} className='group'>
                                <Link href={link.href} className='w-full flex items-center justify-between '>
                                    <span className='group-hover:text-primary'>{link.name}</span>
                                    <link.icon className='w-4 group-hover:text-primary' />
                                </Link>
                            </DropdownMenuItem>
                        ))
                    }

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <LogoutLink >
                    <DropdownMenuItem className='text-rose-500 cursor-pointer'>
                        Logout
                        <DropdownMenuShortcut>
                            <LogOut className='w-4' />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </LogoutLink>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}

export default UserMenu
