import { Button } from '@dynage/ui/components/button'
import { Container } from './container'

const Error = () => {
    return (
        <Container>
            <div className='flex min-h-[90vh] flex-col-reverse items-center justify-center gap-12 px-6'>
                {/* Left Section: Text Content */}
                <div className='flex max-w-md flex-col justify-center items-start md:items-center text-left'>
                    <h2 className='mb-4 text-6xl font-black tracking-tight text-primary dark:text-primary'>Whoops!</h2>
                    <h3 className='mb-4 text-4xl font-bold leading-tight'>Something went wrong</h3>
                    <p className='text-muted-foreground mb-8 text-lg leading-relaxed'>
                        The page you&apos;re looking for isn&apos;t found. We suggest you head back to the home page to find your way.
                    </p>
                    <div className='flex gap-4'>
                        <Button asChild size='lg' className='px-8 font-semibold shadow-lg transition-all hover:scale-105'>
                            <a href='/'>Back to Home</a>
                        </Button>
                    </div>
                </div>

                {/* Right Section: Illustration */}
                <div className='relative flex h-[300px] w-full items-center justify-center lg:h-[500px] lg:w-1/2'>
                    <div className='absolute inset-0 z-0 scale-95 rounded-3xl bg-neutral-100 dark:bg-neutral-900'></div>
                    <img
                        src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png'
                        alt='404 illustration'
                        className='relative z-10 h-full w-auto object-contain drop-shadow-2xl'
                    />
                </div>
            </div>
        </Container>
    )
}

export default Error
