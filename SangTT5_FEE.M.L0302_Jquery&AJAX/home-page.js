$("#addEmplink").click(() => {
    console.log(123);
    $.get("add-employee.html", (res) => {
        console.log(res)
        $(".container").html(res);
        $("#employeeName").focus();
    });
});

$("#listEmpslink").click(() => {
    $.get("list-employees.html", (res) => {
        $(".container").html(res);
    });
});