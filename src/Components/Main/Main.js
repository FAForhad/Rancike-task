import React from 'react';

const Main = () => {
    return (
        <div className='px-2 lg:px-10 pb-10'>
            < div style={{ height: '1029px' }} className="rounded-3xl lg:border-solid lg:border-blue-500 lg:border-4 flex-reverse lg:flex lg:px-14" >
                <form class="flex-auto lg:w-2/5">
                    <h1 className='text-4xl font-bold mx-3 lg:my-9 text-start' >Education <span className='font-extrabold ' style={{ color: '#FF5630' }} >*</span></h1>
                    <div className="form-control mx-3 lg:mr-14 lg:my-6">
                        <label className="label">
                            <h1 className="label-text text-lg my-1 font-medium">Year of passing <span className='font-bold ' style={{ color: '#FF5630' }}>*</span> </h1>
                        </label>
                        <input type="number" placeholder="2024" className="input input-lg input-bordered text-2xl" required style={{ border: '2px solid #999999' }} />
                        <label className="text-end">
                            <span className="label-text text-lg my-1 font-medium" style={{ color: '#707784' }}>0/100</span>
                        </label>
                    </div>
                    <div className="form-control mx-3 lg:mr-14 lg:my-6">
                        <label className="label">
                            <h1 className="label-text text-lg my-1 font-medium">Region <span className='font-bold ' style={{ color: '#FF5630' }}>*</span> </h1>
                        </label>
                        <input type="text" placeholder="Jalandhar" className="input input-lg input-bordered text-2xl" required style={{ border: '2px solid #999999' }} />
                        <label className="text-end">
                            <span className="label-text text-lg my-1 font-medium" style={{ color: '#707784' }}>0/100</span>
                        </label>
                    </div>
                    <div className="form-control mx-3 lg:mr-14 lg:my-6">
                        <label className="label">
                            <h1 className="label-text text-lg my-1 font-medium">College Name <span className='font-bold ' style={{ color: '#FF5630' }}>*</span> </h1>
                        </label>
                        <input type="text" placeholder="NIT Jalandhar" className="input input-lg input-bordered text-2xl" required style={{ border: '2px solid #999999' }} />
                        <label className="text-end">
                            <span className="label-text text-lg my-1 font-medium" style={{ color: '#707784' }}>0/100</span>
                        </label>
                    </div>
                    <div className="form-control mx-3 lg:mr-14 lg:my-6">
                        <label className="label">
                            <h1 className="label-text text-lg my-1 font-medium">Describe College <span className='font-bold ' style={{ color: '#FF5630' }}>*</span> </h1>
                        </label>
                        <textarea type="text" placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." required className='rounded-lg text-2xl' style={{ border: '2px solid #999999', padding: '16px 24px', height: '197px' }} />
                        <label className="text-end">
                            <span className="label-text text-lg my-1 font-medium" style={{ color: '#707784' }}>0/200</span>
                        </label>
                    </div>
                    <div className=' mx-3 font-bold' style={{ background: '#0370DD', borderRadius: '8px', width: '172px' }}>
                        <button style={{ padding: '16px 40px', }} className="text-white">Generate</button>
                    </div>
                </form>
                <div class="flex justify-center items-center lg:w-3/5">
                    <div></div>
                    <div>
                        <img style={{ width: '1400px' }} className='mx-auto my-auto' src="https://uploads-ssl.webflow.com/61ff4852ad21bb77940f3350/62c3ab4f4658d89e37f47879_69360-thinking-of-something.gif" alt="" />
                    </div>
                </div>
            </ div>
        </div >
    );
};

export default Main;