<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLaundriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('laundries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('building_id');
            $table->integer('user_id');
            $table->date('date');
            $table->enum('timeInterval', ['9:00-12:00', '12:00-15:00',
                '15:00-18:00', '18:00-21:00', '21:00-00:00']);
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
        Schema::dropIfExists('laundries');
    }
}
