import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import facilitiesMain from '../../data/facilities';

//plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'

function FacilitiesGallery() {

    // const onInit = () => {
    //     console.log('light gal')
    // }

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

  return (
    <>
        <div className="faci-wrap">
            <div className="gallery-grid">
                <LightGallery
                    elementClassNames="gallery"
                    onBeforeSlide={onBeforeSlide}
                    plugins={[lgZoom]}
                    // onInit={onInit}
                    download= {false}
                    zoom={false}
                    counter={false}
                >

                    {facilitiesMain.map((items, index) => (
                        <a href={items.faciImage} className='grid-col' data-aos="fade-up" >
                        <div className='image-section' >
                            <img src={items.faciImage} alt={items.faciLabel} />
                        </div>
                        <div className="content">
                            <p>{items.faciLabel}</p>
                        </div>
                        </a>
                    ))}

                </LightGallery>
            </div>
        </div>
    </>
  )
}

export default FacilitiesGallery