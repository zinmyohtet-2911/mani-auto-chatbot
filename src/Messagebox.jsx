import { useState, useEffect, useRef } from "react";


export default function Messagebox() {
const [input,setInput] = useState("");
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);
const [count, setCount] = useState(0);

const handleSend = async ()=>{
  if(!input.trim() || loading) return;

  const userText = input;

  setMessages((prev=>[...prev,{role:"user",text:userText}]));
  setInput("");
  setLoading(true);
  
 const newCount = count + 1;   
  setCount(newCount);    

  function getReply(userText,count){
    if(count === 1){
      return `${userText} တဲ့လား`
    }else if(count === 2){
      return `အပိုတွေ မပြောနဲ့ မုန့်ဝယ်ကျွေး`
    }else if(count === 3){
      return `တော်ပြီ မုန့်မစားချင်တော့ဘူး`
    }else if(count === 4){
      return `မိုင်ဆုန်ခ`
    }else if(count === 5){
      return `ဘာမှလာမပြောနဲ့တော့ ခ`
    }else if(count===6){
      return `ဘိုင်ဘိုင် ခ`
    }else if(count === 7){
      return   `ရည်စားစကားပြောမလိုမလားပြောလေ`
    }else if(count===8){
      return `မပြောနဲ့‌တော့ ဒိုမှ ကိုကိုရှိတယ်`
    }else if(count===9){
      return `ဒါပေမဲ့ အခုဖြတ်လိုက်ပြီ မောင်လေးတွေ လိုချင်လို့`
    }else if(count===10){
      return `နွားမွေးမြူရေးလုပ်ချင်တာ`
    }else if(count === 11){
      return `နွားနို့ရောင်းစားမလို့`
    }else if(count ===12){
      return `မင်းလို့ ငပေါမို့လို ငါနှင့် စကားလာပြောတာ အံသြပါ`
    }
  }

  const reply = getReply(userText,newCount);

  setMessages((prev)=>[...prev, {role:"bot", text:reply}]);
  setLoading(false);
  
}

const handleKeyDown = (e) =>{
  if(e.key === "Enter") handleSend();
}

const bottomRef = useRef();
useEffect(()=>{
  bottomRef.current?.scrollIntoView({behavior:"smooth"});
},[messages])
  return (
    <div className="messagebox-wrapper">
      {messages.length === 0 && (
      <p className="msg-empty">မင်္ဂလာပါ ကျွန်မက မဏီပါ</p>
    )}
      <div className="messagebox-messages">
    

    {messages.map((m,i)=>(
      <div key={i} className={`msg msg-${m.role}`} >
        {m.text}
       
</div>
    ))}

    {loading && <div className="msg msg-bot">စဉ်းစားနေပါတယ်ရှင့်</div>}

     <div ref={bottomRef}/>
      </div>
      <input
        type="text"
        className="messagebox-input"
        placeholder="Type your message..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button className="messagebox-button"
      onClick={handleSend}
      disabled={loading}
      >Send</button>
    </div>
  );
}