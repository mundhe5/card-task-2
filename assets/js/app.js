
        var cl= console.log;
    

        var cardsbody1 = document.getElementById("card-body");


        let cardsData = [
            {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://images.unsplash.com/photo-1652291963664-7b820208df8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "thumbnailUrl": "https://unsplash.com/photos/0sbKAAJas0g"
            },
            {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://images.unsplash.com/photo-1619713388391-528c11e7c941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=339&q=80",
            "thumbnailUrl": "https://unsplash.com/photos/h74im9MTAwc"
            },
            {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://images.unsplash.com/photo-1644333030252-7e9d13d4a877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "thumbnailUrl": "https://unsplash.com/photos/B5NChFJ7IaU"
            },
            {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://images.unsplash.com/photo-1616999725448-e82fe919a571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "thumbnailUrl": "https://unsplash.com/photos/7YK3AOh8pUU"
            },
            {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://images.unsplash.com/photo-1651667708571-ce7a86b5f4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80",
            "thumbnailUrl": "https://unsplash.com/photos/IRGoGtinCpE"
            },
        ]





    //     // <img src="" class="" alt="">
    //     <figurcaption class="figcaption">
    //     <p  class="para">

    //     </p>
    //     <span class="id">

    //     </span>
    //     <span class="albumid">

    //     </span>
    // </figurcaption>


            var result="";

            cardsData.forEach(card => { 
                result += ` 
                                <div class="col-sm-4 mb-4">
                                <div class="card">
                                    <div  class="card-body">
                                    <figure class="cardfig">
                            
                                    <img src=${card.url} alt="img" class="img-fluid  cardimg" >
                                    <figcaption class="figcaption">
                                    <p  class="para">
                                        <span>
                                        ${card.title} 
                                        </span>
                                    </p>
                                    
                                    <span class="id">
                                    id : ${card.id} 
                                    </span>

                                    <span class="albumid">
                                    albumId : ${card.albumId} 
                                    </span>

                                </figcaption>

                              </figure>
                                    </div>
                                </div>
                            </div>
                
                
               `
    });
            // cl(result)

            cardsbody1.innerHTML= result;







