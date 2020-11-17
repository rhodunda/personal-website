import React from 'react'
import styles from './Contact.module.css'
import ProfilePicture from '../../assets/images/ProfilePic.png'

const ContactInfo = {
    number: '302-690-9994',
    email: 'rhodunda@udel.edu',
    picture: ProfilePicture
}

const Contact = () => (
<div className={styles.ContactMain}>
    <div>Contact Info</div>
    <img src={ContactInfo.picture} alt="avator" className={styles.profilePic}></img>
    <div className={styles.ContactSec}>{ContactInfo.number}</div>
    <div className={styles.ContactSec}>{ContactInfo.email}</div>
</div>
    
)


export default Contact