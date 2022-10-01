import React from 'react'
import { MdMailOutline } from 'react-icons/md'
import { AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai'

import './Contact.scss'

const Contact = () => {
    return (
        <div className='section-content'>
            <p className='subtitle'>Nuestras redes</p>
            <div className='contact'>
                <div className='contact__social'>
                    <div className='contact__social-mail'>
                        <a href='mailto:infinitelanguagestudio@gmail.com'>
                            <MdMailOutline size={27} />
                        </a>
                        <span>infinitelanguagestudio@gmail.com</span>
                    </div>
                    <br />
                    <div className='contact__social-group'>
                        <div className='contact__social-whatsapp'>
                            <span>Lorena FS</span>
                            <div className='border-social' />
                            <div>
                                <a target='_blank' rel='noreferrer' href='https://wa.me/1132932488'>
                                    <AiOutlineWhatsApp size={28} />
                                </a>
                                <span>011-3293 2488</span>
                            </div>
                            <div>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/noe_garcia_pereira/'>
                                    <AiFillInstagram size={28} />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                        <div className='contact__social-whatsapp'>
                            <span>Noelia GP</span>
                            <div className='border-social' />
                            <div>
                                <a target='_blank' rel='noreferrer' href='https://wa.me/1159474947'>
                                    <AiOutlineWhatsApp size={28} />
                                </a>
                                <span>011-5947 4947</span>
                            </div>
                            <div>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/noe_garcia_pereira/'>
                                    <AiFillInstagram size={28} />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact__maps'>
                    <div className='contact__maps-san-rafael'>
                        <p>San Rafael</p>
                        <p>Provincia de Mendoza</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412077.7295504455!2d-69.26521409377436!3d-33.368268342119904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967907fdb13d06a7%3A0xe0fb2796d473309d!2sSan%20Rafael%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1664635558427!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='Mapa de San Rafael' referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact__maps-tupungato'>
                        <p>Tupungato</p>
                        <p>Provincia de Mendoza</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253835.7554337564!2d-69.30489703930161!3d-34.93946176778414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967dcd07cab22bc7%3A0x2cb3614db155dff9!2sTupungato%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1664635673273!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            title='Mapa de Tupungato' referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='border-social' />
                <div className='contact__end'>
                    Hasta pronto
                </div>
            </div>
        </div>
    )
}

export default Contact
