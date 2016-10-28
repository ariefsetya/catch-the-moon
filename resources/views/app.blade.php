<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Catch The Moon</title>
    <link href="{{url('css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{url('css/style.css')}}">
    <link href="{{url('css/animate.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{url('css/icons.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('css/component.css')}}" />
  </head>
  <body>
  <div class="">
      <div id="awalan" class="opening hide-UI view-2D zoom-large data-close controls-close">
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Catch The Moon</h2>
        <a class="close" onclick="close_pop('popup1')">&times;</a>
        <div class="content">
        Congratulations! You catch the moon :D
        </div>
      </div>
    </div>    
    <div id="popup2" class="overlay">
      <div class="popup"  style="height: 80%;width: 80%;">
        <h2>Catch The Moon</h2>
        <a class="close" onclick="close_pop('popup2')">&times;</a>
        <div class="content">

        </div>
      </div>
    </div>
    <div id="navbar">
      <h1>Catch The Moon<br><span>Solar System Template by <a href="https://twitter.com/JulianGarnier" target="_blank">@JulianGarnier</a> ft. <a target="_blank" href="http://tympanus.net/codrops/2013/09/30/animated-border-menus/">borderMenu.js</a> and <a target="_blank" href="http://bootstrap-notify.remabledesigns.com/">Bootstrap Notify</a></span></h1>
    </div>
    <div id="data">
      <a class="sun" title="sun" onclick="open_info('sun')">Sun</a>
      <a class="mercury" title="mercury" onclick="open_info('mercury')">Mercury</a>
      <a class="venus" title="venus" onclick="open_info('venus')">Venus</a>
      <a class="earth active" title="earth" onclick="open_info('earth')">Earth</a>
      <a class="mars" title="mars" onclick="open_info('mars')">Mars</a>
      <a class="jupiter" title="jupiter" onclick="open_info('jupiter')">Jupiter</a>
      <a class="saturn" title="saturn" onclick="open_info('saturn')">Saturn</a>
      <a class="uranus" title="uranus" onclick="open_info('uranus')">Uranus</a>
      <a class="neptune" title="neptune" onclick="open_info('neptune')">Neptune</a>
    </div>
<!--     <div id="controls">
      <label class="set-view">
        <input type="checkbox">
      </label>
      <label class="set-zoom">
        <input type="checkbox">
      </label>
      <label>
        <input type="radio" class="set-speed" name="scale" checked>
        <span>Speed</span>
      </label>
      <label>
        <input type="radio" class="set-size" name="scale">
        <span>Size</span>
      </label>
      <label>
        <input type="radio" class="set-distance" name="scale">
        <span>Distance</span>
      </label>
    </div> -->
    <div>    

    <div id="universe" class="scale-stretched">
      <div id="galaxy">
        <div id="solar-system"            >
          <div id="mercury" class="orbit">
            <div class="pos">
              <div class="planet">
              </div>
            </div>
          </div>
          <div id="venus" class="orbit">
            <div class="pos">
              <div class="planet">
              </div>
            </div>
          </div>
          <div id="earth" class="orbit">
            <div class="pos">
              <div class="orbit">
                <div class="pos">
                  <div class="moon"></div>
                </div>
              </div>
              <div class="planet">
              </div>
            </div>
          </div>
          <div id="mars" class="orbit">
            <div class="pos">
              <div class="planet">
              </div>
            </div>
          </div>
          <div id="jupiter" class="orbit">
            <div class="pos">
              <div class="planet">
              </div>
            </div>
          </div>
          <div id="saturn" class="orbit">
            <div class="pos">
              <div class="planet">
                <div class="ring"></div>
              </div>
            </div>
          </div>
          <div id="uranus" class="orbit">
            <div class="pos">
              <div class="planet"></div>
            </div>
          </div>
          <div id="neptune" class="orbit">
            <div class="pos">
              <div class="planet"></div>
            </div>
          </div>
          <div id="sun" style="cursor: pointer;"></div>
        </div>
      </div>
    </div>
    </div>

      <nav id="bt-menu" class="bt-menu">
        <a href="#" class="bt-menu-trigger"><span>Menu</span></a>
        <ul class="bt-menu-top">
          <li><a style="font-size: 20pt;" onclick="play_3()">Play</a></li>
          @if(Auth::check())
          <li><a style="font-size: 20pt;" onclick="create_game()">Create Game</a></li>
          <li><a style="font-size: 20pt;" onclick="join_solar_system()">Join Solar System</a></li>
          @endif
          <li><a style="font-size: 20pt;" onclick="highscores()">Highscores</a></li>
          @if(Auth::check())
          <li><a style="font-size: 20pt;" onclick="settings()">Settings</a></li>
          <li><a style="font-size: 20pt;" onclick="sign_out()">Sign Out</a></li>
          @else
          <li><a style="font-size: 20pt;" onclick="sign_in()">Sign In</a></li>
          @endif
        </ul>
        <ul class="bt-menu-bottom">
          
        </ul>
      </nav>
    </div>
    <script type="text/javascript">
      var ctm = 0;
      var info = 1;
    </script>
    <script src="{{url('js/modernizr.custom.js')}}"></script>
    <script src="{{url('js/prefixfree.min.js')}}"></script>
    <script src="{{url('js/jquery.min.js')}}"></script>
    <script src="{{url('js/bootstrap.min.js')}}"></script>
    <script src="{{url('dist/bootstrap-notify.js')}}"></script>
    <script src="{{url('js/index.js')}}"></script>
    <script src="{{url('js/classie.js')}}"></script>
    <script src="{{url('js/hammer.min.js')}}"></script>
    <script src="{{url('js/sidebarEffects.js')}}"></script>
  </div>
  </body>
</html>