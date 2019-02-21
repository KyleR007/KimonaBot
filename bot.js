var TwitterPackage = require('twitter');

var secret = {
  consumer_key: key here,
  consumer_secret: key here,
  access_token_key: key here,
  access_token_secret: key here
}
var Twitter = new TwitterPackage(secret);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
Twitter.stream('statuses/filter', {track: kimona danced atop, kimona wannalaya danced atop, kimona wanalaya danced atop, kimona dance atop, kimona wannalaya danced atop, kimona wanalaya dance atop}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);

    //build our reply object
    var statusObj = {status: "Unedited, Uncensored, Never Before Seen, Its The Night Kimona Wanalaya Danced Atop The ECW Arena https://twitter.com/i/moments/1028429849344524288"}

    //call the post function to tweet something
    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
