<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStacksTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('stacks', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('id_user');
			$table->integer('id_memory');
			$table->integer('id_planet');
			$table->boolean('result');
			$table->string('hash_play');
			$table->integer('published');
			$table->integer('points');
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
		Schema::drop('stacks');
	}

}
