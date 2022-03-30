// here contains the data for the API
// it is going to be articles including
// ID: the identifier of the article (we will put it numerically)
// URL: the URL of the article (where we have retrieved it)
// Author: the author of the article, if the article has multiple authors, we will just take the first one for simplicity
// Title: the title of the article
// Subtitle: if the title has any subtitle, otherwise is blank
// Article: the actual article without format
// ArtDate: date of the article in ddmmyy

const article = [
  {
    ID: 1,
    URL: "https://decrypt.co/96321/web-browser-opera-adds-suport-bitcoin-polygon-solana",
    Author: "Andrew Asmakov",
    Title: "Web Browser Opera Adds Support for Bitcoin, Polygon, Solana",
    Subtitle:
      "Opera is now supporting eight new blockchains, including the Bitcoin network, Ethereum scaler Polygon, and Solana.",
    Article:
      "Opera, a popular web browser, today announced it is adding support for as many as eight new blockchain networks to ease access to decentralized apps (dApps) and services. <br>These include well-known projects like Bitcoin, Polygon, and Solana, as well as StarkEx, Ronin, Celo, Nervos, and the Cosmos-based IXO. <br>Polygon dApps are now available in the company's novel Web3-native browser, called the Crypto Browser Project, on Android, on desktop PCs, as well as on Android. <br>Earlier this year, Opera rolled out the public beta version of its new Crypto Browser Project for mobile and desktop devices. The Crypto Browser Project is a standalone browser coming with built-in dApp support and a non-custodial crypto wallet. It also includes Crypto Corner, a point of access to the latest crypto news, prices, gas fees and market sentiment, upcoming airdrops, educational content, and an events calendar. <br>Solana, StarkEx, Deversifi, IXO, Ronin, Nervos, Bitcoin, and Celo are only currently available in Opera for Android and are expected to be supported in the Crypto Browser Project in the coming months.",
    ArtDate: 300322,
  },
  {
    ID: 2,
    URL: "https://www.espn.com/soccer/fifa-world-cup-qualifying-uefa/story/4627979/while-ronaldomessi-and-lewandowski-make-world-cupqatar-will-miss-peak-talents-salah-and-haaland",
    Author: "Mark Ogden",
    Title:
      "While Ronaldo, Messi and Lewandowski make World Cup, Qatar will miss peak talents Salah and Haaland",
    Subtitle: "",
    Article:
      "PORTO, Portugal -- Cristiano Ronaldo is heading to Qatar, but Mohamed Salah isn't and neither is Zlatan Ibrahimovic, whose dream of becoming the first outfield player to bridge a 16-year gap between appearances at the World Cup fizzled out in a late, fruitless substitute rescue act for Sweden in Poland. <br>Every World Cup takes place with at least one leading player or major nation failing to qualify, but as the European and African sections came to a close (the conflict in Ukraine means that one spot is still to be assigned in the UEFA zone), the big names absentees are beginning to mount up. <br>Liverpool forward Salah, a potential Ballon d'Or winner this year, suffered his second penalty shoot-out heartbreak in less than two months as Egypt missed out on qualification by losing to Senegal -- a repeat of their Africa Cup of Nations final loss to the same team. <br>And Ibrahimovic, who will be 41 when Qatar 2022 begins, can forget about returning to the World Cup stage for the first time -- and probably last, but who knows with Zlatan? -- since failing to score at Germany 2006 after his return from international retirement came to nothing. Robert Lewandowski's second-half penalty in Chorzow set Poland on the way to a 2-0 win and qualification for Qatar, ensuring that the Bayern Munich forward -- for many observers, the best centre-forward in the game -- will be at football's biggest party when the World Cup is staged in November and December. <br>Salah and Ibrahimovic will join Norway's Erling Haaland, who scored twice in a 9-0 win against Armenia on Tuesday, as World Cup absentees. Two of football's biggest stars right now and a player who has been at the top of the game for over a decade, none of them will be in Qatar. And we haven't even mentioned Italy, who have become the first European champions since Greece (winners in 2004) to fail to qualify for the World Cup.",
    ArtDate: 300322,
  },
  {
    ID: 3,
    URL: "https://variety.com/2022/film/global/navalny-daniel-roher-cphdox-1235218633/",
    Author: "Christopher Vourlias",
    Title:
      "‘Navalny’ Director Daniel Roher Lashes Out at ‘Murderous’ Kremlin Regime, Insists ‘Putin Is Not Russia’",
    Subtitle: "",
    Article:
      "More than four weeks into Russia’s disastrous war in Ukraine, and just one week after a court sentenced Russian opposition leader Alexei Navalny to nine years in a high-security prison, “Navalny” director Daniel Roher made a passionate plea on behalf of the jailed politician in Copenhagen, lashing out at the “murderous” regime of President Vladimir Putin and arguing that filmmakers must “pick a side” in an increasingly fractured and polarized world. <br>“There’s a right side of politics. And yes, filmmakers pick a side. Because you’re either on the side of morality and justice and rule of law and democracy, or you’re on the side of a murderous dictatorship that launches invasions of sovereign nations and murders children every day,” Roher said on Tuesday at the Copenhagen Intl. Documentary Film Festival (CPH:DOX). <br>The director appeared in conversation with Danish filmmaker Christoffer Guldbrandsen, the director of the upcoming documentary “A Storm Foretold,” which follows the political spin doctor Roger Stone in the final months of the Trump administration. The animated, wide-ranging, 90-minute discussion raised questions about the responsibility documentary filmmakers have toward their subjects and the ethics of giving a platform to controversial views. <br>“Navalny,” which was unveiled as a last-minute “surprise” entry in the U.S. Documentary Competition at Sundance in January, is a riveting portrait of the eponymous politician, a rousing populist who as a presidential candidate posed such a threat to Putin that he was poisoned in a botched assassination plot ordered by the Kremlin. Variety’s Owen Gleiberman described it in his Sundance review as “a must-watch documentary that tells [Navalny’s] inspiring, scary, and profoundly important story.” <br>For the director, who was granted unprecedented, fly-on-the-wall access to the opposition leader while he was holed up in Germany in 2020, trying to unravel the murder plot against him, the importance of the historical moment animated his approach to the film. <br>“This was one shot I had to interview [Navalny],” Roher said. “The possibility and likelihood that this was his last interview was on my mind, and we didn’t know what would happen. We didn’t know if he would be killed. We didn’t know if he’d be sentenced to prison for the rest of his life. But that question was very real.”",
    ArtDate: 300322,
  },
  {
    ID: 4,
    URL: "https://www.forbes.com/sites/lauriewerner/2022/03/30/a-new-service-matches-travelers-with-savvy-locals-in-italy/?sh=45c36e23f87c",
    Author: "Laurie Werner",
    Title: "A New Service Matches Travelers With Savvy Locals In Italy",
    Subtitle: "",
    Article:
      "It is always more helpful to have a friend in a destination to point out the hidden gems that only locals know and the overrated places to avoid. For those who don’t already have friends in Italy, the just launched travel service XpatPal provides links to knowledgeable British, Irish and American expat locals spread out around the country and who specialize in different interests. <br>“The pandemic taught us many things and one of them is that freedom to travel is not something we should take for granted. Maybe it is wanderlust, the desire to experience a different culture or just to meet new people but whatever the reason, travel is part of what makes us human,” explains Joel Reidy, CEO of XpatPaI. “Now that the world is opening up again our desire to travel has awakened but with so many things changed over the last two years, trusting recommendations from an old blog post or a travel book can result in a disappointing trip. All of our itineraries are created at the time of the request based on the travelers’ interests and the absolute freshest information.” <br>The team of 50 covers 20 Italian regions including the major cities and countryside, from Lazio and Basilicata to the Veneto, Sicily and Tuscany. The expats offer suggestions for families, couples or solo travelers on gastronomy, culture, adventure travel, off the beaten path events, art, history, nightlife, wellness experiences or other interests. Travelers can select their advisors based on their bios which include the number of years in residence in Italy, the regions he or she knows best, the languages spoken (usually French and Spanish apart from English and Italian) and specialties.",
    ArtDate: 300322,
  },
  {
    ID: 5,
    URL: "https://metro.co.uk/2022/03/30/how-to-update-google-chrome-on-your-android-phone-16372276/",
    Author: "Jeff Parsons",
    Title: "How to update Google Chrome on your Android phone",
    Subtitle:
      "Keeping your apps up to date doesn’t just get you newer features, but it keeps you safe from security flaws as well.",
    Article:
      "Keeping your apps up to date doesn’t just get you newer features, but it keeps you safe from security flaws as well. <br> Reason enough to check you’re running the latest version of Google’s Chrome browser on your Android device. <br>This week, the tech giant alerted its Chrome users (all 3.2 billion of them) to a dangerous new security flaw affecting the popular browser.<br>Whether you access Chrome through a laptop or a phone, this so-called ‘zero-day’ vulnerability is still dangerous as it could lead to hackers gaining access to your device. Although Google usually sends out security updates for Chrome every few weeks, it pushed out a special emergency update to address this new threwat specificially. <br>If you’re using Chrome on your Android phone, you need to make sure you’re running version 99.04844.84 or later to keep your device safe.",
    ArtDate: 300322,
  },
  {
    ID: 6,
    URL: "https://www.mirror.co.uk/sport/football/news/roman-abramovich-dying-poison-chelsea-26593103",
    Author: "Tom Blow",
    Title: `Chelsea owner Roman Abramovich asked "are we dying?" after terrifying 'poisoning'`,
    Subtitle:
      "Chelsea owner Roman Abramovich was reportedly fearing for his life and falling ill of suspected poisoning at peace talks between Russia and Ukraine earlier this month",
    Article: `Chelsea owner Roman Abramovich reportedly asked scientists examining him if he was "going to die" after falling ill from suspected poisoning.<br>It's believed the oligarch was poisoned during peace talks between Russia and Ukraine earlier this month. The two nations have been embroiled in a bloody war since Russian president Vladimir Putin ordered his troops to invade the sovereign state in February. <br> Reports suggested Abramovich may have been poisoned by a First World War chemical agent named Chloropicrin or a low dosage of Novichock. He reportedly experienced debilitating symptoms after the alleged incident, including peeling skin and loss of vision.`,
    ArtDate: 300322,
  },
  {
    ID: 7,
    URL: "https://www.express.co.uk/news/royal/1588646/queen-news-doomsday-speech-nuclear-war-ukraine-russia-spt",
    Author: "Joel Day",
    Title:
      "Queen's eerie doomsday speech for breakout of nuclear war unearthed",
    Subtitle:
      "THE QUEEN has in her repertoire an unused speech that she would broadcast in the event of nuclear war, unearthed reports claim.",
    Article:
      "The world is as close to World War 3 as it has been in decades. Conflict in Ukraine with Russia has sparked fears that the fighting could eventually spill over into neighbouring European countries, which would mark a profound escalation in events. Poland adjoins Ukraine and is a member of both the EU and NATO meaning that if Russia were to misjudge a missile strike on the city of Lviv or any other settlement along their shared border and hit Poland, war with every NATO member would follow.",
    ArtDate: 300322,
  },
  {
    ID: 8,
    URL: "https://www.bbc.co.uk/news/science-environment-60854482",
    Author: "Jonathan Amos",
    Title: "Dinosaurs: Jurassic giants emerge from Wyoming badlands",
    Subtitle:
      "Two giant sauropods offer a first glimpse of treasures likely to emerge from one of the world's most productive fossil sites.",
    Article: `Two giant sauropods offer a first glimpse of treasures likely to emerge from one of the world's most productive fossil sites. <br>The long-necked, long-tailed beasts are stars of the new Dinosphere show at The Children's Museum of Indianapolis. <br> Just over three years ago, they were encased in rock in Wyoming quarries.<br> "I'm utterly gobsmacked at how quickly this project has gone," said British palaeontologist Phil Manning. <br> The University of Manchester professor is a scientist-in-residence at the US museum, and led the excavation works on a section of ranch land they call the "Jurassic Mile".`,
    ArtDate: 240322,
  },
  {
    ID: 9,
    URL: "https://www.thesun.co.uk/money/18110678/tomorrow-simple-check-lower-energy-bills/",
    Author: "Lucy Alderson",
    Title:
      "GASSED OFF Families have until TOMORROW to do simple check that could lower their energy bills",
    Subtitle:
      "FAMILIES have until TOMORROW to do a simple check that could lower their energy bills before the energy price cap soars",
    Article:
      "Millions of households will see their bills DOUBLE from Friday, April 1, when the price cap goes up from £1,277 to £1,971. It means families will have to find nearly another £700 per year on average to pay for their bills.<br>Around 22million households are now on standard variable tariffs that are subject to the price cap, but the exact amount your bill will rise will depend on how much you use. </br>But doing a gas and electric meter reading before the new price cap rolls out will help you avoid paying more than you need to - and lower your bills.<br> That's because you are giving an estimate for your energy based on previous usage, which gives you a cost for the upcoming year.<br>That cost is divided by 12 for your monthly direct debits. <br>It means taking a reading the day before on March 31 means you - and your energy firm - know exactly how much energy you have used under the lower price.<br>And you then have a clear date from which the higher prices apply.<br>More than half of households pay energy bills using direct debit, according to the energy regulator Ofgem.",
    ArtDate: 300322,
  },
  {
    ID: 10,
    URL: "https://uk.sports.yahoo.com/news/australia-great-shane-warne-remembered-124906954.html?guccounter=1&guce_referrer=aHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8&guce_referrer_sig=AQAAAHKu925hikYu9jdU9fMgCRrucUto7pXEO8e-VI7aJB_X534blXiGr21i0v9TYuM5DxglDkjowSorz8xFpfcpz9wcmCY3QZF74ujqYIfqOYNcoGanKXv4E6cSDtCrv9_wQ4vFhjeDh7Vjg4k0TDK7rLAGSpXIp1yM2Uk7igngdbig",
    Author: "David Charlesworth",
    Title:
      "Australia great Shane Warne remembered at moving service in Melbourne",
    Subtitle: "",
    Article: `Shane Warne’s life and lasting legacy was remembered by family, friends, former team-mates and rivals at a moving state memorial service in Melbourne.<br> Tens of thousands of spectators turned up to Warne’s beloved Melbourne Cricket Ground to pay tribute to the Australia great, who died aged 52 earlier this month from a suspected heart attack in Thailand.<br>Warne’s father Keith said the future without his son was “inconceivable” but that he had done more “than most people would in two lifetimes” while the former leg-spinner’s daughter Brooke described her father as a “shining star”.<br> The service started with the Australian national anthem sung by Greta Bradman – granddaughter of Sir Donald Bradman, named alongside Warne as one of the Wisden Cricketers of the Century in 2000 – and concluded with the unveiling of the Shane Warne Stand at the MCG to replace the Great Southern Stand.<br> There were pre-recorded musical tributes from Elton John, Ed Sheeran, Robbie Williams and Coldplay’s Chris Martin while Warne’s larger-than-life character was celebrated as much as his on-field deeds.<br>  He was branded a “genius” and “genuine” respectively by former Australia captains Allan Border and Mark Taylor, who added on the MCG stage: “(Warne) made slow bowling fashionable again. He made it cool.<br>“I think we who were lucky enough, and (Border) and I captained him, really appreciate it because it made us better captains and better leaders.”<br> Warne took 708 Test wickets, which was a world record when he brought a storied 15-year international career to an end in 2007 but has since been surpassed by Muttiah Muralitharan, while there were a further 293 one-day dismissals, with the Victorian instrumental in Australia’s 1999 World Cup win.<br> He was branded, tongue-in-cheek, as a “dead-set bogan” by former Australia quick Merv Hughes, an “entertainer” by ex-England captain Nasser Hussain and simply “the king” by West Indies great Brian Lara.`,
    ArtDate: 300322,
  },
  // {ID: 11, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 12, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 13, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 14, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 15, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 16, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 17, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 18, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 19, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:},
  // {ID: 20, URL: "", Author: "", Title: "", Subtitle: "", Article: "" , ArtDate:}
];

module.exports = article; //make the object available to everyone
