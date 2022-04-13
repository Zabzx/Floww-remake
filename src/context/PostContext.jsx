import { useState, createContext } from "react";

import NATALIE from '../assets/natalie-pfp.jpg'
import JOSHUA from '../assets/joshua-pfp.jpg'
import HANA from '../assets/hana-pfp.jpg'
import MICHAEL from '../assets/michael-pfp.jpg'
import ZACH from '../assets/zach-pfp.jpg'
//Post Images
import STRAWBERRIES from '../assets/strawberries.jpg'
import BMW from '../assets/bmw.jpg'
import FLOWERS from '../assets/flowers.jpg'
import TABLET from '../assets/tablet.jpg'
import SNOW from '../assets/snow.jpg'

export const PostContext = createContext();

export const PostProvider = (props) => {

    const [posts, setPosts] = useState([
        {
            id: 1,
            pfp: NATALIE,
            name: 'Natalie Piquette',
            img: STRAWBERRIES,
            date: '3 minutes ago',
            content: 'Starting the morning off with yummy strawberries.😋🍓',
            liked: false
        },
        {
          id: 2,
          pfp: JOSHUA,
          name: 'Joshua Rhode',
          img: BMW,
          date: '23 minutes ago',
          content: "Took her on a joyride today, she's as beautiful as the day I met her.",
          liked: false
        },
        {
          id: 3,
          pfp: HANA,
          name: 'Hana Orihime',
          img: FLOWERS,
          date: '8 minutes ago',
          content: "Getting better at photographt 🥺💜 absolutely love this shot!",
          liked: false
        },
        {
          id: 4,
          pfp: MICHAEL,
          name: 'Michael Cole',
          img: TABLET,
          date: '30 minutes ago',
          content: 'Relaxing on the weekend.',
          liked: false
        },
        {
          id: 5,
          pfp: ZACH,
          name: 'Zach',
          img: SNOW,
          date: '2 minutes ago',
          content: 'Take me back ⛷🏔⛄ I missed this place so much!',
          liked: false
        }
    ]);

    return (
        <PostContext.Provider value={[posts, setPosts]}>
            {props.children}
        </PostContext.Provider>
    )
}