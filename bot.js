var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 3TdsRchfI9L72s4naBwSq3kUA,
  consumer_secret: lLWTcmiC5jHX2tbOSz1C46fMaatMaqqzBTMzkUqGHepXBeq3Wu,
  access_token_key: 1098664899675410432-aq9VAJYSA6RynCK8ajou7pYBM3kYGX,
  access_token_secret: uHwEDGdkGQYyoJi0sn4s0Rjl9GcQKLu1Ror8tqMqtO0dp
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