import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { GiBlackBook } from 'react-icons/gi';
import { AiOutlineWarning } from 'react-icons/ai';
import { GoLaw } from 'react-icons/go';
import { DiCssTricks } from 'react-icons/di';
import { BiTestTube } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';
import st from './home.module.css';
import Modal from '../components/Modal';
import { ExamMenu, LearnMenu } from '../components/Menu';
import Footer from '../components/Footer';

import ReactPlayer from 'react-player';


const MenuPage = function () {
  const [isOpenLearnMenuModal, setOpenLearnMenuModal] = useState<boolean>(false);
  const [isOpenExamMenuModal, setOpenExamMenuModal] = useState<boolean>(false);
  const menu = [
    {
      text: 'Học lý thuyết',
      icon: <GiBlackBook />,
      color: '#e67e22',
      action: () => setOpenLearnMenuModal(true),
      screen: 'desktop-only'
    },
    {
      text: 'Thi sát hạch',
      icon: <BiTestTube />,
      color: '#3498db',
      action: () => setOpenExamMenuModal(true),
      screen: 'desktop-only'
    },
    {
      text: 'Học lý thuyết',
      url: '/hoc-ly-thuyet.html',
      icon: <GiBlackBook />,
      color: '#e67e22',
      screen: 'mobile-only'
    },
    {
      text: 'Thi sát hạch',
      url: '/thi-sat-hach.html',
      icon: <BiTestTube />,
      color: '#3498db',
      screen: 'mobile-only'
    },
    {
      text: 'Biển báo',
      url: '/bien-bao-giao-thong.html',
      icon: <AiOutlineWarning />,
      color: '#e74c3c',
      screen: ''
    },
    {
      text: 'Mẹo thi',
      url: '/meo-thi-ket-qua-cao.html',
      icon: <DiCssTricks />,
      color: '#f39c12',
      screen: ''
    },
    {
      text: 'Luật đường bộ',
      url: '/luat-duong-bo.html',
      icon: <GoLaw />,
      color: '#9b59b6',
      screen: ''
    },
    {
      text: 'Ôn tập câu sai',
      url: '/on-tap-cau-sai.html',
      icon: <TiTimes />,
      color: '#1abc9c',
      screen: ''
    },
  ]
  return (
    <React.Fragment>
      <Header />
      <div className={`${st.banner}`}>
        <div className={`${st.mask}`}></div>
        <div className={`${st.content}`}>
          <p style={{ fontSize: '4rem', fontWeight: 500 }}>Trường Cao đẳng Cơ giới & Thuỷ lợi</p>
          <p style={{ fontSize: '3rem', fontWeight: 300 }}>Luyện thi bằng xe máy A1</p>
        </div>
        {/* {<img src="https://image.lag.vn/upload/news/20/09/08/b73_KWPL.jpg" alt="" />} */}
        {/* {<ReactPlayer
          url="https://www.youtube.com/watch?v=mPBfR_b4uC0"
          playing={true}
          controls={true}
          loop={true}
          className={`${st.video}`}
        />
        } */}
        <video style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} preload="auto" controlsList="nodownload" loop autoPlay playsInline muted>
      <source src="https://doc-08-98-docs.googleusercontent.com/docs/securesc/q9d37u2ih05ad4anobc4csvctl0dgmpr/eukfr9vg70fce1faut40n0v204com59g/1684920225000/12348718722517299105/12348718722517299105/1r24MS-RJfC3MjoB16ppccnY4ukf7yPd7?e=download&ax=ADWCPKA88YuhOED6NFe8T3yGUMdW984Pw5yohnwTWnm6gUdHBHXnox8mfyUGoBqJ5mX-VjjGJd5JczqztMdmV08IpozXHVVopcwufIEh0pqgm26QIW-uQw-JW33HdBjUuYNXBhlvEWPVGJLYzuD5dGmvNcx3_Mn41pibx9FopafotNm051eHJt6WAEQyqw5KaIflWFGCF7aW427hw70OvhWSK4r_q-X3gfYXDi0eUGe-NMH3xqc33JlHZ6wJYmmKl1K4ww0ORyhv_QIbP5lUHpBxuZ8xcBumqtjAMxt7qQmiaRXyclPU-cSjULELJoFm1BVFNZH_ZSjPdh6wIjY09uCQwT5ZvvZ7j6TwOmwr1Vs5VB-cOGJvcvcb2KhMqsNbfrGpjHfCTWN48okpJXjC1ikCUHpP-hh3uCZ-Yx-evafJEdvlDF1ix3vhKzY4eKZ2SawJyL-FxtaLTxBdygg0w3jRy9KjRPtk_wMZVRvD5NRx8sbplhOayHTfZzbKyU5eJir3PDmP64bZNUoc2c1K2c6hn29yA_6-umYhoIwwhyLSlztzMbQATpiGEXUVVx6h3Rq_-8VQ7VoW0bvmv8ZzoQTmTqoXFqzcvmVW8amcAp2tRHaOUOrTmn43Km5VfIME5hF_JO3S3aVAiNsACuqfDOjp1wm3_FYBTkCeTI3eAEAp3NgZkvFlCaxlQirV8JwHgxVEqq2Rrbcsrt-Pkl2kOBo-udep_OTbjdokz278HCJ0NoBiFgHiYwD3-Hp4XW8hLRJpOQVEqnzkfZj9sqOPC_lVBmt3NWX3iFhZyIU3CAz2vJ8GfKhibSCiG7rGsjp7hubf0dm7_SPkMcxNmFa6v-jFqRS5mWLr4sx0ny1FMBWuJbBfIhZOTX3p6EP2HJ5MS5kF2A&uuid=c61a9e63-6a6b-4165-9988-891a009c17ab&authuser=0&nonce=lsq77qre0l36s&user=12348718722517299105&hash=hbbl8q2hp46ol59hrvokjal97jm1dki2" type="video/mp4" />
    </video>
      </div>
      <div className={`container ${st.container}`}>
        <ul className={st['list-item']}>
          {menu.map((item, i) => <li key={i} className={item.screen}>
            {item.url !== undefined &&
              <Link to={item.url} className={st.paper} style={{ color: item.color }}>
                <div className={`${st.icon}`}>{item.icon}</div>
                <h3 className={st.title}>{item.text}</h3>
              </Link>
            }
            {item.url === undefined &&
              <div className={st.paper} style={{ color: item.color }} onClick={item.action}>
                <div className={`${st.icon}`}>{item.icon}</div>
                <h3 className={st.title}>{item.text}</h3>
              </div>
            }
          </li>)}
        </ul>
      </div>
      <div className={st['footer-wrapper']}>
        <Footer />
      </div>
      <Modal
        isOpen={isOpenLearnMenuModal}
        handleOutsideClick={() => setOpenLearnMenuModal(false)}
      >
        <div className={`${st['modal-paper']}`}>
          <div className={st['modal-content']}>
            <LearnMenu />
          </div>
          <div className={st['modal-action']} style={{ paddingRight: '3rem' }}>
            <span className={st.close} onClick={() => setOpenLearnMenuModal(false)}>
              Đóng
            </span>
            {/* <span onClick={handleSubmit}>
              Đồng ý
            </span> */}
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpenExamMenuModal}
        handleOutsideClick={() => setOpenExamMenuModal(false)}
      >
        <div className={`${st['modal-paper']}`}>
          <div className={st['modal-content']}>
            <ExamMenu />
          </div>
          <div className={st['modal-action']}>
            <span className={st.close} onClick={() => setOpenExamMenuModal(false)}>
              Đóng
            </span>
            {/* <span onClick={handleSubmit}>
              Đồng ý
            </span> */}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default MenuPage;
