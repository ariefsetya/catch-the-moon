<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Auth;

class BaseController extends Controller {

	public function __construct(Request $r)
	{
		$log = new \App\Logdata();
		$log->id_user = (Auth::check())?Auth::user()->id:0;
		$log->url = $r->url();;
		$log->user_agent = $_SERVER['HTTP_USER_AGENT'];
		$log->ip = $_SERVER['REMOTE_ADDR'];
		$log->ip_port = isset($_SERVER['REMOTE_PORT'])?$_SERVER['REMOTE_PORT']:"";
		$log->http_host = isset($_SERVER['HTTP_HOST'])?$_SERVER['HTTP_HOST']:"";
		$log->http_referer = isset($_SERVER['HTTP_REFERER'])?$_SERVER['HTTP_REFERER']:"";
		$log->pathinfo = isset($_SERVER['REQUEST_URI'])?$_SERVER['REQUEST_URI']:"";
		$log->save();
	}

}
