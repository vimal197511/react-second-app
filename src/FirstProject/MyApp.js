import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import "./new.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope,faHome,faAddressCard, faContactBook, faServer } from '@fortawesome/free-solid-svg-icons'


function Dashboard() {

    let navigate = useNavigate()
    const handle = (path) => {
        navigate(path)
    }

    return (
        <>
        
            <ul className='maintag'>
                <header >Dashboard</header>
                <li className='lists'><a className='active demo'  onClick={() => handle('home')}><FontAwesomeIcon icon={faHome} /> Home</a></li>
                <li className='lists'><a className='demo' onClick={() => handle('about')}><FontAwesomeIcon icon={faAddressCard} /> About</a></li>
                <li className='lists' ><a className='demo'  onClick={() => handle("contact")}><FontAwesomeIcon icon={faContactBook} /> Contact</a></li>
                <li className='lists'><a  className='demo' onClick={() => handle('services')}><FontAwesomeIcon icon={faServer} /> Services</a></li>
            </ul>
            <div style={{ marginLeft: '25%', padding: "1px 16px" }}>


            </div>

        </>


    )
}

export default Dashboard