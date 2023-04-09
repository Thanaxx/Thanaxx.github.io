import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Pop.css'

function Index() {

    const [pop, setPop] = useState(false);

    const showPop = () => {
        if(window.scrollY >= 800){
            setPop(true);
        }
        else{
            setPop(false);
        }
    };

    window.addEventListener('scroll', showPop)

  return (
    <>
        <div className='pop-wrap'>
            <div className={pop ? 'pop active': 'pop'}>
                <Link to="/membership" target="_blank"><button>BE A MEMBER NOW!</button></Link>
            </div>
        </div>
    </>
  )
}

export default Index