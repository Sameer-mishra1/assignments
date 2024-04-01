import geetika from '../assets/geetika.jpg'
import './Profile.css'

export function Profile() {
    
    return <>
        <div className='card'>
        <div className='coverPhoto'></div>
                <img src={geetika} />
                <div className='profileDetails'>
                    <h3 className='name'>Geetika Gupta</h3>
                    <p>38</p>
                </div>
                    <h4>India</h4>
            <div className='stats'>
            <div className='stats-data'>
                <h3>10M</h3>
                <p>Followers</p>
            </div>
            <div className='stats-data'>
                <h3>20M</h3>
                <p>Likes</p>
            </div>
            <div className='stats-data'>
                <h3>10M</h3>
                <p>Photos</p>
            </div>
            </div>
        </div>
    </>
}