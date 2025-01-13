import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Resources */}
            <div>
                <h3 className='text-md font-semibold mb-4 '>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((links, index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Platform */}
            <div>
                <h3 className='text-md font-semibold mb-4 '>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((links, index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Community */}
            <div>
                <h3 className='text-md font-semibold mb-4 '>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((links, index)=>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                        </li>
                    ))}
                </ul>
            </div>


        </div>

    </footer>
  )
}

export default Footer