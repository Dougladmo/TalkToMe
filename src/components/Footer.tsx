import { IoSend } from "react-icons/io5";
import { ImPhoneHangUp } from "react-icons/im";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash} from "react-icons/fa";
import { MdOutlineDesktopWindows, MdDesktopAccessDisabled} from "react-icons/md";
import Container from '@/components/Container'

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-6 bg-black">
        <Container>
            <div className="grid items-center grid-cols-3 text-white">
                <div>
                    <span>10:30</span>
                </div>
                <div className="flex gap-5 place-self-center">
                    <FaMicrophone className="w-16 p-2 text-white rounded-md cursor-pointer h-11 bg-gray-950" />
                    <FaVideo className="w-16 p-2 text-white rounded-md cursor-pointer h-11 bg-gray-950" />
                    <MdOutlineDesktopWindows className="w-16 p-2 text-white rounded-md cursor-pointer h-11 bg-gray-950" />
                    <ImPhoneHangUp className="w-16 p-2 text-white rounded-md cursor-pointer h-11 bg-primary" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer