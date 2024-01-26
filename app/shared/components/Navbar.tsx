
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogIn, LogOut } from 'lucide-react';

import { ThemeModeToggle, UserMenu } from '.'

const Navbar = async () => {


    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser()

    return (
        <nav className='border-b bg-background h-[10vh] flex items-center'>
            <div className='container flex items-center justify-between'>
                <Link href="/">
                    <h1 className='font-bold text-xl'>Note <strong className='text-primary'>Tacker</strong></h1>
                </Link>
                <div className='flex items-center gap-5'>
                    <ThemeModeToggle />
                    <div className='flex items-center gap-2'>
                        {
                            (await isAuthenticated()) ? <UserMenu user={user!} /> : <LoginLink>
                                <Button variant={'ghost'}>
                                    <LogIn className='w-4 text-primary' />
                                </Button>
                            </LoginLink>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
