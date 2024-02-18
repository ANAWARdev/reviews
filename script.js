const review = [
    {
    image: "images/person-1_rfzshl.jpg" ,
    author: "Susan_Smith" ,
    job: "WEB DEVELOPER" ,
   description: "I'm baby meggings twee health goth +1.Bicycle rights tumeric chartreuse before they sold outchambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
   },
    {
    image: "images/person-2_np9x5l.jpg" ,
    author: "Anna Johnson" ,
    job: "WEB DESIGNER" ,
    description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
    image: "images/person-3_ipa0mj.jpg" ,
    author: "Peter Jones" ,
    job: "INTERN" ,
    description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. " ,
    },
    {
    image: "images/person-4_t9nxjt.jpg" ,
    author: "Bill Anderson" ,
    job: "THE BOSS" ,
    description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. " ,
    },
    ];
    const imageElt = document.getElementById("image");
    const authorElt = document.getElementById("author");
    const jobElt = document.getElementById("job");
    const descriptionElt = document.getElementById("description");

    imageElt.src = review.image;
    authorElt.innerHTML = review.author;
    jobElt.innerHTML = review.job;
    descriptionElt.innerHTML = review.description;

    function displayReview(currentReview) {
        imageElt.src = currentReview.image;
        authorElt.innerHTML = currentReview.author;
        jobElt.innerHTML = currentReview.job;
        descriptionElt.innerHTML = currentReview.description;
        }
        displayReview(review);
        const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function prevReview() {
console.log("Display previous review" );
}
function nextReview() {
console.log("Display next review" );
}
prevBtn.addEventListener("click", prevReview);
nextBtn.addEventListener("click", nextReview);

let currentReviewIndex = 0
displayReview(review[currentReviewIndex]);
function prevReview() {
    currentReviewIndex -= 1;
    displayReview(review[currentReviewIndex]);
    }
    function nextReview() {
    currentReviewIndex += 1;
    displayReview(review[currentReviewIndex]);
    }
    function prevReview () {
        if (currentReviewIndex > 0) {
        currentReviewIndex -= 1;
        }
        displayReview (review[currentReviewIndex ]);
        }
        function nextReview () {
        if (currentReviewIndex < review.length - 1) {
        currentReviewIndex += 1;
        }
        displayReview (review[currentReviewIndex ]);
        }
        function prevReview () {
            if (currentReviewIndex > 0) 
            { currentReviewIndex -= 1;
            } else {
            currentReviewIndex = review.length -1;
            }
            displayReview(review[currentReviewIndex ]);
            }
            function nextReview () {
            if (currentReviewIndex< review.length-1) 
            {  currentReviewIndex +=1 ;
            
            } else { currentReviewIndex =0;
            
            }
            displayReview(review[currentReviewIndex ]);
            
            }

     function generateNumber(){
     return Math.floor(Math.random() * review.length);
      }
     function au_hasard() {
       const randomNumber = generateNumber();
      document.getElementById("image").src = review[randomNumber].image;
      document.getElementById("author").innerHTML = review[randomNumber].author;
      document.getElementById("job").innerHTML = review[randomNumber].job;
      document.getElementById("description").innerHTML = review[randomNumber].description;
       }  
    
       document
       .getElementById("surprise_me")
       .addEventListener("click", au_hasard)