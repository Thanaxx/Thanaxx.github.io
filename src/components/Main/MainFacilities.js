import React, {useState} from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../../styles/Facilities.css';
import faclitiesData from '../../data/homeFaciltiesData';

//plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'

function MainFacilities() {

    //slice array of objectPosition:
    const [itemCount, setItemCount] = useState(6);

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
            <p data-aos="fade-up" className='title' >SPORTS FACILITIES</p>
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
                        {faclitiesData.slice(0, itemCount).map((items, index) => (
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

            <div className="faci-btn" data-aos="fade-up">
                <a href="/facilities"><button>VIEW MORE FACILITIES</button></a>
            </div>
        </div>
    </>
  )
}

export default MainFacilities