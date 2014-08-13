
/*
 * GET home page.
 */
 
module.exports = function (app) {
	var index = function (req, res) {
	    // TODO：自動計算日期。
		currentDay = '08-13';
		
		return res.redirect('/' + currentDay);    
	};
	
    
    var queryDayContent = function (req, res) {
        var queryDay = req.params.queryDay;
        
        switch (queryDay) {
            case '08-05':
                return res.render('musicPage', {
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
                
            case '08-09':
                return res.render('musicPage', {
                    artist: 'Whitney Houston',
                    year: 1963,
                    month: 8,
                    day: 9,
                    type: 'artist',
                    bg_src: 'http://tothemusicalones-izebella.qiniudn.com/08-09/whitney_bg.jpg',
                    album_src: 'http://tothemusicalones-izebella.qiniudn.com/08-09/whitney_cover.png',
                    links: [
                        {
                            type: 'wikipedia',
                            href: 'http://en.wikipedia.org/wiki/Whitney_Houston'
                        },
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/artist/11627'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/musician/103715'
                        }
                    ],
                    recommend: [
                        '還記得第一次聽到她的聲音，那種震撼、快樂、自由和力量的感受。',
                        '還記得第一次看到她的電影《保鏢》，驚豔於她的面容、笑容、身材、氣質和演技。',
                        '還記得得知她失敗的婚姻和她遭遇的問題時的痛心和慼慼。',
                        '還記得得知她去世時，對美好被摧毀和隕落的痛惜。',
                        '她有我見過最美的面容，有我聽過最美的聲音，有我感覺到的最豐富的情感與真摯。',
                        '她就是惠特尼·休斯頓。'
                    ],
                    hotlists: [
                        {
                            name: "When You Believe",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-09/When_You_Believe.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-09/When_You_Believe.ogg"
                        }, {
                            name: "Saving All My Love for You",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-09/Saving_All_My_Love_for_You.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-09/Saving_All_My_Love_for_You.ogg"
                        }, {
                            name: "Greatest Love of All",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-09/Greatest_Love_of_All.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-09/Greatest_Love_of_All.ogg"
                        }, {
                            name: "I Will Always Love You",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-09/I_Will_Always_Love_You.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-09/I_Will_Always_Love_You.ogg"
                        }
                    ]
                });
                break;
                
            case '08-10':
                return res.render('musicPage', {
                    album: '盧冠廷2050演唱會',
                    artist: '盧冠廷',
                    year: 2008,
                    month: 8,
                    day: 10,
                    type: 'album',
                    bg_src: 'http://tothemusicalones-izebella.qiniudn.com/08-10/2050_bg.png',
                    album_src: 'http://tothemusicalones-izebella.qiniudn.com/08-10/2050.jpg',
                    links: [
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/album/215936'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/subject/3178533/'
                        }
                    ],
                    recommend: [
                        '“90年演唱會曾讓你感動過，那麽我要說這一次的，是到了一個更高的境界，是我完全釋放了自己，毫無保留的，你所聽到的，是一個赤裸裸的我。”',
                        '2050演唱會的舞臺很簡樸，是一條又一條長形木材搭成的，沒有機關，沒有五顏六色，沒有舞蹈演員。然而他所挑選的吉他手、打擊樂手、鋼琴手、二胡手等一衆樂手都是一流的，因爲盧冠廷本身就是個音樂人。',
                        '演唱會上盧冠廷真情演繹了他所創作的爲大衆熟知的〈天鳥〉、〈陪着你走〉、〈一生所愛〉等歌曲，還和嘉賓林子祥、李宗盛等人合唱了〈最愛是誰〉、〈如風往事〉等經典曲目。'
                    ],
                    hotlists: [
                        {
                            name: "最愛是誰",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/ZuiAiShiShui.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/ZuiAiShiShui.ogg"
                        }, {
                            name: "如風往事",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/RuFengWangShi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/RuFengWangShi.ogg"
                        }, {
                            name: "一生所愛",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/YiShengSuoAi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/YiShengSuoAi.ogg"
                        }, {
                            name: "我未能忘掉你",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/WoWeiNengWangDiaoNi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/WoWeiNengWangDiaoNi.ogg"
                        }, {
                            name: "陪着你走",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/PeiZheNiZou.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/PeiZheNiZou.ogg"
                        }
                    ]
                });
                break;
                
            case '08-10':
                return res.render('musicPage', {
                    album: '盧冠廷2050演唱會',
                    artist: '盧冠廷',
                    year: 2008,
                    month: 8,
                    day: 10,
                    type: 'album',
                    bg_src: 'http://tothemusicalones-izebella.qiniudn.com/08-10/2050_bg.png',
                    album_src: 'http://tothemusicalones-izebella.qiniudn.com/08-10/2050.jpg',
                    links: [
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/album/215936'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/subject/3178533/'
                        }
                    ],
                    recommend: [
                        '“90年演唱會曾讓你感動過，那麽我要說這一次的，是到了一個更高的境界，是我完全釋放了自己，毫無保留的，你所聽到的，是一個赤裸裸的我。”',
                        '2050演唱會的舞臺很簡樸，是一條又一條長形木材搭成的，沒有機關，沒有五顏六色，沒有舞蹈演員。然而他所挑選的吉他手、打擊樂手、鋼琴手、二胡手等一衆樂手都是一流的，因爲盧冠廷本身就是個音樂人。',
                        '演唱會上盧冠廷真情演繹了他所創作的爲大衆熟知的〈天鳥〉、〈陪着你走〉、〈一生所愛〉等歌曲，還和嘉賓林子祥、李宗盛等人合唱了〈最愛是誰〉、〈如風往事〉等經典曲目。'
                    ],
                    hotlists: [
                        {
                            name: "最愛是誰",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/ZuiAiShiShui.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/ZuiAiShiShui.ogg"
                        }, {
                            name: "如風往事",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/RuFengWangShi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/RuFengWangShi.ogg"
                        }, {
                            name: "一生所愛",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/YiShengSuoAi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/YiShengSuoAi.ogg"
                        }, {
                            name: "我未能忘掉你",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/WoWeiNengWangDiaoNi.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/WoWeiNengWangDiaoNi.ogg"
                        }, {
                            name: "陪着你走",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-10/PeiZheNiZou.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-10/PeiZheNiZou.ogg"
                        }
                    ]
                });
                break;   
        
            case '08-13':
                return res.render('musicPage', {
                    album: 'Beautiful Freak',
                    artist: 'Eels',
                    year: 1996,
                    month: 8,
                    day: 13,
                    type: 'album',
                    bg_src: 'http://tothemusicalones-izebella.qiniudn.com/08-13/eels.jpg',
                    album_src: 'http://tothemusicalones-izebella.qiniudn.com/08-13/Beautiful_Freak.jpg',
                    links: [
                        {
                            type: 'wikipedia',
                            href: 'http://en.wikipedia.org/wiki/Beautiful_Freak'
                        },
                        {
                            type: 'xiami',
                            href: 'http://www.xiami.com/album/110436'
                        }, 
                        {
                            type: 'douban',
                            href: 'http://music.douban.com/subject/1401275/'
                        }
                    ],
                    recommend: [
                        'EELS是壹支美國獨立樂隊，由三個成員組成，九十年代初年出道。',
                        '他們的音樂不主流卻也並不另類，有著跟別的樂隊相比非常不同的氣質。',
                        '他們的音樂是灰色調的，卻是淺而暖的灰，就像壹顆溫暖的眼淚緩緩流淌過幹涸的靈魂，如果不自己聽的話，絕無法領會到那種消極又無法決斷的情感。'
                    ],
                    hotlists: [
                        {
                            name: "Novocaine for the Soul",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-13/Novocaine_for_the_Soul.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-13/Novocaine_for_the_Soul.ogg"
                        }, {
                            name: "Beautiful Freak",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-13/Beautiful_Freak.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-13/Beautiful_Freak.ogg"
                        }, {
                            name: "Mental",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-13/Mental.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-13/Mental.ogg"
                        }, {
                            name: "Manchild",
                            mp3src: "http://tothemusicalones-izebella.qiniudn.com/08-13/Manchild.mp3",
                            oggsrc: "http://tothemusicalones-izebella.qiniudn.com/08-13/Manchild.ogg"
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