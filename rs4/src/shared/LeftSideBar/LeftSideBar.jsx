import Title from "../../components/common/Title/Title";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import CommonNavLink from "../../components/common/CommonNavLink/CommonNavLink";
import { IoChatbubbles } from "react-icons/io5";
import { RiHomeHeartFill } from "react-icons/ri";
import ChatList from "../../components/Chat/ChatList/ChatList";



const LeftSideBar = () => {

    const menuList = [
        {
            id: 1,
            name: "Home",
            path: "/",
            icon: <RiHomeHeartFill className="text-3xl" />
        },
        {
            id: 2,
            name: "Chats",
            path: "/chats",
            icon: <IoChatbubbles className="text-3xl" />
        }
    ];

    return (
        <div className="w-[350px] h-[100vh] p-5 flex flex-col justify-between bg-primary">
            <div className="flex flex-col gap-5">
                <Title className="text-quinary font-tertiary">RS4</Title>
                <div className="flex flex-col bg-secondary p-5 rounded-lg">
                    {menuList.map((menu) => (
                        <CommonNavLink
                            key={menu.id}
                            className="py-2 font-secondary px-3 rounded-lg flex justify-start items-center gap-3"
                            path={menu.path}
                        >
                            {menu.icon} {menu.name}
                        </CommonNavLink>
                    ))}
                </div>
                <div className="overflow-y-scroll max-h-[400px] rounded-lg custom-scrollbar">
                    <ChatList />
                </div>
            </div>
            <div>
                <CommonButton type={"button"} className="w-full">
                    Logout
                </CommonButton>
            </div >
        </div >
    );
};

export default LeftSideBar;