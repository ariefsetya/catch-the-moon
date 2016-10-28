var detik=0;var jalan=1;var posisi=0;var arr=['saturn','uranus','jupiter'];

$(window).load(function(){
  
  if(ctm==1){
    var timer = $.notify({
      message: "<span style='font-size:20pt;font-weight:bold;'>"+finalTime(detik)+"</span>",
    },{
      delay:0,
      type: 'success',
      allow_dismiss:false,
      placement:{from:'bottom'}
    });
  }

  var body = $("#awalan"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView=function(view){universe.removeClass().addClass(view);};

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  // $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  // $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  // $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  // $(".set-size").click(function() { setView("scale-s set-size"); });
  // $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

  if(info==1){
    $("#earth .pos .planet").on('click',function() {
      open_info('earth');
    });
    $("#mercury .pos").on('click',function() {
      open_info('mercury');
    });
    $("#venus .pos .planet").on('click',function() {
      open_info('venus');
    });
    $("#mars .pos .planet").on('click',function() {
      open_info('mars');
    });
    $("#jupiter .pos .planet").on('click',function() {
      open_info('jupiter');
    });
    $("#saturn .pos .planet").on('click',function() {
      open_info('saturn');
    });
    $("#uranus .pos").on('click',function() {
      open_info('uranus');
    });
    $("#neptune .pos").on('click',function() {
      open_info('neptune');
    });
    $("#sun").on('click',function() {
      open_info("sun");
    });
  }

  function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
  }
  function finalTime(time) {
    var time = detik;
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
  }
  if(ctm==1){
    setInterval(function() {
      if(jalan==1){
        detik++;
        timer.update({message:"<span style='font-size:20pt;font-weight:bold;'>"+finalTime(detik)+"</span>",});
      }
    },1000);

    $("#earth .pos").on('click',function() {
      detik++;
      timer.update({message:"<span style='font-size:20pt;font-weight:bold;'>"+finalTime(detik)+"</span>",});
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>+1s</span>",
        message: "<span style='font-size:20pt;font-weight:bold;'>You click on earth</span>",
      },{
        newest_on_top: true,
        delay:1,
        type: 'danger',
        animate:{
          exit: "animated fadeOut"
        }
      });
    });
    $("#earth .pos .orbit .pos").on('click',function() {
      jalan = 0;
      timer.update({message:"<span style='font-size:20pt;font-weight:bold;'>"+finalTime(detik)+"</span>"});
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Congratulations!</span>",
        message: "<span style='font-size:20pt;font-weight:bold;'>You click on moon</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'success',
        allow_dismiss:false,
      });
      $(".content").html('Congratulations! You catch the moon :D');
      open_pop("popup1");
    });
  }
});

