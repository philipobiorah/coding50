let movies_objects = [
    {
        title: "Transporter",
        rating: 2.5,
        hasWatched: false
    },
    {
        title: "Power",
        rating: 4.0,
        hasWatched: true
    },
    {
        title: "Kalashika",
        rating: 0.1,
        hasWatched: false
    },
    {
        title: "Igodo",
        rating: 5.0,
        hasWatched: true
    }

];
0
for (let i = 0; i < movies_objects.length; i++) {
    if (movies_objects[i].hasWatched === true) {
        document.writeln("<h1>You have watched "
            + movies_objects[i].title +
            " " + movies_objects[i].rating + "</h1>");
    } else {
        document.writeln("<h1>You have not seen " +
            movies_objects[i].title + " " +
            movies_objects[i].rating + "</h1>");
    }
};