<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGalaxiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('galaxies', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('id_user');
			$table->string('name');
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
		Schema::drop('galaxies');
	}

}
