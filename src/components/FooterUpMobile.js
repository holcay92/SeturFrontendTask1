import React from 'react'
import facebookIcon from './images/footerImages/facebook.svg';
import InstagramIcon from './images/footerImages/instagram.svg';
import TwitterIcon from './images/footerImages/twitter.svg';
import PinterestIcon from './images/footerImages/pinterest.svg';
import YoutubeIcon from './images/footerImages/youtube.svg';
import appledownload from './images/footerImages/appledownload.png';
import androiddownload from './images/footerImages/androiddownload.png';


function FooterUpMobile() {
  return (
    <div>
         {/*UP FOOTER--SOCIAL MEDIA SECTION */}
         <div className='footerUpMobile'>
                <div className='d-flex justify-content-center' style={{ backgroundColor: '#dddd' }}>
                    <div>
                        <a href='https://www.facebook.com.tr' className='me-4 text-reset'>
                            <img className='facebookIconMobile' src={facebookIcon} alt='' />
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        <a href='https://www.twitter.com.tr' className='me-4 text-reset'>
                            <img className='twitterIconMobile' src={TwitterIcon} alt='' />
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='https://www.pinterest.com.tr' className='me-4 text-reset'>
                            <img className='pinterestIconMobile' src={PinterestIcon} alt='' />
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href='https://www.instagram.com.tr' className='me-4 text-reset'>
                            <img className='instagramIconMobile' src={InstagramIcon} alt='' />
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href='https://www.youtube.com.tr' className='me-4 text-reset'>
                            <img className='youtubeIconMobile' src={YoutubeIcon} alt='' />
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>


                    <div>
                        <a href='https://www.apple.com.tr' className='appleLogoMargin'>
                            <img className='appleIconMobile' src={appledownload} alt='' />
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://www.google.com.tr' className='androidLogoMargin'>
                            <img className='googleIconMobile' src={androiddownload} alt='' />
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
            {/*UP FOOTER--SOCIAL MEDIA SECTION */}
            </div>
    </div>
  )
}

export default FooterUpMobile