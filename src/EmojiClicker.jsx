import { useState } from "react"
import {v4 as uuid} from 'uuid'
const emojiList = ["😀", "😃", "😄" ,"😁", "😆", "😅", "🤣" ,"😂", "🙂", "🙃", "🫠" ,"😉", "😊", "😇", "🥰" ,"😍" ,"🤩", "😘" ,"😗", "☺️" ,"😚", "😙", "🥲" ,"😋" ,"😛" ,"🥺" ,"🥹" ,"😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱" ,"😖" ,"😣", "😞" ,"😓", "😩", "😫", "🥱", "😤"]
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{id: uuid(), emoji:"👌"}])
  
  function addEmoji(){
    setEmojis((oldEmojis) =>[...oldEmojis, {id: uuid(), emoji:emojiList[Math.floor(Math.random() * emojiList.length)]} ])
  }
  
  const deleteEmoji = (id) =>{
    // console.log(id)
    setEmojis((prevEmojis) =>{
      return prevEmojis.filter((e) => e.id !== id)
    })
  }
  return(
    <>
      <h1>Create/Delete Emoji</h1>
      <div>
        {emojis.map((e) =>(
          <span 
          style={{fontSize:'6rem'}} 
          key={e.id} 
          onClick={()=> deleteEmoji(e.id)} title="DO YOU WANT TO DELETE ME 🤔">{e.emoji} </span>
        ))}
        
      </div>
      <button onClick={addEmoji} style={{fontSize:'6rem'}}>Add New Emoji</button>
      <h3>And you can also delete any you want😥</h3>
    </>
  )
}