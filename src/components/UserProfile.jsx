import { useState } from 'react'


import '../App.css';

function UserProfile({className,user_info}) {

    return (
        <div className={'user-profile '+ className}>
            <div className='profile-pic'>
       
            </div>
            <div className='profile-info'>
                <span className='profile-name'>
                    Emma Williams
                </span>
                <span className='profile-role'>
                    Sr. App Developer, Apple
                </span>
            </div>
        </div>
    )
}

export default UserProfile
