import React from 'react';


const workingData = {
    "AAPL": {
        "priceTarget": {
            "lastUpdated": "2020-02-28 00:00:00",
            "symbol": "AAPL",
            "targetHigh": 400,
            "targetLow": 190,
            "targetMean": 333.26,
            "targetMedian": 350
        },
        "quoteUrl": {
            "c": 295.2,
            "h": 303.4,
            "l": 293.13,
            "o": 296.44,
            "pc": 289.32,
            "t": 1583332200
        },
        "baseRecommendationUrl": [
            {
                "buy": 21,
                "hold": 6,
                "period": "2020-02-01",
                "sell": 0,
                "strongBuy": 11,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 14,
                "hold": 12,
                "period": "2020-01-01",
                "sell": 5,
                "strongBuy": 11,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 13,
                "hold": 13,
                "period": "2019-12-01",
                "sell": 4,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 10,
                "hold": 18,
                "period": "2019-11-01",
                "sell": 3,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 10,
                "hold": 18,
                "period": "2019-10-01",
                "sell": 3,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 10,
                "hold": 18,
                "period": "2019-09-01",
                "sell": 3,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 10,
                "hold": 18,
                "period": "2019-08-01",
                "sell": 3,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 10,
                "hold": 18,
                "period": "2019-07-01",
                "sell": 3,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 7,
                "hold": 19,
                "period": "2019-06-01",
                "sell": 2,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 7,
                "hold": 21,
                "period": "2019-05-01",
                "sell": 1,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 7,
                "hold": 21,
                "period": "2019-04-01",
                "sell": 1,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 7,
                "hold": 21,
                "period": "2019-03-01",
                "sell": 1,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 7,
                "hold": 21,
                "period": "2019-02-01",
                "sell": 1,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "AAPL"
            },
            {
                "buy": 11,
                "hold": 17,
                "period": "2019-01-01",
                "sell": 0,
                "strongBuy": 15,
                "strongSell": 0,
                "symbol": "AAPL"
            }
        ],
        "companyNewsUrl": [
            {
                "category": "company news",
                "datetime": 1583330757,
                "headline": "Donald Trump Helped Apple Get Strong Foothold In India: Tim Cook",
                "id": 998164,
                "image": "https://i1.wp.com/inc42.com/wp-content/uploads/2020/03/Untitled-design-2020-03-04T182721.357.jpg?fit=1200%2C628&ssl=1",
                "related": "AAPL",
                "source": "Inc42",
                "summary": "Apple CEO Tim Cook revealed that the White House helped ease things for the company in the Indian market as it looks to grow retail presence.",
                "url": "https://inc42.com/buzz/donald-trump-helped-apple-get-strong-foothold-in-india-tim-cook/"
            },
            {
                "category": "company news",
                "datetime": 1583329534,
                "headline": "Deals: Woot Discounting Refurbished MacBook Pros (From $680) and iPhone 6s Models (From $80) Today Only",
                "id": 998165,
                "image": "https://images.macrumors.com/article-new/2018/06/macbook-pro-function-keys.jpg",
                "related": "AAPL",
                "source": "Mac Rumors",
                "summary": "Amazon-owned deals site Woot is offering low prices on a few refurbished MacBook Pro models today only. You can get the 2017 and 2018 MacBook Pro in both 13-inch and 15-inch sizes, with prices starting at $679.99. Note: MacRumors is an affiliate partner with Woot. When you click a link and make a purchase, we may receive a small payment, which helps us keep the site running. To start, Woot has the mid 2017 13-inch MacBook Pro (2.3GHz, 8GB RAM, 128GB SSD) for $679.99 , down from an original list price of $1,299.00. You can increase the storage of this model to 256GB for $789.99, and neither of these MacBook Pros have the Touch Bar. If you want a model with the Touch Bar, Woot has the mid 2018 13-inch MacBook Pro with a 256GB SSD for $979.99 , and a 512GB for $1,079.99. The only 15-inch model available on sale today is the mid 2018 MacBook Pro with 16GB RAM and a 256GB SSD for $1,489.99 . Woot also has refurbished models of the iPhone 6s and iPhone 6s Plus on sale for today only, starting at just $79.99 for an unlocked 16GB iPhone 6s.",
                "url": "https://www.macrumors.com/2020/03/04/deals-woot-macbook-pros/"
            },
            {
                "category": "company news",
                "datetime": 1583329246,
                "headline": "Apple’s iPhone 12 will crush every other smartphone in 2020 for two reasons",
                "id": 998166,
                "image": "https://boygeniusreport.files.wordpress.com/2020/02/iphone-12-pro-mock.jpg?quality=98&strip=all",
                "related": "AAPL",
                "source": "BGR.com",
                "summary": "Buzz surrounding the upcoming new iPhone 12 lineup is really starting to pick up now, which should be fairly troubling to Apple's rivals since the iPhone 12 series isn't even set to be announced for another 6 months. In fact, the iPhone 12 isn't even the first iPhone Apple will release in 2020. According to multiple independent reports from sources that have proven to be reliable in the past, Apple's first new iPhone of the year will be unveiled toward the end of March. It won't be a flagship phone, but rather a followup to the popular iPhone SE that Apple released back in 2016. The phone has been referred to as iPhone SE 2, iPhone 9, and one rumor even said it will just be called \"iPhone.\" Whatever Apple decides to name it, all that matters is that it'll be a powerful device with specs similar to the iPhone 11, but it'll have the same design as the iPhone 8 and will start at just $399. Where the iPhone 12 series is concerned, it's expected to be a huge upgrade. Word from top Apple insider Ming-Chi Kuo is that the new iPhone 12 lineup will feature a major design overhaul with flat metal edges like the iPhone 4 and iPhone 5 design everyone loved so much.",
                "url": "https://bgr.com/2020/03/04/iphone-12-release-date-soon-supercycle-5g-wedbush/"
            },
            {
                "category": "company news",
                "datetime": 1583325195,
                "headline": "Castlevania: Symphony of the Night shows up on Apple and Android devices - CNET",
                "id": 998167,
                "image": "https://cnet2.cbsistatic.com/img/Rx_DckuiWdGVwJlHNHht3ncIA1o=/756x567/2020/03/04/10a812c7-707e-4a2d-8640-8ba47304611a/screenshot-2020-03-04-at-12-30-04.png",
                "related": "AAPL",
                "source": "CNET",
                "summary": "The amazing Dracula-slaying action RPG is available for $3, just before season 3 of the Netflix show arrives.",
                "url": "https://www.cnet.com/news/castlevania-symphony-of-the-night-shows-up-on-apple-and-android-devices-season-3-netflix/"
            },
            {
                "category": "company news",
                "datetime": 1583324100,
                "headline": "Why can’t Apple make a good mouse?",
                "id": 998168,
                "image": "https://images.idgesg.net/images/article/2017/12/magic-mouse2-space-gray-100744338-large.3x2.jpg",
                "related": "AAPL",
                "source": "Macworld",
                "summary": "The original Macintosh wasn’t the first consumer computer to use a mouse, but it was likely the first popular computer to include a mouse in every box, as it was designed to be operated primarily with one. The Apple Mouse that came with the 1984 Macintosh was the first to truly popularize the concept of mouse-driven computers. The interfaces of the mainstream computers we use today are still dominated by the pointer-and-clicking paradigms that began back then. Why then, has Apple—a company famous for its attention to usability design—made nothing but awful mice for over 20 years? Where it all began All About Apple For 1984, the O.G. Apple Mouse wasn’t half bad. To read this article in full, please click here",
                "url": "https://www.macworld.com/article/3530329/why-cant-apple-make-a-good-mouse.html"
            },
            {
                "category": "company news",
                "datetime": 1583323627,
                "headline": "Apple restricts employee travel to Italy, Korea on coronavirus",
                "id": 998169,
                "image": "https://images.indianexpress.com/2020/03/apple-bloom-759-2-1.jpg?w=759",
                "related": "AAPL",
                "source": "The Indian Express",
                "summary": "The company’s memo also said that “any employee who is sick, in particular, anyone who has a fever or severe cough, should take sick leave until they have fully recovered.”",
                "url": "https://indianexpress.com/article/technology/tech-news-technology/apple-restricts-employee-travel-to-italy-korea-on-coronavirus-6299093/"
            },
            {
                "category": "company news",
                "datetime": 1583322645,
                "headline": "The world’s most popular chat app is finally going dark (mode)",
                "id": 998170,
                "image": "https://boygeniusreport.files.wordpress.com/2020/03/whatsapp-dark-mode-iphone-android.jpg?quality=98&strip=all",
                "related": "AAPL",
                "source": "BGR.com",
                "summary": "The feature you most wanted from your favorite chat app is finally here, after months of rumors and beta testing. WhatsApp for iPhone and Android has finally embraced the darkness, as dark mode is now available to all users who own devices capable of taking advantage of dark modes in apps. If you've already set up dark mode on your iPhone, iPad, or Android device, all you need to do is update WhatsApp to the latest version to enjoy the darkness. We've had dark mode on iOS and Android phones for quite a while now, but Facebook has been slow at bringing the feature over to WhatsApp. The company explained in a blog post that it spent time researching and experimenting two particular dark mode-related matters, including readability, and \"information hierarchy:\" Readability: When choosing colors, we wanted to minimize eye fatigue and use colors that are closer to the system defaults on iPhone and Android respectively. Information Hierarchy: We wanted to help users easily focus their attention on each screen.",
                "url": "https://bgr.com/2020/03/04/whatsapp-dark-mode-available-on-iphone-and-android-via-update/"
            },
            {
                "category": "company news",
                "datetime": 1583321949,
                "headline": "Apple prepping 14.1-inch MacBook Pro, new iMac Pro with mini-LED display, says analyst",
                "id": 998171,
                "image": "https://images.financialexpress.com/2020/03/macbook-pro-660.jpeg",
                "related": "AAPL",
                "source": "The Financial Express",
                "summary": "Apple is apparently on course to launch as many as six new micro-LED display products despite the coronavirus (COVID-19) scare.",
                "url": "https://www.financialexpress.com/industry/technology/apple-prepping-14-1-inch-macbook-pro-new-imac-pro-with-mini-led-display-says-analyst/1888968/"
            },
            {
                "category": "company news",
                "datetime": 1583315530,
                "headline": "Melbourne Police Use Apple's Find My App to Track Thieves During Fatal Car Chase",
                "id": 998172,
                "image": "https://images.macrumors.com/article-new/2019/07/find-my-app-icon.jpg",
                "related": "AAPL",
                "source": "Mac Rumors",
                "summary": "Apple's Find My app was used by police to track two wanted men during a car chase in Melbourne, Australia last month, reports the Sydney Morning Herald . According to the report, the two men were being tracked from the air by helicopter after an iPad was stolen in an earlier home invasion. Driver Vaatoa Chang, 29, and passenger Jonas Montealegre, 36, carried the ‌iPad‌ with them as they switched stolen cars in an attempt to evade capture. In the initial phase of the chase, the two fugitives were being tracked by following a stolen car, but when the police helicopter was called in, the two men switched cars, and that's when officers resorted to tracking them via ‌iPad‌. Initially, it was the victim of the theft that used the ‌Find My‌ app to ping his ‌iPad‌ and follow his stolen Mitsubishi Tritan, but police eventually called him off and continued tracking the ‌iPad‌ themselves using the same method. How to Use the Find My App on a Friend's iPhone or iPad to Locate Your Missing Device Police tracked the fugitives for two hours across Melbournes's suburbs using the ‌Find My‌ app, before the two fugitives were killed in a 100km/h collision with a freight truck after running a red light.",
                "url": "https://www.macrumors.com/2020/03/04/police-use-apple-find-my-app-track-thieves/"
            },
            {
                "category": "company news",
                "datetime": 1583312456,
                "headline": "Captivating night mode photo shot by Mumbai man set to feature on Apple billboards around the world",
                "id": 998173,
                "image": "https://images.financialexpress.com/2020/03/apple-contest-660.jpg",
                "related": "AAPL",
                "source": "The Financial Express",
                "summary": "Mitsun Soni's submission will also feature in a gallery on Apple.com website and Apple's official Instagram account.",
                "url": "https://www.financialexpress.com/industry/technology/captivating-night-mode-photo-shot-by-mumbai-man-set-to-feature-on-apple-billboards-around-the-world/1888712/"
            },
            {
                "category": "company news",
                "datetime": 1583303409,
                "headline": "Apple uninterested in manufacturing iPhone 11 in India: Report",
                "id": 998174,
                "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/iphone_11_indiatoday-647x363.jpeg?ey.HcGXH8a_Yupprpe3zyoIAzVS28gPf",
                "related": "AAPL",
                "source": "India Today",
                "summary": "Apple initially had plans to move production to India or Vietnam though.",
                "url": "https://www.indiatoday.in/technology/news/story/apple-uninterested-in-manufacturing-iphone-11-in-india-report-1652284-2020-03-04"
            },
            {
                "category": "company news",
                "datetime": 1583299303,
                "headline": "iPhone Maker Foxconn Expects 15% Q1 Revenue Hit From Coronavirus, Says Production Rebounding",
                "id": 998175,
                "image": "https://cdn1.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/apple_iphone_11-water-resistant-091019_6.jpg",
                "related": "AAPL",
                "source": "Benzinga Feeds",
                "summary": "Taiwanese consumer electronics manufacturer Hon Hai Precision Co. Ltd. (OTC: HNHPF ) expects its production in China to return to a regular pace by the end of March, Chairman Young-Way Liu said in an investors call Tuesday, according to a Nikkei Asian Review report. The Coronavirus Impact On Foxconn Foxconn, best known for making Apple Inc. (NASDAQ: AAPL ) devices including iPhones, restarted production earlier last month as the spread of the COVID-19 virus seemingly slowed in the country — but continued to suffer a labor shortage as people … Full story available on Benzinga.com",
                "url": "https://www.benzinga.com/news/20/03/15475801/iphone-maker-foxconn-expects-15-q1-revenue-hit-from-coronavirus-says-production-rebounding"
            },
            {
                "category": "company news",
                "datetime": 1583292300,
                "headline": "Apple has picked this photo of Indian photographer as one of the 'best' in the world - Times of India",
                "id": 998176,
                "image": "https://static.toiimg.com/thumb/msid-74468491,width-1070,height-580,imgsize-1127669,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "related": "AAPL",
                "source": "The Times of India",
                "summary": "​A curated panel of judges selected six winning photos from thousands of submissions worldwide, which included photo of Mumbai-based photographer Mits",
                "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-has-picked-this-photo-of-indian-photographer-as-one-of-the-best-in-the-world/articleshow/74468491.cms"
            },
            {
                "category": "company news",
                "datetime": 1583279168,
                "headline": "Apple is Ready to Pay up to $ 500 Million in Compensations for Intentionally Slowing Down the Older iPhones",
                "id": 998177,
                "image": "https://www.novinite.com/media/images/2020-03/photo_verybig_203447.jpg",
                "related": "AAPL",
                "source": "Novinite.com",
                "summary": "Each iPhone owner whose work was deliberately slowed down by the manufacturer will receive $ 25. Technology giant Apple is ready to compensate customers who are affected by the controversial and deliberate practice of quietly slowing down older iPhones as the company launched new models, to induce owners to buy replacement phones or batteries. Apple is ready to pay between $ 310 million and $ 500 million in damages. Such an agreement must be approved by the court filing the case against the company. This is a starting amount that can be reduced or increased. The owners of the 6, 6 Plus, 6s, 6s Plus, 7, 7 Plus и SE models complain about the slowdown of their phones. They claim that after the installation of operating system 10.2.1 or later, their phones started working slower. In 2017, Apple admitted to deliberately slowing down the work of older phones. The company said it does so to help with the durability of already obsolete batteries. Many customers were angry that they had not been warned about the practice, while others accused Apple of delaying old phones to force their customers to buy new ones.",
                "url": "https://www.novinite.com/articles/203447/Apple+is+Ready+to+Pay+up+to+%24+500+Million+in+Compensations+for+Intentionally+Slowing+Down+the+Older+iPhones"
            },
            {
                "category": "company news",
                "datetime": 1583278725,
                "headline": "Apple supplier Foxconn expects coronavirus-hit labor shortage in China to ease",
                "id": 998178,
                "image": "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/foxconn-workers-1.jpg",
                "related": "AAPL",
                "source": "Fox News",
                "summary": "Foxconn Technology Group, 2317 2.27% which assembles iPhones for Apple Inc., expects production levels at its plants in mainland China to return to normal seasonal level this month if the coronavirus epidemic doesn’t worsen, the company’s chairman said Tuesday.",
                "url": "https://www.foxnews.com/tech/apple-supplier-foxconn-expects-coronavirus-hit-labor-shortage-in-china-to-ease"
            },
            {
                "category": "company news",
                "datetime": 1583278655,
                "headline": "Hands-On With Samsung's New S20 Ultra: Is It Worth $1400?",
                "id": 998179,
                "image": "https://images.macrumors.com/article-new/2020/03/s20ultracamera.jpg",
                "related": "AAPL",
                "source": "Mac Rumors",
                "summary": "Samsung in February announced its most expensive non-foldable smartphone to date, the Galaxy S20 Ultra , which has a starting price of $1,400, which is $300 higher than the starting price of Apple's $1,099 iPhone 11 Pro Max . Subscribe to the MacRumors YouTube channel for more videos. Apple is often criticized for its high price points, but this year, Samsung went above and beyond matching Apple's expensive smartphones. We recently picked up one of Samsung's Galaxy S20 Ultra smartphones to see if it's worth the $1,400 price point. First off, the S20 Ultra has a 6.9-inch OLED display that looks fantastic. Out of the box, it's set to 1080p with a 60Hz refresh rate, but you can bump that up to a 120Hz refresh rate for super smooth scrolling. If you want to use the QHD setting with a higher resolution, you'll be limited to a 60Hz refresh rate, likely due to battery life concerns. The Galaxy S20 Ultra includes 12 to 16GB RAM (16GB for the highest-end option priced at $1,600), 128 or 512GB of storage (again for that $1,600 model), an SD card expansion slot, a Snapdragon 865 processor (Qualcomm's latest and fastest chip), an in-display fingerprint sensor, and a 5,000mAh battery, which offers impressive battery life.",
                "url": "https://www.macrumors.com/2020/03/03/samsung-galaxy-s20-ultra/"
            },
            {
                "category": "company news",
                "datetime": 1583277900,
                "headline": "Foxconn Warns Of Major Revenue Drop, Expects Full Production By End March",
                "id": 998180,
                "image": "https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2020-03/foxconn%20coronavirus%20.jpg?itok=exVayRis",
                "related": "AAPL",
                "source": "Zero Hedge",
                "summary": "Foxconn Warns Of Major Revenue Drop, Expects Full Production By End March Apple's top supplier Foxconn warned on Tuesday that consumer electronics and enterprise product revenue would decline by 15% in the first quarter, but a rebound in business activity could be seen shortly after that, as full production targets have now been set for the end of March, reported Reuters . Foxconn has been one of the hardest-hit manufacturers in China, still operating at 50% capacity as a slow ramp of its factories has been underway amid factory shutdowns because of the Covid-19 outbreak last month. The company told investors they shouldn't expect revenue growth in the first half and a \"mild downward revision\" from the original guidance of \"slight growth\" projected earlier this year. Its new guidance said the virus impact of its Chinese operations would be short term and full production could resume by the end of the month. \"Prevention of outbreak, resumption of work and production are our top priority,\" Foxconn's Chairman Liu Young-Way told investors on Tuesday.",
                "url": "https://www.zerohedge.com/markets/foxconn-warns-15-revenue-drop-says-full-production-end-march"
            },
            {
                "category": "company news",
                "datetime": 1583276739,
                "headline": "Amazon has a very real coronavirus problem. It's response is a lesson for every business",
                "id": 998181,
                "image": "https://o.aolcdn.com/images/dims3/GLOB/crop/4255x2790+0+41/resize/1028x675!/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-03%2Fec805560-5da2-11ea-bcf9-30f4037f0baf",
                "related": "AAPL",
                "source": "Aol.",
                "summary": "Filed under: Finance , Business , Companies The current outbreak of coronavirus has already proved to be a very real challenge for companies across the world. Apple, for example, has announced that it will miss its quarterly revenue projections because of decreased demand and limitations on its manufacturing partners. The same is true for other device makers and tech companies. Read more… Permalink | Email this | Linking Blogs | Comments",
                "url": "https://www.aol.com/article/finance/2020/03/03/amazon-has-a-very-real-coronavirus-problem-its-response-is-a-lesson-for-every-business/23939590/"
            },
            {
                "category": "company news",
                "datetime": 1583276544,
                "headline": "It sure looks like Apple is about to launch exciting new iPad Pro models",
                "id": 998182,
                "image": "https://boygeniusreport.files.wordpress.com/2019/03/ipad-pro-2018-vs-ipad-air-2019-vs-ipad-2018-vs-ipad-mini-2019.jpg?quality=98&strip=all",
                "related": "AAPL",
                "source": "BGR.com",
                "summary": "Before the coronavirus outbreak turned the world upside down, rumors suggested that Apple would host a spring event at the end of March to debut new products, including the iPhone 9 . Whether or not the virus has affected those plans remains to be seen, but there is evidence to support the fact that Apple will unveil at least one new device soon. Bloomberg reports that iPad Pro tablets are increasingly hard to find in cities across the US, Europe, and Australia. A quick search in the New York City area shows that availability of 512GB models is especially limited. On one hand, there's a chance that this is a direct result of the virus's impact on production, but as Bloomberg's Mark Gurman notes, there's also a chance that the supply shortages could stem from the imminent launch of the rumored 2020 iPad Pro models. Apple might just be clearing up shelf space ahead of the reveal. Previous rumors have suggested that the 2020 iPad Pro will feature a Time-of-Flight (ToF) camera that could be used to capture 3D models and then edit them with an Apple Pencil.",
                "url": "https://bgr.com/2020/03/03/ipad-pro-2020-release-date-low-stock-announcement-soon/"
            },
            {
                "category": "company news",
                "datetime": 1583274037,
                "headline": "Hedge Funds Were Souring On Apple Inc. (AAPL) Even Before The Coronavirus",
                "id": 998183,
                "image": "https://s.yimg.com/uu/api/res/1.2/eywElp6fcvOcureCeu3EFA--~B/aD00MjI7dz03NTA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-us/insidermonkey.com/39b6c722038df9eb5cafa1eb0a91bffd",
                "related": "AAPL",
                "source": "Yahoo Finance",
                "summary": "Coronavirus is probably the 1 concern in investors' minds right now. It should be. We estimate that COVID-19 will kill around 5 million people worldwide and there is a 3.3% probability that Donald Trump will die from the new coronavirus (see the details). So, how do we invest in this environment?",
                "url": "https://finance.yahoo.com/news/hedge-funds-were-souring-apple-222037434.html"
            }
        ]
    },
    "GOOGL": {
        "quoteUrl": {
            "c": 1347.89,
            "h": 1382.78,
            "l": 1337,
            "o": 1358.96,
            "pc": 1337.72,
            "t": 1583332200
        },
        "priceTarget": {
            "lastUpdated": "2020-02-28 00:00:00",
            "symbol": "GOOGL",
            "targetHigh": 1800,
            "targetLow": 1270,
            "targetMean": 1612.47,
            "targetMedian": 1600
        },
        "baseRecommendationUrl": [
            {
                "buy": 25,
                "hold": 5,
                "period": "2020-02-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 22,
                "hold": 4,
                "period": "2020-01-01",
                "sell": 0,
                "strongBuy": 12,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 22,
                "hold": 4,
                "period": "2019-12-01",
                "sell": 0,
                "strongBuy": 11,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 21,
                "hold": 5,
                "period": "2019-11-01",
                "sell": 0,
                "strongBuy": 11,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 23,
                "hold": 4,
                "period": "2019-10-01",
                "sell": 0,
                "strongBuy": 11,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-09-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-08-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-07-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-06-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-05-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-04-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-03-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-02-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            },
            {
                "buy": 25,
                "hold": 5,
                "period": "2019-01-01",
                "sell": 0,
                "strongBuy": 13,
                "strongSell": 0,
                "symbol": "GOOGL"
            }
        ],
        "companyNewsUrl": [
            {
                "category": "company news",
                "datetime": 1583323201,
                "headline": "Google to cancel I/O over virus concerns, Honeywell makes wild quantum forecast video - CNET",
                "id": 998253,
                "image": "https://cnet4.cbsistatic.com/img/B57xJsZlIiNd5bxbKV6n_EPmGI8=/2020/03/03/d3c30cc5-ecfe-4d7a-8b21-f343080cd260/tt-030420.jpg",
                "related": "GOOGL,GOOG",
                "source": "CNET",
                "summary": "Today's major tech stories include Google's canceling of I/O, Facebook's pulling out of SXSW, Amazon's improved same-day delivery offerings and Honeywell's promise in quantum computing gains.",
                "url": "https://www.cnet.com/videos/google-to-cancel-io-over-virus-concerns-honeywell-makes-wild-quantum-forecast/"
            },
            {
                "category": "company news",
                "datetime": 1583322047,
                "headline": "Google fixes MediaTek bug in Android March patches",
                "id": 998254,
                "image": "https://sophosnews.files.wordpress.com/2020/03/shutterstock_83530636-compressor.jpg?w=775",
                "related": "GOOGL,GOOG",
                "source": "Naked Security",
                "summary": "There are patches for over 70 bugs, and they finally fixed a months-old exploit for MediaTek chipsets, said to affect millions of devices.",
                "url": "https://nakedsecurity.sophos.com/2020/03/04/google-fixes-mediatek-bug-in-android-march-patches/"
            },
            {
                "category": "company news",
                "datetime": 1583319600,
                "headline": "Android 10 Upgrade Report Card: Progress is relative",
                "id": 998255,
                "image": "https://images.idgesg.net/images/article/2020/03/android-10-upgrade-report-card-100834228-large.3x2.jpg",
                "related": "GOOGL,GOOG",
                "source": "ComputerWorld",
                "summary": "I'm not gonna lie: This time of year is usually a bit of downer here in the land o' Android analysis. I've been tracking device-makers' speed at sending out Android operating system updates to their devices for quite a while now, y'see — since somewhere around the early 1800s. And with rare exception, the results are pretty much always bad news. Calling it \"bad news\" is probably being generous: With almost every year in recent memory, we've seen upgrade delivery performance from most of the big Android device-makers get progressively worse , despite Google's ongoing efforts to make the process easier. Last year was a slight exception, with a couple of moderate improvements, but it was still a ridiculously depressing picture all in all — with only two non-failing grades in a sea of cold indifference. To read this article in full, please click here",
                "url": "https://www.computerworld.com/article/3530002/android-10-upgrade-report-card.html"
            },
            {
                "category": "company news",
                "datetime": 1583314158,
                "headline": "Google cancels its biggest event of the year due to Covid-19",
                "id": 998256,
                "image": "https://www.siliconrepublic.com/wp-content/uploads/2020/03/google.png",
                "related": "GOOGL,GOOG",
                "source": "siliconrepublic.com",
                "summary": "Google’s I/O event has been called off, joining a growing list of global tech events that have been axed to mitigate the spread of Covid-19. The post Google cancels its biggest event of the year due to Covid-19 appeared first on Silicon Republic .",
                "url": "https://www.siliconrepublic.com/companies/google-io-cancelled-coronavirus"
            },
            {
                "category": "company news",
                "datetime": 1583312646,
                "headline": "Adobe, Google, Intel, Informa All Cancel Events as Coronavirus Rocks the Conference World",
                "id": 998257,
                "image": "https://www.cbronline.com/wp-content/uploads/2020/03/dave-mullen-tB5nG7JOdrg-unsplash.jpg",
                "related": "GOOGL,GOOG",
                "source": "CBROnline.com",
                "summary": "Many insurers have communicable-disease exclusions in their policies The post Adobe, Google, Intel, Informa All Cancel Events as Coronavirus Rocks the Conference World appeared first on Computer Business Review .",
                "url": "https://www.cbronline.com/news/tech-events-cancelled-coronavirus"
            },
            {
                "category": "company news",
                "datetime": 1583303107,
                "headline": "Coronavirus: fears of global slowdown grow as US stimulus fails to rally markets",
                "id": 998258,
                "image": "https://i.guim.co.uk/img/media/674820a198ea270eb2cca8aceb096cbe2514ef75/0_157_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=bfb6663a3cfd9da184d575f574437f40",
                "related": "GOOGL,GOOG",
                "source": "The Guardian",
                "summary": "Shares struggled to gain traction as new data showed that China and Hong Kong came to a virtual economic standstill in February Latest updates Fears of a coronavirus-driven global economic slowdown have mounted after stock markets gave a lukewarm reaction to the emergency cut in US interest rates and new data showed that China and Hong Kong came to a virtual standstill in February. As the World Health Organization warned that panic buying and market manipulation was “rapidly depleting” supplies of protective equipment, world leaders and central banks continued their scramble to cushion the economic impact of the outbreak. Related: Coronavirus latest: at a glance Related: Coronavirus: Google leads tech charge to work from home Continue reading…",
                "url": "https://www.theguardian.com/world/2020/mar/04/coronavirus-fears-of-global-slowdown-grow-as-us-stimulus-fails-to-rally-markets"
            },
            {
                "category": "company news",
                "datetime": 1583302772,
                "headline": "Coronavirus outbreak: Google cancels its biggest event of the year, I/O 2020",
                "id": 998259,
                "image": "https://images.financialexpress.com/2020/03/gogole-660.jpg",
                "related": "GOOGL,GOOG",
                "source": "The Financial Express",
                "summary": "The I/O developer conference is not only Google's biggest event of the year, it is also a big tech event for developers and partners.",
                "url": "https://www.financialexpress.com/industry/technology/coronavirus-outbreak-google-cancels-its-biggest-event-of-the-year-i-o-2020/1888487/"
            },
            {
                "category": "company news",
                "datetime": 1583298300,
                "headline": "Most Googled illness symptom in Liverpool shared in search data",
                "id": 998260,
                "image": "https://i2-prod.liverpoolecho.co.uk/incoming/article17278102.ece/ALTERNATES/s1200/1_Blue-toilet-generic-cubicle.jpg",
                "related": "GOOGL,GOOG",
                "source": "Liverpool Echo",
                "summary": "The study identified the most searched for health conditions on Google across 15 major English cities",
                "url": "https://www.liverpoolecho.co.uk/news/liverpool-news/most-googled-illness-symptom-liverpool-17853485"
            },
            {
                "category": "company news",
                "datetime": 1583284267,
                "headline": "De Blasio’s tech czar rips Google-linked group for WiFi kiosks delays",
                "id": 998261,
                "image": "https://thenypost.files.wordpress.com/2020/03/tisch.jpg?quality=90&strip=all&w=664&h=441&crop=1",
                "related": "GOOGL,GOOG",
                "source": "New York Post",
                "summary": "City Hall’s new tech czar threatened Tuesday to take the Google-linked consortium supplying the Big Apple’s free WiFi kiosks to court over massive installation delays and its failure to pay the city more than $30 million. The city’s technology chief, Jessica Tisch, told a City Council hearing that the firm — CityBridge, which is partially…",
                "url": "https://nypost.com/2020/03/03/de-blasios-tech-czar-rips-google-linked-group-for-wifi-kiosks-delays/"
            },
            {
                "category": "company news",
                "datetime": 1583279425,
                "headline": "Tech firms withdraw from South by Southwest amid coronavirus concerns",
                "id": 998262,
                "image": "https://thenypost.files.wordpress.com/2020/03/sized-south-by-southwest.jpg?quality=90&strip=all&w=664&h=441&crop=1",
                "related": "GOOGL,GOOG",
                "source": "New York Post",
                "summary": "The coronavirus is rattling big tech, with Facebook, Twitter and Intel all pulling out of this month’s South by Southwest festival and Google canceling its annual developers conference. Employees from Twitter will no longer attend the weeklong Austin, Texas, music film festival, known for its A-list speakers, after the company announced a non-essential travel ban….",
                "url": "https://nypost.com/2020/03/03/tech-firms-withdraw-from-south-by-southwest-amid-coronavirus-concerns/"
            },
            {
                "category": "company news",
                "datetime": 1583273259,
                "headline": "Alphabet cancels Google I/O event",
                "id": 998263,
                "image": "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
                "related": "GOOGL,GOOG",
                "source": "Seeking Alpha",
                "summary": "Alphabet (GOOG,GOOGL) cancels its Google I/O developer event scheduled for May 12-14 due to the coronavirus outbreak. Yesterday, the company had said it wo",
                "url": "https://seekingalpha.com/news/3548374-alphabet-cancels-google-i-o-event"
            },
            {
                "category": "company news",
                "datetime": 1583271900,
                "headline": "Even in Coal-Heavy Kentucky, Corporations Can’t Stay Away From Solar Power",
                "id": 998264,
                "image": "https://www.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Kentucky_Coal_Protest_Mitch_McConnell_XL_Shutterstock_500_333_80.jpg",
                "related": "GOOGL,GOOG",
                "source": "Green Technology",
                "summary": "In Kentucky, coal still generates the great majority of electricity; 75 percent in 2018, according to the Energy Information Administration. That dominance is waning, though. Last year, renewable-powered electricity in the U.S. surpassed coal-fired power, and two of the largest coal retirements slated for 2020 are in Kentucky . Meanwhile, in a striking bit of energy transition symbolism, the state’s Coal Mining Museum, located in a historical coal town called Benham, made the switch to solar as a cost-cutting measure back in 2017. “It is a little ironic,” museum spokesperson Brandon Robinson told local TV station WYMT at the time. “Of course, coal is still king around here.” The museum’s decision is unlikely to be the predominant one in Kentucky. Though coal is steadily losing its crown, new natural gas combined cycle plants will remain more economic than building large-scale solar projects in some parts of Kentucky for the next couple years. However, solar developers are inching into the state, teasing out deals and working to gain access to the lucrative PJM market, in part driven by demand from corporate consumers. “With the cost of solar continuing to decline [and the] corporate renewables market continuing to grow and expand, it’s just natural that any state that has a policy framework that allows power to be sold between a solar farm and a corporate offtaker … is going to start to grow,” said Carson Harkrader, CEO at Carolina Solar Energy, a North Carolina-based company that began sniffing around Kentucky in 2018.",
                "url": "https://www.greentechmedia.com/articles/read/a-big-solar-project-in-coal-heavy-kentucky-hints-at-growing-corporate-demand"
            },
            {
                "category": "company news",
                "datetime": 1583270854,
                "headline": "Australian newswire to close after 85 years, blames Google, Facebook & free digital media",
                "id": 998265,
                "image": "https://cdni.rt.com/files/2020.03/article/5e5ec18320302750e62b0e0e.JPG",
                "related": "GOOGL,GOOG",
                "source": "Russia Today",
                "summary": "Despite being a pillar of the media Down Under, Australian Associated Press (AAP) is soon to be closed, saying they are “no longer viable to continue” and blaming the journalistic market being flooded with free digital media. Read Full Article at RT.com",
                "url": "https://www.rt.com/news/482237-aap-australia-google-facebook/"
            },
            {
                "category": "company news",
                "datetime": 1583270243,
                "headline": "Google cancels major I/O developer conference in latest coronavirus blow to tech industry",
                "id": 998266,
                "image": "https://www.gannett-cdn.com/presto/2019/05/07/USAT/d8529d9f-e79a-4aaa-869c-2c232a8f2c6a-6149.jpg?crop=4703,2656,x0,y338&width=3200&height=1680&fit=bounds",
                "related": "GOOGL,GOOG",
                "source": "USA Today",
                "summary": "Google canceled its annual I/O developer conference that was supposed to take place at its Mountain View, CA., headquarters May 12 to May 14.",
                "url": "https://www.usatoday.com/story/tech/2020/03/03/google-i-o-conference-canceled-latest-coronavirus-blow-tech/4943229002/"
            },
            {
                "category": "company news",
                "datetime": 1583269542,
                "headline": "Internet Marketing Alphabet Review — New Training From A to Z",
                "id": 998267,
                "image": "https://miro.medium.com/max/800/1*np5Y1HSPnAn67qJ9PuLe4g.png",
                "related": "GOOGL,GOOG",
                "source": "Medium",
                "summary": "The internet ‘gurus’ never want to actually give you any knowledge, or if they do then they only want to give you part of the picture. If they told you EVERYTHING then they would have NOTHING left…",
                "url": "https://medium.com/latest-tools-for-marketers/internet-marketing-alphabet-review-new-training-from-a-to-z-6a08bda7ff34"
            },
            {
                "category": "company news",
                "datetime": 1583269103,
                "headline": "Report: Google just canceled the ‘physical’ portion of its I/O conference",
                "id": 998268,
                "image": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F10%2Fgoogle-796x417.jpg&signature=d1c71c707019227b7d96c4f23bee6c70",
                "related": "GOOGL,GOOG",
                "source": "The Next Web",
                "summary": "According to a report from 9to5 Google, the Mountain View company has officially canceled I/O, it’s annual developer’s conference amid concerns over the ongoing COVID-19 (coronavirus) global outbreak. The event was scheduled to take place on May 12-14, but has apparently been canceled with no immediate plans to reschedule. Per 9to5 Google‘s report, Google has begun sending notifications to ticket-holders: Google joins myriad other tech companies in canceling events scheduled to take place throughout the year. Facebook’s F8 and Adobe Summit have also been outright canceled while other events, such as TNW‘s own 2020 conference, have been rescheduled. Read: Facebook just… This story continues at The Next Web Or just read more coverage about: Google",
                "url": "https://thenextweb.com/google/2020/03/03/report-google-just-canceled-the-physical-portion-of-its-i-o-conference/"
            },
            {
                "category": "company news",
                "datetime": 1583268909,
                "headline": "Coronoavirus prompts Google to cancel its annual I/O developer conference",
                "id": 998269,
                "image": "https://boygeniusreport.files.wordpress.com/2020/02/webp.net-resizeimage-3-3.jpg?quality=98&strip=all",
                "related": "GOOGL,GOOG",
                "source": "BGR.com",
                "summary": "With health professionals still struggling to keep the coronavirus from spreading, we've seen a number of companies cancel high-profile conventions. Just a few weeks ago, for instance, Mobile World Congress was cancelled. And now comes word that Google's annual developer conference -- Google I/O -- will not take place as initially anticipated. Originally set to take place at the Shorline Ampitheatre later this year, a physical event will no longer be in the cards. Google announced the cancellation earlier today. Google's message to folks who were planning to attend reads as follows: Due to concerns around the coronavirus (COVID-19), and in accordance with health guidance from the CDC, WHO, and other health authorities, we have decided to cancel the physical Google I/O event at Shoreline Amphitheatre. Developing…",
                "url": "https://bgr.com/2020/03/03/coronavirus-google-io-cancelled-developer-conference/"
            },
            {
                "category": "company news",
                "datetime": 1583268755,
                "headline": "Google has reportedly canceled its biggest event of the year because of coronavirus concerns (GOOG)",
                "id": 998270,
                "image": "https://i.insider.com/5e5ec5e0fee23d79704c6597?width=1200&format=jpeg",
                "related": "GOOGL,GOOG",
                "source": "Business Insider",
                "summary": "Google has canceled its annual Google I/O developers conference over coronavirus-related concerns, according to 9to5Google. The change comes after a string of other high-profile events have been canceled because of the virus, including Mobile World Congress and Facebook's F8 conference. Google said it will cancel the physical event, which usually takes place at the Shoreline Amphitheater in Mountain View, California, and will \"explore other ways to evolve Google I/O to best connect with our developer community,\" according to an email cited in the report. \"Due to concerns around the coronavirus (COVID-19), and in accordance with health guidance from the CDC, WHO, and other health authorities, we have decided to cancel the physical Google I/O event at Shoreline Ampitheater,\" the email read. Google did not immediately respond to Business Insider's request for confirmation. This story is developing. Please refresh for the latest. Join the conversation about this story » NOW WATCH: Why it's so hard for planes to land on water",
                "url": "https://www.businessinsider.com/google-cancels-io-conference-coronavirus-concerns-2020-3"
            },
            {
                "category": "company news",
                "datetime": 1583268300,
                "headline": "Alphabet makes Google I/O 2020 an online event because of coronavirus concerns",
                "id": 998271,
                "image": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
                "related": "GOOGL,GOOG",
                "source": "MarketWatch",
                "summary": "Alphabet Inc.'s Google I/O 2020 developers conference is the latest tech trade show to be turned from in-person event to online only. On Tuesday, the company…",
                "url": "https://www.marketwatch.com/story/alphabet-makes-google-io-2020-an-online-event-because-of-coronavirus-concerns-2020-03-03"
            },
            {
                "category": "company news",
                "datetime": 1583267776,
                "headline": "Google pitches free trials of its enterprise G Suite conferencing tools as part of a coronavirus response",
                "id": 998272,
                "image": "https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-665596430.jpg?w=599",
                "related": "GOOGL,GOOG",
                "source": "TechCrunch",
                "summary": "Google said in a blog post that it would roll out free access to advanced Hangouts Meet video-conferencing capabilities to all G Suite and G Suite for Education customers globally as the company pitches its remote work tools as an option for companies looking to let employees work from home. Chief executive Sundar Pichai announced […]",
                "url": "https://techcrunch.com/2020/03/03/google-pitches-free-trials-of-its-enterprise-g-suite-conferencing-tools-as-part-of-a-coronavirus-response/"
            }
        ]
    },
    "SPOT": {
        "quoteUrl": {
            "c": 139.03,
            "h": 144.33,
            "l": 137.23,
            "o": 139,
            "pc": 137.16,
            "t": 1583332200
        },
        "priceTarget": {
            "lastUpdated": "2020-02-28 00:00:00",
            "symbol": "SPOT",
            "targetHigh": 211.42,
            "targetLow": 91.92,
            "targetMean": 152.32,
            "targetMedian": 160.86
        },
        "baseRecommendationUrl": [
            {
                "buy": 3,
                "hold": 2,
                "period": "2020-02-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 13,
                "hold": 8,
                "period": "2020-01-01",
                "sell": 3,
                "strongBuy": 5,
                "strongSell": 1,
                "symbol": "SPOT"
            },
            {
                "buy": 13,
                "hold": 9,
                "period": "2019-12-01",
                "sell": 2,
                "strongBuy": 5,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-11-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-10-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-09-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-08-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-07-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-06-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-05-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-04-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-03-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-02-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            },
            {
                "buy": 3,
                "hold": 2,
                "period": "2019-01-01",
                "sell": 0,
                "strongBuy": 3,
                "strongSell": 0,
                "symbol": "SPOT"
            }
        ],
        "companyNewsUrl": [
            {
                "category": "company news",
                "datetime": 1583184600,
                "headline": "Spotify Chief Financial Officer to Present at the Morgan Stanley Technology, Media & Telecom Conference",
                "id": 993455,
                "image": "https://mms.businesswire.com/media/20200302005847/en/648067/22/Spotify_Logo_RGB_Green.jpg",
                "related": "SPOT",
                "source": "Business Wire",
                "summary": "NEW YORK--(BUSINESS WIRE)--Spotify Technology S.A. (NYSE: SPOT) announced today that Paul Vogel, Chief Financial Officer, will present at the Morgan Stanley Technology, Media and Telecom Conference in San Francisco on Wednesday, March 4, 2020. Mr. Vogel is scheduled to appear at 8:45 a.m. Pacific Time. The webcast will be available live and for replay on the Spotify Investor Relations website at http://investors.spotify.com. About Spotify Technology S.A. Spotify is the largest global music stre",
                "url": "https://www.businesswire.com/news/home/20200302005847/en/Spotify-Chief-Financial-Officer-Present-Morgan-Stanley/"
            },
            {
                "category": "company news",
                "datetime": 1582200433,
                "headline": "Bloomberg: Apple May Let iOS Users Set Third-Party Web Browser and Mail Apps as Defaults Over Stock Apps",
                "id": 972078,
                "image": "https://images.macrumors.com/article-new/2018/11/2018ipadprohomescreen.jpg",
                "related": "SPOT",
                "source": "Mac Rumors",
                "summary": "Apple is considering whether to let iPhone and iPad users set third-party mail and browser apps as defaults instead of the mobile operating system's preference for its own Safari and Mail stock apps. Bloomberg 's Mark Gurman: The technology giant is discussing whether to let users choose third-party web browser and mail applications as their default options on Apple’s mobile devices, replacing the company’s Safari browser and Mail app, according to people familiar with the matter. The potential move comes after criticism that the tech giant gives its in-house apps an unfair advantage and undue prominence on the App Store . As it stands, Apple doesn't allow users to replace pre-installed apps like Safari and Mail with third-party services, opening it up to scrutiny from lawmakers investigating antitrust violations. The report also claims that Apple is considering opening its HomePod speaker to third-party music services like Spotify. The Cupertino, California-based company also is considering loosening restrictions on third-party music apps, including its top streaming rival Spotify Technology SA, on HomePods, said the people, who asked not to be named discussing internal company deliberations.",
                "url": "https://www.macrumors.com/2020/02/20/apple-let-ios-users-default-third-party-apps/"
            },
            {
                "category": "company news",
                "datetime": 1581547295,
                "headline": "Spotify Technology S A : Annual and Transition Report (foreign private issuer) | MarketScreener",
                "id": 962199,
                "image": "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
                "related": "SPOT",
                "source": "MarketScreener",
                "summary": "net Loss before tax Income tax expense/ Net loss attributable to owners of the parent … | February 12, 2020",
                "url": "https://www.marketscreener.com/SPOTIFY-TECHNOLOGY-S-A-42589613/news/Spotify-Technology-S-A-Annual-and-Transition-Report-foreign-private-issuer-29988739/"
            },
            {
                "category": "company news",
                "datetime": 1581535800,
                "headline": "Spotify pays $250m for Ringer in podcasting drive",
                "id": 962200,
                "image": "https://image.iol.co.za/image/1/process/620x349?source=https://cdn.africannewsagency.com/public/ana/media/media/2020/02/03/1580702869877.jpg",
                "related": "SPOT",
                "source": "Independent on Saturday",
                "summary": "Spotify Technology SA is paying close to $200 million upfront for the Ringer.",
                "url": "https://www.iol.co.za/business-report/international/spotify-pays-250m-for-ringer-in-podcasting-drive-42600070"
            },
            {
                "category": "company news",
                "datetime": 1581442639,
                "headline": "Source: Spotify is paying close to $200M upfront for the Ringer, to be followed by more than $50M later (Lucas Shaw/Bloomberg)",
                "id": 960591,
                "image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJmPi4kCdn1Q/v0/1200x822.jpg",
                "related": "SPOT",
                "source": "Techmeme",
                "summary": "Lucas Shaw / Bloomberg : Source: Spotify is paying close to $200M upfront for the Ringer, to be followed by more than $50M later — - Streamer has spent more than $600 million on podcast deals — Sports columnist Bill Simmons founded the Ringer in 2016 — Spotify Technology SA is paying close …",
                "url": "https://www.techmeme.com/200211/p20"
            },
            {
                "category": "company news",
                "datetime": 1581009116,
                "headline": "Analysts Not Worried About Spotify, Say 2020 Will Be An Investment Year",
                "id": 954724,
                "image": "https://cdn1.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/music-on-your-smartphone-1796117_1920_10.jpg",
                "related": "SPOT",
                "source": "Benzinga",
                "summary": "Spotify Technology SA (NYSE: SPOT ) shares began climbing back Thursday after falling a day earlier following earnings disappointment, and sell-side analysts remained mostly positive on the company's overall outlook and pushed price targets higher. Spotify was off about 6% on Wednesday after the music streaming leader reported weaker-than-expected fourth-quarter earnings and forecast slower premium subscriber growth in 2020. The Spotify Analysts Wells Fargo's Steven Cahall maintained an Underweight rating and raised the price target from $122 to $126. Credit Suisse analyst Brian Russo remained Neutral on Spotify with a $125 price target. Morgan Stanley's Benjamin Swinburne kept an Overweight rating and $180 target price. Nomura Instinet's Mark Kelley kept a Buy rating and $180 price target. The Spotify Theses Sell-side analysts remain convinced that in the long run, music streaming is a growth business and early entrant Spotify is a market leader. \"Over time that scale translates into substantial earnings power,\" Swinburne said in a note.",
                "url": "https://www.benzinga.com/analyst-ratings/analyst-color/20/02/15270701/analysts-not-worried-about-spotify-say-2020-will-be-an-investment-year"
            },
            {
                "category": "company news",
                "datetime": 1580975286,
                "headline": "Spotify Technology S A : to Buy the Ringer | MarketScreener",
                "id": 954725,
                "image": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
                "related": "SPOT",
                "source": "MarketScreener",
                "summary": "Deal comes as company reports user growth that was better than expected By Anne Steele Spotify Technology SA has agreed to buy sports and pop-culture outlet the Ringer, the company said… | February 6, 2020",
                "url": "https://www.marketscreener.com/SPOTIFY-TECHNOLOGY-S-A-42589613/news/Spotify-Technology-S-A-to-Buy-the-Ringer-29949934/"
            },
            {
                "category": "company news",
                "datetime": 1580914506,
                "headline": "Spotify Buying Bill Simmons' Ringer To Boost Podcast Library",
                "id": 954726,
                "image": "https://cdn1.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/spotify-1360002_1920_9.jpg",
                "related": "SPOT",
                "source": "Benzinga Feeds",
                "summary": "Spotify Technology SA (NYSE: SPOT ) will boost its podcasting business with the acquisition of Bill Simmons' The Ringer, bringing several popular podcasts into the audio service's fold. Terms of the deal weren't disclosed. Spotify said it expects the deal to close in the first quarter. A statement from Spotify said the move was intended to bolster its goal \"to become the world's leading audio platform.\" Why It's Important For Spotify The acquisition gives Spotify several podcasts from The Ringer's network, including \"The Bill Simmons Podcast,\" \"The Ringer NBA Show,\" \"The JJ Reddick Podcast,\" and \"Ringer FC.\" While most of the network's podcasts are sports-related, it also includes pop culture shows and the popular food-related podcast \"House of Carbs.\" \"With its popular … Full story available on Benzinga.com",
                "url": "https://www.benzinga.com/m-a/20/02/15258433/spotify-buying-bill-simmons-ringer-to-boost-podcast-library"
            },
            {
                "category": "company news",
                "datetime": 1580909287,
                "headline": "Spotify Technology S A : Adds Subscribers, Swings to Loss as It Invests in Podcasts -- Update | MarketScreener",
                "id": 950713,
                "image": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
                "related": "SPOT",
                "source": "MarketScreener",
                "summary": "By Anne Steele Spotify Technology SA posted better-than-expected growth in users and said its investment in podcasts is helping convert people who use its free tier into paying subscribers. … | February 5, 2020",
                "url": "https://www.marketscreener.com/SPOTIFY-TECHNOLOGY-S-A-42589613/news/Spotify-Technology-S-A-Adds-Subscribers-Swings-to-Loss-as-It-Invests-in-Podcasts-Update-29945036/"
            },
            {
                "category": "company news",
                "datetime": 1580905804,
                "headline": "Spotify (SPOT) Reports Q4 Loss, Misses Revenue Estimates",
                "id": 950714,
                "image": "https://staticx-tuner.zacks.com/images/default_article_images/default146.jpg",
                "related": "SPOT",
                "source": "Zacks Investment Research",
                "summary": "Spotify (SPOT) delivered earnings and revenue surprises of -162.50% and -1.79%, respectively, for the quarter ended December 2019. Do the numbers hold clues to what lies ahead for the stock?",
                "url": "https://www.zacks.com/stock/news/750218/spotify-spot-reports-q4-loss-misses-revenue-estimates"
            },
            {
                "category": "company news",
                "datetime": 1580904420,
                "headline": "Spotify Announces Strategic Acquisition of Bill Simmons’ The Ringer to Grow Sports Vertical",
                "id": 950715,
                "image": "https://mms.businesswire.com/media/20200205005373/en/648067/22/Spotify_Logo_RGB_Green.jpg",
                "related": "SPOT",
                "source": "Business Wire",
                "summary": "NEW YORK--(BUSINESS WIRE)--Spotify Technology S.A. (NYSE:SPOT), the world’s most popular audio streaming subscription service, today announced that the company has entered into a definitive agreement to acquire The Ringer, a leading creator of sports, entertainment and pop culture content. The Ringer was founded by Bill Simmons in 2016. Terms of the transaction were not disclosed. With this acquisition, Spotify continues to deliver against its goal to become the world’s leading audio platform.",
                "url": "https://www.businesswire.com/news/home/20200205005373/en/Spotify-Announces-Strategic-Acquisition-Bill-Simmons%E2%80%99-Ringer/"
            },
            {
                "category": "company news",
                "datetime": 1580901945,
                "headline": "Spotify posts 29per cent jump in premium subscribers, beats estimates",
                "id": 950716,
                "image": "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/12397816/16x9/991/557/d17486a08936631cdfe0abc7a57f7674/Jf/file-photo--a-smartphone-is-seen-in-front-of-a-screen-projection-of-spotify-logo--in-this-picture-illustration-3.jpg",
                "related": "SPOT",
                "source": "Channel NewsAsia",
                "summary": "Spotify Technology SA on Wednesday reported a 29per cent jump in premium subscribers in the fourth quarter, beating estimates, as the music streaming company rolled out more promotions to battle stiff competition from rivals including Apple Inc and Amazon.com Inc.",
                "url": "https://www.channelnewsasia.com/news/business/spotify-posts-29-jump-in-premium-subscribers-beats-estimates-12397818"
            },
            {
                "category": "company news",
                "datetime": 1580901481,
                "headline": "Spotify Technology S A : Adds Subscribers, Swings to Loss as It Invests in Podcasts | MarketScreener",
                "id": 950717,
                "image": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
                "related": "SPOT",
                "source": "MarketScreener",
                "summary": "By Anne Steele Spotify Technology SA posted better-than-expected growth in users and said its investment in podcasts is helping convert people who use its free tier into paying subscribers. … | February 5, 2020",
                "url": "https://www.marketscreener.com/SPOTIFY-TECHNOLOGY-S-A-42589613/news/Spotify-Technology-S-A-Adds-Subscribers-Swings-to-Loss-as-It-Invests-in-Podcasts-29944081/"
            },
            {
                "category": "company news",
                "datetime": 1580900400,
                "headline": "Spotify Technology S.A. Announces Financial Results for Fourth Quarter 2019",
                "id": 993456,
                "image": "https://mms.businesswire.com/media/20200205005323/en/771415/22/Spotify+1.jpg",
                "related": "SPOT",
                "source": "Business Wire",
                "summary": "NEW YORK--(BUSINESS WIRE)--Spotify Technology S.A. (NYSE:SPOT) today reported financial results for the fourth fiscal quarter of 2019 ending December 31, 2019. Dear Shareholders, The business continued to perform well in 4Q19. For the third consecutive quarter, total MAU growth accelerated while Subscribers, Revenue, and Gross Margin all met or exceeded our expectations. We continue to see exponential growth in podcast hours streamed (up approximately 200% Y/Y) and are now seeing clear indicati",
                "url": "https://www.businesswire.com/news/home/20200205005323/en/Spotify-Technology-S.A.-Announces-Financial-Results-Fourth/"
            },
            {
                "category": "company news",
                "datetime": 1580831717,
                "headline": "Workplace Platform Asana Plans To Go Public Via Direct Listing",
                "id": 993457,
                "image": "https://cdn1.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/asana.jpg",
                "related": "SPOT",
                "source": "Benzinga Feeds",
                "summary": "The makers of the San Francisco-based workplace task management platform Asana plan to go public and has filed an S-1 form with the Securities and Exchange Commission, the company said in a Monday statement . Asana's Direct Listing Plans Asana will opt for a direct listing instead of taking the initial public offering route. Direct listing was also the methodology adopted by Spotify Technology SA (NYSE: SPOT ), which is known for music streaming and the work-oriented instant messaging company Slack . Asana was co-founded by Justin Rosenstein and Facebook, Inc. (NASDAQ: FB ) co-founder Dustin … Full story available on Benzinga.com",
                "url": "https://www.benzinga.com/news/20/02/15243524/workplace-platform-asana-plans-to-go-public-via-direct-listing"
            },
            {
                "category": "company news",
                "datetime": 1580743238,
                "headline": "What to expect from Spotify (SPOT) in Q4",
                "id": 948704,
                "image": "https://cdn.news.alphastreet.com/wp-content/uploads/2019/04/Earnings-preview-1-1024x768.jpg",
                "related": "SPOT",
                "source": "news.alphastreet.com",
                "summary": "Spotify Technology SA (NYSE: SPOT) is slated to report fourth quarter 2019 earnings results on Wednesday, February 5, before the market opens. Analysts have projected…",
                "url": "https://news.alphastreet.com/what-to-expect-from-spotify-spot-in-q4/"
            },
            {
                "category": "company news",
                "datetime": 1579827565,
                "headline": "We just got our best look yet at Car Thing, Spotify's mysterious music streaming gadget that it has no plans to sell (SPOT)",
                "id": 932629,
                "image": "https://i.insider.com/5e2a6b1562fa815ad635fa05?width=1200&format=jpeg",
                "related": "SPOT",
                "source": "Business Insider",
                "summary": "Last May, Spotify announced a voice-activated music-streaming gadget, called the Car Thing — but said it would only be available for select users as a test of how people listen to music and podcasts in their car. Filings with the FCC give us our best look at the mysterious device yet, and could be a hint that Spotify might plan to actually put the Car Thing up for sale at some point. Any Spotify users who might have gotten a Car Thing as part of the test don't seem to have said anything about it on social media or elsewhere — we haven't heard much about the gadget since May, from either Spotify or users. Visit Business Insider's homepage for more stories . We finally know more about Spotify's long-discussed Car Thing — a voice-activated music-streaming gadget intended for the car (naturally), representing the music-streaming service's first foray into hardware. Spotify first announced the Car Thing in May, but said it was a prototype and that it had no plans to mass-produce it for consumers.",
                "url": "https://www.businessinsider.com/spotify-car-thing-photos-details-user-manual-2020-1"
            },
            {
                "category": "company news",
                "datetime": 1579704300,
                "headline": "Spotify's stock gets a lift after Ballie Gifford boosts stake to become largest shareholder",
                "id": 928735,
                "image": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
                "related": "SPOT",
                "source": "MarketWatch",
                "summary": "Shares of Spotify Technology S.A. gained 0.3% in morning trading Wednesday, after Scotland-based investment manager Ballie Gifford & Co. boosted its…",
                "url": "https://www.marketwatch.com/story/spotifys-stock-gets-a-lift-after-ballie-gifford-boosts-stake-to-become-largest-shareholder-2020-01-22"
            },
            {
                "category": "company news",
                "datetime": 1579305021,
                "headline": "Sources: Spotify in early talks to buy The Ringer, founded by former ESPN commentator Bill Simmons, which has a podcast network that made $15M+ in 2018 (Wall Street Journal)",
                "id": 923621,
                "image": "https://images.wsj.net/im-145414/social",
                "related": "SPOT",
                "source": "Techmeme",
                "summary": "Wall Street Journal : Sources: Spotify in early talks to buy The Ringer, founded by former ESPN commentator Bill Simmons, which has a podcast network that made $15M+ in 2018 — The Ringer, founded in 2016 by former ESPN commentator Bill Simmons, has over 30 podcasts — Spotify Technology SA is in talks …",
                "url": "https://www.techmeme.com/200117/p17"
            },
            {
                "category": "company news",
                "datetime": 1579302540,
                "headline": "WSJ News Exclusive | Spotify in Early Talks to Buy Sports and Pop-Culture Outlet the Ringer",
                "id": 923622,
                "image": "https://images.wsj.net/im-145414/social",
                "related": "SPOT",
                "source": "The Wall Street Journal",
                "summary": "Spotify Technology SA is in talks to buy sports and pop-culture outlet the Ringer, a deal that would bring the audiostreaming giant into broader digital media and add a network of content including “The Bill Simmons Podcast.”",
                "url": "https://www.wsj.com/articles/spotify-in-early-talks-to-buy-sports-and-pop-culture-outlet-the-ringer-11579302564"
            }
        ]
    },
    "ACB": {
        "quoteUrl": {
            "c": 1.38,
            "h": 1.43,
            "l": 1.32,
            "o": 1.34,
            "pc": 1.33,
            "t": 1583332200
        }
    }
}

const SecretPage = () => (<React.Fragment>




    <div>You're not supposed to be here!</div>
    <div onClick={() => localStorage.setItem('data', JSON.stringify(workingData))}>Restore localStorageData</div>
</React.Fragment>
)
export default SecretPage
