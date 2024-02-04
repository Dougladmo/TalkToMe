import Image from 'next/image'
import Container from './Container'

const Header = () => {
    return (
        <>
            <div className='bg-gray-1000 p-4'>
                <Container>
                    <div className='flex justify-between'>
                        <div className='flex items-center text-white'>
                            <Image
                                alt='Talk to Me!'
                                src='/LogoTalk.svg'
                                width={60}
                                height={60}
                            />
                            <h1 className='self-end font-bold pl-1 pb-1'>Talk to me!</h1>
                        </div>
                        <Image
                            alt='Hero Code Logo'
                            src='/Hero.svg'
                            width={50}
                            height={50}
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header