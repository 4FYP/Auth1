import React from 'react'
import Image from "../img/mob1.jpg";
import Image1 from "../img/m.png"
import Image2 from "../img/m1.png"
import People from "../img/people.jpg"
import DarklightMode from './DarklightMode';

const LandP = () => {
  return (
    <div className="main_container">
        <DarklightMode/>
        <div className="col-lg-9 col-md-12 mb-4 mb-md-0">
        <div className="left_div">
        <h4 className='front_heading'>Read fiction and support authors in becoming globally successful</h4>
            
            <div class="reader_div">
            <div className='icon_div'>
            <svg className="reader_icon" viewBox="0 0 1200 980" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.9 101.1L100.9 807.2C103.8 807.5 106.1 807.9 108.4 807.9 203.8 808 299.2 807.6 394.6 808.1 428.8 808.3 463.3 808.1 497.1 812.1 536.8 816.8 572.3 834.4 604.6 857.9 606.4 856.8 607.8 856.1 609 855.2 655.3 822.7 706.5 807.5 763.2 807.8 873.2 808.5 983.2 808 1093.2 808L1108.4 808 1108.4 101.1 1098.3 101.1C983.6 101.1 868.9 100.8 754.1 101.3 699.4 101.6 655.6 147 655.1 202.9 654.7 254.2 655.1 305.4 655.1 356.7 655.1 439.5 655.4 522.2 654.9 605 654.8 635.2 631.9 657.2 603.3 656.6 575.4 656 554.5 633.1 554.5 603.2 554.5 570.5 554.6 537.8 554.6 505.1 554.6 404.9 554.9 304.8 554.5 204.7 554.2 145.8 509.8 101.3 452.4 101.2 358.2 101 264 101.1 169.8 101.1 147 101.1 124.3 101.1 100.9 101.1M603.8 69.9C638.1 32.5 677.6 10 724.9 3.1 743.5 0.4 762.6 0.2 781.4 0.1 920.2 0 1058.9 0.2 1197.7 0.3L1209.8 0.3 1209.8 908.7C1188.4 908.7 1167.3 908.7 1146.2 908.7 1016.1 908.6 886 908.2 756 908.7 712.6 908.8 675.5 925.3 645.5 957 619.2 984.8 590.2 984.6 564 956.8 533.3 924.5 495.4 908.6 451.1 908.5 305.6 908.4 160.2 908.5 14.7 908.6L0 908.6 0 0 25.4 0C166.5 0 307.6-0.1 448.7 0.1 507 0.1 557.3 20.1 598.3 62.1 600.2 64 601.5 66.5 603.8 69.9"></path>
            </svg>
            </div>
                <p className='reader_para'><b>For Readers:</b> Enjoy access to incredible fiction of all genres and be the first to discover talented writers. Join our community and connect with your favorite writers to share your feedback.</p>
                </div>
            <div className='writer_div'>
                <div className='writer_icon_div'>
                    <svg className="writer_icon" class="feather-icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.065 17.823c.159-.147.318-.293.475-.441 1.774-1.66 3.546-3.323 5.323-4.98a.47.47 0 0 1 .285-.125c2.108-.007 4.215-.005 6.322-.004.028 0 .055.013.147.036-.218.24-.395.473-.612.664-2.917 2.558-6.315 4.165-10.227 4.747-.55.083-1.109.122-1.663.18l-.05-.077zm11.233-10.57L22 .817c-.11.647-.194 1.267-.32 1.88a21.7 21.7 0 0 1-1.378 4.267c-.091.208-.19.295-.44.293-1.424-.013-2.848-.006-4.272-.006h-.292zm-8.693 6.484V10.93c0-.918-.01-1.836.008-2.754a.89.89 0 0 1 .187-.527c.61-.717 1.245-1.417 1.875-2.119.19-.21.393-.408.648-.67.013.16.023.231.024.303 0 1.904.003 3.809-.005 5.713 0 .131-.047.298-.138.387-.81.797-1.633 1.58-2.454 2.367-.027.026-.061.046-.145.108zM19.5 8.555c-.281.414-.539.82-.826 1.205-.307.413-.636.813-.971 1.205a.494.494 0 0 1-.325.163c-2.046.01-4.093.006-6.14.004-.028 0-.058-.01-.127-.025.07-.076.12-.141.18-.196.817-.75 1.633-1.501 2.456-2.245a.526.526 0 0 1 .31-.143c1.77-.008 3.542-.005 5.314-.004.027 0 .054.015.13.036zM5.437 9.895c0 1.326-.056 2.656.02 3.979.048.822-.166 1.432-.84 1.946-.467.356-.858.804-1.284 1.21-.013.013-.033.02-.105.059.26-2.555.877-4.968 2.209-7.194zm-2.119 8.732L.844 21 0 20.309l2.48-2.373.838.69zM21.004.067l-10.487 9.944v-.326c0-1.836.004-3.673-.007-5.51-.001-.224.08-.351.26-.478C13.415 1.853 16.324.62 19.568.155c.467-.067.938-.104 1.408-.155l.03.068z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <p className='writer_para'><b>For writers:</b> Submit your writing to grow your community, receive feedback from readers, and monitor your analytics. When your book becomes a hit on authpoint.</p>
            </div>
           
            </div>
        </div>
        <div className="col-lg-10 col-md-12 mb-4 mb-md-0">
        <div class="right_div">
            <img src={Image} alt="no pic" className='front_img'/>
        </div>
        </div><br/><br/>
        <div className="para_auth">
                <br /><br/><br/>
                <h2 className='front_heading1'>Get Published With Authpoint</h2>
                <p className='reader_para1'>Giv feedback on authpoint and we provide you the rating and semental analysis </p>
                <img src={Image1} className='m_img'/>
        </div>
            <div className='img_auth'>
                <br /><br/><br/>
                <img src={Image2} className='m1_img'/>
            </div><br/><br/><br/>
            <div className="third_main">
                <br/>
            <h2 className='people_heading'>Loved by People Around the World</h2>
                <div className="third_one">
                    <img src={People} alt="no pic" className='people_pic' />
                    <p className='people_para'>Authpoint redefined my life and could do the same to yours. They aren’t a publishing house, they are a family. And family doesn’t give up on family. So I can guarantee you, when you become a family member. You will be shown the unending support I have been given.
Ehsan Ul haq</p>
                </div>
                <div className="third_two">
                <img src={People} alt="no pic" className='people_pic' />
                    <p className="people_para">
                    It is a major encouragement to writers, it gives everyone a chance to reach a wider audience and provides an amazing support system to help writers grow.
Hassan Raza
                    </p>
                </div>
                <div className="third_three">
                <img src={People} alt="no pic" className='people_pic' />
                    <p className='people_para'>
                    It gives me a chance to check out up and coming authors and read works ahead of publishing. Great way to discover an author who will one day be renowned.
Mazhar Hussain
                    </p>
                </div>
                <div className="third_four">
                <img src={People} alt="no pic" className='people_pic' />
                    <p className='people_para'>
                    It's pretty awesome to be able to read books written from people from all over the world. The app is very user friendly and I really enjoy it!
ali
                    </p>
                </div>
            </div>

    </div>
  )
}

export default LandP;