import React from 'react'
import NavArticles from '../components/navbars/NavArticles'
import FooterSigned from '../components/footers/FooterSigned'
import { useState } from 'react'
export default function Article() {
  const [currsentSection, setCurrentSection] = useState('resume')
  const [currentActives, setCurrentActives] = useState({'resume' : false,'acteur' : false,'motscle' : false,'institutions' : false,'text' : false,'url' : false,'references' : false})
  const class1 = 'w-full border-2 border-solid border-blue-700'
  const class2 = 'bg-main text-white'
  const class3 = 'bg-white text-black hover:cursor-pointer'
  const class4 = 'before:block before:absolute before:w-1 before:h-full before:-inset-1 before:-skew-y-3 before:bg-main relative my-2 '
  const class5 = 'relative text-xl font-bold'
  return (
    <div>
      <NavArticles/>
      {/*
      Web version*/}
      <div className='border-4 border-solid border-black w-10/12 h- mx-auto my-6'>
          <div className='flex w-full text-4xl'>
            <div id='resume' className={`p-2 ${currsentSection == 'resume' ? class2 : class3 } ${class1} `} onClick={() => setCurrentSection('resume')}><h1>Resume</h1></div>
            <div id='auteur' className={`p-2 ${currsentSection == 'auteur' ? class2 : class3 } ${class1} `} onClick={() => setCurrentSection('auteur')}><h1>Auteur</h1></div>
            <div id='motscle' className={`p-2 ${currsentSection == 'motscle' ?class2 : class3 } ${class1} `} onClick={() => setCurrentSection('motscle')}><h1>Mots clés</h1></div>
            <div id='institutions' className={`p-2 ${currsentSection == 'institutions' ?class2 : class3 } ${class1} `} onClick={() => setCurrentSection('institutions')}><h1>Institutions</h1></div>
            <div id='text' className={`p-2 ${currsentSection == 'text' ?class2 : class3 } ${class1} `} onClick={() => setCurrentSection('text')}><h1>Text</h1></div>
            <div id='url' className={`p-2 ${currsentSection == 'url' ?class2 : class3 } ${class1} `} onClick={() => setCurrentSection('url')}><h1>Url</h1></div>
            <div id='references' className={`p-2 ${currsentSection == 'references' ?class2 : class3 } ${class1} `} onClick={() => setCurrentSection('references')}><h1>References</h1></div>
          </div>
          <div className='p-6 border-2 border-solid border-blue-700'>
            <h1> <span className='font-bold text-2xl'> {currsentSection} </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi ea provident eveniet possimus fugit impedit pariatur doloremque explicabo autem, atque itaque dolor voluptatem sed, odio officiis optio nesciunt. Repellendus numquam veritatis eligendi, quisquam est libero exercitationem nobis eos fugiat dicta quos harum, iusto, laboriosam illo ullam perspiciatis at impedit tempora fugit esse officia! Ducimus qui tempore corrupti eum eos cupiditate? Commodi ad cumque dolor nam harum? Voluptas adipisci possimus perspiciatis eligendi perferendis inventore, incidunt architecto laborum exercitationem illum minima recusandae veniam odit maxime culpa dignissimos iste esse labore doloribus. Dignissimos, sapiente quidem voluptatum eaque enim possimus? Fugiat cupiditate, repellendus repudiandae pariatur omnis dolorum dolores ipsa alias cumque magnam porro aut commodi fuga aliquid autem dolor, quis delectus obcaecati, ratione ad enim recusandae neque necessitatibus non? Qui ullam perspiciatis, eaque tempore magni omnis voluptatibus aut quam voluptates odio maiores ipsam, totam error est numquam nihil quidem quia dolores ut rerum eveniet distinctio nulla quos pariatur? Officiis odio magni porro voluptatem, quaerat illum quos voluptas suscipit numquam ea ab dolore aspernatur ut reprehenderit doloribus quisquam corporis consequatur, nobis, maxime quasi nemo facilis! Quis corrupti amet iusto molestiae voluptatibus praesentium numquam asperiores cumque quibusdam nihil aliquid dolorum accusantium doloremque, in nemo maxime explicabo voluptatum debitis ab saepe quasi totam dicta perferendis! Consectetur voluptas reprehenderit sunt deserunt quasi perspiciatis magni doloremque veniam saepe dicta, placeat inventore delectus officia? Id non laboriosam molestiae dolore voluptatibus consequuntur nam sint. Distinctio optio molestias sequi maxime modi blanditiis, repellat accusantium corporis debitis quia sunt sint quisquam minima aliquid exercitationem enim ut, ea nisi! Deleniti velit aperiam nam, eos minima officia voluptatum eum harum? Autem voluptatum et vitae fugit, id, quidem alias sequi, quisquam soluta ipsam voluptate provident accusamus necessitatibus fugiat. Labore deserunt in enim minima, nam exercitationem impedit dolorem repudiandae ex. Voluptatem, maxime magni ad fugit quibusdam nam enim eius explicabo tenetur voluptatibus quisquam mollitia dolor neque non placeat, asperiores corporis cupiditate molestias reiciendis eaque. Libero quia sed eius officiis maiores possimus ipsa similique accusamus quisquam impedit commodi quae recusandae aut, blanditiis vel eveniet suscipit delectus veniam enim nemo animi quo reiciendis perferendis. Illo, illum. Atque, ex quis eveniet voluptates repellendus quasi iusto doloremque dolorum accusamus nam enim quibusdam et mollitia ad! Blanditiis beatae consequuntur corrupti autem iure quibusdam error cumque accusamus numquam, illo est earum, modi rerum rem. Nisi, expedita rerum! Provident neque ipsum cupiditate corrupti fuga eos earum quam inventore. Natus eligendi, accusamus cupiditate recusandae earum placeat quae? Inventore commodi, iste earum dolorum dolores esse exercitationem dicta aliquam mollitia dolore ducimus tempore quos veritatis repudiandae maxime magnam minima eius repellendus similique in! Explicabo natus hic cumque rerum tempora quis enim exercitationem voluptates possimus harum odit laboriosam consequatur quo pariatur sed odio, nulla neque eius ipsum! Cumque excepturi labore modi asperiores ratione voluptates atque, quasi fugiat odio officia nostrum ullam laborum, alias dolores pariatur, odit magnam illum corporis non neque voluptatibus porro deserunt exercitationem eaque? Officiis corrupti quasi explicabo adipisci vitae deleniti repudiandae magnam unde. Dicta doloremque magnam quidem similique qui laborum architecto amet ad consequatur?</h1>
          </div>
          </div> 
        
      
      {/* 
      Mobile version
      <div className='w-9/12 mx-auto'>
            <div id='resume'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, resume: !currentActives.resume})}>
              <h1 className= {currentActives.resume ? class4 : ''}><span className= {class5}> Resume </span></h1>
              <p>{currentActives.resume ? 'resume' : ''}</p>
            </div>
            
            <div id='acteur'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, acteur: !currentActives.acteur})}>
              <h1 className= {currentActives.acteur ? class4 : ''}><span className={class5}> acteur </span></h1>
              <p>{currentActives.acteur ? 'acteur' : ''}</p>
            </div>

            <div id='motscle'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, motscle: !currentActives.motscle})}>
              <h1 className= {currentActives.motscle ? class4 : ''}><span className={class5}> motscle </span></h1>
              <p>{currentActives.motscle ? 'motscle' : ''}</p>
            </div>

            <div id='institutions'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, institutions: !currentActives.institutions})}>
              <h1 className= {currentActives.institutions ? class4 : ''}><span className={class5}> institutions </span></h1>
              <p>{currentActives.institutions ? 'institutions' : ''}</p>
            </div>

            <div id='text'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, text: !currentActives.text})}>
              <h1 className= {currentActives.text ? class4 : ''}><span className={class5}> text </span></h1>
              <p>{currentActives.text ? 'text' : ''}</p>
            </div>

            <div id='url'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, url: !currentActives.url})}>
              <h1 className= {currentActives.url ? class4 : ''}><span className={class5}> url </span></h1>
              <p>{currentActives.url ? 'url' : ''}</p>
            </div>

            <div id='references'
              className='p-2 block'
              onClick={() => setCurrentActives({...currentActives, references: !currentActives.references})}>
              <h1 className= {currentActives.references ? class4 : ''}><span className={class5}> references </span></h1>
              <p>{currentActives.references ? 'references' : ''}</p>
            </div>   
      </div>
      */}
      
    <FooterSigned/> 
    </div>
  )
}
