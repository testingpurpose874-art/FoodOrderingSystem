import React from 'react'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import Footer from '@/components/shared/Footer'

const Home = () => {
    return (
        <>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewStatistics />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home