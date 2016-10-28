<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimelinesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('timelines', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('id_user');
			$table->integer('id_galaxy');
			$table->integer('id_solar_system');
			$table->integer('id_question');
			$table->integer('id_answer');
			$table->integer('id_memory');
			$table->integer('id_stack');
			$table->integer('id_time');
			$table->string('mode');
			$table->integer('result');
			$table->integer('level');
			$table->integer('points');
			$table->string('hash_play');
			$table->string('description');
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
		Schema::drop('timelines');
	}

}
