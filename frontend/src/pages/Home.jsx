import React from 'react'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'

const Home = () => {
    return (
        <>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewStatistics />
                    <SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home