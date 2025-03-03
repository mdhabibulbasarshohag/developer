import CommonNavLink from "../../common/CommonNavLink/CommonNavLink";
import Paragraphs from "../../common/Paragraphs/Paragraphs";
import TertiaryTitle from "../../common/TertiaryTitle/TertiaryTitle";
import chatList from "../../../data/chatList";



const ChatList = () => {

    return (
        <div className="flex flex-col gap-5 bg-secondary p-5 rounded-lg">
            <TertiaryTitle className="text-quinary font-secondary text-center">Chats</TertiaryTitle>
            <div className="flex flex-col gap-3">
                {chatList.map((chat) => (
                    <CommonNavLink
                        key={chat.id}
                        className="py-2 font-secondary px-3 rounded-lg flex justify-start items-center gap-3"
                        path={`/chats/${chat.username}`}
                    >
                        <div className="relative">
                            <img src={chat.img} alt={chat.name} className="w-10 h-10 rounded-full" />
                            <div className={`w-3 h-3 rounded-full absolute bottom-0 right-0 ${chat.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        </div>
                        <div>
                            <Paragraphs className="font-bold line-clamp-1">{chat.name}</Paragraphs>
                            <Paragraphs className="font-normal line-clamp-1">{chat.lastMessage}</Paragraphs>
                        </div>
                    </CommonNavLink>
                ))}
            </div>
        </div>
    )
}

export default ChatList;