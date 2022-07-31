import React from 'react'

function Feature() {

    const data = [
        {
            id:0,
            title: "Track Company-Wide Progress 1",
            des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            id:1,
            title: "Track Company-Wide Progress 2",
            des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            id:2,
            title: "Track Company-Wide Progress 3",
            des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
        {
            id:3,
            title: "Track Company-Wide Progress 4",
            des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
        },
    ]

  return (
    <section id='features'>
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
            {/* What's Different */}
            <div className='flex flex-col space-y-12 md:w-1/2'>
                <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                    What's Different About Manage?
                </h2>
                <p className='mx-w-sm text-center text-gray-500 md:text-left'>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                </p>
            </div>



            {/* Numbered List */}
            <div className='flex flex-col space-y-8 md:w-1/2'>
                {/* List Item  */}
                {   
                    data.map(({id, title, des}) => {
                        return (
                            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                                <div className='rounded-l-full bg-red-400 md:bg-transparent'>
                                    <div className='flex items-center space-x-2'>
                                        <div className='px-4 py-2 text-white rounded-full bg-red-300 md:py-1'>
                                            0{id + 1}
                                        </div>
                                        <h3 className='text-base font-bold md:mb-4 md:hidden'>
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='hidden mb-4 text-lg font-bold md:block'>Track Company-Wide Progress 2</h3>
                                    <p className='text-gray-500'>
                                    {des}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                    
                }

                
            </div>
            
        </div>
    </section>
  )
}

export default Feature