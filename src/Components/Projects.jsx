import React, { useEffect, useRef, useState } from 'react'
import tripImage from "../Assests/trip.png"
import invoice from "../Assests/invoice.png"
import framehub from "../Assests/framehub.png"
import studyNotion from "../Assests/studyNotion.png"
import shopNext from "../Assests/shopnext.png"
import taskAgent from "../Assests/taskagent.png"
function Projects() {

    const [tripBlueprintOpen,setTripBlueprintOpen] = useState(false)
    const [invoiceOpen, setInvoiceOpen] = useState(false)
    const [framehubOpen,setFramehubOpen] = useState(false)
    const [studyNotionOpen, setStudyNotionOpen] = useState(false)

    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setTripBlueprintOpen(false);
            }
        }

        if (tripBlueprintOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tripBlueprintOpen]);

    const inoviceModalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (inoviceModalRef.current && !inoviceModalRef.current.contains(event.target)) {
                setInvoiceOpen(false);
            }
        }

        if (invoiceOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [invoiceOpen]);

    const framehubModalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (framehubModalRef.current && !framehubModalRef.current.contains(event.target)) {
                setFramehubOpen(false);
            }
        }

        if (framehubOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [framehubOpen]);

    const studyNotionModalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (studyNotionModalRef.current && !studyNotionModalRef.current.contains(event.target)) {
                setStudyNotionOpen(false);
            }
        }

        if (studyNotionOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [studyNotionOpen]);

  return (
        <div id="project" className="w-full mt-6">
            <div className="w-[97%] mx-auto shadow-xl border-t-[1px] bg-[#F5EFFF] rounded-lg">

              <div className="lg:w-[80%] w-[95%] mx-auto pb-12">

                <h1 className="text-center font-bold  lg:text-5xl text-4xl lg:pt-10 pt-6 ">MY PROJECTS</h1>
                <div className="lg:mt-12 mt-8 flex gap-10 justify-between flex-wrap ">

                    {/* Trip Blue print  */}
                    <div  className='lg:w-[30%]  p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={tripImage} alt="" className=' h-[14rem] object-cover rounded-lg' />
                        </div>
                        <div >
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Trip Blueprint</h2>
                                <button onClick={()=>setTripBlueprintOpen(true)} className='border px-4 py-1 rounded-lg bg-blue-400 font-semibold text-white'>View</button>
                            </div>
                            <div className='text-sm text-justify'>
                                Trip Blueprint is a MERN stack app that helps travel agencies create and manage day-wise itineraries.
                                Consultants can add destinations, transport, and activities with ease.
                                The plans can be exported as professional, shareable PDF documents.
                            </div>
                        </div>

                        {
                            tripBlueprintOpen &&
                            <div className='fixed backdrop-blur-sm bg-white/20 inset-0 flex justify-center items-center'>
                                <div ref={modalRef} className='lg:w-[40%] w-[90vw] lg:h-[85%] h-[70vh] overflow-scroll bg-white px-8 py-4 rounded-lg'>
                                    <div className='flex justify-center'>
                                        <img src={tripImage} alt="" className='w-[50%] h-[40%] object-contain rounded-lg' />
                                    </div>
                                    <div className='flex justify-between items-center my-2'>
                                        <h1 className='text-2xl font-semibold'>Trip Blueprint</h1>
                                        <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://travel-app-git-main-satynarayan-mauryas-projects.vercel.app/">Live Link</a>
                                    </div>
                                    <div className='text-justify text-sm'>
                                        <p><span className='font-semibold'>1. Role Based Access : </span> Designed for Admins, Travel Consultants, and Customers with secure login, each having tailored access to manage or view itineraries.</p>
                                        <p><span className='font-semibold'>2. Smart Itinerary Builder : </span> Enables consultants to create detailed, day-wise travel plans including destinations, activities, transport, and custom notes and email integration.</p>
                                        <p><span className='font-semibold'>3. Professional PDF Generation : </span> Allows export of visually appealing, shareable itinerary PDFs for customers with custom branding for travel agencies.</p>
                                        <p><span className='font-semibold'>4. Search & Filter Functionality : </span> Easy-to-use dashboard to search, filter, and manage itineraries by customer name, destination, or consultant.</p>
                                        <p><span className='font-semibold'>5. Tech Stack & Scalability : </span>  Built with the MERN stack (MongoDB, Express, React, Node.js), JWT authentication, and Tailwind CSS — scalable and optimized for future features like Google Maps integration and customer feedback.</p>

                                        <div className='mt-4'>
                                            <p className='font-semibold text-lg'>🔐 Private Access with Demo Login</p>
                                            <div>
                                               <p className='text-sm'>This project requires login to access itinerary details. Use the demo customer account below to explore :</p>
                                               <p><span className='font-semibold'>Phone Number:</span> 1111111111</p> 
                                               <p><span className='font-semibold'>Password:</span> 1234</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/* Invoice generation plateform */}
                    <div  className='lg:w-[30%] p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={invoice} alt="" className=' h-[14rem] object-cover rounded-lg' />
                        </div>
                        <div>
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Smart Invoice</h2>
                                <button onClick={()=>setInvoiceOpen(true)} className='border px-4 py-1 rounded-lg bg-blue-400 font-semibold text-white'>View</button>
                            </div>
                            <div className='text-sm text-justify'>
                                Smart Invoice is a MERN stack-based application for generating, managing, and sharing digital invoices.
                                Users can create branded invoices with customer details, itemized billing, and automatic tax calculations.
                                Invoices can be downloaded as PDFs.
                            </div>
                        </div>

                        {
                            invoiceOpen &&
                            <div className='fixed backdrop-blur-sm bg-white/20 inset-0 flex justify-center items-center'>
                                <div ref={inoviceModalRef} className='w-[40%] h-[85%] bg-white px-8 py-4 rounded-lg'>
                                    <div className='flex justify-center'>
                                        <img src={invoice} alt="" className='w-[50%] h-[40%] object-contain rounded-lg' />
                                    </div>
                                    <div className='flex justify-between items-center my-2'>
                                        <h1 className='text-2xl font-semibold'>Smart Invoice</h1>
                                        <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://invoice-app-git-main-satynarayan-mauryas-projects.vercel.app/">Live Link</a>
                                    </div>
                                    <div className='text-justify text-sm'>
                                        <p><span className='font-semibold'>1. Role-Based Access Control : </span> Control: Secure login for Admins (business owners) and Clients with customized dashboards for creating or viewing invoices.</p>
                                        <p><span className='font-semibold'>2. Dynamic Invoice Builder : </span> Quickly generate invoices by adding your company logo, client details, itemized products/services, taxes, discounts, and payment terms.</p>
                                        <p><span className='font-semibold'>3. Automated Calculations : </span> Real‑time subtotal, tax, discount, and total computations to eliminate manual errors.</p>
                                        <p><span className='font-semibold'>4. PDF Export & Delivery : </span> Instantly export polished, branded invoice PDFs or email shareable links directly to clients.</p>
                                        <p><span className='font-semibold'>5. Tech Stack & Integrations : </span>  Built with MongoDB, Express, React, Node.js, Tailwind CSS, JWT auth, and pdf‑lib—ready to integrate payment gateways or accounting APIs.</p>

                                        <div className='mt-4'>
                                            <p className='font-semibold text-lg'>🔐 Private Access with Demo Login</p>
                                            <div>
                                               <p className='text-sm'>This project requires login to access invoices. Use the demo accounts below to explore :</p>
                                               <p><span className='font-semibold'>Phone Number:</span> 9876543210</p> 
                                               <p><span className='font-semibold'>Password:</span> 1234</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/* Frame hub  */}
                    <div  className='lg:w-[30%] p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={framehub} alt="" className='w-full h-[14rem] object-contain rounded-lg' />
                        </div>
                        <div>
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Frame Hub</h2>
                                <button onClick={()=>setFramehubOpen(true)} className='border px-4 py-1 rounded-lg bg-blue-400 font-semibold text-white'>View</button>
                            </div>
                            <div className='text-sm text-justify'>
                                Smart Invoice is a MERN stack-based application for generating, managing, and sharing digital invoices.
                                Users can create branded invoices with customer details, itemized billing, and automatic tax calculations.
                                Invoices can be downloaded as PDFs.
                            </div>
                        </div>

                        {
                            framehubOpen &&
                            <div className='fixed backdrop-blur-sm bg-white/20 inset-0 flex justify-center items-center'>
                                <div ref={framehubModalRef} className='w-[40%] h-[90%] bg-white px-8 py-4 rounded-lg'>
                                    <div className='flex justify-center'>
                                        <img src={framehub} alt="" className='w-[50%] h-[40%] object-contain rounded-lg' />
                                    </div>
                                    <div className='flex justify-between items-center my-2'>
                                        <h1 className='text-2xl font-semibold'>Frame Hub</h1>
                                        <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://instagram-umber-psi.vercel.app/">Live Link</a>
                                    </div>
                                    <div className='text-justify text-sm'>
                                        <p><span className='font-semibold'>1. Role-Based Access Control : </span> Users can create accounts, post content, and interact with others.</p>
                                        <p><span className='font-semibold'> 2. Dynamic Content Posting : </span> Users can upload photos, videos, and reels with captions, tags, and hashtags. Support for profile customization (profile picture, bio, links).</p>
                                        <p><span className='font-semibold'>3. Real-Time Feed & Engagement : </span> Live updates to the feed when new posts are added. Like, comment, and share features with instant updates.</p>
                                        <p><span className='font-semibold'>4. Media Management & Sharing : </span> High-quality media storage with optimized delivery (e.g. Cloudinary).</p>
                                        <p><span className='font-semibold'>5. Tech Stack & Integrations : </span>  MongoDB, Express, React, Node.js, Tailwind CSS. JWT Authentication for security.</p>

                                        <div className='mt-4'>
                                            <p className='font-semibold text-lg'>🔐 Private Access with Demo Login</p>
                                            <div>
                                               <p className='text-sm'>This project may require login to access content. Example demo login: :</p>
                                               <p><span className='font-semibold'>Username:</span> anjali_arora</p> 
                                               <p><span className='font-semibold'>Password:</span> 1234</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    
                    {/* Study Notion  */}
                    <div  className='lg:w-[30%] p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={studyNotion} alt="" className='w-full h-[14rem] object-contain rounded-lg' />
                        </div>
                        <div>
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Study Notion</h2>
                                <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://study-notion-frontend-satynarayan-mauryas-projects.vercel.app/">Live Link</a>
                            </div>
                            <div className='text-sm text-justify'>
                                Study Notion is a MERN stack-based e-learning platform where instructors create and sell courses, and students purchase and learn through video lectures. It includes Razorpay integration for secure payments.
                            </div>
                        </div>
                    </div>

                    {/* Shop Next  */}
                    <div  className='lg:w-[30%] p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={shopNext} alt="" className='w-full h-[14rem] object-contain rounded-lg' />
                        </div>
                        <div>
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Shop Next</h2>
                                <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://e-commerce-frontend-green-ten.vercel.app/">Live Link</a>
                            </div>
                            <div className='text-sm text-justify'>
                                ShopNext is a MERN stack e-commerce website where users can browse products and place orders after logging in. Admins can manage products, users, and orders on the platform.
                            </div>
                        </div>
                    </div>

                    {/* Task Agent  */}
                    <div  className='lg:w-[30%] p-4 border shadow-lg   rounded-lg'>
                        <div>
                            <img src={taskAgent} alt="" className='w-full h-[14rem] object-contain rounded-lg' />
                        </div>
                        <div>
                            <div className='flex justify-between items-center my-3'>
                                <h2 className='text-2xl font-semibold'>Task Agent</h2>
                                <a  className='px-4 py-1 rounded-lg font-semibold bg-blue-400 text-white' target='_blank' href="https://task-agent-distribute-csv-data-mana.vercel.app/">Live Link</a>
                            </div>
                            <div className='text-sm text-justify'>
                               Task Agent is a task management web app where the admin can log in, add agents, and upload tasks via CSV. Uploaded tasks are automatically and equally distributed among agents, and the admin can view agent with task.
                            </div>
                        </div>
                    </div>



                  
                </div>

              </div>

            </div>
        </div>
  )
}

export default Projects
