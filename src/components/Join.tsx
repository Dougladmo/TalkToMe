import { Input } from '@/components/Input';
import Button from '@/components/Button'

const Join = () => {
    return (
        <form className='space-y-8'>
            <Input type='text' placeholder='Seu nome' />
            <Input type='text' placeholder='ID da reunião' />
            <Button title='Entrar' type='submit' />
        </form>
    )
}

export default Join