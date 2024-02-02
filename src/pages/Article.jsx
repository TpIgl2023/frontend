import React, { useState } from 'react'
import NavArticles from '../components/navbars/NavArticles';
import FooterSigned from '../components/footers/FooterSigned';

export default function Article() {

  const [resume,setResume]=useState(false)
  const [keyWord,setKeyWord]=useState(false)
  const [author,setAuthor]=useState(false)
  const [institution,setInstitution]=useState(false)
  const [text,setText]=useState(false)
  const [URL,setURL]=useState(false)
  const [ref,setRef]=useState(false)

  const classPassive="  bg-main flex-1 text-center py-5 text-white cursor-pointer"
  const classActive="   bg-white flex-1 text-center py-5 text-black font-bold border-y-4 border-main "
  const TestArticle={
    id:"5",
    title: "Email Spam Detection using Bidirectional Long Short Term Memory with Convolutional Neural Network",
    resume: "Communication over email in this era of Internet has become very popular on account of its being cheap and easy to use for messaging and sharing important information to others. But spam messages often times make large volume of unwanted messages in the users inbox and it also wastes the resources as well as valuable time of the users. Therefore, in order to identify the message whether it is spam or ham, an efficient and accurate technique is required. In this paper, we propose a new model for detecting spam messages based on the sentiment analysis of the textual data of the email body. We incorporate Word-Embeddings and Bidirectional LSTM network to analyze the sentimental and sequential properties of texts. Furthermore, we speed up the training time and extract higher level text features for Bi-LSTM network using Convolution Neural Network. We involve two datasets namely lingspam dataset and spam text message classification dataset and adopt recall, precision and f-score for comparing and evaluating the performance of our proposed approach. Our model achieves improved performance of accuracy about 98-99%. Apart from this, we demonstrate our model outperforms not only to some popular machine learning classifiers but also to state of the art approaches for detecting spam messages and hence, proves the superiority by itself.",
    authors: [
        "Rahman Sefat E",
        "Ullah Shofi"
    ],
    institutions: [
        "Department of Computer Science and Engineering, 9208, Bangladesh"
    ],
    keywords: [
        "Email Spamming",
        "CNN",
        "Bidirectional LSTM",
        "Word-Embeddings"
    ],
    text: "I. INTRODUCTION\nAlmost all people prefer email system for their daily task to communicate with others. But spam message is a threat to both individual and society. Spam messages basically means that some undesired messages are sent to the special target users inbox. Spam messages make users inbox packed with some unwanted messages which not only annoy the user but also some times the target users may fall into the arranged trap of the attacker . So, spam message is certainly a threat for email users as well as for the Internet society. Moreover, reading the whole texts of the spam message which is inboxed to the target users, some times user reads the whole text and afterward, realizes the message is spam and avoids it. Thereby, user wastes his valuable time too. That's why, it is very vital to prevent or filter out spam message from the messages which are not spam.\nMost popular and widely used technique for spam detection is Machine Learning(ML) based algorithms. Some of the researchers conducted supervised ML algorithms for comparative performance for spam identification using like Naive Baiyes , Dicision Tree  SVM . Integrated approach, combination of two or three algorithms are also proposed to improve the performance. Text based feature extraction is a very time-consuming task. Moreover, it is not easy to extract every important features from text which is not much in length. We demonstrate a new spam detection technique in this work using Bidirectional Long Short-Term Memory (Bi-LSTMs) with Convolutional Neural Network(CNN).\nThe objective of this research is to build a framework for email spam detection employing the neural network. We incorporate Convolutional Neural Network(CNN), Bidirectional Long-Short Term Memory(Bi-LSTM) with Word-Embedding Network. Our main contributions towards spam detection in this research are pictured as follows:\n• We analyze the sequential and sentimental properties and relationships among texts of the email using Word-Embeddings and Bidirectional Long Short Term Memormy(Bi-LSTM). • We speed up training time involving Convolutional Neural Network before the Bi-LSTM network and also extract higher level features of texts using this network within a less time compared to straight LSTM network. • To evaluate the performance of the proposed approach, we employ lingspam and spam text message classification(STMC) datasets as well as computing precision, recall and f-score. Our model outperforms to some popular machine learning algorithm and also to some recent approaches used to detect spam messages.\nThe remainder of this paper is embodied as follows; Section II describes literature study, Section III sketches overview and procedures of details implementation, Section IV presents the experimental results and finally, Section V ends with summarizing important outcomes of the experiment.\nII. LITERATURE STUDY\nVarious kinds of techniques and methods are used to detect spam email messages. There are actually three kinds of techniques used for this task namely single standard machine learning, hybrid machine learning, and feature engineering methods. Some works have also been done based on different kinds of features on textual and image data. Masurah  utilized Naïve Bayes, KNN, and Reverse DBSCAN algorithm by experimenting the Enron Corpus. For the recognition of texts, they adopted the OCR library and this OCR does not give so expected output.\nAs at the initial stage of pre-processing, image based spam can be filtered, text based email spam classification techniques were the focal point of most researchers. Some authors proposed to work based on clustering technique. Sasaki proposed k-means clustering  based approach to filter out spam from ham messages. Kumaresan  proposed spam detection technique, extracting textual features using SVM with cuckoo search algorithm. Renuka and Visalakshi utilized the SVM  to identify the spam email followed by the Latent Semantic Indexing (LSI) to select the features. TF-IDF  is used for the feature extraction. Here, SVM combined with LSI model compared with the SVM integrated with TF-IDF model without employing the LSI, PSO, and NN. However, SVM-LSI provides improved accuracy compared to any previous ML approach.\nFeng proposed integrated SVM and NB approach  for filter out the spam email. Actually, Integrated approach develops overall accuracy compared to straight SVM and NB methods. Moreover, Negative Selection Algorithm(NSA) with Particle Swarm Optimization (PSO) algrorithm, proposed to classify spam email. Here, PSO is involved to optimize the performance of the classifier. In 2015, Idris utilized for the development of the Negative Selection Algorithm (NSA) with PSO  for spam email separation. But, PSO performed comparatively good withroved performance accuracy about 98 -99%.\n",
    references: [
        "Email statistics report, 2015-2019. the radicati group ",
        "2nd International Conference on Intelligent Computing and Control Systems(ICICCS) Authors: Agarwal K, Kumar T",
        "International Journal of Computer Applications Authors: Rajput S, Arora A",
        "Latent semantic indexing based svm model for email spam classification ",
        "International Conference on Computer, Communications, and Control Technology Authors: Mohamad M, Selamat A",
        "2005 International Conference on Cyberworlds (CW'05) Authors: Sasaki M, Shinnou H",
        "International Journal of Bio-Inspired Computation Authors: Kumaresan T, Palanisamy C",
        "Proceedings of the first instructional conference on machine learning Authors: Ramos J",
        "2016 IEEE 35th International Performance Computing and Communications Conference (IPCCC) Authors: Feng W, Sun J, Zhang L, Cao C, Yang Q",
        "Engineering Applications of Artificial Intelligence Authors: Idris I, Selamat A, Nguyen N T, Omatu S, Krejcar O, Kuca K, Penhaker M",
        "Next Generation Computing Technologies(NGCT) Authors: Kaur H, Ajay S",
        "International Journal of Modern Education and Computer Science Authors: Zavvar M, Rezaei M, Garavand S",
        "Proceedings of the 2018 International Conference on Machine Learning Technologies Authors: Raj H, Weihong Y, Banbhrani S K, Dino S P",
        "Proceedings of the Joint Conference of the 47th Annual Meeting of the ACL and the 4th International Joint Conference on Natural Language Processing of the AFNLP Authors: Toutanova K, Cherry C",
        "2015 IEEE International Conference on Acoustics, Speech and Signal Processing Authors: Sainath T N, Vinyals O, Sen ior A, Sak H",
        "2012 IEEE Spoken Language Technology Workshop (SLT) Authors: Mikolov T, Zweig G",
        "2018 International Conference on Innovation in Engineering and Technology (ICIET) Authors: Roy S, Hossain S I, Akhand M, Siddique N",
        "IEEE Transactions on Smart Grid Authors: Kong W, Dong Z Y, Jia Y, Hill D J, Xu Y, Zhang Y",
        "Neural networks Authors: Graves A, Schmidhuber J"
    ],
    publishDate: "2023-01-02",
    pdfUrl:"http://www.lerobert.com",
  }
  const [activeTab, setActiveTab] = useState('resume');
  
  // Content for each tab
  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col min-h-[100vh] ">
      <NavArticles/>
      <div className="font-inter w-[80%] md:w-[95%] lg:w-[90%] grow mx-auto ">
        <div className="flex justify-center text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold w-full py-[30px] pt-14 sm:py-[50px] md:py-[80px]" >
          <h1 className="text-center w-[80%] xs:w-[75%] sm:w-[60%] lg:w-[50%]">{TestArticle.title}</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex text-xl lg:text-2xl font-semibold">
            <div className={`rounded-tl-2xl border-l-4 border-main ${activeTab=="resume" ? classActive  : classPassive}`} onClick={() => handleTabClick('resume')}>
                Résumé
            </div>
            <div className={`  ${activeTab=="author" ? classActive : classPassive}`} onClick={() => handleTabClick("author")}>
                Auteurs
            </div>
            <div className={` ${activeTab=="keyword" ? classActive : classPassive}`} onClick={() => handleTabClick('keyword')}>
                Mots clés
            </div>
            <div className={` ${activeTab=="insti" ? classActive : classPassive}`} onClick={() => handleTabClick('insti')}>
                Institutions
            </div>
            <div className={` ${activeTab=="contenu" ? classActive : classPassive}`} onClick={() => handleTabClick('contenu')}>
                Contenu
            </div>
            <div className={` ${activeTab=="url" ? classActive : classPassive}`} onClick={() => handleTabClick("url")}>
                URL
            </div>
            <div className={`rounded-tr-2xl border-r-4 border-main ${activeTab=="ref" ? classActive : classPassive}`} onClick={() => handleTabClick('ref')}>
                Réferences
            </div>
          </div>
          <div className="w-full h-[600px] border-l-4 border-r-4 border-b-4 border-main mb-[100px]  rounded-b-2xl   text-xl">
            <div className="overflow-y-auto h-full w-full  px-10 py-5">
              {activeTab == 'resume' && <div className="my-4">{TestArticle.resume}</div>}
              {activeTab == 'contenu' && <div className="my-4">{TestArticle.text}</div>}
              {activeTab == 'author' && <div>
                    {TestArticle.authors.map((author)=>(
                        <h1 className="font-semibold text-2xl pt-5"><span className='text-4xl text-main font-bold'>. </span>{author}</h1>
                    ))}
                    </div>
              }
              {activeTab == 'keyword' && <div>
                    {TestArticle.keywords.map((keyword)=>(
                        <h1 className="font-semibold text-2xl pt-5"><span className='text-4xl text-main font-bold'>. </span>{keyword}</h1>
                    ))}
                    </div>
              }
              {activeTab == 'ref' && <div>
                    {TestArticle.references.map((ref)=>(
                        <h1 className="font-semibold text-2xl pt-5"><span className='text-4xl text-main font-bold'>. </span>{ref}</h1>
                    ))}
                    </div>
              }
              {activeTab == 'insti' && <div>
                    {TestArticle.institutions.map((institution)=>(
                        <h1 className="font-semibold text-2xl pt-5"><span className='text-4xl text-main font-bold'>. </span>{institution}</h1>
                    ))}
                    </div>
              }
              {activeTab == 'url' && <div className="flex flex-col h-full w-full justify-center items-center gap-[50px]">
                  <h1 className="text-3xl lg:text-4xl font-bold underline">{TestArticle.pdfUrl}</h1>
                  <button className="bg-[#E1F8FF] text-main py-2 px-16 lg:px-20 rounded-2xl border-4 border-main font-semibold text-3xl" onClick={()=>{}}>Download here</button>
                </div>
              }
              </div>
          </div>
        </div>
        {/*mobile version*/}
        <div className="md:hidden font-inter py-10">
        
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold" onClick={()=>(setResume(!resume))}>
                <h1>Résumé</h1>
              </div>
              {resume && 
                <div className="py-5 text-md">
                  {TestArticle.resume}
                </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setKeyWord(!keyWord))}>
                <h1>Mots clés</h1>
              </div>
              {keyWord && 
                <div className="py-5 text-md">
                    {TestArticle.keywords.map((keyword)=>(
                        <h1 className="font-semibold text-lg pt-1"><span className='text-4xl text-main font-bold pr-5'>.</span>{keyword}</h1>
                    ))}                
                </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setAuthor(!author))}>
                <h1>Auteurs</h1>
              </div>
              {author && 
                <div className="py-5 text-md">
                    {TestArticle.authors.map((author)=>(
                        <h1 className="font-semibold text-lg pt-1"><span className='text-4xl text-main font-bold pr-5'>.</span>{author}</h1>
                    ))}                
                </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setInstitution(!institution))}>
                <h1>Institutions</h1>
              </div>
              {institution && 
                <div className="py-5 text-md">
                    {TestArticle.institutions.map((institutione)=>(
                        <h1 className="font-semibold text-lg pt-1"><span className='text-4xl text-main font-bold pr-5'>.</span>{institutione}</h1>
                    ))}                
                </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setText(!text))}>
                <h1>Contenu</h1>
              </div>
              {text && 
                <div className="py-5 text-md">
                {TestArticle.text}
              </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setURL(!URL))}>
                <h1>URL</h1>
              </div>
              {URL && 
                <div className="flex flex-col h-full  justify-center items-center  gap-[20px] py-10">
                  <h1 className="text-xl font-bold underline text-center">{TestArticle.pdfUrl}</h1>
                  <button className="bg-[#E1F8FF] text-main py-2 px-10 rounded-2xl border-4 border-main font-semibold text-md" onClick={()=>{}}>Download here</button>
                </div>
              }
              <div className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10" onClick={()=>(setRef(!ref))}>
                <h1>Références</h1>
              </div>
              {ref && 
                <div className="py-5 text-md pb-10">
                    {TestArticle.references.map((reference)=>(
                        <h1 className="font-semibold text-lg pt-1"><span className='text-4xl text-main font-bold pr-5'>.</span>{reference}</h1>
                    ))}                
                </div>
              }
        </div>

      </div>

      <FooterSigned/>
    </div>
  )
}
