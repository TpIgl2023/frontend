import React from 'react'
import NavArticles from '../components/navbars/NavArticles'
import FooterSigned from '../components/footers/FooterSigned'
import ProfileInfo from '../components/ProfileInfo'
export default function Profile() {
  return (
    <div>
      <NavArticles/>
      <ProfileInfo/>
      <FooterSigned/> 
    </div>
  )
}
