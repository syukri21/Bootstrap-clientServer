$(document).ready(function() {
  var dataKarasuno = [
    {
      nama: "Daichi Sawamura",
      number: "#1",
      position: "Captain / Wing Spiker / Defensive Specialist",
      year: "3rd Year",
      gambar: "karasuno/karasuno8"
    },
    {
      nama: "Kōshi Sugawara",
      number: "#2",
      position: "Vice-Captain / Setter / Pinch Server",
      year: "3rd Year",
      gambar: "karasuno/karasuno6"
    },
    {
      nama: "Yū Nishinoya",
      number: "#4",
      position: "Libero",
      year: "2nd Year",
      gambar: "karasuno/karasuno7"
    },
    {
      nama: "Tobio Kageyama",
      number: "#9",
      position: "Setter",
      year: "1st Year",
      gambar: "karasuno/karasuno2"
    },
    {
      nama: "Shōyō Hinata",
      number: "#10",
      position: "Middle Blocker / Decoy",
      year: "1st Year",
      gambar: "karasuno/karasuno1"
    },
    {
      nama: "Kei Tsukishima",
      number: "#11",
      position: "Middle Blocker",
      year: "1st Year",
      gambar: "karasuno/karasuno3"
    },
    {
      nama: "Tadashi Yamaguchi",
      number: "#12",
      position: "Middle Blocker / Pinch Server",
      year: "1st Year",
      gambar: "karasuno/karasuno4"
    },
    {
      nama: "Ryūnosuke Tanaka",
      number: "#5",
      position: "Wing Spiker",
      year: "2nd Year",
      gambar: "karasuno/karasuno5"
    }
  ];

  var dataAoba = [
    {
      nama: "Tōru Oikawa",
      number: "#1",
      position: "Captain / Setter",
      year: "3rd Year",
      gambar: "aoba/aoba2"
    },
    {
      nama: "Issei Matsukawa",
      number: "#2",
      position: "Middle Blocker",
      year: "3rd Year",
      gambar: "aoba/IsseiMatsukawa1"
    },
    {
      nama: "Takahiro Hanamaki",
      number: "#3",
      position: "Wing Spiker",
      year: "3rd Year",
      gambar: "aoba/Hanamaki"
    },
    {
      nama: "Hajime Iwaizumi",
      number: "#4",
      position: "Vice Captain / Wing Spiker / Ace ",
      year: "3rd Year",
      gambar: "aoba/Iwaizumi1"
    },
    {
      nama: "Shigeru Yahaba",
      number: "#6",
      position: "Setter / Pinch Server",
      year: "2nd Year",
      gambar: "aoba/Yahaba1"
    },
    {
      nama: "Shinji Watari",
      number: "#7",
      position: "Libero",
      year: "2nd Year",
      gambar: "aoba/Watari"
    },
    {
      nama: "Yūtarō Kindaichi",
      number: "#12",
      position: "Middle Blocker",
      year: "1st Year",
      gambar: "aoba/Kindaichi-AobaJousai"
    },
    {
      nama: "Akira Kunimi",
      number: "#13",
      position: "Wing Spiker",
      year: "1st Year",
      gambar: "aoba/Kunimi"
    }
  ];

  var dataFukurodani = [
    {
      nama: "Tatsuki Washio",
      number: "#2",
      position: "Middle Blocker",
      year: "3rd Year",
      gambar: "fukurodani/TatsukiWashio-1"
    },
    {
      nama: "Yamato Sarukui",
      number: "#3",
      position: "Wing Spiker",
      year: "3rd Year",
      gambar: "fukurodani/Sarukui1"
    },
    {
      nama: "Kōtarō Bokuto",
      number: "#4",
      position: "Captain / Wing Spiker / Ace",
      year: "3rd Year",
      gambar: "fukurodani/Bokuto_Kotaro"
    },
    {
      nama: "Keiji Akaashi",
      number: "	#5",
      position: "Vice Captain / Setter ",
      year: "2nd Year",
      gambar: "fukurodani/Akaashi1"
    },
    {
      nama: "Akinori Konoha",
      number: "#7",
      position: "Wing Spiker",
      year: "3rd Year",
      gambar: "fukurodani/Akinori_Konoha-1"
    },
    {
      nama: "Haruki Komi",
      number: "#11",
      position: "Libero",
      year: "3rd Year",
      gambar: "fukurodani/Komi1"
    },
    {
      nama: "Wataru Onaga",
      number: "#12",
      position: "Middle Blocker",
      year: "1st Year",
      gambar: "fukurodani/Onaga1"
    }
  ];

  // modal

  var modal = function(target, who) {
    var div = document.createElement("div");
    var body = document.querySelectorAll("body")[0];
    var bgSmoke = document.createElement("div");
    div.innerHTML = `
    <div class="card p-5 mx-auto" style="width:30rem;height: 35rem;">
      <img class="card-img-top rounded-circle shadow m-auto" src="img/${target}.jpg" style="width:20rem;height: 20rem"alt="Card image cap">
      <div class="card-body">
        <p class="card-text text-center">
          ${who}
        </p>
      </div>
      <div class="p-4 text-align-end d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-danger closeModalCard" >Close</button>
      </div>
    </div>
    `;
    $(div)
      .addClass("position-fixed fixed-top w-50 h-75 mx-auto animated bounceIn ")
      .css({
        marginTop: document.querySelectorAll("nav.row")[0].offsetHeight + 10
      });
    $(bgSmoke).css({
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "rgba(0,0,0,0.5)"
    });
    bgSmoke.appendChild(div);
    body.appendChild(bgSmoke);

    $(".closeModalCard").on("click", function() {
      $(div).addClass("animated bounceOut");
      setTimeout(function() {
        $(bgSmoke)
          .addClass("animated fadeOut")
          .hide().innerHTML = "";
      }, 1000);
    });
  };

  // initclick

  var hapusActive = function() {
    $("#data-karasuno")
      .parent()
      .removeClass("active");
    $("#data-aoba")
      .parent()
      .removeClass("active");
    $("#data-fukurodani")
      .parent()
      .removeClass("active");
  };

  var initClick = function(tr, gambar) {
    $(tr).on("click", function() {
      var who = $(this).children()[0].innerHTML;
      modal(gambar, who);
    });
  };

  var ubahTabel = function(data, trigger = null) {
    $(trigger).on("click", function(e) {
      e.preventDefault();
      hapusActive();
      $("#tbody").html("");
      data.map(function(e) {
        var tr = document.createElement("tr");
        for (const key in e) {
          if (key != "gambar") {
            var td = document.createElement("td");
            $(td).html(e[key]);
            tr.appendChild(td);
          }
        }
        initClick(tr, e.gambar);
        $("#tbody").append(tr);
      });
      $("#tbody tr:nth-child(odd)").addClass("table-info");
      $(".label-team").html(trigger.replace("#data-", "") + " Team");
      $(this)
        .parent()
        .addClass("active");
    });
  };

  $("#tbody").html("");

  dataKarasuno.map(function(e) {
    var tr = document.createElement("tr");
    for (const key in e) {
      if (key != "gambar") {
        var td = document.createElement("td");
        $(td).html(e[key]);
        tr.appendChild(td);
      }
    }
    initClick(tr, e.gambar);
    $("#tbody").append(tr);
  });

  $("#tbody tr:nth-child(odd)").addClass("table-info");

  ubahTabel(dataKarasuno, "#data-karasuno");
  ubahTabel(dataAoba, "#data-aoba");
  ubahTabel(dataFukurodani, "#data-fukurodani");

  // init

  $("#data-karasuno")
    .parent()
    .addClass("active");
});
