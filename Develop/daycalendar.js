
$( document ).ready(function() {

    

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, ];

    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    var currentTime = moment().format();
     x.forEach(function (g, index) {
        var time = [];
        time.push(moment().hour(g).format("h A"));
         
          
        var container = $("<div>");
        var timeSpan = $("<span>");
        var toDo = $("<input>");
        var saveBtn = $("<button>");


        $(".container").append(container);
        $(".container").addClass("mb-5");

        container.addClass("time-block input-group input-group-prepend");
        container.attr("data-val", index);
        container.append(timeSpan);
        timeSpan.addClass("input-group-text");
        timeSpan.addClass("start-time")
        timeSpan.text(time);
        container.append(toDo);
        toDo.attr("type", "text");
        toDo.attr("data", "data-input" + index);
        toDo.addClass("form-control")
        toDo.attr("data", "data-text" + index);
        toDo.attr("placeholder", "To do item" );

        var textInput = toDo.attr('data');

        var lsVal = localStorage.getItem(textInput);
      
        toDo.attr("value", lsVal);
        container.append(saveBtn);
        saveBtn.addClass("btn btn-outline-secondary");
        saveBtn.append($("<i class=\"fa fa-save\"></i>"))

        // moment(currentTime).isBefore(time[index]

        var fullTimeFormat = moment(time, "h a").format();
       
        if (currentTime > fullTimeFormat ){
            
            if (moment(currentTime).hour() == moment(fullTimeFormat).hour() ){
           toDo.addClass("red");

            }
            else{
           toDo.addClass("grey");

            }
        }
                else{
            toDo.addClass("green");
        }

     });

     $("button").on("click", function (event) {
        event.preventDefault();

        var textInput = $(this).siblings("input").attr("data");
        var textVal = $(this).siblings("input").val();
        localStorage.setItem(textInput, textVal);
        
        
    });

});
