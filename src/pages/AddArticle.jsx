import React from 'react'
import NavSigned from '../components/navbars/NavSigned'
import FooterSigned from '../components/footers/FooterSigned'
import AddSection from '../components/AddSection.jsx'
import NavArticles from '../components/navbars/NavArticles.jsx'
export default function AddArticle() {
  return (
    <div>
      <NavArticles/>
      <AddSection/>
      <FooterSigned/>
    </div>
  )
}
