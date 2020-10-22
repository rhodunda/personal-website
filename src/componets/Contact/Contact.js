import React from 'react'
import styles from './Contact.module.css'

const ContactInfo = {
    number: '302-690-9994',
    email: 'rhodunda@udel.edu',
    picture: 'image-url'
}

const Contact = () => (
<div className={styles.ContactMain}>Contact Info
    <div className={styles.ContactSec}>{ContactInfo.number}</div>
    <div >{ContactInfo.picture}</div>
    <div className={styles.ContactSec}>{ContactInfo.email}</div>
</div>
    
)


export default Contact