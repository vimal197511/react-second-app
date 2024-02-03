import './main.css'

const Pagetwo=()=>{
    return(
        <div>
          <ul className="ultag">
            <li className="list"><a  className="atag">CSS HOME</a></li>
            <li className="list"><a  className="atag">CSS Introduction</a></li>
            <li className="list"><a  className="atag">CSS Syntax</a></li>
            <li className="list"><a  className="atag">CSS Selectors</a></li>
            <li className="list"><a  className="atag">CSS How To</a></li>
          </ul>


          <div style={{marginLeft:'15%',padding:"1px 16px"}}>
            <h1>CSS Tutorial</h1>
            <div class="w3-clear nextprev"> 
<a class="w3-left w3-btn" href="/default.asp">❮ Home</a>
<a class="w3-right w3-btn" href="html_intro.asp">Next ❯</a>
</div>

<div className='info'> 
<p>CSS is the language we use to style an HTML document.</p>
<p>CSS describes how HTML elements should be displayed.</p>
<p>This tutorial will teach you CSS from basic to advanced.</p>
<a  className='study'>Start learning CSS now »</a>
{/* <a className='watch'> Watch ourVideo Tutorial » <span class="ribbon-vidx ws-yellow">NEW</span>
</a> */}

</div>

          </div>
        </div>
    )
}

export default Pagetwo