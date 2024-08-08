import React from 'react'
import AppliancesStore from '../../components /LandingPage/OfficialStore/AppliancesStore'
import Navbar from '../../components /LandingPage/Navbar'
import BeautyStore from '../../components /LandingPage/OfficialStore/BeautyStore'
import GadgetStore from '../../components /LandingPage/OfficialStore/GadgetStore'
import FashionStore from '../../components /LandingPage/OfficialStore/Fashion'
import KidBrandStore from '../../components /LandingPage/OfficialStore/KidsBrandStore'
import GroceryStore from '../../components /LandingPage/OfficialStore/GrocceryStore'

const OfficialStore = () => {
  return (
    <div>
      <Navbar />
      <AppliancesStore />
      <BeautyStore />
      <GadgetStore />
      <FashionStore />
      <KidBrandStore />
      <GroceryStore />
    </div>
  )
}

export default OfficialStore
