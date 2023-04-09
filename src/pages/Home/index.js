import React from 'react';
import HeroVid from '../../components/Main/HeroVid';
import Activities from '../../components/Main/Activities';
import MainCarousel from '../../components/Main/MainCarousel';
import MainFacilities from '../../components/Main/MainFacilities';
import Instagram from '../../components/Instagram';

function index() {
  return (
    <>
        <HeroVid/>
        <Activities />
        <MainCarousel />
        <MainFacilities />
        <Instagram />
    </>
  )
}

export default index