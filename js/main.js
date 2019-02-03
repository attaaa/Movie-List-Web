$.ajax({
    url: 'http://www.omdbapi.com',
    type: 'GET',
    dataType: 'json',
    data: {
        'apikey': '73d280cb',
        's': 'avengers'
    },
    success: function(result){
        if (result.Response === "True") {
            let movie_list = result.Search;

            $.each(movie_list, function(i,data){
                $('#movie-list').append(`
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-12 mb-4 p-md-2 p-1">
                        <div class="card">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="Test">
                            <div class="card-body text-center">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <a href="#" class="btn btn-gradient px-5">Detail</a>
                            </div>
                        </div>
                    </div>
                `);
            })
        }
        
    }
});

$('#search-btn-first').click(function(){
    $('#first-nav').addClass('d-none').removeClass('search-out');
    $('#second-nav').addClass('search-focus');
})

$('#btn-close-search').click(function(){
    $('#second-nav').removeClass('search-focus');
    $('#first-nav').removeClass('d-none').addClass('search-out')
})

$('#btn-search').click(function(){
    var title = $('#search-movie').val();
    console.log(title);
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': '73d280cb',
            's': title
        },
        success: function(result){
            if (result.Response === "True") {
                let movie_list = result.Search;
    
                $.each(movie_list, function(i,data){
                    $('#movie-list').append(`
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-12 mb-4 p-md-2 p-1">
                            <div class="card">
                                <img src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title +`">
                                <div class="card-body text-center">
                                    <h5 class="card-title">`+ data.Title +`</h5>
                                    <a href="#" class="btn btn-gradient px-5">Detail</a>
                                </div>
                            </div>
                        </div>
                    `);
                })
            } else {
                console.log(result);
            } 
        }
    });
})

