import Header from '@/components/Header'
import Container from '@/components/Container'
import { Input } from '@/components/Input';
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen bg-black'>
      <Header />
      <div className='flex flex-col items-center justify-center flex-1 w-full h-full mx-auto text-white '>
        <div className='max-w-[580px] w-full bg-secondary rounded-lg p-4'>
          <Container>
            <div className='flex justify-around'>
              <span>Ingressar</span>
              <span>Nova reunião</span>
            </div>
            <div className='w-full py-5 space-y-6'>
              <Input type='text'placeholder='Seu nome' />
              <Input type='text'placeholder='ID da reunião' />
              <Button title='Entrar' type='submit' />
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}
