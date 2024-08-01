import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

type NewsPost = {
  title: string;
  body: string;
  publisher: string;
  image: string;
  externalLink: string;
};

const NewsPostsList = ({ posts }: { posts: NewsPost[] }) => {
  return (
    <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Press Coverage</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">In the News: Our Conference Makes Headlines!</p>
        <div className="mx-auto mt-2 grid grid-cols-1 gap-8 border-t border-gray-200 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3" style={{ gridAutoRows: 'max-content' }}>
          {posts.map((post, index) => (
              <a href={post.externalLink} target='_blank' rel='noopener noreferrer' key={index} >

            <article className="flex size-full flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{post.title}</h3>
                  <div className="mt-5 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{__html: post.body}}/>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faNewspaper} />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{post.publisher}</p>
                  </div>
                </div>
            </article>
              </a>
          ))}
        </div>
        <div className='mt-10'>
        <LiteYouTubeEmbed
          id="ZNiLlhBQprg"
          poster="hqdefault"
          title="AI DAYS - 2024 | India's Largest AI Conference by Swecha @ JNTU HYD | The Hans India"
          noCookie={true}
          />
        </div>
</div>
  );
};

export default NewsPostsList;
