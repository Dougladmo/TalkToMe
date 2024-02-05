import { Input } from '@/components/Input';
import Button from '@/components/Button'

const Create = () => {
    return (
        <form className='space-y-8'>
            <Input type='text' placeholder='Seu nome' />
            <Button title='Entrar' type='submit' />
        </form>
    )
}

export default Create