import './main.css'
const Pagefour=()=>{
    return(
<div>
          <ul className="ultag">
            <li className="list"><a  className="atag">SQL HOME</a></li>
            <li className="list"><a  className="atag">SQL Intro</a></li>
            <li className="list"><a  className="atag">SQL Syntax</a></li>
            <li className="list"><a  className="atag">SQL Select</a></li>
            <li className="list"><a  className="atag">SQL Select Distinct</a></li>
          </ul>


          <div style={{marginLeft:'15%',padding:"1px 16px"}}>
            <h1>SQL Tutorial</h1>
            <div class="w3-clear nextprev"> 
<a class="w3-left w3-btn" href="/default.asp">❮ Home</a>
<a class="w3-right w3-btn" href="html_intro.asp">Next ❯</a>
</div>

<div className='info'> 
<p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
<p>Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.
</p>
<a  className='study'>Start learning SQL now »</a>
{/* <a className='watch'> Watch ourVideo Tutorial » <span class="ribbon-vidx ws-yellow">NEW</span>
</a> */}

</div>

          </div>
        </div>
    )
}

export default Pagefour