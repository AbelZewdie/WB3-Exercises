const corpus = `Now is the time for all good people to come to the aid of their planet.`;

console.log(corpus[0])
// corpus[0] = "W"; //Don't work, NO ERROR.
console.log(corpus[0])

console.log(corpus[corpus.length - 1]) //last one (.)

console.log(corpus.indexOf("people"))  //How to get people? | 

console.log(corpus.indexOf("planet"))  //How to get planet? |

console.log(corpus.indexOf("is the"))  //How to get "is the"? | start expect at 4

console.log(corpus[corpus.indexOf("is the")])