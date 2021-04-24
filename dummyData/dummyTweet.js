const tweet = {
 bestTweet: {
    "author_id": "2557521",
    "entities": {
        "urls": [
            {
                "start": 278,
                "end": 301,
                "url": "https://t.co/iP7p5Hwd8c",
                "expanded_url": "https://twitter.com/espn/status/1376710065252659203/photo/1",
                "display_url": "pic.twitter.com/iP7p5Hwd8c"
            }
        ],
        "annotations": [
            {
                "start": 12,
                "end": 17,
                "probability": 0.9187,
                "type": "Organization",
                "normalized_text": "Baylor"
            },
            {
                "start": 26,
                "end": 38,
                "probability": 0.9977,
                "type": "Person",
                "normalized_text": "DiDi Richards"
            },
            {
                "start": 223,
                "end": 228,
                "probability": 0.9542,
                "type": "Organization",
                "normalized_text": "Baylor"
            },
            {
                "start": 237,
                "end": 247,
                "probability": 0.4614,
                "type": "Organization",
                "normalized_text": "Elite Eight"
            }
        ]
    },
    "possibly_sensitive": false,
    "id": "1376710065252659203",
    "public_metrics": {
        "retweet_count": 3387,
        "reply_count": 130,
        "like_count": 27414,
        "quote_count": 400
    },
    "attachments": {
        "media_keys": [
            "3_1376710056180391944"
        ]
    },
    "created_at": "2021-03-30T01:37:12.000Z",
    "conversation_id": "1376710065252659203",
    "text": "In October, Baylor senior DiDi Richards suffered a spinal cord injury in practice that briefly left her with no feeling or movement in her legs. \n\nShe went through extensive rehabilitation, returned to the court and helped Baylor to the Elite Eight in the tournament. Respect 👏 https://t.co/iP7p5Hwd8c"
  },
  user: {
    "profile_image_url": "https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_400x400.png",
    "name": "ESPN",
    "id": "2557521",
    "username": "espn"
  },
}

module.exports.tweet = tweet;