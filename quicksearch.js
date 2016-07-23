var i;
var content = "";

obj = inputstream[0].codes;

for(i=0;i < obj.length; i++){
  number = obj[i].n;
  office = obj[i].o;
  postalcode = "<b>Postal Code:</b> " + "<span class='label label-default'>" + obj[i].c + "</span>";
  county = obj[i].y;
  status = obj[i].s;
  constituency = obj[i].t + " constituency";
  latitude = obj[i].l[0];
  longitude = obj[i].l[1];
  mapurl = "http://nominatim.openstreetmap.org/search.php?q=" + latitude + "%2C" + longitude + "&polygon=1&viewbox="

  content+= "<div class='searchable-item card " + status + "'>" + "<h5 style='text-align:left'>" + county + " county</h5><br><h3>" + office + "</h3><br><p>" + status + " Post Office</p><p>" + postalcode + "</p><br><p>" + constituency + "</p><br><p><a target='_blank' class='btn btn-md btn-danger' href='" + mapurl + "'>Navigate <i class='fa fa-location-arrow'></i></a></p><br></div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}
