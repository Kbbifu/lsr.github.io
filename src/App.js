import React, { useContext,useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './sections/About';
import MobileRadio from './sections/mobile/MobileRadio';
import MobileTv from './sections/mobile/MobileTv';
import Mobilepodcast from './sections/mobile/Mobilepodcast';
import MobilenewsDetails from './sections/mobile/MobilenewsDetails';
import News from './sections/News';
import Programes from './sections/Programes';
export const DataContext = React.createContext();

function App() {
  const [news, setNews] = useState([
    {
      id: '15',
      category: 'News',
      title: `WASE Rock FM 93.9 Gets Green Light for Commercial Broadcasting!`,
      author: `Managemnt`,
      content: `

Breaking News \n

In a landmark development, the National Broadcasting Commission (NBC) has granted WASE Rock FM 93.9 approval for commercial broadcasting!\n

According to an official letter signed by NBC Secretary, Mrs. Francisca Aiyantan, WASE Rock FM has successfully completed its test transmission period.\n

The commission urges the station to adhere to the National Broadcasting Commission Act, Cap. N11, and the Nigeria Broadcasting Code.\n
In a similar development,
The Wase LGA TIC Chairman Commends NBC, assures compliance.\n

The Transition Implementation Committee Chairman, Hon. Alhaji Hamisu Anani Mohammed, has praised the National Broadcasting Commission (NBC) for the approval.\n
In a statement
Through his Director of Personnel Management, Alhaji Abdullahi, the TIC Chairman assured the National Broadcasting Commission, NBC of Wase Rock FM's "100% compliance" with regulations.\n

Hon. Alhaji Hamisu Anani congratulated the people of Wase Local Government, Southern Plateau, and Plateau State at large on this significant achievement.\n

"This milestone marks a new era for Wase LGA, and we're committed to upholding NBC's standards." - Hon. Alhaji Hamisu Anani Mohammed.\n

WASE Rock FM 93.9 remains dedicated to serving the community with quality programming and adherence to broadcasting excellence.`, 
      date: '6th Aug, 2024',
      image: '/nbcwase12.jpg ',
      images: [{ pic: '/nbcwase13.jpg' }],
    },
    {
      id: '14',
      category: 'News',
      title: `Tripartite Union of Nigerian Workers in Wase LGA, Purchase Nomination Form for Incumbent Council Chairman,
       Hon. Hamisu Anani.`,
      author: `Managemnt`,
      content: `
      This they said, is in a bid to consolidate on good governance Wase Local Government Area enjoys under his able leadership. \n
      Hence, the need for such sacrificial contributions by Nigerian workers in Wase and the 
      call for continuity of good leadership by Honourable Hamisu Anani`, 
      date: '1st Aug, 2024.',
      image: '/announcement_image.jpg',
      images: [{ pic: '/breakingNews.jpeg' }],
    },
    {
      id: '13',
      category: 'News',
      title: `Special Announcement 📢`,
      author: `Managemnt`,
      content: `It's now time, to tune in to the hottest new radio station in town - Wase Rock FM! \n
      We're excited to announce that Wase Rock FM is now in test transmission mode, bringing you the best of information, education and entertainment 24/7!\n
      Tune in now to 93.9FM and enjoy the ride!\n
      Note: Our test transmission is a sneak peek of what's to come. Your feedback is valuable to us, so let us know what you think!\n
      Stay tuned for our official launch date and get ready to rock with Wase Rock FM! \n
      ✦ Wase Rock FM 93.9MHz ✦ \n
      The People's Voice!`, 
      date: '29th June, 2024.',
      image: '/announcement_image.jpg',
      images: [{ pic: '/announcement_image.jpg' }],
    },
    {
      id: '12',
      category: 'News',
      title: `PDP GOVERNORS' FORUM COMMISERATES WITH PLATEAU, CONTRIBUTES N100 MILLION TO VICTIMS OF VIOLENT ATTACKS`,
      author: `Gyang Bere Director of Press and Public Affairs to the Executive Governor of Plateau State`,
      content: `The PDP Governors' Forum  has expressed its condolences to the Government and people of Plateau State in the wake of the Christmas eve attacks and recent security breaches in Bokkos, Mangu, and Barkin-Ladi Local Government Areas. As a gesture of solidarity, the Governors contributed N100 Million to aid the survivors.\n
  
  Senator Bala Mohammed, Chairman of the Forum and Governor of Bauchi State, led the delegation to the New Government House in Little Rayfield, Jos.\n 
  
  He conveyed the Forum's sympathy to Governor Caleb Manasseh Mutfwang and the survivors while advocating for the establishment of State Police to address the prevailing security challenges.\n
  
  "We, representing the PDP Governors Forum, extend our heartfelt condolences to you and the people of Plateau. The crisis is unfortunate, and we urge you to remain focused amidst these challenges," Sen. Mohammed remarked.\n
  
  Acknowledging Plateau's role as a home for everyone, he emphasized the need for state-specific security measures. Sen. Mohammed appealed to the Federal Government and security agencies to intensify efforts in tackling the nation's security challenges.\n
  
  Governor Mutfwang, in response, expressed gratitude for the support and committed to fostering unity across faith and ethnicity on the Plateau. He stressed the importance of rebuilding trust among communities to address criminal activities effectively.\n
  
  "As governor, I believe in the unity of our people. If we rebuild trust and treat criminality uniformly, we can overcome these challenges," Governor Mutfwang stated. He affirmed the PDP's significance in Plateau and across Nigeria, pledging to continue delivering democratic dividends to the people.\n
  
  Among the Governors who came for the visit includes,  Sen. Dr. Ademola Adeleke, Osun State, Rt. Hon. Ahmadu Umaru Fintiri, Adamawa State, Seyi Makinde, Oyo State, Godwin Obasake, Edo State, Mr. Peter Mba, Enugu State and the Director General of the PDP Forum, Hon. C.T.O Maduabum.
  `,
      date: '1st February 2024.',
      image: '/govtContribute.jpeg',
      images: [{ pic: '/govtContribute.jpeg' }],
    },
    {
      id: '11',
      category: 'News',
      title: `GOVERNOR MUTFWANG VISITS MANGU LG TO COMMISERATE WITH THE VICTIMS OF THE RECENT ATTACK`,
      author: ``,
      content: `Plateau state governor, His Excellency, Gov. Caleb Mutfwang visits  Mangu Local Government to commiserate & sympathize with victims of the recent attack in Mangu. \n
The visit is to also take an on the spot assessment of the level of destruction and ascertain the level of damages in a bid to provide immediate and permanent solutions to the continuous attacks on innocent citizens. \n

God bless Gov. Mutfwang, God bless Plateau state, God bless Nigeria!
 \n`,
      date: '27th January 2024.',
      image: '/mangu.jpeg',
      images: [{ pic: '/mangu.jpeg' }],
    },
    {
      id: '10',
      category: 'News',
      title: `PLATEAU CELEBRATES GOVERNOR MUTFWANG'S VICTORY IN THE POLLS AND THE SUPREME COURT IN SOLEMN THANKSGIVING`,
      author: `Gyang Bere.  
Director of Press and Public Affairs to the Executive Governor of Plateau State`,
      content: `Plateau State, on Sunday stood still in solemn praise and thanksgiving to the Almighty God for Governor Caleb Manasseh Mutfwang's triumph in the polls and the subsequent Supreme Court victory.\n

Expressing profound gratitude to God Almighty during the Interdenominational Thanksgiving Service at the Rwang Pam Township Stadium, Jos, Governor Mutfwang attributed his success to divine intervention and dedicated the triumph to both God and the people of Plateau State. \n

He acknowledged with profound gratitude the overwhelming mandate received in the March 18, 2023 polls, and commended the fairness of the justices of the Supreme Court. The Governor also expressed gratitude to President Bola Ahmed Tinubu for his unwavering support for democracy.\n

Amidst cheers from the crowd, Governor Mutfwang extended appreciation to the Media and Nigerians for amplifying the voice of Plateau people throughout the judicial process. He reassured the public that, with divine assistance, he is committed to fulfilling the expectations placed upon him.\n

Governor Mutfwang reflected on the challenges faced during the political journey, expressing moments of doubt but holding onto faith. He emphasized the significance of the victory, marking a new beginning for Plateau State and pledging to lead the state to new heights with the support of the people.\n

He said,  "I want to give thanks to God Almighty, the one who knows how to enthrone kings and how to dethrone kings. I thank God for the privilege he has given me; he singled me out for this honour. I want to thank you, Plateau people for agreeing with God and voting me joyfully without any inducement."\n

He added that the victory marks a new beginning of the fulfillment of the promises he made, promising that by the grace of God he will not fail the people. \n

Former Governor of Adamawa State, Boni Haruna, and other dignitaries including former Military Governor of Plateau State, Major General Lawrence Onoja, Emeka Etiaba SAN, the Gbong Gwom Jos, Da Jacob Buba, former Governor Jonah Jang, the State Chairman, Christian Association of Nigeria, CAN, Rev. Fr. Polycarp Lubo echoed messages of prayer and support for the Governor's mission to build a united and prosperous state. \n

President of the Pentecostal Fellowship of Nigeria, Bishop Francis Oke, in his sermon, drew inspiration from biblical passages, assuring that God would make everything new in all spheres of the State.\n

The event witnessed special prayers, song ministrations, and praises from various church groups, emphasizing the cleansing, healing, and restoration of Plateau. Notable figures such as the Speaker of the Plateau  State House of Assembly, Rt. Hon. Gabriel Dewan, Chief Judge of Plateau State, Justice David Mann, Plateau State PDP Chairman, Hon. Chris Hassan, Chief of Staff Government House Jos, Engr. Jeremiah Satmak, former Senate  Minority Leader, Sen. Simon Mwadkon, Sen. Hezekiah Dimka, General Martin Luther Agwai, Commissioners, top government functionaries among others graced the occasion.\n

In a vote of thanks, the Secretary of the Government of the State, Arc. Samuel Jatau, expressed gratitude for the successful event, where Governor Mutfwang appointed a renowned music artiste Ezra Jinang as the Senior Special Adviser on Creativity and Entertainment.
 \n`,
      date: '21st January 2024.',
      image: '/governor-celebrates.jpeg',
      images: [{ pic: '/governor-celebrates.jpeg' }],
    },
    {
      id: '9',
      category: 'News',
      title: `CHAIRMAN WASE LGA AND ALGON CHAIRMAN PLATEAU STATE HAMISU ANANI CONGRATULATES GOV.  CALEB MUTFWANG OVER VICTORY AT THE SUPREME COURT, SAYS VICTORY IS DESERVING`,
      author: ``,
      content: `Chairman, Wase Local Government Area and ALGON Chairman Plateau State, Hamisu Anani, Congratulates His Excellency, Governor Caleb Mutfwan over his victory at the Supreme Court. \n This is coming as Anani in an interview with news men revealed that Gov. Mutfwang's victory is deserving and further reaffirms and validates the love by the good people of Plateau State for Gov. Mutfwang and the People's Democratic Party, PDP as their Popular Choice. \n`,
      date: '16th January, 2024',
      image: '/jan16th.jpeg',
      images: [{ pic: '/jan16th.jpeg' }],
    },
    {
      id: '8',
      category: 'News',
      title: `Breaking: Supreme Court reinstates Plateau State Governor, His Excellency Gov. Caleb Mutfwang`,
      author: ``,
      content: `Chairman, Wase Local Government Area and ALGON Chairman Plateau State, Hamisu Anani, Congratulates His Excellency, Governor Caleb Mutfwan over his victory at the Supreme Court.\n This is coming as Anani in an interview with news men revealed that Gov. Mutfwang's victory is deserving and further reaffirms and validates the love by the good people of Plateau State for Gov. Mutfwang and the People's Democratic Party, PDP as their Popular Choice. \n`,
      date: '12th January, 2024',
      image: '/govtVictory.jpeg',
      images: [{ pic: '/govtVictory.jpeg' }],
    },
    {
      id: '7',
      category: 'News',
      title: `THE TIC CHAIRMAN OF WASE LGC, HON. HAMISU ANANI WHO WAS ABLY REPRESENTED BY THE DIRECTOR OF SOCIAL SERVICE WASE LGA HAVE FLAGGED OFF THE DISTRIBUTION OF RELIEF MATERIALS TO A CROSS SECTION OF THOSE AFFECTED BY DISASTER WITHIN THE LOCALITY MONTHS AGO.
  `,
      author: `Musab Imamuddeen`,
      content: `The Director of social service of wase LGA on behalf of the TIC chairman of wase LGC Hon. Hamisu Anani today flagged of the distribution of relief materials worth millions donated by the Federal Government through the National Emergency Management Agency (NEMA).\n

The Chairman expressed his appreciation for the singular gesture shown to alleviate the plight of people affected by different degrees of disaster (flood, wind storm) that happened months back within the LGA. \n
In his remark, he called on the beneficiaries to make proper use of the items collected and not to sell it, as the government will frown at such.\n

Items distributed includes sewing machines, water pumps, grinding machines, mattresses, cooking utensils, blankets, pots of different sizes, seedlings, food items, mats, knapsack sprayer, liquid fertiliser, etc.\n
  `,
      date: '26th December, 2023',
      image: '/tic1.jpeg',
      images: [
        { pic: '/tic1.jpeg' },
        { pic: '/tic2.jpeg' },
        { pic: '/tic3.jpeg' },
        { pic: '/tic4.jpeg' },
      ],
      imageArray:[
        '/tic1.jpeg','/tic2.jpeg','/tic3.jpeg','/tic4.jpeg'
      ]
    },
    {
      id: '1',
      category: 'News',
      title: `HON.HAMISU MOHAMMED ANANI TRANSITION IMPLEMENTATION COMMITTEE CHAIRMAN OF WASE LGC,ALGON CHAIRMAN OF PLATEAU STATE CHAPTER FLAGS OFF THE DISTRIBUTION OF FERTILIZER TO FARMERS IN WASE LOCAL GOVERNMENT COUNCIL
  `,
      author: `Musab Imamuddeen`,
      content: `Wase Local government council under the leadership of Hon. Hamisu Anani has commenced the distribution of 3 trucks assorted fertilizers acquired by the executive governor of plateau state His Excellency Barr. Caleb Manaseh Mutfawang for plateau farmers across the 17 local government council in the state for dry season farming. \n
  The TIC chairman informed the people of wase local government the  readiness of the executive governor of plateau state to invest more on agriculture, he said  agriculture is the backbone of the economy and is the major source of livelihood to significant portion of the population, Governor Mutfwang administration will continue to invest in the sector to ensure food security, economic growth and poverty alleviation in the state. \n
  Hon. Anani thanked NG CARES for their immense efforts in supporting plateau state agricultural development.\n
  The representative of the program manager plateau state agricultural development programme laud the efforts of the transition chairman of wase for his remarkable gesture by providing trucks of fertilizer to his local government council at subsidize rate few months ago describing it as the first of its kind ever recorded, the programme manager also urged the wase local government farmers to use the fertilizer to boost the yield of their crops and not resell them, 
  because the TIC chairman have brief them about wase local in terms of agriculture, that was local  government is blessed with fertile land, a dedicate and hard-working farmers, a home of agriculture it is also in record that thousands of trucks loaded with farm products  were dispatched across the country from wase local government every year.
  `,
      date: '26th December, 2023',
      images: [
        { pic: '/anani.jpeg' },
        { pic: '/anani1.jpeg' },
        { pic: '/anani4.jpeg' },
      ],
      image: '/anani.jpeg',
    },
    {
      id: '2',
      category: 'News',
      title:
        'TRANSITION COMMITTEE CHAIRMEN IN PLATEAU CONDEMN  ATTACKS IN PLATEAU COMMUNITIES, CALL FOR ARREST OF PERPETRATORS',
      author:
        'Hamisu Anani . Transition Committee chairman wase and plateau state ALGON Chairman',
      content: `Transition committee chairmen across the seventeen local government areas of plateau state  has condemn in strong terms the recent coordinated attacks on innocent citizens in some communities in Bokkos, Mangu, and Barkin-Ladi Local Government Areas of the state saying  these attacks were unprovoked and  have resulted in the tragic loss of several lives and  destruction of property. \n
      
      Chairman of the 17 local government areas under the auspices of association of local government ( ALGON) and Chairman of wase local government Hamisu Anani said the renewed attacks across these communities especially in the eva of Christmas is a momentental tradegy and loss to the great people of plateau state and  calls for united efforts to identify and apprehend those responsible for these heinous acts. \n

      He applauded the untiring efforts of the executive governor of plateau state barrister Caleb mannesah Mutfwang for his prompt response to action and the repeated calls on security agencies to tackle the situation headlong through the provision of logistics and the needed support in fishing out the propertrators of this devilish act. 
      \n

      We ALGON further  acknowledged President Bola Ahmed Tinubu for supporting the Nigerian Army in maintaining security through  the Chief of Army Staff, Lieutenant General Taoreed Lagbaja and the Commander Operation SAFE HAVEN for their commitment to addressing various security challenges facing Plateau and the nation.
  \n
      We express worrisome and sadness over the loss of  numerous lives due to incessant attacks in Mangu, Bokkos, and Barkin-Ladi saying this  senseless and unprovoked acts are unnecessary and unjustifiable while appealing  to the sponsors of these attacks to reconsider, as there is nothing to gain from such violence. The spirit of the Plateau people will not be broken."
 \n
      We ALGON expressed sympathy for the affected families and communities and urged citizens to stand strong, assuring them that the government is actively working to address the situation while calling for calm in the affected areas.
    \n

“With this background, we want to state categorically that Gov. Caleb Muftwang is a unifier. That’s the reason we want to air our view about Muftwang and tell the world about his appointments and achievements with the Muslim community in Plateau State.`,
      date: '26th December, 2023',
      images: [{ pic: '/himisu.jpeg' }],
      image: '/himisu.jpeg',
    },
    {
      id: '3',
      category: 'News',
      title:
        'FREE CHRISTMAS TRIP TO ALL LGA HQs COMMENCES TOMMORROW BY GOVERNOR CALEB MANASEH MUTFAWANG',
      author: 'Agency Reporter',
      content: `The executive governor of plateau state His Excellency Barr.  Caleb manaseh Mutfawang has approved free ride from Jos metropolis to all local government headquarters in the state. \n
The pickup station is plateau polytechnic  Jos to the various local government Hqs, passengers ready to travel out of their local government to Jos city are advise to wait for the first turn of the bus in their various local government to have a free ride. \n
The free ride will commence on Saturday 23/12/2023 and end on  Wednesday 26/12/2023
`,
      date: 'DECEMBER 26, 2023',
      images: [{ pic: '/freetp.webp' }],
      image: '/freetp.webp',
    },
    {
      id: '4',
      category: 'News',
      title:
        'Plateau Muslim community backs Gov Muftwang, dismisses rumoured marginalisation',
      author: 'Agency Reporter',
      content: `Contrary to the insinuation that the Muslims in Plateau State are not represented in the cabinet of Governor Caleb Muftwang, the leadership of the Muslim Umma in the state has condemned the insinuation and declared that the Muslims are adequately represented. \n
      
      Addressing newsmen in Jos, Plateau State, the spokesman of the Muslim Umma, Mubarak Isa, said the governor has a good relationship with the Umma, adding that this has resulted in the appointment of Muslims into various positions of authority in the six-month-old Muftwang administration. \n

      According to him, the relationship between the governor, the government, and the Muslim community is less than savory, adding that those behind the insinuation simply want to soil a good relationship. \n
      He said, “We have come before you this day all the leadership of Muslim ummah from all parts of Plateau State to pass a vote of confidence on the Executive Governor of Plateau State, Barr. Caleb Muftwang, on his six months of unprecedented achievements.
      \n

      “This governor and government have shown that the dividends of democracy can reach the common man from the first day in office. The Caleb Mutftwang-led “The Time is Now” administration has displayed the spirit of oneness, brotherhood, and development.\n

“With this background, we want to state categorically that Gov. Caleb Muftwang is a unifier. That’s the reason we want to air our view about Muftwang and tell the world about his appointments and achievements with the Muslim community in Plateau State.`,
      date: 'FEBRUARY 23, 2023',
      images: [{ pic: '/muslim.jpeg' }],
      image: '/muslim.jpeg',
    },
    {
      id: '5',
      category: 'News',
      title: 'Gov. Mutfwang signs 2024 Appropriation Bill into law',
      author: 'Agency Reporter',
      content: `His Excellency, the Executive Governor of Plateau State, Governor, Caleb Mutfwang has signed the state’s 2024 budget of N314.8 billion into law, his media aide, Mr Gyang Bere, stated on Wednesday in Jos. \n 

        Christened “Budget of New Beginnings", the 2024 budget has a recurrent expenditure component of N162.3 billion and capital expenditure of N152.5 billion. \n 

        "As governor, this Appropriation Bill encapsulates our vision to transform Plateau into a citadel of glory.\n 

        “We believe Plateau deserves better than what was previously in place.\n 

        “We encountered a state of neglect in critical sectors and we are determined to lay a new foundation for a sustainable, excellent, and value-adding future.\n He expressed optimism that the budget implementation would improve the living conditions of the people and urged citizens to support the government for continued progress.`,
      date: 'FEBRUARY 23, 2023',
      images: [{ pic: '/govtbill.png' }],
      image: '/govtbill.png',
    },
    {
      id: '6',
      category: 'News',
      title: 'Police rescue abducted Plateau pastor, three others in Bauchi',
      author: 'Agency Reporter',
      content: `The Bauchi State Police Command said its operatives have rescued four people kidnapped by bandits who invaded Raddi village via Bassa Local Government Area of Plateau State on Wednesday.\n

The state Police Public Relations Officer, Ahmed Wakil, a Superintendent of Police, disclosed this in a statement made available to journalists on Wednesday.\n

Wakil said  the bandits had stormed the house of one Yakubu Makeri, of Yagi village via Rahama ward, with the intention of attacking him but a team of operatives attached to Rishi Police Divisional Headquarters in conjunction with local vigilantes swiftly moved to the scene and engaged the bandits in a gun battle.\n

He stated that the Commissioner of Police has ordered the Divisional Police Officer to intensify wider patrol across the  area in a bid to arrest the fleeing bandits so they can face the full wrath of the law.`,
      date: 'FEBRUARY 23, 2023',
      images: [{ pic: '/policeLogo.jpeg' }],
      image: '/policeLogo.jpeg',
    },
  ]);

  const [programmes, setProgrammes] = useState([
    {
      id: '1',
      category: 'programmes',
      title: 'Sirin Noma',
      content: ``,
      date: '26th December, 2023',
      image: '/sirinNoma.jpeg',
    },
    {
      id: '2',
      category: 'programmes',
      title: 'Ilimin Kasuwanci',
      content: ``,
      date: '26th December, 2023',
      image: '/llimin.jpeg',
    },
    {
      id: '3',
      category: 'programmes',
      title: 'Dogaro da Kai',
      content: ``,
      date: '26th December, 2023',
      image: '/dogarodakai.jpeg',
    },
    {
      id: '4',
      category: 'programmes',
      title: 'Kasuwar Wase',
      content: ``,
      date: '26th December, 2023',
      image: '/kasuwarwuse.jpeg',
    },
    {
      id: '5',
      category: 'programmes',
      title: 'Siyasa ba Gaba ba',
      content: ``,
      date: '26th December, 2023',
      image: '/siyasa.jpeg',
    },
    {
      id: '6',
      category: 'programmes',
      title: 'Kacici Kacici',
      content: ``,
      date: '26th December, 2023',
      image: '/kacici.jpeg',
    },
  ]);

  return (
    <div className='App'>
      <BrowserRouter>
        <DataContext.Provider value={{ news, programmes }}>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/waserock_radio' element={<Home />} />
            <Route path='/wase_rocktv' element={<Home />} />
            <Route path='/wase_podcast' element={<Home />} />
            <Route path='/news/:id' element={<Home />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/waserock_93.9' element={<MobileRadio />} />
            {<Route path='/wase_rocktv' element={<MobileTv />} />}
            <Route path='/wase_podcast' element={<Mobilepodcast />} />
            <Route path='/news/:id' element={<MobilenewsDetails />} />
            <Route path='/news' element={<News />} />
            <Route path='/programes' element={<Programes />} />
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;
