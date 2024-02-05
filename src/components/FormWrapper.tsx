'use client';
import { useState } from "react";
import JoinRoom from "./Join"
import CreateRoom from './Create'

const FormWrapper = () => {
    const [selectedRoom, setSelectedRoom] = useState<'create' | 'join'>('join');
    const handleSelectRoom = (room: 'create' | 'join') => {
        setSelectedRoom(room);
      };

    return (
        <>
            <div className='max-w-[580px] w-full'>
                <div className='flex items-center mx-auto space-x-6 text-center '>
                    <span onClick={() => handleSelectRoom('join')} className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'join' && 'bg-secondary text-primary rounded-t-lg transition duration-500'}`}>Ingressar</span>
                    <span  onClick={() => handleSelectRoom('create')} className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'create' && 'bg-secondary text-primary rounded-t-lg transition duration-500'}`}>Nova reunião</span>
                </div>
                <div className={`p-10 space-y-8 rounded-b-lg bg-secondary ${selectedRoom === 'join' ? 'rounded-tr-lg' : 'rounded-tl-lg'}`}>
                    <RoomSelector selectedRoom={selectedRoom} />
                </div>
            </div>
        </>
    )
}

const RoomSelector = ({ selectedRoom }: { selectedRoom: string }) => {
    switch (selectedRoom) {
      case 'create':
        return <CreateRoom />;
      case 'join':
        return <JoinRoom />;
      default:
        return <JoinRoom />;
    }
  };

export default FormWrapper