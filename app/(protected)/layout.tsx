
import React, { ReactNode } from 'react'
import { DashboardNav } from './dashboard/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';




const layout = async ({ children }: { children: ReactNode }) => {

    const { getUser } = getKindeServerSession();
    const user = await getUser()

    return (
        <div className='flex flex-col space-y-6 mt-10'>
            <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
                <aside className='hidden w-[200px] md:flex flex-ol '>
                    <DashboardNav />
                </aside>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default layout
