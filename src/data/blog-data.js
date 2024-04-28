// electronic
import blog_1 from "@assets/img/blog/blog-1.jpg";
import blog_2 from "@assets/img/blog/blog-2.jpg";
import blog_3 from "@assets/img/blog/blog-3.jpg";
// fashion
import blog_4 from '@assets/img/blog/2/blog-1.jpg';
import blog_5 from '@assets/img/blog/2/blog-2.jpg';
import blog_6 from '@assets/img/blog/2/blog-3.jpg';
// blog postbox 
import blog_post_1 from '@assets/img/blog/blog-big-3.jpg';
import blog_post_2 from '@assets/img/blog/blog-big-2.jpg';
import blog_post_3 from '@assets/img/blog/blog-big-4.jpg';
import blog_post_4 from '@assets/img/blog/blog-big-5.jpg';
import blog_post_5 from '@assets/img/blog/blog-big-6.jpg';
// blog grid 
import blog_grid_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import blog_grid_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import blog_grid_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import blog_grid_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import blog_grid_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import blog_grid_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import blog_grid_7 from '@assets/img/blog/grid/blog-grid-7.jpg';
import blog_grid_8 from '@assets/img/blog/grid/blog-grid-8.jpg';
// list img 
import list_img_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import list_img_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import list_img_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import list_img_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import list_img_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import list_img_7 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_8 from '@assets/img/blog/grid/blog-grid-3.jpg';

const blogData = [
  {
    id: 1,
    img: blog_1,
    date: "14 January, 2024",
    author:'Mohammad Ali',
    title: "The Modern Art Clay Ceramics.",
    tags: ["Furniture", "News"],
    category:'furniture',
    comments:2,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "furniture",
  },
  {
    id: 2,
    img: blog_2,
    date: "18 February, 2024",
    author:'Naim Ahmed',
    title: "How furniture is linked to climate",
    tags: ["Monitor", "Technology"],
    category:'furniture',
    comments:4,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "furniture",
  },
  {
    id: 3,
    img: blog_3,
    date: "20 January, 2024",
    author:'Salim Rana',
    title: "The Sound Of Fashion: Malcolm",
    tags: ["Microphone", "Computer"],
    category:'furniture',
    comments:5,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "furniture",
  },
  // fashion blog
  {
    id: 4,
    img: blog_4,
    date: "20 July, 2024",
    author:'John Smith',
    title: "The 'Boomerang' Employees Returning After Quitting",
    tags: ["Furniture", "Lift Style","News"],
    category:'furniture',
    comments:6,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  {
    id: 5,
    img: blog_5,
    date: "18 March, 2024",
    author:'Zainab Abbasi',
    title: "Furniture styles",
    tags: ["Furniture", "Lift Style","News"],
    category:'furniture',
    comments:3,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "furniture",
  },
  {
    id: 6,
    img: blog_6,
    date: "15 February, 2023",
    author:'John Smith',
    title: "The Sound Of Fashion: Malcolm McLaren Words",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:8,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  //postbox blog
  {
    id:7,
    img:blog_post_1,
    date:'July 21, 2023',
    author:'John Smith',
    comments:2,
    tags: ["Furniture", "Lift Style","News"],
    category:'Furniture',
    title:'The Art of Mixing Furniture Styles: How to Achieve Eclectic Elegance',
    desc:'Are you drawn to multiple furniture styles but unsure how to incorporate them into your home without creating a chaotic mishmash? Fear not! Mastering the art of mixing furniture styles can bring a delightful sense of eclectic elegance to your space. Start by identifying your preferred styles. Whether you lean towards mid-century modern, traditional, industrial, or bohemian, understanding your aesthetic preferences is key. Once you have a grasp of your style preferences, follow these tips to achieve a harmonious blend. Anchor with neutral pieces to establish a foundation, then layer in contrasting elements to add visual interest. Embrace unifying elements such as color palettes or patterns to tie the different styles together. Play with scale to create balance and visual intrigue, and curate thoughtfully to avoid overwhelming your space. With a thoughtful approach, you can achieve a beautifully curated space that reflects your unique style and personality.',
    blog:'blog-postbox'
  },
  {
    id:8,
    img:blog_post_2,
    date:'April 18, 2023',
    author:'Mark Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Four Ways a Clean Workplace Makes Employees Happy and Healthy',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    video:true,
    video_id:'457mlqV1gzA',
    blog:'blog-postbox'
  },
  {
    id:9,
    date:'March 15, 2023',
    author:'Shahnewaz Sakil',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Only one thing is impossible for God: To find any sense in any copyright law on the planet.',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    blockquote:true,
    blog:'blog-postbox'
  },
  {
    id:10,
    date:'January 20, 2023',
    author:'Salim Rana',
    comments:10,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Time for Spring Cleaning? Use These Tips From the Professionals',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    audio:true,
    audio_id:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    blog:'blog-postbox'
  },
  {
    id:11,
    slider:true,
    slider_images:[blog_post_3,blog_post_4,blog_post_5],
    date:'February 20, 2023',
    author:'Smith Mark',
    comments:12,
    tags: ["Furniture", "Timeless pieces","News"],
    category:'Furniture',
    title:'Timeless Furniture Pieces That Never Go Out of Style',
    desc:'When it comes to decorating your home, investing in timeless furniture pieces is a smart choice. These classics not only withstand changing trends but also add a touch of elegance and sophistication to any space. Whether youre furnishing a new home or looking to update your current decor, consider incorporating these timeless furniture pieces that never go out of style',
    blog:'blog-postbox'
  },
  // blog grid data 
  {
    id:12,
    img:blog_grid_1,
    list_img:list_img_1,
    date:'January 8, 2023',
    author:'John Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:13,
    img:blog_grid_2,
    list_img:list_img_2,
    date:'February 12, 2023',
    author:'Salim Rana',
    comments:0,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Fully Embrace the Return of 90s fashion',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:14,
    img:blog_grid_3,
    list_img:list_img_3,
    date:'March 15, 2023',
    author:'John Smith',
    comments:12,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Exploring the English Countryside',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:15,
    img:blog_grid_4,
    list_img:list_img_4,
    date:'April 7, 2023',
    author:'John Smith',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Here’s the First Valentino’s New Makeup Collection',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:16,
    img:blog_grid_5,
    list_img:list_img_5,
    date:'May 2, 2023',
    author:'John Smith',
    comments:4,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Follow Your own Design process, whatever gets',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:17,
    img:blog_grid_6,
    list_img:list_img_6,
    date:'April 5, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Freelancer Days 2022, What’s new?',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:18,
    img:blog_grid_7,
    list_img:list_img_7,
    date:'May 12, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:19,
    img:blog_grid_8,
    list_img:list_img_8,
    date:'March 22, 2023',
    author:'John Smith',
    comments:15,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Quality Foods Requirments For Every Human Body’s',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
];

export default blogData;
