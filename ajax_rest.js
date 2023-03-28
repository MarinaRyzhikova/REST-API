$(document).ready(function() {
    $("form").submit(function(event) {
        var formData = {
            query: $("#ip").val(),
        };
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
        var token = "e6cfaf86c8aa8fdbe061ad369ee15b96d997f765";
        $.ajax({
            type: "GET",
            url: url + formData.query,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Token " + token)
            },
            data: '',
            dataType: "json",
            encode: true,
        }).done(function(result) {
            console.log(result);
            $("#result").html(
                '<p>Вы находитесь в ' + result.location.value  + '</p>'

            );
        });
        event.preventDefault();
    });
});