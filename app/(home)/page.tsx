import { Button } from "@/components/ui/button"
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"

const page = () => {
  return (
    <section className='flex items-center justify-center bg-background h-[90vh]'>
      <div className='relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className=''>
            <span className='w-auto px-6 py-3 rounded-full bg-secondary'>
              <span className='text-sm font-medium text-primary'>
                Sort your notes <strong>easily</strong>
              </span>
            </span>

            <h1 className='text-3xl mt-8 font-extrabold tracking-tight lg:text-5xl'>
              Create notes with ease
            </h1>
            <p className='max-w-2xl mx-auto mt-8 font-thin text-base lg:text-lg text-secondary-foreground'>
              Simplify your note-taking with our intuitive and user-friendly platform. Organize your thoughts, jot down ideas, and keep track of important information effortlessly. Join us and experience the convenience of efficient and effective note management.            </p>
          </div>

          <RegisterLink>
            <div className='flex justify-center max-w-sm mx-auto mt-10'>
              <Button className="text-xl w-full">
                <p className='text-white text-lg'>Signup for <strong>Free</strong></p>
              </Button>
            </div>
          </RegisterLink>
        </div>
      </div>
    </section>
  )
}

export default page
