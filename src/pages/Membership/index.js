import React from 'react'
import MemberHero from '../../components/Membership/MemberHero';
import MembershipPlan from '../../components/Membership/MembershipPlan';
import MembershipBenefits from '../../components/Membership/MembershipBenefits';

function index() {
  return (
    <>
        <MemberHero />
        <MembershipPlan />
        <MembershipBenefits />
    </>
  )
}

export default index