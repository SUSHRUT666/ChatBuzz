import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced"
const ChatsPage= (props)=>{
    const chatProps=useMultiChatLogic('2d0980a6-8713-4a4d-9a45-1fd95443a94c',props.user.username, props.user.secret);
    return ( <div style={{height:"100vh"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>
    )
}

export default ChatsPage