function open_info(info) {
  switch(info){
    case 'sun':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Sun</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>The Sun is the star at the center of the Solar System and is by far the most important source of energy for life on Earth. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. Its diameter is about 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun's mass consists of hydrogen; the rest is mostly helium, with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron. The Sun is a G-type main-sequence star (G2V) based on spectral class and is informally referred to as a yellow dwarf. It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense, that it eventually initiated nuclear fusion in its core. It is thought that almost all stars form by this process. The Sun is roughly middle-aged and has not changed dramatically for over four billion years, and will remain fairly stable for more than another five billion years. However, after hydrogen fusion in its core has stopped, the Sun will undergo severe changes and become a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury, Venus, and possibly Earth. The enormous effect of the Sun on Earth has been recognized since prehistoric times, and the Sun has been regarded by some cultures as a deity. The synodic rotation of Earth and its orbit around the Sun are the basis of the solar calendar, which is the predominant calendar in use today. </span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'neptune':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Neptune</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). Named after the Roman god of the sea, its astronomical symbol is ♆, a stylised version of the god Neptune's trident. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the position predicted by Urbain Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the planet's remaining known 14 moons were located telescopically until the 20th century. The planet's distance from Earth gives it a very small apparent size, making it challenging to study with Earth-based telescopes. Neptune was visited by Voyager 2, when it flew by the planet on 25 August 1989. Neptune is similar in composition to Uranus, and both have compositions that differ from those of the larger gas giants, Jupiter and Saturn. Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, but contains a higher proportion of 'ices' such as water, ammonia, and methane.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'mercury':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Mercury</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Mercury is the smallest, and closest to the Sun, of the planets in the Solar System, and its only dwarf planet. it has an orbital period of about 88 Earth days, which is much faster than any other planet in the Solar System. Seen from Earth, it appears to move around its orbit in about 116 days. It has no known natural satellites. It is named after the Roman deity Mercury, the messenger to the gods. Partly because it has almost no atmosphere to retain heat, Mercury's surface temperature varies diurnally more than any other planet in the Solar System, ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F) during the day in some equatorial regions. The poles are constantly below 180 K (−93 °C; −136 °F). Mercury's axis has the smallest tilt of any of the Solar System's planets (about 1⁄30 of a degree), and its orbital eccentricity is the largest of all known planets in the Solar System. At aphelion, Mercury is about 1.5 times as far from the Sun as it is at perihelion. Mercury's surface is heavily cratered and similar in appearance to the Moon, indicating that it has been geologically inactive for billions of years. Mercury is tidally or gravitationally locked with the Sun in a 3:2 resonance, and rotates in a way that is unique in the Solar System. As seen relative to the fixed stars, it rotates on its axis exactly three times for every two revolutions it makes around the Sun. As seen from the Sun, in a frame of reference that rotates with the orbital motion, it appears to rotate only once every two Mercurian years. Two spacecraft have visited Mercury: Mariner 10 flew by in the 1970s; and MESSENGER, launched in 2004, orbited Mercury over 4,000 times in four years, before exhausting its fuel and crashing into the planet's surface on April 30, 2015.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'venus':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Venus</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun; its elongation reaches a maximum of 47.8°. Venus is a terrestrial planet and is sometimes called Earth's 'sister planet' because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth. Venus is by far the hottest planet in the Solar System, with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past, but these would have vaporized as the temperature rose due to a runaway greenhouse effect. The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field. Venus's surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'earth':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Earth</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Earth (otherwise known as the world, in Greek: Γαῖα Gaia, or in Latin: Terra) is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed about 4.54 billion years ago. Earth gravitationally interacts with other objects in space, especially the Sun and the Moon. During one orbit around the Sun, Earth rotates about its own axis 366.26 times, creating 365.26 solar days or one sidereal year. Earth's axis of rotation is tilted 23.4° away from the perpendicular of its orbital plane, producing seasonal variations on the planet's surface within a period of one tropical year (365.24 solar days). The Moon, Earth's only permanent natural satellite, by its gravitational relationship with Earth, causes ocean tides, stabilizes the orientation of Earth's rotational axis, and gradually slows Earth's rotational rate. Earth's lithosphere is divided into several rigid tectonic plates that migrate across the surface over periods of many millions of years. 71% of Earth's surface is covered with water. The remaining 29% is land mass—consisting of continents and islands—that together has many lakes, rivers, and other sources of water that contribute to the hydrosphere. The majority of Earth's polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates the Earth's magnetic field, and a convecting mantle that drives plate tectonics.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'uranus':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Uranus</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock. Uranus is the only planet whose name is derived from a figure from Greek mythology, from the Latinized version of the Greek god of the sky Ouranos. Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The Uranian system has a unique configuration among those of the planets because its axis of rotation is tilted sideways, nearly into the plane of its solar orbit. Its north and south poles, therefore, lie where most other planets have their equators. In 1986, images from Voyager 2 showed Uranus as an almost featureless planet in visible light, without the cloud bands or storms associated with the other giant planets. Observations from Earth have shown seasonal change and increased weather activity as Uranus approached its equinox in 2007. Wind speeds can reach 250 metres per second (900 km/h, 560 mph).</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'saturn':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Saturn</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle. Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally outside the Frenkel line a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (500 m/s), higher than on Jupiter, but not as high as those on Neptune. Saturn has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs and that is composed mostly of ice particles with a smaller amount of rocky debris and dust. Sixty-two moons are known to orbit Saturn, of which fifty-three are officially named. This does not include the hundreds of moonlets comprising the rings. Titan, Saturn's largest moon and is the only moon in the Solar System to have a substantial atmosphere.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'mars':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Mars</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan. Until the first successful Mars flyby in 1965 by Mariner 4, many speculated about the presence of liquid water on the planet's surface. This was based on observed periodic variations in light and dark patches, particularly in the polar latitudes, which appeared to be seas and continents; long, dark striations were interpreted by some as irrigation channels for liquid water. These straight line features were later explained as optical illusions, though geological evidence gathered by uncrewed missions suggests that Mars once had large-scale water coverage on its surface at an earlier stage of its existence.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
    case 'jupiter':{
      $.notify({
        title: "<span style='color:black;font-size:20pt;font-weight:bold;'>Jupiter</span>",
        message: "<br><span style='font-size:11pt;line-height:1.3;'>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is a gas giant, along with Saturn, with the other two giant planets, Uranus and Neptune, being ice giants. Jupiter was known to astronomers of ancient times. The Romans named it after their god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows, and making it on average the third-brightest object in the night sky after the Moon and Venus. Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator). The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century when it was first seen by telescope. Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere. Jupiter has at least 67 moons, including the four large Galilean moons discovered by Galileo Galilei in 1610. Ganymede, the largest of these, has a diameter greater than that of the planet Mercury.</span>",
      },{
        newest_on_top: true,
        delay:0,
        type: 'info',
        animate:{
          exit: "animated fadeOut"
        }
      });
    }
    break;
  }
}

