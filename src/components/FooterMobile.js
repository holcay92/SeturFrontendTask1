import React from 'react';
import facebookIcon from './images/footerImages/facebook.svg';
import InstagramIcon from './images/footerImages/instagram.svg';
import TwitterIcon from './images/footerImages/twitter.svg';
import PinterestIcon from './images/footerImages/pinterest.svg';
import YoutubeIcon from './images/footerImages/youtube.svg';
import appledownload from './images/footerImages/appledownload.png';
import androiddownload from './images/footerImages/androiddownload.png';
import iconWhatsapp from './images/footerImages/whatsapp.svg';

import seturfootericon from './images/footerImages/seturfootericon.svg';
import rightArrow from './images/footerImages/rightarrowicon.svg';
import koclogo from './images/footerImages/koc.svg';
import visalogo from './images/footerImages/visa.png';
import tursablogo from './images/footerImages/tursab.svg';
//company logos
import seturDutyFree from './images/footerImages/seturCompanies/seturdutyfree.png'
import seturday from './images/footerImages/seturCompanies/seturday-logo.png'
import seturSelect from './images/footerImages/seturCompanies/seturselect.png'
import seturBiz from './images/footerImages/seturCompanies/seturbiz.png'
import seturMice from './images/footerImages/seturCompanies/seturmice.png'
import sedventure from './images/footerImages/seturCompanies/sedadventure.png'
import seturCruise from './images/footerImages/seturCompanies/seturcruise.png'
import seturAcademia from './images/footerImages/seturCompanies/seturacademia.png'

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function App() {
    return (

        <div className='footerMobile'>


            <MDBFooter className='text-center' color='white'  >
                <MDBContainer className='p-5'>


                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center justify-content-rg'>

                                <MDBCol size="auto">
                                    <div className='whatsappRectangleMobile'>
                                        <p className='whatsAppTextMobile'><img className='whatsappIconMobile' src={iconWhatsapp} /> Whatsapp</p>
                                        <p ><a className='whatsAppNumberMobile' href="tel:0-546-786-68-00">0546 786 68 00</a> </p>
                                    </div>
                                </MDBCol>
                                <MDBCol size="auto">
                                    <div className='cagriMerkeziRectangleMobile'>
                                        <p className='cagriMerkeziTextMobile'><i></i> Çağrı Merkezi</p>
                                        <p ><a className='cagriMerkeziNumberMobile' href='tel:444 28 22'>444 28 22</a> </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>

                    <section className='mb-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                            sequi voluptate quas.
                        </p>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}