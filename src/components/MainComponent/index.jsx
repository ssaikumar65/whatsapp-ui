import { Search, FilterList, MoreVert, Chat, DonutLarge, ExpandMore, KeyboardVoice, Attachment, TagFaces } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';
import './index.css';
import MessageItem from './MessageItem';
import { Link } from "react-router-dom";


const MainComponent = () => {
    var time = new Date();
    var atime=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const [input ,setInput] = useState("");
    const [data,setData] = useState([]);
    const ref = useRef(null);
    const [tap1,setTap1] = useState(false);
    const [tap2,setTap2] = useState(false);
    const onEnter = (e) => {
        if (e.key === 'Enter' && input.length>0) {
            const i = {
                "msg":input,
                "float":"right"
            }
        setInput('');
        setData(prev=>[...prev,i]);
        }
    }
    useEffect(() => {
        if (ref) {
          ref.current.addEventListener('DOMNodeInserted', event => {
            event.currentTarget.scroll({ top: event.currentTarget.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])

      const settingsMenu1 = () => {
        setTap1(!tap1)
      }
      const settingsMenu2 = () => {
        setTap2(!tap2)
      }
  
    return (
    <div className='main-body'>
        <div className="chatlist">
            <div className={tap1?"settings tap":"settings"}>
                <p>New group</p>
                <p>Archived</p>
                <p>Starred Messages</p>
                <p>Settings</p>
                <p>Log out</p>
            </div>
            <div className="chathead">
                <div className="dp">
                    <Link className='image' to="/">
                        <img src={require('../../images/icon.png')} alt='icon'/>
                    </Link>
                </div>
                <div className="icons">
                    <div className="icon">
                        <DonutLarge />
                    </div>
                    <div className="icon">
                        <Chat />
                    </div>
                    <div onClick={()=>settingsMenu1()} className="icon">
                        <MoreVert />
                    </div>
                </div>
            </div>
            <div className="chatsearch">
                <div className="searchbar">
                    <div className="icon">
                        <Search />
                    </div>
                    <input type="text" placeholder='Search or start new chat' />
                </div>
                <div className="icon">
                    <FilterList />
                </div>
            </div>
            <div className="chats">
                {
                    [...Array(12)].map((e,i) => 
                    <div key={i} className="chatitem">
                        <div className="dp">
                            <img src={require('../../images/icon.png')} alt='icon'/>
                        </div>
                        <div className="details">
                            <h4>John Doe</h4>
                            <h5>Hi This is John</h5>
                        </div>
                        <div className="time">
                            {atime}
                            <div className="icon">
                                <ExpandMore fontSize='large' />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
        <div className="chatpage">
            <div className="topbar">
            <div className={tap2?"settings tap":"settings"}>
                <p>New group</p>
                <p>Archived</p>
                <p>Starred Messages</p>
                <p>Settings</p>
                <p>Log out</p>
            </div>
                <div className="dp">
                    <img src={require('../../images/icon.png')} alt='icon'/>
                </div>
                <div className="chatname">
                    John Doe
                    <span>online</span>
                </div>
                <div className="icon">
                    <Search />
                </div>
                <div onClick={()=>settingsMenu2()} className="icon">
                    <MoreVert />
                </div>
            </div>
            <div className="chatsection" ref={ref}>
                <MessageItem time={atime} float="left"/>
                <MessageItem time={atime} float="right"/>
                <MessageItem time={atime} float="left"/>
                <MessageItem time={atime} float="right"/>
                <MessageItem time={atime} float="left"/>
                {
                    data.map((item,index)=><MessageItem key={index} time={atime} msg={item.msg} float={item.float}/>)
                }
            </div>
            <div className="bottombar">
                <div className="icon">
                    <TagFaces />
                </div>
                <div className="icon">
                    <Attachment />
                </div>
                <div className="searchbar">
                    <input type="text" autoFocus value={input} onKeyDown={onEnter} onChange={(e)=>setInput(e.target.value)}  placeholder='Type a message' />
                </div>
                <div className="icon">
                    <KeyboardVoice />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainComponent