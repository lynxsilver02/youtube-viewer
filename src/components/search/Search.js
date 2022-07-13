import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import SearchLine from './searchLine/SearchLine';
import Video from '../video/Video';
import './Search.style.css'


export default function Search() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();

  const data = {
    "kind": "youtube#searchListResponse",
    "etag": "xgWEHdnfDVEwsjfqX8QH6QFnvLc",
    "nextPageToken": "CDIQAA",
    "regionCode": "RU",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 50
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "TOUaJOLRAauu_klS9C6V3pl1Mck",
        "id": {
          "kind": "youtube#video",
          "videoId": "5souw4K5UQc"
        },
        "snippet": {
          "publishedAt": "2015-01-13T16:58:32Z",
          "channelId": "UCmOVEae8Tl7XmdjdxLbJHkw",
          "title": "BONES - HDMI",
          "description": "https://open.spotify.com/artist/5v2WhpA59TJSdPh7LCx1lN?si=CoaCaG0v Download \"Rotten\" - http://tinyurl.com/pf7jrav Stream ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5souw4K5UQc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5souw4K5UQc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5souw4K5UQc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TeamSESH",
          "liveBroadcastContent": "none",
          "publishTime": "2015-01-13T16:58:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ATRZBhpxo7Y0GhR621i5GAZsgJ8",
        "id": {
          "kind": "youtube#video",
          "videoId": "mb-Cnwi9BqA"
        },
        "snippet": {
          "publishedAt": "2022-03-11T10:03:58Z",
          "channelId": "UCT9zcQNlyht7fRlcjmflRSA",
          "title": "Imagine Dragons - Bones (Official Audio)",
          "description": "Imagine Dragons - Bones https://ImagineDragons.lnk.to/Bones Shop Imagine Dragons: http://smarturl.it/ImagineDragonsShop ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mb-Cnwi9BqA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mb-Cnwi9BqA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mb-Cnwi9BqA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "ImagineDragons",
          "liveBroadcastContent": "none",
          "publishTime": "2022-03-11T10:03:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "i6cCVDfGM3_BKRHMp1ztfvStwQE",
        "id": {
          "kind": "youtube#video",
          "videoId": "-gRErgekoRs"
        },
        "snippet": {
          "publishedAt": "2020-11-25T19:11:27Z",
          "channelId": "UCmOVEae8Tl7XmdjdxLbJHkw",
          "title": "Bones - RedAlert",
          "description": "https://SESH.LINK/FROMBEYONDTHEGRAVE Produced by Lyson Shot by B.g_i & Tyrus Creek.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-gRErgekoRs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-gRErgekoRs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-gRErgekoRs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TeamSESH",
          "liveBroadcastContent": "none",
          "publishTime": "2020-11-25T19:11:27Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "1quCDwt72xfqGFvK0pQ-zBC-l8E",
        "id": {
          "kind": "youtube#video",
          "videoId": "I4jh4ojwSoM"
        },
        "snippet": {
          "publishedAt": "2021-09-03T20:15:27Z",
          "channelId": "UCmOVEae8Tl7XmdjdxLbJHkw",
          "title": "Bones - WhiteBoyRick",
          "description": "https://SESH.LINK/INLOVINGMEMORY Directed & Edited by Darkwave DP: Devin Whetstone Gaffer: John Gonzalez Key Grip: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/I4jh4ojwSoM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/I4jh4ojwSoM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/I4jh4ojwSoM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TeamSESH",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-03T20:15:27Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "6mU9PpbYGuxbATog6-WOf-c-BKE",
        "id": {
          "kind": "youtube#video",
          "videoId": "0IYght7FGdg"
        },
        "snippet": {
          "publishedAt": "2013-10-25T23:32:25Z",
          "channelId": "UCmOVEae8Tl7XmdjdxLbJHkw",
          "title": "BONES - Dirt",
          "description": "http://www.SoundCloud.com/TeamSESH https://bones.sesh.team/ Download SCUMBAG - http://tinyurl.com/lan9sdx Produced by ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0IYght7FGdg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0IYght7FGdg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0IYght7FGdg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TeamSESH",
          "liveBroadcastContent": "none",
          "publishTime": "2013-10-25T23:32:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "JTYiYY0JNSsFIjE-PLzGLBsprXo",
        "id": {
          "kind": "youtube#video",
          "videoId": "Z38nlx7FLkM"
        },
        "snippet": {
          "publishedAt": "2022-05-26T23:54:41Z",
          "channelId": "UCmOVEae8Tl7XmdjdxLbJHkw",
          "title": "Bones - DemolitionFreestylePt3",
          "description": "https://SESH.LINK/INLOVINGMEMORY PRODUCED BY LYSON SHOT BY THE BOYS.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Z38nlx7FLkM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Z38nlx7FLkM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Z38nlx7FLkM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TeamSESH",
          "liveBroadcastContent": "none",
          "publishTime": "2022-05-26T23:54:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "q1prwJidhBN7xk3TDtcP7Xq3sUY",
        "id": {
          "kind": "youtube#video",
          "videoId": "4-_Fh5f8nzE"
        },
        "snippet": {
          "publishedAt": "2022-07-11T17:53:57Z",
          "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
          "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 34",
          "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4-_Fh5f8nzE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4-_Fh5f8nzE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4-_Fh5f8nzE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Meowthemall",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-11T17:53:57Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "h5a7m4k4W3m5RGCslhOemFUsQtc",
        "id": {
          "kind": "youtube#video",
          "videoId": "ILw_f877c98"
        },
        "snippet": {
          "publishedAt": "2022-07-12T03:00:04Z",
          "channelId": "UCkuA_gDjISfGgbdp02BUwyQ",
          "title": "천둥쳤더니 난리가 난 고양이들 ●A●!!!!!!!!",
          "description": "고양이 #크집사 #천둥 * 크집사 굿즈 https://marpple.shop/kr/kittisaurus/ * 똥고양이 해적단  \u200d☠️가입! https://bit.ly/3gv2piU * 팬 ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ILw_f877c98/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ILw_f877c98/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ILw_f877c98/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "크집사",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-12T03:00:04Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "mj_1fSazQMwylx28Gl5sSe0257g",
        "id": {
          "kind": "youtube#video",
          "videoId": "PPLeAdc1_Ws"
        },
        "snippet": {
          "publishedAt": "2022-07-12T10:00:13Z",
          "channelId": "UCq0HQPWWi3jIaEM9w5rFsvg",
          "title": "[Animation] CAT BEE SAD ORIGIN STORY.. |Cat Bee:Monster Chapter3| Poppy Playtime Animation-SLIME CAT",
          "description": "[Animation] CAT BEE SAD ORIGIN STORY | Poppy Playtime Chapter 2 Animation | SLIME CAT Today I show you an animation ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PPLeAdc1_Ws/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PPLeAdc1_Ws/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PPLeAdc1_Ws/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Slime Cat",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-12T10:00:13Z"
        }
      }
    ]
  };
  const items = data.items;
  let n = items.length;
  return (
    <div className='main-content'>
      <SearchLine />
      {[...Array(n)].map((item, index) =>
        <Video key={index} item={items[index]} showModal={() => setShow(true)} index={() => setIndex(index)} />
      )}
      <Modal item={items[index]} show={show} onClose={() => setShow(false)} />
    </div>
  )
}