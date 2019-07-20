import Mock from "mockjs";

export const userInfo = Mock.mock({
    "userInfo": {
        "imgUrl": Mock.Random.dataImage('49x49', "img"),
        "userName": "twitter",
        "userId": "@twitter-Id",
        "id": 1001,
        "time|1": 4
    }
})

export const TweetsList = Mock.mock({
    "tweetsList|6": [{
        "imgUrl": Mock.Random.dataImage('49x49', "img"),
        "userName": '@name()',
        "userId|+1": '@name()',
        "id|1-1000000": 1,
        "time|1-10": 10,
        "tweetsImgUrl": Mock.Random.dataImage('400x400', "img"),
        "tweetsText": '@paragraph(1, 3)',
        "userSlogan": '@paragraph(1, 2)',
        "following|1-10000":1,
        "follower|1-10000":1,       
    }]
})

export const TrendsList = Mock.mock({
    "trendsList|6": [{
        "topicName": '@name()',
        "topicLocation": '@province',
        "tweetsNumber|1-10000":1,      
    }]
})

export const moreTrendsList = Mock.mock({
    "trendsList|6": [{
        "topicName": '@name()',
        "topicLocation": '@province',
        "tweetsNumber|1-10000":1,      
    }]
})



