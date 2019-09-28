import React,{ useState, useEffect, useRef } from 'react'
import withAuth from '../../hoc/withAuth'
import { Sk } from './socket'
import authService from '../../services/auth-service'
import moment from 'moment';
import 'moment/locale/es';
import Message from '../../components/ui/message'

moment.locale('es')

const Chat = (props) => {
  const [usersStatus, setUsersStatus] = useState(false)
  const [otherUser, setOtherUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [oldmessages, setOldMessages] = useState([]);
  const [errors,setErrors] = useState();
  const [cont, setCont] = useState(1);
  const [limit] = useState(5);
  const [totalMessages,setTotalMessages] = useState();
  const [offset, setOffset] = useState(0)
  const [classImg, setClassImg] = useState()
  let finish = useRef(null);
  const imgProfile = useRef(null)
  const [socket] = useState(Sk);
  const [isTypingS,setIsTyping] = useState(false)
  const timeout = useRef(null)

  
  useEffect(()=>{
    socket.imOn(props.user._id);
      socket.ReadIsTyping(obj=>{
        const { idUser, idChat, isTyping } = obj
        if(idUser !== props.user._id && idChat === props.match.params.id){
          setIsTyping(isTyping)
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
useEffect(()=>{
  let isSubscribed = true;
  socket.ReadMessage(message => {
    if(isSubscribed){
    setMessages([...messages,message])
    }
  })
  return () => isSubscribed = false;
},[messages, socket])


useEffect(()=>{
  let isSubscribed = true
  socket.ReadMessage(message => {
    if(isSubscribed){
    setMessages([...messages,message])
    }
  })
  return () => isSubscribed = false;
},[messages, otherUser._id, socket])

  useEffect(()=>{
    const idChat = props.match.params.id;
    const data = {
      idChat,
      user: props.user._id
    }
    authService.getChat(data)
    .then(res =>{
      const userChat = res.data.users.filter(e=> e!== data.user).toString()
      authService.getuser(userChat)
      .then(res=>{
        setOtherUser(res.data)
      })
    })
    .catch(err=>{
      setErrors(err.response)
    })
    authService.getmessages({idChat, limit, offset})
    .then(res => {
      setTotalMessages(res.data.total)
      setOldMessages(res.data.messages)
      setOffset(res.data.offset)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    if(imgProfile.current){
      if(imgProfile.current.naturalWidth > imgProfile.current.naturalHeight){
        setClassImg('horizontal-profile');
      }else{
        setClassImg('vertical-profile')
      }
    }
  }, [])

  const viewMore = () => {
    const idChat = props.match.params.id;
     setCont(cont+1)
     if(offset - limit > 0){
       authService.getmessages({idChat, limit, offset})
       .then(res => {
         const newMessages = res.data.messages.concat(oldmessages)
         setOldMessages(newMessages)
         if(res.data.offset < 0){
           setOffset(0)
         }else{
           setOffset(res.data.offset)
         }
       })
     } else {
      authService.getmessages({idChat, limit, offset: -1})
      .then(res => {
        if(res.data.all){
          const newMessages = res.data.messages
          setOldMessages(newMessages)
        }else{
          const newMessages = res.data.messages.concat(oldmessages)
          setOldMessages(newMessages)
          if(res.data.offset < 0){
            setOffset(0)
          }else{
            setOffset(res.data.offset)
          }
        }
        
      })
     }
  }
  const handleChange = () => {
    const idChat = props.match.params.id;

    socket.WriteIsTyping({idChat, idUser: props.user._id, isTyping:true})
    if(timeout.current){
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(()=> {

      socket.WriteIsTyping({idChat, idUser: props.user._id, isTyping:false})
    },500)
  }
  const handleSubmit = (e) =>{

    const idChat = props.match.params.id;
    const body = e.target.value;
    const toUser = otherUser._id;

    if(e.keyCode === 13 && body){

      const message = {
        body,
        room: props.match.params.id,
        date: new Date()
      }
      
      authService.pushmessage({body,user: props.user._id, idChat, toUser})
      setMessages([...messages, message]);
      socket.WriteMessage(message);
      e.target.value = ''
      scrollToBottom();

    }

  }

  const messagesDestructured = messages.map((message, i) =>{
    if(message.body.room === props.match.params.id || message.room === props.match.params.id){
        const {body} = message
        const classOtheruser = body.body ? 'other-message' : 'me-message'
        const isOther = body.body;
        return(
          
          <Message clase={classOtheruser} key={i} isother={isOther}>
          {body.body 
            ? body.body
            : body
            }
            <span>{moment(message.date).format('LT')}</span>
        </Message>
        
        )
    }else{
      return null;
    }
  
});
const scrollToBottom = () => {
  finish.scrollIntoView({ behavior: "smooth" });
}
useEffect(()=>{
  socket.heisoff(users => {
    const isthere = users.filter(e => e!== props.user._id)
    if(isthere.length < 1){
      setUsersStatus(false)
    }
  })
  socket.heison(users => {
    const isthere = users.filter(e => e!== props.user._id)
    if(isthere.length > 0){
      setUsersStatus(true)
    }
  })
  scrollToBottom();
})

useEffect(()=>{
  return()=>{
    socket.imOff(props.user._id)
    socket.UnSubscribeMessage()
    socket.close()
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])

 useEffect(()=>{
  socket.readUsers(users => {
    const is = users.users.filter(e => e !== props.user._id);
    if(is.length > 0){
      setUsersStatus(true)
    }else{
      setUsersStatus(false)
    }
  });
 })
 const status = usersStatus ? <span className="is-online">En línea</span> : <span className="is-offline">Desconectado</span>
  return (
    <div className="chat-form">
      <div className={`user-chat__profile`} >
        <div className="user-chat__info">
          {otherUser && (
            <>
            <div className="user-chat__img">
              <img className={classImg || 'horizontal-profile'} src={otherUser.profilePic} alt={otherUser.name} ref={imgProfile}/>
            </div>
            <h3>{otherUser.name}
            <small>{isTypingS ? <span className="writting">Escribiendo...</span> : status}</small>
            </h3>
            </>
          )}
        </div>
        <button>Subir</button>
      </div>
      {oldmessages &&
      <>
      {oldmessages.length !== totalMessages &&
        (
          <button className="view-more" onClick={()=>{setOffset(offset-limit); viewMore()}}>Cargar mensajes anteriores</button>
        )
        }
      </>
      }
      <ul className="list-mess">
      {oldmessages ? oldmessages.map((message, i) => {
              const classMessage = message.user === props.user._id ? 'me-message' : 'other-message';
              return <li className={classMessage} key={i}>
              {  `${message.message}`}
              <span>{moment(message.createdAt).format('LT')}</span>
            </li>
          }): null}
        {messagesDestructured}
        <div ref={e => finish = e}></div>
      </ul>
          
      <input className="input-chat"
      type="text" 
      placeholder="Escribe algo"
      onChange={handleChange}
      onKeyUp={handleSubmit}/>
      {errors}
    </div>
  )
}

export default withAuth(Chat)
