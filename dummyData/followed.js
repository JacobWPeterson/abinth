const followed = [
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1311634323896971268/6f-Qxbev_normal.jpg",
        "name": "Gazeta Wyborcza.pl",
        "id": "19179390",
        "username": "gazeta_wyborcza",
        "location": "Warszawa + 20 miast"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png",
        "name": "ESPN",
        "id": "2557521",
        "username": "espn"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1374873263046717445/zmsw1_O8_normal.jpg",
        "name": "Oakland A's",
        "id": "19607400",
        "username": "Athletics",
        "location": "Oakland, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1369745692319621120/PrCvb_cy_normal.jpg",
        "name": "San Jose Earthquakes",
        "id": "16303450",
        "username": "SJEarthquakes",
        "location": "San Jose, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1377280315132010507/b6kC0yg1_normal.jpg",
        "name": "San Jose Sharks",
        "id": "27961547",
        "username": "SanJoseSharks",
        "location": "#SharksTerritory"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1298820053052219393/vqz7l2il_normal.jpg",
        "name": "San Francisco 49ers",
        "id": "43403778",
        "username": "49ers"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1325669876237623296/g7KNrEDd_normal.jpg",
        "name": "SFGiants",
        "id": "43024351",
        "username": "SFGiants",
        "location": "Oracle Park, San Francisco CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1174871900062924801/yPzQf1y6_normal.jpg",
        "name": "Jake Tapper",
        "id": "14529929",
        "username": "jaketapper",
        "location": "Washington, D.C."
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1377622310820134915/H5pu8qfl_normal.jpg",
        "name": "Golden State Warriors",
        "id": "26270913",
        "username": "warriors",
        "location": "San Francisco, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/620631498576670720/G6Lp_9A2_normal.jpg",
        "name": "City of Oakland",
        "id": "393024497",
        "username": "Oakland",
        "location": "Oakland, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1114294290375688193/P9mcJNGb_normal.png",
        "name": "Nancy Pelosi",
        "id": "15764644",
        "username": "SpeakerPelosi",
        "location": "San Francisco"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/924991591642796032/v90LrlR__normal.jpg",
        "name": "USA TODAY",
        "id": "15754281",
        "username": "USATODAY",
        "location": "USA TODAY HQ, McLean, Va."
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1208165423109292032/_oEEIsvx_normal.jpg",
        "name": "NPR",
        "id": "5392522",
        "username": "NPR"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/717382488440459265/5LXYwJTY_normal.jpg",
        "name": "East Bay Times",
        "id": "1289321",
        "username": "EastBayTimes",
        "location": "East Bay"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1327389396803358720/HLDdTzkf_normal.jpg",
        "name": "CA Public Health",
        "id": "33934492",
        "username": "CAPublicHealth",
        "location": "Sacramento, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1009505235398635520/btYGjn93_normal.jpg",
        "name": "City of San José",
        "id": "140189032",
        "username": "CityofSanJose",
        "location": "San Jose, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1270123932620750848/GXfwOOYT_normal.jpg",
        "name": "Libby Schaaf",
        "id": "2227281840",
        "username": "LibbySchaaf",
        "location": "Oakland, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/717071780112797696/-F1_cBGO_normal.jpg",
        "name": "Oakland Tribune",
        "id": "8962112",
        "username": "OakTribNews",
        "location": "Oakland, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/875793011572998144/yKCk7UT7_normal.jpg",
        "name": "ABC7 News",
        "id": "18993395",
        "username": "abc7newsbayarea",
        "location": "San Francisco Bay Area"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1145788281382064128/OSuJ6tTe_normal.png",
        "name": "KPIX 5",
        "id": "16657699",
        "username": "KPIXtv",
        "location": "San Francisco Bay Area"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/821442706790436868/X-Ti_TkK_normal.jpg",
        "name": "KTVU",
        "id": "15652540",
        "username": "KTVU",
        "location": "Oakland, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1001552841847246848/0tGfvsCs_normal.jpg",
        "name": "KRON4 News",
        "id": "19031057",
        "username": "kron4news",
        "location": "San Francisco Bay Area"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1145742752824483842/gAPc8mwO_normal.png",
        "name": "San Francisco Chronicle",
        "id": "121597316",
        "username": "sfchronicle",
        "location": "San Francisco, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1283091011070078978/7bmq_mCp_normal.jpg",
        "name": "SFGATE",
        "id": "36511031",
        "username": "SFGate",
        "location": "San Francisco"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1194751949821939712/3VBu4_Sa_normal.jpg",
        "name": "Reuters",
        "id": "1652541",
        "username": "Reuters",
        "location": "Around the world"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1060271522319925257/fJKwJ0r2_normal.jpg",
        "name": "The Washington Post",
        "id": "2467791",
        "username": "washingtonpost",
        "location": "Washington, DC"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_normal.png",
        "name": "The New York Times",
        "id": "807095",
        "username": "nytimes",
        "location": "New York City"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/461964160838803457/8z9FImcv_normal.png",
        "name": "The Associated Press",
        "id": "51241574",
        "username": "AP",
        "location": "Global"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1324088467530244096/SMRplxVL_normal.jpg",
        "name": "Gavin Newsom",
        "id": "11347122",
        "username": "GavinNewsom",
        "location": "California"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/472454021320421376/h5ZSaPMd_normal.jpeg",
        "name": "City of San Francisco",
        "id": "16318114",
        "username": "sfgov",
        "location": "San Francisco, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1251259534720421888/lYZ8sN-9_normal.jpg",
        "name": "London Breed",
        "id": "2927379996",
        "username": "LondonBreed",
        "location": "San Francisco, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/716045617311522816/I0BYs-DH_normal.jpg",
        "name": "Mercury News",
        "id": "10433782",
        "username": "mercnews",
        "location": "Silicon Valley, CA"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_normal.jpg",
        "name": "CNN",
        "id": "759251",
        "username": "CNN"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1351937736954019848/Qhf1v9Ib_normal.jpg",
        "name": "Vice President Kamala Harris",
        "id": "803694179079458816",
        "username": "VP"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1345037574331486208/QiPN8hLF_normal.jpg",
        "name": "NBC Bay Area",
        "id": "20097362",
        "username": "nbcbayarea",
        "location": "San Francisco Bay Area"
    },
    {
        "profile_image_url": "https://pbs.twimg.com/profile_images/1349837426626330628/CRMNXzQJ_normal.jpg",
        "name": "President Biden",
        "id": "1349149096909668363",
        "username": "POTUS"
    }
]

module.exports.followed = followed;
