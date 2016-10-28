<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemoriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('memories', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('id_user');
			$table->integer('id_galaxy');
			$table->integer('id_solar_system');
			$table->integer('id_planet');
			$table->string('hash_play');
			$table->integer('published');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('memories');
	}

}
