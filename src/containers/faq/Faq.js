import React from 'react';
import faq from "../faq/faq.css"
import { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
// import footercontent from '../../assets/images/footercontent1.svg';
import mail from '../../assets/images/mail.svg';
import vk from '../../assets/images/vk.svg';
import instagram from '../../assets/images/instagram.svg';


const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is Fan is Fun ?",
      content: `Fan is fun, is a fan engagement platform. Where sports fans can engage actively in their team's sport life and eventually chat, video call with players. We also provide you with sport merchs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem..`,
    },
    {
      title: "How can fans engage in team life ?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Can you really chat and video call with sport celebrities ?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "How to get started ?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "+",
  tabFocus: true,
};

// export default function Faqs() {
//   return (
//     <div className="div">
//       <div className="container mt-5">
//         <Faq data={data} styles={styles} config={config} />
//       </div>

//       <div className="d-flex justify-content-around mt-5 footer">
      
//         <div className="">
//           <img src={mail} alt="footer" />
//           <img src={vk} alt="footer" />
//           <img src={instagram} alt="footer" />
//         </div>
//       </div>
//     </div>
//   );
// }
