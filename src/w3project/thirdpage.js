import './main.css'

const Pagethree=()=>{
    return(
        <div>
          <ul className="ultag">
            <li className="list"><a  className="atag">JS HOME</a></li>
            <li className="list"><a  className="atag">JS Introduction</a></li>
            <li className="list"><a  className="atag">JS Where To</a></li>
            <li className="list"><a  className="atag">JS Output</a></li>
            <li className="list"><a  className="atag">JS Statements</a></li>
          </ul>


          <div style={{marginLeft:'15%',padding:"1px 16px"}}>
            <h1>JavaScript Tutorial</h1>
            <div class="w3-clear nextprev"> 
<a class="w3-left w3-btn" href="/default.asp">❮ Home</a>
<a class="w3-right w3-btn" href="html_intro.asp">Next ❯</a>
</div>

<div className='info'> 
<p>JavaScript is the world's most popular programming language.</p>
<p>JavaScript is the programming language of the Web.</p>
<p>JavaScript is easy to learn.</p>
<p>This tutorial will teach you JavaScript from basic to advanced.</p>
<a  className='study' style={{marginRight:"300px"}}>Start learning JavaScript now »</a>
{/* <a className='watch'> Watch ourVideo Tutorial » <span class="ribbon-vidx ws-yellow">NEW</span>
</a> */}

</div>

          </div>
        </div>
    )
}

export default Pagethree