$.ajax(
    {
        type: 'get',

        url: 'https://api.covid19api.com/summary',

        success: function (responce) {
            console.log(responce)
            console.log(responce.Countries.TotalRecovered)
            for (var i = 0; i < responce.Countries.length; i++) 
            
            {
                var totalactive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalRecovered

                var tabledata = `<tr><td>${responce.Countries[i].Country}</td><td>${responce.Countries[i].TotalConfirmed}</td><td>${totalactive}</td><td>${responce.Countries[i].TotalRecovered}</td><td>${responce.Countries[i].TotalDeaths}</td></tr>`

                $('#tbody').append(tabledata)
            }
            $('#covidtables').DataTable()
        },

        error: function (error) {
            console.log(error)
        }
    }
)