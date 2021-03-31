const followed = [
    {
        "name": "ESPN",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png",
        "username": "espn",
        "id": "2557521"
    },
    {
        "name": "Oakland A's",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1374873263046717445/zmsw1_O8_normal.jpg",
        "username": "Athletics",
        "location": "Oakland, CA",
        "id": "19607400"
    },
    {
        "name": "San Jose Earthquakes",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1369745692319621120/PrCvb_cy_normal.jpg",
        "username": "SJEarthquakes",
        "location": "San Jose, CA",
        "id": "16303450"
    },
    {
        "name": "San Jose Sharks",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1373729698904084480/sP69SQYW_normal.jpg",
        "username": "SanJoseSharks",
        "location": "#SharksTerritory",
        "id": "27961547"
    },
    {
        "name": "San Francisco 49ers",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1298820053052219393/vqz7l2il_normal.jpg",
        "username": "49ers",
        "id": "43403778"
    },
    {
        "name": "SFGiants",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1325669876237623296/g7KNrEDd_normal.jpg",
        "username": "SFGiants",
        "location": "Oracle Park, San Francisco CA",
        "id": "43024351"
    },
    {
        "name": "Jake Tapper",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1174871900062924801/yPzQf1y6_normal.jpg",
        "username": "jaketapper",
        "location": "Washington, D.C.",
        "id": "14529929"
    },
    {
        "name": "Golden State Warriors",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1376771477224087553/QqA_IsYU_normal.jpg",
        "username": "warriors",
        "location": "San Francisco, CA",
        "id": "26270913"
    },
    {
        "name": "City of Oakland",
        "profile_image_url": "https://pbs.twimg.com/profile_images/620631498576670720/G6Lp_9A2_normal.jpg",
        "username": "Oakland",
        "location": "Oakland, CA",
        "id": "393024497"
    },
    {
        "name": "Nancy Pelosi",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1114294290375688193/P9mcJNGb_normal.png",
        "username": "SpeakerPelosi",
        "location": "San Francisco",
        "id": "15764644"
    },
    {
        "name": "USA TODAY",
        "profile_image_url": "https://pbs.twimg.com/profile_images/924991591642796032/v90LrlR__normal.jpg",
        "username": "USATODAY",
        "location": "USA TODAY HQ, McLean, Va.",
        "id": "15754281"
    },
    {
        "name": "NPR",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1208165423109292032/_oEEIsvx_normal.jpg",
        "username": "NPR",
        "id": "5392522"
    },
    {
        "name": "East Bay Times",
        "profile_image_url": "https://pbs.twimg.com/profile_images/717382488440459265/5LXYwJTY_normal.jpg",
        "username": "EastBayTimes",
        "location": "East Bay",
        "id": "1289321"
    },
    {
        "name": "CA Public Health",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1327389396803358720/HLDdTzkf_normal.jpg",
        "username": "CAPublicHealth",
        "location": "Sacramento, CA",
        "id": "33934492"
    },
    {
        "name": "City of San José",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1009505235398635520/btYGjn93_normal.jpg",
        "username": "CityofSanJose",
        "location": "San Jose, CA",
        "id": "140189032"
    },
    {
        "name": "Libby Schaaf",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1270123932620750848/GXfwOOYT_normal.jpg",
        "username": "LibbySchaaf",
        "location": "Oakland, CA",
        "id": "2227281840"
    },
    {
        "name": "Oakland Tribune",
        "profile_image_url": "https://pbs.twimg.com/profile_images/717071780112797696/-F1_cBGO_normal.jpg",
        "username": "OakTribNews",
        "location": "Oakland, CA",
        "id": "8962112"
    },
    {
        "name": "ABC7 News",
        "profile_image_url": "https://pbs.twimg.com/profile_images/875793011572998144/yKCk7UT7_normal.jpg",
        "username": "abc7newsbayarea",
        "location": "San Francisco Bay Area",
        "id": "18993395"
    },
    {
        "name": "KPIX 5",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1145788281382064128/OSuJ6tTe_normal.png",
        "username": "KPIXtv",
        "location": "San Francisco Bay Area",
        "id": "16657699"
    },
    {
        "name": "KTVU",
        "profile_image_url": "https://pbs.twimg.com/profile_images/821442706790436868/X-Ti_TkK_normal.jpg",
        "username": "KTVU",
        "location": "Oakland, CA",
        "id": "15652540"
    },
    {
        "name": "KRON4 News",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1001552841847246848/0tGfvsCs_normal.jpg",
        "username": "kron4news",
        "location": "San Francisco Bay Area",
        "id": "19031057"
    },
    {
        "name": "San Francisco Chronicle",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1145742752824483842/gAPc8mwO_normal.png",
        "username": "sfchronicle",
        "location": "San Francisco, CA",
        "id": "121597316"
    },
    {
        "name": "SFGATE",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1283091011070078978/7bmq_mCp_normal.jpg",
        "username": "SFGate",
        "location": "San Francisco",
        "id": "36511031"
    },
    {
        "name": "Reuters",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1194751949821939712/3VBu4_Sa_normal.jpg",
        "username": "Reuters",
        "location": "Around the world",
        "id": "1652541"
    },
    {
        "name": "The Washington Post",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1060271522319925257/fJKwJ0r2_normal.jpg",
        "username": "washingtonpost",
        "location": "Washington, DC",
        "id": "2467791"
    },
    {
        "name": "The New York Times",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_normal.png",
        "username": "nytimes",
        "location": "New York City",
        "id": "807095"
    },
    {
        "name": "The Associated Press",
        "profile_image_url": "https://pbs.twimg.com/profile_images/461964160838803457/8z9FImcv_normal.png",
        "username": "AP",
        "location": "Global",
        "id": "51241574"
    },
    {
        "name": "Gavin Newsom",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1324088467530244096/SMRplxVL_normal.jpg",
        "username": "GavinNewsom",
        "location": "California",
        "id": "11347122"
    },
    {
        "name": "City of San Francisco",
        "profile_image_url": "https://pbs.twimg.com/profile_images/472454021320421376/h5ZSaPMd_normal.jpeg",
        "username": "sfgov",
        "location": "San Francisco, CA",
        "id": "16318114"
    },
    {
        "name": "London Breed",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1251259534720421888/lYZ8sN-9_normal.jpg",
        "username": "LondonBreed",
        "location": "San Francisco, CA",
        "id": "2927379996"
    },
    {
        "name": "Mercury News",
        "profile_image_url": "https://pbs.twimg.com/profile_images/716045617311522816/I0BYs-DH_normal.jpg",
        "username": "mercnews",
        "location": "Silicon Valley, CA",
        "id": "10433782"
    },
    {
        "name": "CNN",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_normal.jpg",
        "username": "CNN",
        "id": "759251"
    },
    {
        "name": "Vice President Kamala Harris",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1351937736954019848/Qhf1v9Ib_normal.jpg",
        "username": "VP",
        "id": "803694179079458816"
    },
    {
        "name": "NBC Bay Area",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1345037574331486208/QiPN8hLF_normal.jpg",
        "username": "nbcbayarea",
        "location": "San Francisco Bay Area",
        "id": "20097362"
    },
    {
        "name": "President Biden",
        "profile_image_url": "https://pbs.twimg.com/profile_images/1349837426626330628/CRMNXzQJ_normal.jpg",
        "username": "POTUS",
        "id": "1349149096909668363"
    }
]

module.exports.followed = followed;
