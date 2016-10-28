<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanetsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('planets', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('id_user');
			$table->string('code');
			$table->string('selector');
			$table->string('name');
			$table->string('type');
			$table->longtext('description');
			$table->text('image_url');
			$table->string('hash_play');
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
		Schema::drop('planets');
	}

}
