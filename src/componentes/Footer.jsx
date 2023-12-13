import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css'
import Logo from '../img/Logo.png'
export const Footer = () => {
  return (
    <div bgColor='light' className='footer'>
      <section className='foot-icon'>
     

        <div>
          <a href='' className='icons'>
            <FaFacebook className='face'/>
          </a>
          <a href='' className='icons'>
            <FaTwitter className='face' />
          </a>
          <a href='' className='icons'>
            <FaGoogle className='face'/>
          </a>
          <a href='' className='icons'>
            <FaInstagram className='face'/>
          </a>
          <a href='' className='icons'>
            <FaLinkedin className='face'/>
          </a>
          <a href='' className='icons'>
            <FaGithub className='face'/>
          </a>
        </div>
      </section>
      <hr/>
      <section className='text-info'>
        <div className='text-center text-md-start mt-5'>
          <div className='mt-3'>
            <div md="3" lg="4" xl="3" className='mx-auto mb-4'>
              
              <h6 className='text-nom'>
                BeefyBites
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-res'>Restaurantes</h6>
              <p>
                <a href='#!' className='text-reset'>
                  zona sur calle 15 de obrajes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  El alto teleferico morado
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Zona Mirafrolores 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cbba. calle tablas esq. colomi
                </a>
              </p>
            </div>

            <div md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-res'>Novedades</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Nueva Coleccion King
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pack Familiar
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Coleccion del Rey
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  XT Steakhouse
                </a>
              </p>
            </div>

            <div md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-res'>Contactos</h6>
              <p>
                
                La Paz, Bolivia
              </p>
              <p>
                
                BeefyBites@gmail.com
              </p>
              <p>
                +059-66828282
              </p>
              <p>
                +059-76548156
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        BeefyBites © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          L.A.N.
        </a>
      </div>
    </div>
  );
}