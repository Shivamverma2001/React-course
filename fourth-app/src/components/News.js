import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


// dab0f9b4b8574e2b9ad482360fe4f7c8
export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": "Shakiel Mahjouri",
  //     "title": "{24 WWE Royal Rumble results, recap, grades: Cody Rhodes eliminates CM Punk last, Bayley wins first Rumble - CBS Sports",
  //     "description": "Rhodes becomes the first superstar in 26 years to win consecutive Royal Rumble matches",
  //     "url": "https://www.cbssports.com/wwe/news/2024-wwe-royal-rumble-results-recap-grades-cody-rhodes-eliminates-cm-punk-last-bayley-wins-first-rumble/live/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/01/28/d169d28a-7276-415f-b8f5-b2df47fe8605/thumbnail/1200x675/56ff001d125cd8e248e66eeb50dfb4c4/cody-rhodes-rumble-winner.jpg",
  //     "publishedAt": "2024-01-28T05:30:00Z",
  //     "content": "Cody Rhodes can still finish his story at WrestleMania 40. Rhodes tossed CM Punk out of the men's Royal Rumble on Saturday to become only the fourth superstar to win the match in back-to-back years. … [+18778 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Rolling Stone"
  //     },
  //     "author": "Marlow Stern",
  //     "title": "‘SNL’: Dakota Johnson Monologue Mocks Justin Timberlake’s ‘Comeback’ - Rolling Stone",
  //     "description": "The two ‘Social Network’ co-stars had a mini reunion during Johnson’s monologue, which also saw Jimmy Fallon pop in as Barry Gibb.",
  //     "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/snl-dakota-johnson-mocks-justin-timberlake-comeback-jimmy-fallon-1234955611/",
  //     "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/01/Screen-Shot-2024-01-28-at-12.14.23-AM.png?w=1600&h=900&crop=1",
  //     "publishedAt": "2024-01-28T05:00:07Z",
  //     "content": "This week’s Saturday Night Live kicked things off with a damn near unwatchable parody of CBS’ NFL Playoffs broadcast before Dakota Johnson took the stage looking absolutely incredible, dressed in a n… [+1449 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn",
  //       "name": "ESPN"
  //     },
  //     "author": null,
  //     "title": "Sources -- Eagles hiring Kellen Moore as offensive coordinator - ESPN",
  //     "description": "Two days after tabbing Vic Fangio to run their defense, the Eagles are hiring Kellen Moore as their new offensive coordinator, sources told ESPN on Saturday.",
  //     "url": "https://www.espn.com/nfl/story/_/id/39405582/eagles-hiring-kellen-moore-offensive-coordinator",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0827%2Fr1216401_1296x729_16%2D9.jpg",
  //     "publishedAt": "2024-01-28T04:13:00Z",
  //     "content": "Jan 27, 2024, 11:13 PM ET\r\nThe Philadelphia Eagles are hiring former Los Angeles Chargers and Dallas Cowboys offensive coordinator Kellen Moore as their offensive coordinator, sources told ESPN's Ada… [+1204 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": "Jonathan Vigliotti",
  //     "title": "How was fugitive Kaitlin Armstrong caught? She answered U.S. Marshals' ad for a yoga instructor - CBS News",
  //     "description": "When cyclist Anna Moriah \"Mo\" Wilson was murdered in Texas, U.S. Marshals assigned to the case used a unique tactic to track down her suspected killer in Costa Rica and bring the fugitive to justice.",
  //     "url": "https://www.cbsnews.com/news/kaitlin-armstrong-anna-moriah-mo-wilson-cyclist-murder-48-hours/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/28/516042c0-f24c-4593-aa02-bc3accdc6e6f/thumbnail/1200x630/aea1d78a99b1ffed9529049ae6e54883/wilson-armstrong.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
  //     "publishedAt": "2024-01-28T04:08:00Z",
  //     "content": "Kaitlin Armstrong is serving 90 years in prison for murdering professional up-and-coming gravel cyclist Anna Moriah \"Mo\" Wilson. It's a story that drew international headlines because after being sus… [+38249 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": null,
  //     "title": "Australia, Italy and others halt funding to U.N. agency over claim staff involved in Hamas attack on Israel - CBS News",
  //     "description": "Australia, Italy, the U.K. and other key donors halted funding to U.N. agency over claim staff involved in Hamas' attack on Israel on Oct. 7.",
  //     "url": "https://www.cbsnews.com/news/countries-halt-funding-to-unrwa-over-claim-staff-involved-in-hamas-attack/",
  //     "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/27/bb64d76d-0d2f-4bb5-af5c-a3e248bbae33/thumbnail/1200x630/fa690e27c8e84413ad150f270cd5c8c7/gettyimages-1806099275.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431",
  //     "publishedAt": "2024-01-28T03:50:00Z",
  //     "content": "Several key donor countries to the UN agency for Palestinian refugees joined the U.S. and said on Saturday they would halt their funding following accusations by Israel that several UNRWA staff were … [+4476 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "AZCentral"
  //     },
  //     "author": "Ray Stern",
  //     "title": "Trump-endorsed candidate Gina Swoboda wins election as Arizona Republican Party chair - The Arizona Republic",
  //     "description": "New Arizona GOP Chair Gina Swoboda is executive director of the Voter Reference Foundation, which promotes the idea the election system isn't secure.",
  //     "url": "https://www.azcentral.com/story/news/politics/arizona/2024/01/27/new-arizona-republican-party-chair-is-gina-swoboda-endorsed-by-trump/72373449007/",
  //     "urlToImage": "https://www.azcentral.com/gcdn/authoring/authoring-images/2024/01/24/USAT/72331743007-afp-1948407060.jpg?crop=4508,2535,x0,y230&width=3200&height=1800&format=pjpg&auto=webp",
  //     "publishedAt": "2024-01-28T03:42:21Z",
  //     "content": "Arizona Republican officials voted in a new leader on Saturday after a week of intrigue that highlighted division in the party and raised questions about future fundraising.\r\nState committee members … [+9168 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "Notre Dame vs. UConn Game Highlights | 2023-24 ACC Women's Basketball - ACC Digital Network",
  //     "description": "Notre Dame vs. UConn:  The #15 Fighting Irish went on the road and defeated #8 Huskies, 82-67.  Hannah Hidalgo was once again the star of the game. Hidalgo s...",
  //     "url": "https://www.youtube.com/watch?v=VJHjNwjkPAw",
  //     "urlToImage": "https://i.ytimg.com/vi/VJHjNwjkPAw/maxresdefault.jpg",
  //     "publishedAt": "2024-01-28T03:22:17Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "[Removed]"
  //     },
  //     "author": null,
  //     "title": "[Removed]",
  //     "description": "[Removed]",
  //     "url": "https://removed.com",
  //     "urlToImage": null,
  //     "publishedAt": "1970-01-01T00:00:00Z",
  //     "content": "[Removed]"
  //   },
  //   {
  //     "source": {
  //       "id": "politico",
  //       "name": "Politico"
  //     },
  //     "author": null,
  //     "title": "'You're the reason I am president': Biden embraces Black voters in S.C. - POLITICO",
  //     "description": "The president sought to solidify his standing with the key Democratic bloc — and cement the state’s first-in-the-nation status.",
  //     "url": "https://www.politico.com/news/2024/01/27/youre-the-reason-i-am-president-biden-embraces-black-voters-in-s-c-00138224",
  //     "urlToImage": "https://static.politico.com/f6/1e/0848c08b44ff8c6e51d1bfaea5df/biden-31137.jpg",
  //     "publishedAt": "2024-01-28T02:31:07Z",
  //     "content": "The truth is, I wouldnt be here without the Democratic voters of South Carolina, and thats a fact, Biden said. Youre the reason I am president. Youre the reason Kamala Harris is a historic vice presi… [+4629 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Seeking Alpha"
  //     },
  //     "author": "Carl Surran",
  //     "title": "California playing 'dangerous game' with climate policies, Chevron exec says (NYSE:CVX) - Seeking Alpha",
  //     "description": "California's policies to discourage petroleum production may significantly increase the premium drivers pay for gasoline, warns the head of Chevron's refining division.",
  //     "url": "https://seekingalpha.com/news/4059357-california-playing-dangerous-game-with-climate-policies-chevron-says",
  //     "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1263019675/image_1263019675.jpg?io=getty-c-w750",
  //     "publishedAt": "2024-01-28T01:35:14Z",
  //     "content": "Justin Sullivan/Getty Images News\r\nThe premium California drivers pay for gasoline compared to the overall U.S. average likely will rise significantly if state legislators continue enacting policies … [+1916 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Page Six"
  //     },
  //     "author": "Chris Rogers",
  //     "title": "Nicki Minaj fuels Megan Thee Stallion feud with 'nasty' dig about her dead mother - Page Six",
  //     "description": "Minaj jumped on Instagram Live to take shots at Megan after the 28-year-old slammed Minaj’s husband, Kenneth Petty, in her new song, “Hiss.”",
  //     "url": "https://pagesix.com/2024/01/27/entertainment/nicki-minaj-fuels-megan-thee-stallion-feud-with-with-nasty-dig-about-her-dead-mother/",
  //     "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/01/75576346.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2024-01-28T01:32:00Z",
  //     "content": "The mother of all feuds. \r\nNicki Minaj took her reignited beef with Megan Thee Stallion to another level on Friday when she cracked a joke about the “Savage” rapper’s mother who died a few years ago.… [+2987 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "GSMArena.com"
  //     },
  //     "author": "Peter",
  //     "title": "Weekly poll results: Galaxy S24 Ultra is great but pricey, S24+ attracts owners of older S+ phones - GSMArena.com news - GSMArena.com",
  //     "description": "And the vanilla S24 gets the cold shoulder.  Which phone is the shining star of the Galaxy S series? Last week’s poll shows that it’s still the Ultra, but...",
  //     "url": "https://www.gsmarena.com/weekly_poll_results_galaxy_s24_ultra_is_great_but_pricey_s24_attracts_owners_of_older_s_phones-news-61351.php",
  //     "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/01/weekly-poll-results-samsung-galaxy-s24-series/-952x498w6/gsmarena_000.jpg",
  //     "publishedAt": "2024-01-28T01:12:01Z",
  //     "content": "Which phone is the shining star of the Galaxy S series? Last weeks poll shows that its still the Ultra, but plus model is gaining ground especially when it comes to people looking to upgrade from an … [+2089 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "Boeing 737 Max 9 flights resume for first time since grounding - NBC News",
  //     "description": "Boeing 737 Max 9 flights have resumed weeks after a door plug on an Alaska Airlines flight blew out over Portland. Alaska Airlines showed what it says are co...",
  //     "url": "https://www.youtube.com/watch?v=9nb7jdnZ5mo",
  //     "urlToImage": "https://i.ytimg.com/vi/9nb7jdnZ5mo/maxresdefault.jpg",
  //     "publishedAt": "2024-01-28T00:30:06Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Sacramento Bee"
  //     },
  //     "author": "Jason Anderson",
  //     "title": "Kings vs. Mavericks: Luka Doncic’s 73, Kyrie Irving injury updates and scouting reports - Sacramento Bee",
  //     "description": "Sacramento Kings vs. Dallas Mavericks at American Airlines Center: TV, odds, scouting reports, Luka Doncic 73, Kyrie Irving, Sasha Vezenkov.",
  //     "url": "https://www.sacbee.com/sports/nba/sacramento-kings/article284758331.html",
  //     "urlToImage": "https://www.sacbee.com/latest-news/6u555e/picture284765391/alternates/LANDSCAPE_1140/USATSI_22381074%20(1).jpg",
  //     "publishedAt": "2024-01-28T00:26:04Z",
  //     "content": "Sacramento Kings\r\nThe Kings are about to find out what Dallas Mavericks star Luka Doncic can do for an encore following a historic performance against the Atlanta Hawks on Friday.\r\nDoncic scored a ca… [+3427 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "SpaceNews"
  //     },
  //     "author": "Jeff Foust",
  //     "title": "Cygnus ready for first launch on Falcon 9 - SpaceNews",
  //     "description": "A Cygnus cargo spacecraft is set to launch on a Falcon 9 for the first time, a combination that required more changes to the rocket than to the spacecraft.",
  //     "url": "https://spacenews.com/cygnus-ready-for-first-launch-on-falcon-9/",
  //     "urlToImage": "https://spacenews.com/wp-content/uploads/2024/01/cygnus-f9fairing.jpg",
  //     "publishedAt": "2024-01-28T00:18:04Z",
  //     "content": "WASHINGTON A Cygnus cargo spacecraft is set to launch on a Falcon 9 rocket for the first time, a combination that required more changes to the rocket than to the spacecraft.\r\nNASA announced at a Jan.… [+3507 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": "Reuters",
  //     "title": "Trafigura assesses Red Sea risks after tanker attacked by Houthis - Reuters",
  //     "description": null,
  //     "url": "https://www.reuters.com/world/middle-east/crew-battle-blaze-tanker-hit-by-missile-gulf-aden-2024-01-27/",
  //     "urlToImage": null,
  //     "publishedAt": "2024-01-27T23:52:17Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Fredreka Schouten",
  //     "title": "Koch officials tell donors Nikki Haley was the right candidate to back, despite early losses to Trump - CNN",
  //     "description": "Officials in the political network affiliated with billionaire Charles Koch on Saturday defended their heavy investment in Nikki Haley’s long-shot campaign to derail former President Donald Trump’s bid for the GOP presidential nomination.",
  //     "url": "https://www.cnn.com/2024/01/27/politics/koch-donors-nikki-haley-donald-trump-south-carolina/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240127163358-restricted-nikki-haley-south-carolina-01-24-2024.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2024-01-27T23:49:00Z",
  //     "content": "Officials in the political network affiliated with billionaire Charles Koch on Saturday defended their heavy investment in Nikki Haleys long-shot campaign to derail former President Donald Trumps bid… [+2854 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-news",
  //       "name": "Fox News"
  //     },
  //     "author": "Sarah Rumpf-Whitten",
  //     "title": "Biden admin slams 'political targeting' of Venezuela opposition leader banned from running for president - Fox News",
  //     "description": "The U.S. government has condemned the decision of Venezuela's highest court to block the presidential candidacy of opposition leader María Corina Machado.",
  //     "url": "https://www.foxnews.com/world/biden-admin-slams-political-targeting-venezuela-opposition-leader-banned-running-president",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/GettyImages-1740336288.jpg",
  //     "publishedAt": "2024-01-27T23:46:00Z",
  //     "content": "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+2548 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "PBS"
  //     },
  //     "author": null,
  //     "title": "An eyewitness account of what happened at the nation’s 1st nitrogen gas execution - PBS NewsHour",
  //     "description": "As witnesses watched through a window, Kenneth Eugene Smith, who was convicted and sentenced to die in the 1988 murder-for hire slaying of Elizabeth Sennett, convulsed on a gurney as Alabama carried out the nation's first execution using nitrogen gas.",
  //     "url": "https://www.pbs.org/newshour/nation/an-eyewitness-account-of-what-happened-at-the-nations-1st-nitrogen-gas-execution",
  //     "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/01/2024-01-26T054656Z_1168670662_RC28P5AFEAYD_RTRMADP_3_USA-EXECUTION-ALABAMA-1024x683.jpg",
  //     "publishedAt": "2024-01-27T23:41:59Z",
  //     "content": "ATMORE, Ala. (AP) As witnesses including five news reporters watched through a window, Kenneth Eugene Smith, who was convicted and sentenced to die in the 1988 murder-for hire slaying of Elizabeth Se… [+3616 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Priscilla Alvarez",
  //     "title": "Biden seizes on tougher border measures as he tries to fend off Trump attacks - CNN",
  //     "description": "President Joe Biden is embracing tougher border measures, including shutting down the US-Mexico border, marking a stark shift from his early days in office as he tries to fend off former President Donald Trump’s attacks on immigration policy ahead of the elec…",
  //     "url": "https://www.cnn.com/2024/01/27/politics/biden-border-shut-down-us-mexico-immigration/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240127081236-us-mexico-border-122923.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2024-01-27T23:29:00Z",
  //     "content": "President Joe Biden is embracing tougher border measures, including shutting down the US-Mexico border, marking a stark shift from his early days in office as he tries to fend off former President Do… [+6563 chars]"
  //   }
  // ]
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dab0f9b4b8574e2b9ad482360fe4f7c8&page=1&pageSize=${this.props.pageSize}`;

    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      parseResult: parsedData.totalResults,
      loading:false
    })
  }
  handleNextClick = async () => {
    if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dab0f9b4b8574e2b9ad482360fe4f7c8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false
      }) 
    }
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dab0f9b4b8574e2b9ad482360fe4f7c8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      
    })
    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1,
      loading:false
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            if (element.title != null && element.description != null && element.urlToImage != null) {
              return <div className="col-md-4" key={element.url}>
                <NewsItem myTitle={element.title.slice(0, 45)} myDesc={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            }
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
