$(document).ready(function() {
    $('#post-animal').on('click', postAnimal);
    $('#post-name').on('click', postName);
    $('#combo').on('click', clickGetData);

    function postAnimal() {
        event.preventDefault();
        var values = {};
        $.each($('#postAnimal').serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        $.ajax({
            type: 'POST',
            url: '/animal',
            data: values,
            success: function (data) {
                var animalList = [];
                for (var i = 0; i < data.length; i++) {
                    animalList.push(data[i].spiritAnimal);
                }
                displayAnimal(animalList);
            }
        });
    }

    function postName() {
        event.preventDefault();
        var values = {};
        $.each($('#postName').serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        $.ajax({
            type: 'POST',
            url: '/name',
            data: values,
            success: function (data) {
                var nameList = [];
                for (var i = 0; i < data.length; i++) {
                    nameList.push(data[i].name);
                }
                console.log(nameList);
                displayName(nameList);
            }
        });
    }

    function displayAnimal(animalList) {
        $('.display-animal').empty();
        animalList.forEach(function (entry) {
            console.log('before append', animalList);
            $('.display-animal').append('<p>' + entry + '</p>');

        });
    }

    function displayName(nameList) {
        $('.display-name').empty();
        nameList.forEach(function (entry) {
            $('.display-name').append('<p>' + entry + '</p>');

        });
    }



    $('#postAnimal').find('input[type=text]').val('');

    function clickGetData() {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/generator',
            success: function (data) {
                $('.display-combo').append('<p>' + data + '</p>');
            }
        });
    }

});