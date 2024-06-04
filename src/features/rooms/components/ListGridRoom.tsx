
const chatRooms = [
  {
    roomName: "Sara's Room",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2MzQ&ixlib=rb-4.0.3&q=80&w=400",
    status: "online",
  },
  {
    roomName: "Jawad's Room",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2Mzk&ixlib=rb-4.0.3&q=80&w=400",
    status: "offline",
  },
  {
    roomName: "Jack's Room",
    userImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2MzY&ixlib=rb-4.0.3&q=80&w=400",
    status: "away",
  },
  {
    roomName: "Jobidn's Room",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2NDI&ixlib=rb-4.0.3&q=80&w=400",
    status: "online",
  },
  {
    roomName: "Emily's Room",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fDE2ODI3ODg2Mzk&ixlib=rb-4.0.3&q=80&w=400",
    status: "offline",
  },
];

const ChatRooms = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
   
      <ul className="flex space-x-4 overflow-x-auto">
        {chatRooms.map((room, index) => (
          <li key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 min-w-max">
            <div className="relative w-16 h-16 mb-2">
              <img src={room.userImage} alt="" className="rounded-full w-full h-full object-cover" />
              <span className={`absolute bottom-1 right-1 w-3 h-3 border-2 border-white rounded-full ${room.status === "online" ? "bg-green-500" : room.status === "offline" ? "bg-red-500" : "bg-yellow-500"}`}></span>
            </div>
            <div className="text-center">
              <span className="block text-sm font-medium mb-1">{room.roomName}</span>
              <a className="block text-xs text-blue-500 font-semibold mb-1" href="#" title="Join Room">Enviar solicitud</a>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatRooms;
