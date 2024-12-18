import React from 'react'
import './main.css'
import {assets} from '../../assets/assets'
import {useContext} from 'react'
import {Context} from '../../context/Context'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,result,setInput,input}=useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.profile} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
            <div className="greet">
                 <span>Hello,Machaas</span>
                <p>What help you are expecting from me daaa?</p> 
            </div>
                <div className="cards">
                    <div className="card">
                        <p>suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept:urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>BrainStorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readablity of following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </>
            :
            <div className="result">
                <div className="result-title">
                <img src={assets.profile} alt="" />
                <p>{recentPrompt}</p>

            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
            :
            <p dangerouslySetInnerHTML={{__html:result}}></p>
            }
                
            </div>
            </div>

            }
            
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null}
                        </div>
                       
                    </div>
                    <p className="bottom-info">
                            Gemini may display inaccurate information, use at your own risk and do double check with the original source.
                        </p>
                </div>
        </div>
    </div>
  )
}

export default Main