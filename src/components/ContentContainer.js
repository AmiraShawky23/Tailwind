import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const ContentContainer = () => {
  let posts = [
    {
      idx: '1',
      name: 'Ada',
      timestamp: 'one week ago',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
      ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      idx: '2',
      name: 'Leon',
      timestamp: 'one week ago',
      text: `Lorem ipsum dolor.`
    },
    {
      idx: '3',
      name: 'Jill',
      timestamp: '5 days ago',
      text: `Lorem.`
    },
    {
      idx: '4',
      name:'Ellie',
      timestamp: '4 days ago',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. `
    },
    {
      idx: '5',
      name: 'Chris',
      timestamp: '4 days ago',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
      ipsum dolor sit amet consectetur adipisicing elit.
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
      ipsum dolor sit amet consectetur adipisicing elit.`
    },    
    {
      idx: '6',
      name: 'Claire',
      timestamp: '2 days ago',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `
    },
    {
      idx: '7',
      name: 'Albert',
      timestamp: '22 hours ago',  
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `
    },
    {
      idx: '8',
      name: 'Rebecca',
      timestamp: '3 hours ago',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
      amet consectetur adipisicing elit.`
    },
    {
      idx: '9',
      name: 'H.U.N.K',
      timestamp: 'Just now',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
      ipsum dolor sit amet consectetur adipisicing elit.`
    }
  ];
  
  const [showenPosts, setShowenPosts] = useState(posts);
  const handleFormSubmit = (e) => {
    if(e.target.value === '') setShowenPosts(posts)
    else setShowenPosts(posts.filter(post => post.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <div className='content-container'>
      <TopNavigation handleFormSubmit={handleFormSubmit} />
      <div className='content-list'>
        {
          showenPosts.map((post) => (
            <Post
              key={post.idx}
              name={post.name}
              timestamp={post.timestamp}
              text={post.text}
            />
          ))
        }
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className='post'>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;