function close_pop(id) {
  $("#"+id).css('visibility','hidden');
  $("#"+id).css('opacity',0);
}
function open_pop(id) {
  $("#"+id).css('visibility','visible');
  $("#"+id).css('opacity',1);
}
function play_3() {
  $(".bt-overlay").html('<div class="play_3"><h2>Question &amp; Answer</h2></div><div class="play_3"><h2>Memory Stack</h2></div><div class="play_3"><h2>Catch The Moon</h2></div>');
}
function create_game() {
  $(".bt-overlay").html('<div class="play_2">Create Your Own Game!<h2>Question &amp; Answer</h2></div><div class="play_2">Create Your Own Game!<h2>Memory Stack</h2></div>');
}
function join_solar_system() {
  $(".bt-overlay").html('<div class="play_1">Select Your Galaxy</div>');
}
function highscores() {
  $(".bt-overlay").html('<div class="play_3">Highscores<h2>Question &amp; Answer</h2></div><div class="play_3">Highscores<h2>Memory Stack</h2></div><div class="play_3">Highscores<h2>Catch The Moon</h2></div>');
}
function settings() {
  $(".bt-overlay").html('<div class="play_2">Settings<h2>User Info</h2></div><div class="play_2">Settings<h2>Preferences</h2></div>');
}
function sign_out() {
  $(".bt-overlay").html('<div class="play_2 big">Sign Out<h2>Are you sure want to exit?</h2></div><div class="play_2 big">&nbsp;<h2><a href="auth/logout">Yes</a></h2></div>');
}
function sign_in() {
  $(".bt-overlay").html('<div class="play_2">Sign Up<h2>For New User</h2><br><form><table><tr><td><input placeholder="Name" name="name" type="text"></td></tr><tr><td><input type="email" name="email" placeholder="E-Mail"></td></tr><tr><td><input type="password" name="password" placeholder="Password"></td></tr><tr><td><button type="submit" class="btn">Sign Up</button></td></tr></table></form></div><div class="play_2">Sign In<h2>I Already Registered</h2><br><form><table><tr><td><input type="email" name="email" placeholder="E-Mail"></td></tr><tr><td><input type="password" name="password" placeholder="Password"></td></tr><tr><td><button type="submit" class="btn">Sign In</button></td></tr></table></form></div>');
}
$(".bt-menu-trigger").on('click',function() {
  $(".bt-overlay").html('<div class="play_1 superbig center"><h2>Lv9 1000pts</h2></div>');
});

window.onresize=function(){if((window.outerHeight-window.innerHeight)>100)$("html").remove();}