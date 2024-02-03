import './main.css'

const Pageone=()=>{
    return(
        <div>
          <ul className="ultag">
            <li className="list"><a  className="atag">HTMl HOME</a></li>
            <li className="list"><a  className="atag">HTMl Introduction</a></li>
            <li className="list"><a  className="atag">HTMl Editors</a></li>
            <li className="list"><a  className="atag">HTMl Basic</a></li>
            <li className="list"><a  className="atag">HTMl Elements</a></li>
          </ul>


          <div style={{marginLeft:'15%',padding:"1px 16px"}}>
            <h1>HTML Tutorial</h1>
            <div class="w3-clear nextprev"> 
<a class="w3-left w3-btn" href="/default.asp">❮ Home</a>
<a class="w3-right w3-btn" href="html_intro.asp">Next ❯</a>
</div>

<div className='info'> 
<p>HTML is the standard markup language for Web pages.</p>
<p>With HTML you can create your own Website.</p>
<p>HTML is easy to learn - You will enjoy it!</p>
<a  className='study'>Study our free HTML Tutorial »</a>
<a className='watch'> Watch ourVideo Tutorial » <span class="ribbon-vidx ws-yellow">NEW</span>
</a>

</div>

          </div>
        </div>
    )
}

export default Pageone