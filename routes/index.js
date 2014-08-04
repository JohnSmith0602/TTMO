
/*
 * GET home page.
 */
 
module.exports = function (app) {
	var index = function (req, res) {
	    // TODO：自動計算日期。
		currentDay = '08-05';
		
		return res.redirect('/' + currentDay);    
	};
	
    
    var queryDayContent = function (req, res) {
        var queryDay = req.params.queryDay;
        
        switch (queryDay) {
            case '08-05':
                return res.render('musicPage', {
                    title: 'TTMO 向好音樂致敬',
                    album: 'Revolver',
                    artist: 'The Beatles',
                    year: 1966,
                    month: 8,
                    day: 5,
                    type: 'album',
                    bg_src: 'http://s.yunshipei.com/david/temp/Revolver_bg.png',
                    album_src: 'http://s.yunshipei.com/david/temp/Revolver.jpg',
                    links: [
                        {
                            type: 'wikipedia',
                            href: 'http://en.wikipedia.org/wiki/Revolver_beatles'
                        },
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/album/50335'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/subject/1401364/'
                        }
                    ],
                    recommend: [
                        '"Revolver"，還有誰比Beatles更喜歡用這種怪誕的標題呢？這張專輯沒有任何與左輪手槍相關的東西，但它確實象征著一種東西——迷幻。',
                        '這張Beatles成熟期的傑作被視作是他們最偉大的作品之一，2003年《滾石》雜誌評選的有史以來最偉大專輯中，"Revolver"位列第三位。',
                        '本專輯的最佳作品主要出自Paul之手，但John所作的Tomorrow Never Knows卻是本專輯的最大特征所在，這首歌是本專輯第一首錄制完成的歌，其迷幻特性直接指向了下一張專輯"Sgt. Pepper\'s Lonely Hearts Club Band"，並且也是在本專輯內錄音技術體現方面的集大成者。'
                    ],
                    hotlists: [
                        {
                            name: "Eleanor Rigby",
                            mp3src: "http://s.yunshipei.com/david/temp/EleanorRigby.mp3",
                            oggsrc: "http://s.yunshipei.com/david/temp/EleanorRigby.ogg"
                        }, {
                            name: "Here, There and Everywhere",
                            mp3src: "http://s.yunshipei.com/david/temp/HereThereandEverywhere.mp3",
                            oggsrc: "http://s.yunshipei.com/david/temp/HereThereandEverywhere.ogg"
                        }, {
                            name: "Yellow Submarine",
                            mp3src: "http://s.yunshipei.com/david/temp/YellowSubmarine.mp3",
                            oggsrc: "http://s.yunshipei.com/david/temp/YellowSubmarine.ogg"
                        }, {
                            name: "Tomorrow Never Knows",
                            mp3src: "http://s.yunshipei.com/david/temp/TomorrowNeverKnows.mp3",
                            oggsrc: "http://s.yunshipei.com/david/temp/TomorrowNeverKnows.ogg"
                        }
                    ]
                });
                break;    
        
            case '11-01':
                return res.render('musicPage', {
                    title: 'TTMO 向好音樂致敬',
                    album: '紅',
                    artist: '張國榮',
                    year: 1996,
                    month: 11,
                    day: 1,
                    type: 'album',
                    bg_src: 'http://tothemusicalones-izebella.qiniudn.com/11-01/%E5%BC%B5%E5%9C%8B%E6%A6%AE.jpg',
                    album_src: 'http://tothemusicalones-izebella.qiniudn.com/11-01/%E7%B4%85.jpg',
                    links: [
                        {
                            type: 'wikipedia',
                            href: 'http://en.wikipedia.org/wiki/Volk_(album)'
                        },
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/album/5829'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/subject/1412403/'
                        }
                    ],
                    recommend: [
                        '張國榮，原名張發宗，英文名Leslie，被歌迷/影迷叫做哥哥（Gorgor）。他是華人社會最有影響力的演藝人之一，香港知名男演員、歌手、舞臺表演者和詞曲創作者。作爲歌手，張國榮是粵語流行音樂的代表人物之一。',
                        '《紅》是張國榮復出後繼《寵愛》發佈的第二張專輯，但在很多歌迷心目中，《紅》才算是張國榮復出後的第一張唱片。在《紅》中張國榮開始和林夕、C.Y.KONG全面合作，在音樂上成功轉型。',
                        '《紅》專輯的重心顯然在一大堆慢歌上，或陰鬱、或性感、或恬淡、或濃豔，張國榮的演唱魅力得到了最好的發揮。'
                    ],
                    hotlists: [
                        {
                            name: "偷情",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E5%81%B7%E6%83%85.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E5%81%B7%E6%83%85.ogg"
                        }, {
                            name: "有心人",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%9C%89%E5%BF%83%E4%BA%BA.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%9C%89%E5%BF%83%E4%BA%BA.ogg"
                        }, {
                            name: "怨男",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%80%A8%E7%94%B7.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%80%A8%E7%94%B7.ogg"
                        }, {
                            name: "怪你過份美麗",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%80%AA%E4%BD%A0%E9%81%8E%E4%BB%BD%E7%BE%8E%E9%BA%97.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E6%80%AA%E4%BD%A0%E9%81%8E%E4%BB%BD%E7%BE%8E%E9%BA%97.ogg"
                        }, {
                            name: "紅",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E7%B4%85.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/11-01/%E7%B4%85.ogg"
                        }
                    ]
                });
                break;
            default:
                return res.redirect('/');    
        }
    }


	app.get('/', index);
	app.get('/:queryDay', queryDayContent);
    app.get(/\/[\s\S]+/, index);
};