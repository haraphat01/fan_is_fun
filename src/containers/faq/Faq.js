<<<<<<< HEAD:src/containers/faq/Faq.js
import React from "react";
=======
import React from 'react';
import faq from "../faq/faq.css"
import { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import footercontent from '../../assets/images/footercontent1.svg';
import mail from '../../assets/images/mail.svg';
import vk from '../../assets/images/vk.svg';
import instagram from '../../assets/images/instagram.svg';
>>>>>>> main:src/Homepage/faq/Faq.js


const data = {
  title: 'FAQ',
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: '+',
  tabFocus: true,
};

export default function Faqs() {
  return (
    <div className="div">
      <div className="container mt-5">
        <Faq data={data} styles={styles} config={config} />
      </div>
<<<<<<< HEAD:src/containers/faq/Faq.js
      <div className="div">
        <p>FAQ</p>
=======

      <div className="d-flex justify-content-around mt-5 footer">
        <img src={footercontent} alt="footer" />
        <div className="">
          <img src={mail} alt="footer" />
          <img src={vk} alt="footer" />
          <img src={instagram} alt="footer" />
        </div>
>>>>>>> main:src/Homepage/faq/Faq.js
      </div>
    </div>
  );
}
